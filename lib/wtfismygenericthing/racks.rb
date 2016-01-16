require 'rack/conneg'

module Wtfismygenericthing
  class App < Sinatra::Base
    set :public_folder, 'public'
    set :views, 'views'

  # Fill this in if you have one
  #  use Rack::GoogleAnalytics, :tracker => 'UA-00000000-0'

    use Rack::Conneg do |conneg|
      conneg.set :accept_all_extensions, false
      conneg.set :fallback, :html
      conneg.ignore_contents_of 'public'
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
  end
end
