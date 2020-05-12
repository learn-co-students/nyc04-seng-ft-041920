require('pry')

class Performer

    attr_reader :birth_year
    attr_accessor :name, :num_of_albums, :is_on_tour
    
    # class variable
    @@all = []

    def initialize (name, birth_year, num_of_albums, is_on_tour)
        @name = name
        @birth_year = birth_year
        @num_of_albums = num_of_albums
        @is_on_tour = is_on_tour

        @@all << self
    end

    # instance method
    def release_new_album 
        @num_of_albums += 1
    end

    # instance method
    def collaborate (artist)
        binding.pry
        @is_on_tour = true
        artist.is_on_tour = true
        puts "#{@name} and #{artist.name} are on tour together!!!"
        binding.pry
    end

    # class method
    def self.all
        @@all
        # binding.pry
    end


end


# Creating instances of the Performer class
p1 = Performer.new("britney", 1981, 7, false)
p2 = Performer.new("justine", 1981, 9, false)

p1.collaborate(p2)

Performer.all

binding.pry