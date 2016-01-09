require 'sinatra/base'
require 'rack/conneg'
require 'yaml'
require 'tilt/erubis'
require 'rack-google-analytics'

module Wtfismyblockchainstrategy
  class App < Sinatra::Base

    WTF = YAML.load_file('data/wtf.yml')

    set :root, File.dirname(__FILE__)
    set :public_folder, Proc.new { File.join(root, 'public') }
    set :views, 'lib/views'

    use Rack::GoogleAnalytics, :tracker => 'UA-46327971-3'

    use Rack::Conneg do |conneg|
      conneg.set :accept_all_extensions, false
      conneg.set :fallback, :html
      conneg.ignore('/css/')
      conneg.ignore('/js/')
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
      headers 'Vary' => 'Accept'

      respond_to do |wants|
        wants.json do
          WTF.to_json
        end

        wants.html do
          @title = 'WTFISMYBLOCKCHAINSTRATEGY'
          erb :index, layout: :default
        end
      end
    end

    # start the server if ruby file executed directly
    run! if app_file == $0
  end
end
