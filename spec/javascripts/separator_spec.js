describe('Separator', function() {
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

  describe('separates', function() {
    describe('simple separations', function() {
      it('separates "a"', function() {
        expect(separate('a')).toEqual(['a'])
      })

      it('separates "a "', function() {
        expect(separate('a ')).toEqual(['a', ' '])
      })

      it('separates "aa bb"', function() {
        expect(separate('aa bb')).toEqual(['aa', ' ', 'bb'])
      })
    })

    describe('separations with punctuation', function() {
      it('separates "aa? bb"', function() {
        expect(separate('aa? bb')).toEqual(['aa', '? ', 'bb'])
      })

      it('separates "Hello, this is a @thing!"', function() {
        expect(separate("Hello, this is a @thing!")).toEqual(
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

      it('separates with embedded quotes', function() {
        expect(separate("This has 'embedded quotes'")).toEqual(
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

        expect(separate('How about some "double-quotes"')).toEqual(
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
        expect(separate("this( h%s d+= ' } fff£33d")).toEqual(
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
