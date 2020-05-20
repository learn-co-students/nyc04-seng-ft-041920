class Game
  attr_accessor :id, :title, :genre, :price

  # { id: , title: , genre: , price: }
  def initialize(args_hash)
    args_hash.each do |key, value|
      self.send("#{key}=", value)
    end

    # @id = args_hash["id"]
    # @title = args_hash["title"]
    # @genre = args_hash["genre"]
    # @price = args_hash["price"]
    # @@all << self
  end

  def save
    sql = "insert into games (title, genre, price) values (?, ?, ?);"
    DB[:conn].execute(sql, self.title, self.genre, self.price)
  end

  def self.all
    sql = "select * from games;"
    results = DB[:conn].execute(sql)
    results.map do |row_hash|
      # Game.new(row_hash["id"], row_hash["title"], row_hash["genre"], row_hash["price"])
      Game.new(row_hash)
    end
  end

end