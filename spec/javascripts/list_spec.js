describe('Resusable lists', function() {
  describe('return a list item and remove it from the list', function() {
    it('pulls out an item', function() {
      items = [
        'Brockway',
        'North Haverbrook',
        'Ogdenville'
      ]
      var extracted = extract(items)
      expect(extracted['remainder'].length).toEqual(2)

      switch(extracted['victim']) {
        case 'Brockway':
          expect(extracted['remainder']).toEqual([
            'North Haverbrook',
            'Ogdenville'
          ])
          break

        case 'North Haverbrook':
          expect(extracted['remainder']).toEqual([
            'Brockway',
            'Ogdenville'
          ])
          break

        case 'Ogdenville':
          expect(extracted['remainder']).toEqual([
            'Brockway',
            'North Haverbrook'
          ])
      }
    })
  })
})
