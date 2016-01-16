require 'sinatra/base'
require 'tilt/erubis'
require 'yaml'
require 'json'

require_relative 'wtfismygenericthing/racks'
require_relative 'wtfismygenericthing/helpers'

module Wtfismygenericthing
  class App < Sinatra::Base
    helpers do
      include Wtfismygenericthing::Helpers
    end

    WTF = Helpers.grab_YAMLs 'data'

    get '/' do
      respond_to do |wants|
        wants.html do
          @title = 'Wtfismygenericthing'
          erb :index, layout: :default
        end

        wants.json do
          WTF.to_json
        end
      end
    end

    # start the server if ruby file executed directly
    run! if app_file == $0
  end
end
