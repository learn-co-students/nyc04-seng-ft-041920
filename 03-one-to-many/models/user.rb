class User

    attr_reader :username
    attr_accessor :bio

    # getter method, same thing as using attr_reader macro
    # def username
    #     @username
    # end

    # setter method, same thing as using attr_writer macro
    # def username=(new_username)
    #     @username = new_username
    # end

    def initialize (username, bio)
        @username = username
        @bio = bio
    end

    def post_tweet (message)
        Tweet.new(message, self)
    end

    def tweets
        Tweet.all.select do |tweet_instance|
            tweet_instance.user == self
        end  
    end

    def print_tweets
        Tweet.all.each do |tweet_instance|
            puts "🦢 #{tweet_instance.user.username}: #{tweet_instance.message}"
        end
    end
    
end