require 'sinatra/base'
require 'rack/conneg'
require 'redis'
require 'httparty'
require 'tilt/erubis'
require 'rack-google-analytics'

require_relative 'wtfismyblockchainstrategy/fetcher'
require_relative 'wtfismyblockchainstrategy/version'

module Wtfismyblockchainstrategy
  class App < Sinatra::Base
    set :root, File.dirname(__FILE__)
    set :public_folder, Proc.new { File.join(root, 'public') }
    set :views, 'lib/views'

    use Rack::GoogleAnalytics, :tracker => 'UA-46327971-3'

    use Rack::Conneg do |conneg|
      conneg.set :accept_all_extensions, false
      conneg.set :fallback, :html
      conneg.ignore('/css/')
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
      @content = '<h1>WTFISMYBLOCKCHAINSTRATEGY</h1>'
      @title = 'WTFISMYBLOCKCHAINSTRATEGY'
      erb :index, layout: :default
    end

    get '/data' do
      respond_to do |wants|
        headers 'Vary' => 'Accept'

        wants.json do
          {
            things: [
              'cats',
              'dogs',
              'rabbits',
              'meerkats',
              'horses',
              'velociraptors',
              'minifigs',
              'Github',
              'Owls'
            ]
          }.to_json

          Fetcher.fetch_CSVs([
            'disruptables',
            'headings',
            'responses',
            'things'
          ]).to_json
        end
      end
    end

    # start the server if ruby file executed directly
    run! if app_file == $0
  end
end
