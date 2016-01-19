module Wtfismygenericthing
  module Helpers
    describe 'grab_YAMLs' do
      it 'merges YAML correctly' do
        expect(Helpers.grab_YAMLs 'spec/support/fixtures/data').to eq (
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
end
