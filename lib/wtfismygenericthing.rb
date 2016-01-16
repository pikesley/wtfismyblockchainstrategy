require 'sinatra/base'
require 'tilt/erubis'
require 'yaml'
require 'json'

require_relative 'wtfismygenericthing/helpers'
require_relative 'wtfismygenericthing/racks'

module Wtfismygenericthing
  class App < Sinatra::Base
    helpers do
      include Wtfismygenericthing::Helpers
    end

    get '/' do
      respond_to do |wants|
        wants.html do
          @title = CONFIG['title']
          @githubcornerurl = CONFIG['github_corner']['url']
          @githubcornercolour = CONFIG['github_corner']['colour']
          @footerurl = CONFIG['homepage']['url']
          @footername = CONFIG['homepage']['name']
          @bootswatch = CONFIG['bootswatch']
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
