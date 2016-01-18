describe('Splitter', function() {
  describe('know what a word is', function() {
    it('knows letters', function() {
      expect(isLetter('a')).toEqual(true)
      expect(isLetter('Z')).toEqual(true)
      expect(isLetter('@')).toEqual(true)
    })

    it('knows words', function() {
      expect(isWord('aa')).toEqual(true)
      expect(isWord('1974')).toEqual(false)
      expect(isWord('ab5d')).toEqual(false)
      expect(isWord('@thing')).toEqual(true)
    })
  })
})
