class Interview

    attr_reader :room, :comment, :date, :interviewer, :applicant

    @@all = []

    def initialize (room, comment, date, interviewer, applicant)
        @room = room
        @comment = comment
        @date = date
        @interviewer = interviewer
        @applicant = applicant

        @@all << self
    end

    def self.all
        @@all
    end

end