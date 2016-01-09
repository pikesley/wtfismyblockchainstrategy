module Wtfismyblockchainstrategy
  class Fetcher
    REDIS = Redis.new

    def self.redis
      REDIS
    end

    def self.headers
      {
        'Accept' => 'application/vnd.github.v3+json',
        'User-agent' => "Dashboard v#{VERSION}"
      }
    end

    def self.query
      {
        'client_id' => ENV['GITHUB_CLIENT_ID'],
        'client_secret' => ENV['GITHUB_CLIENT_SECRET']
      }
    end

    def self.get url, ttl = 600
      begin
        Marshal.load(self.redis.get url)
      rescue TypeError
        h = HTTParty.get url, headers: headers, query: query
        self.redis.set url, Marshal.dump(h.body)
        self.redis.expire url, ttl
        Marshal.load(self.redis.get url)
      end
    end

    def self.fetch_CSV url
      csv = get url
      CSV.parse(csv).map { |c| c[0] }
    end

    def self.fetch_CSVs list
      h = {}
      list.each do |item|
        url = "https://raw.githubusercontent.com/pikesley/wtfismyblockchainstrategy/master/data/#{item}.csv"
        h[item] = fetch_CSV url
      end

      h
    end
  end
end
