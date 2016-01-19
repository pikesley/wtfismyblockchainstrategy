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
  describe('chunks', function() {
    it('splits a string', function() {
      expect(chunks('this is a @string')).toEqual(
        [
          'this',
          ' ',
          'is',
          ' ',
          'a',
          ' ',
          '@string'
        ]
      )
    })
  })

  var json = {
    'things': [
      'cats'
    ],
    'stuff': [
      'buckets'
    ]
  }

  describe('populateTemplate', function() {
    var template = 'Put @things into @stuff'
    it('fills a simple template', function() {
      expect(populateTemplate(template, json)).toEqual('Put cats into buckets')
    })
  })
})

describe('Nested Templates', function() {
  var json = {
    'templates': [
      'Throw @things, at @stuff'
    ],
    'things': [
      '@adjective bears'
    ],
    'stuff': [
      'libertarians'
    ],
    'adjective': [
      'angry'
    ]
  }
  it('fills a template recursively', function() {
    expect(template(json)).toEqual('Throw angry bears, at libertarians')
  })

  describe('Deeply-nested Templates', function() {
    var json = {
      'templates': [
        '@verb @things into @target'
      ],
      'verb': [
        'pivot'
      ],
      'things': [
        'disruptors'
      ],
      'target': [
        'the Sun, with @motivation'
      ],
      'motivation': [
        '@adjective prejudice'
      ],
      'adjective': [
        'extreme'
      ]
    }

    it('fills a template recursively', function() {
      expect(template(json)).toEqual('pivot disruptors into the Sun, with extreme prejudice')
    })
  })
})
