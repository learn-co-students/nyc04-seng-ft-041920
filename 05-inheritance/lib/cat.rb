class Cat < Animal
  attr_reader :number_of_lives
  # attr_accessor :mood
  
  def initialize(name, number_of_lives = 9)
    # if number_of_lives > 1
    super(name)
    # end
    # @name = name
    # @mood = "nervous" #(name, mood) #Animal.initialize(name, number_of_lives)
    puts "Cat INIT"
    @number_of_lives = number_of_lives
  end

  def speak
    # super # lets us call a method in the parent class
    puts "Meow my name is #{self.name}"
  end
end
