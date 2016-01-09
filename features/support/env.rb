require 'coveralls'
Coveralls.wear_merged!

ENV['RACK_ENV'] = 'test'

require File.join(File.dirname(__FILE__), '..', '..', 'lib/wtfismyblockchainstrategy.rb')

require 'capybara'
require 'capybara/cucumber'
require 'rspec'
require 'cucumber/api_steps'

Capybara.app = Wtfismyblockchainstrategy

class WtfismyblockchainstrategyWorld
  include Capybara::DSL
  include RSpec::Expectations
  include RSpec::Matchers

  def app
    Wtfismyblockchainstrategy::App
  end
end

World do
  WtfismyblockchainstrategyWorld.new
end
