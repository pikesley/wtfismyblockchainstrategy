module Wtfismyblockchainstrategy
  describe Fetcher do
    it 'fetches a CSV', :vcr do
      expect(described_class.fetch_CSV('https://raw.githubusercontent.com/pikesley/wtfismyblockchainstrategy/master/data/things.csv')).to eq (
        [
          'cats',
          'dogs',
          'rabbits',
          'meerkats',
          'horses',
          'velociraptors',
          'minifigs',
          'owls'
        ]
      )
    end

    it 'fetches all the CSVs', :vcr do
      expect(described_class.fetch_CSVs(['headings', 'disruptable', 'responses', 'things'])).to include (
        {
          'disruptable' => [
            'the movie industry',
            'the banking sector',
            'Uber'
          ]
        }
      )
    end

    it 'knows what CSVs there are', :vcr do
      expect(described_class.list_CSVs).to eq (
        [
          'disruptable',
          'gather',
          'group',
          'headings',
          'responses',
          'templates',
          'things',
          'verb'
        ]
      )
    end
  end
end
