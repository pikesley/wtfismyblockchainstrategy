require 'sinatra/base'
require 'rack/conneg'
require 'redis'
require 'httparty'

require_relative 'wtfismyblockchainstrategy/fetcher'
require_relative 'wtfismyblockchainstrategy/version'

module Wtfismyblockchainstrategy
  class App < Sinatra::Base
    use Rack::Conneg do |conneg|
      conneg.set :accept_all_extensions, false
      conneg.set :fallback, :html
      conneg.provide [
        :html,
        :json
      ]
    end

    before do
      if negotiated?
        content_type negotiated_type
      end
    end

    get '/' do
      @content = '<h1>Hello from Wtfismyblockchainstrategy</h1>'
      @title = 'Wtfismyblockchainstrategy'
      erb :index, layout: :default
    end

    get '/data' do
      respond_to do |wants|
        headers 'Vary' => 'Accept'

        wants.json do
          200
        end
      end
    end

    # start the server if ruby file executed directly
    run! if app_file == $0
  end
end
