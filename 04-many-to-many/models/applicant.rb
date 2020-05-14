class Applicant

    attr_reader :name, :resume, :years_exp, :interest_role

    @@all = []

    def initialize (name, resume, years_exp, interest_role)
        @name = name
        @resume = resume
        @years_exp = years_exp
        @interest_role = interest_role

        @@all << self
    end

    # 1. For an applicant, find all of their interviews
    def interviews
        Interview.all.select do |interview|
            interview.applicant == self
        end 
    end

    # 2. For those interviews, get the interviewers' information
    def interviewers
        self.interviews.collect do |interview|
            interview.interviewer
        end
    end

    def self.all
        @@all
    end

end