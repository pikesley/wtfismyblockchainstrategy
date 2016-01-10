describe('getRandom', function() {
  it('returns an element', function() {
    expect(getRandom(['just me'])).toEqual('just me')
  })
})

describe('Placeholders', function() {
  describe('isPlaceholder', function() {
    it('recognises a placeholder', function() {
      expect(isPlaceholder('@yes')).toEqual(true)
    })
    it('recognises a non-placeholder', function() {
      expect(isPlaceholder('nope')).toEqual(false)
    })
  })

  describe('stripFirst', function() {
    it('removes the first character', function() {
      expect(stripFirst('@thing')).toEqual('thing')
    })
  })

  describe('containsPlaceholders', function() {
    it('knows if a string contains any placeholders', function() {
      expect(containsPlaceholders('this one @does contain placeholders')).toEqual(true)
    })
    it('knows if a string contains no placeholders', function() {
      expect(containsPlaceholders('this is just a plain old string')).toEqual(false)
    })
  })
})

describe('Templates', function() {
  describe('words', function() {
    it('splits a string', function() {
      expect(words('this is a @string')).toEqual(
        [
          'this',
          'is',
          'a',
          '@string'
        ]
      )
    })
  })

  describe('populateTemplate', function() {
    var json = {
      'things': [
        'cats'
      ],
      'stuff': [
        'buckets'
      ]
    }
    var template = 'Put @things into @stuff'
    it('fills a simple template', function() {
      expect(populateTemplate(template, json)).toEqual('Put cats into buckets')
    })
  })
})
