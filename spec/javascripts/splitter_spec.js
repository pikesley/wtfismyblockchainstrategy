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

  describe('compress non-word characters', function() {
    it('joins-up the non-word content', function() {
      expect(compress(['aa', '?', '', ' ', 'bb'])).toEqual(
        [
          'aa',
          '? ',
          'bb'
        ]
      )
    })
  })

  describe('splits', function() {
    describe('simple splits', function() {
      it('splits "a"', function() {
        expect(split('a')).toEqual(['a'])
      })

      it('splits "a "', function() {
        expect(split('a ')).toEqual(['a', ' '])
      })

      it('splits "aa bb"', function() {
        expect(split('aa bb')).toEqual(['aa', ' ', 'bb'])
      })
    })

    describe('splits with punctuation', function() {
      it('splits "aa? bb"', function() {
        expect(split('aa? bb')).toEqual(['aa', '? ', 'bb'])
      })

      it('splits "Hello, this is a @thing!"', function() {
        expect(split("Hello, this is a @thing!")).toEqual(
          [
            'Hello',
            ', ',
            'this',
            ' ',
            'is',
            ' ',
            'a',
            ' ',
            '@thing',
            '!'
          ]
        )
      })

      it('splits with embedded quotes', function() {
        expect(split("This has 'embedded quotes'")).toEqual(
          [
            'This',
            ' ',
            'has',
            " '",
            'embedded',
            ' ',
            'quotes',
            "'"
          ]
        )

        expect(split('How about some "double-quotes"')).toEqual(
          [
            'How',
            ' ',
            'about',
            ' ',
            'some',
            ' "',
            'double',
            '-',
            'quotes',
            '"'
          ]
        )
      })

      it('deals with random punctuation', function() {
        expect(split("this( h%s d+= ' } fff£33d")).toEqual(
          [
            'this',
            '( ',
            'h',
            '%',
            's',
            ' ',
            'd',
            "+= ' } ",
            'fff',
            '£33',
            'd'
          ]
        )
      })
    })
  })
})
