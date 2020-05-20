class Game
  attr_accessor :id, :title, :genre, :price

  @@all = []

  # TODO: if there's time, refactor using mass assignment
  def initialize(id, title, genre, price)
    @id = id
    @title = title
    @genre = genre
    @price = price

    # TODO: replace with database!
    @@all << self
  end

  # TODO: replace with database!
  def self.all
    @@all
  end

end