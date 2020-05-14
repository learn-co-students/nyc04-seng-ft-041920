require 'pry'
require_relative 'models/applicant'
require_relative 'models/interviewer'
require_relative 'models/interview'

# name, resume, years_exp, interest_role
hyojin = Applicant.new("hyojin", true, 1, "junior developer")
michelle = Applicant.new("michelle", true, 1, "unsure")

# name, position, deparment
john = Interviewer.new("john doe", "hr manager", "HR")
spongebob = Interviewer.new("spongebob", "cook", "kitchen")

# room, comment, date, interviewer, applicant
i1 = Interview.new(123, "tbd", "2020-06-07", john, hyojin)
i2 = Interview.new(45, "tbd", "2020-06-07", john, michelle)
i3 = Interview.new(903, "tbd", "2020-06-07", spongebob, hyojin)



binding.pry