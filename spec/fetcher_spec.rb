module Wtfismyblockchainstrategy
  describe Fetcher do
      it 'fetches a CSV', :vcr do
        expect(described_class.fetch_CSV('https://raw.githubusercontent.com/pikesley/wtfismyblockchainstrategy/master/data/things.csv')).to eq (
          [
            ["cats"],
            ["dogs"],
            ["rabbits"],
            ["meerkats"],
            ["horses"],
            ["velociraptors"],
            ["minifigs"],
            ["Github"],
            ["Owls "]
          ]
        )
    end
  end
end
