class Interviewer
    
    attr_reader :name, :position, :department

    @@all = []

    def initialize (name, position, department)
        @name = name
        @position = position
        @department = department

        @@all << self
    end

    # 1. For an interviewer, find all of their interviews
    def interviews
        Interview.all.select do |interview|
            interview.interviewer == self
        end 
    end

    # 2. For those interviews, get the applicants' information
    def applicants
        self.interviews.collect do |interview|
            interview.applicant
        end
    end

    def self.all
        @@all
    end

end