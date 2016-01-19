module Wtfismygenericthing
  module Helpers
    def self.grab_YAMLs directory
      h = {}
      Dir.entries(directory).select { |i| i[-4..-1] == '.yml' }.each do |item|
        h.merge! YAML.load_file [directory, item].join('/')
      end
      h
    end
  end

  WTF = Helpers.grab_YAMLs 'data'
  CONFIG = YAML.load_file 'config/config.yml'
end
