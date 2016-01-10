describe('getRandom', function() {
  it('returns an element', function() {
    expect(getRandom(['just me'])).toEqual('just me')
  })
})

describe('Placeholders', function() {
  describe('isPlaceholder', function() {
    it('recognises a non-placeholder', function() {
      expect(isPlaceholder('nope')).toEqual(false)
    })
    it('recognises a placeholder', function() {
      expect(isPlaceholder('@yes')).toEqual(true)
    })
  })

  describe('stripFirst', function() {
    it('removes the first character', function() {
      expect(stripFirst('@thing')).toEqual('thing')
    })
  })
})
