module Wtfismyblockchainstrategy
  describe 'Helpers' do
    it 'merges YAML correctly' do
      expect(Wtfismyblockchainstrategy.grab_YAMLs 'spec/support/fixtures/data').to eq (
        {
          'bar' => [
            'x',
            'y',
            'z'
          ],
          'foo' => [
            'a',
            'b',
            'c'
          ]
        }
      )
    end
  end
end
