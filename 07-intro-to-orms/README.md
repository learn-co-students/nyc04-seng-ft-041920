Intro to ORMs
===

## SWBATs

* [ ] Follow code that is organized into different files
* [ ] Define Object Relational Mapper (ORM)
* [ ] Explain how the `sqlite` gem works as a driver or wrapper around SQL
* [ ] Perform persistent CRUD actions on a model
* [ ] Distinguish between ORM and SQL
* [ ] Demonstrate that ORMs are the pattern connecting scripting languages and databases
* [ ] Explain to a peer all the things that happen when we call `Tweet.all` (your answer should include when SQL is fired & when Ruby objects are created)
* [ ] Understand how to instantiate objects using Mass Assignment

## Outline
* 5 mins: ORM discussion
* 15 mins: App overview
  * What is a `Gemfile`? What is `bundle install`?
  * What is the `sqlite` gem? How can we use it to communicate between Ruby and a database?
* 20 mins: Connect our app to SQL and update our class
* *If there's time* Mass assignment

## Object Relational Mapper (ORM) Questions

* What is an ORM?
Object - instance of a class, data/behavior
Relational - many/many, one/many, relational database
Mapper - 

* How do the following SQL concepts translate to Ruby?
  * table -> class
  * row -> instance
  * column -> attr_methods, instance variables
  * cell -> data stored in the instance variable

* What is the advantage of using an ORM? What are some drawbacks?

### Metaprogramming and Mass Assignment
Is the concept of writing code that writes code. In ruby, everything is an object. We interact with objects by *sending messages* to them. Objects know which messages to respond to and how via the *methods* that we define in the class.

Therefore, when initializing an object in ruby, we can pass in a hash, and then iterate over the hash to Mass Assign attributes to the instance that we are creating.

```ruby
attr_accessor :attr1, :attr2, # etc...
def initialize(attribute_hash)
  attribute_hash.each do |key, value|
    self.send("#{key}=", value)
  end
end
```

### Resources
[Bundler documentation](https://bundler.io/docs.html)
[SQLite documentation](https://www.sqlite.org/lang.html)
[SQLite3 gem](https://github.com/sparklemotion/sqlite3-ruby)
[Why we need to sanitize database queries](https://xkcd.com/327/)