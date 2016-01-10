require File.join(File.dirname(__FILE__), 'lib/wtfismyblockchainstrategy.rb')

unless ENV['RACK_ENV'] == 'production'
  require 'rspec/core/rake_task'
  require 'cucumber/rake/task'
  require 'coveralls/rake/task'
  load 'jasmine/tasks/jasmine.rake'
  require 'coveralls/rake/task'

  Cucumber::Rake::Task.new
  RSpec::Core::RakeTask.new
  Coveralls::RakeTask.new

  task :default => [:cucumber, :spec, 'jasmine:ci', 'coveralls:push']
end
