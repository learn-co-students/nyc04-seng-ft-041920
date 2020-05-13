class Tweet
    attr_reader :message, :user

    # single source of truth for our Tweets
    @@all = []

    def initialize (message, user)
        @message = message
        @user = user

        @@all << self
    end

    def username 
        self.user.username
    end

    def self.all
        @@all
    end

end