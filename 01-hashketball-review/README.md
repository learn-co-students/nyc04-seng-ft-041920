# Welcome to MOD 1!

## Lectures
- Participation
- Labs/Pacing
    - Labs run in parallel to lectures
    - Will deploy labs about a lecture topic either the morning before a lecture or the afternoon after
    - As you get further along the program, there'll be the expectation that before you go to a lecture, you'll have some exposure to the topic by either reading through the readme or getting start on the labs
- Recording
    - Lectures are recorded
    - Will be uploaded afterwards for you to access
- Lecture Code
    - All the code we write together and readme's you see will be available to you after lecture
    - Clone the class repo
        - `git clone https://github.com/learn-co-students/nyc04-seng-ft-041920`
- Breaks
    - Mod 1 lectures typically last no longer than 1.5 hours
    - 5 min break half way through
- Question Asking Hours
    - School Hours 9:00 am - 6:00 pm
    - Lunch 12:30 - 1:30
- Break Out Sessions


## By the end of this review, students will be able to (SWBATs):
1. Employ test driven development best practices in labs
    - `rspec --fail-fast`handle one error at a time
    -  `rspec --f-f`
2. Define debugging
3. Distinguish between data types in Ruby
4. Show how to look up documentation for data types in Ruby
5. Demonstrate the use of common Array methods: `each`, `map`, `select`, and `find`
6. Differentiate array methods by their respective return values
7. Define Single Responsibility Principle and DRY


___

## Ruby Gems

Ruby gems are collections of ruby code that somebody else wrote that we can use inside of our projects.

- How to install a gem called `gem-name` for example?

    `gem install gem-name`

## RSpec

Rscpec is a Ruby gem specifically for writing tests for our Ruby code.

- `rspec` - running `rspec` inside of a project with a spec folder will look for the spec folder and run all of the tests inside of it
    - `learn` runs `rspec` under the hood
- `rspec --fail-fast` - will run the tests until one test fails


## Break Out Room Exercise

[REPL Link](https://repl.it/@BrendaMichelle1/Enumerable-Practice)


---

## Instructions

Great news! You're going to an NBA game. The only catch is that you've been volunteered to keep stats at the game.

Fork and clone this lab and run the test suite to get started. You'll be coding your solution in `hashketball.rb`.

### Part 1: Building the Hash

The first method you will define is called `game_hash`. This method contains and returns a hash nested in the following manner:

* The top level of the hash has two keys: `:home`, for the home team, and `:away`, for the away team.
* The values of the `:home` and `:away` keys are hashes. These hashes have the following keys:
  * `:team_name`
  * `:colors`
  * `:players`
* The `:team_name` key points to a string of the team name.
* The `:colors` key points to an array of strings that are that team's colors.
* The `:players` key points to a hash of players whose names (as strings) are the keys to a hash containing their stats. The values for each player's names and their stats can be found in the table below. The stats keys should be formatted like this:
  * `:number`
  * `:shoe`
  * `:points`
  * `:rebounds`
  * `:assists`
  * `:steals`
  * `:blocks`
  * `:slam_dunks`

Use the following data to populate your `game_hash` as outlined above. Remember to run `learn` to see what the tests expect.

Home Team:

* team name: Brooklyn Nets
* colors: Black, White
* players:

|      Stat       |     Info      |     Info     |    Info     |     Info      |    Info     |
| :-------------: | :-----------: | :----------: | :---------: | :-----------: | :---------: |
| **Player Name** | Alan Anderson | Reggie Evans | Brook Lopez | Mason Plumlee | Jason Terry |
|   **Number**    |       0       |      30      |     11      |       1       |     31      |
|    **Shoe**     |      16       |      14      |     17      |      19       |     15      |
|   **Points**    |      22       |      12      |     17      |      26       |     19      |
|  **Rebounds**   |      12       |      12      |     19      |      12       |      2      |
|   **Assists**   |      12       |      12      |     10      |       6       |      2      |
|   **Steals**    |       3       |      12      |      3      |       3       |      4      |
|   **Blocks**    |       1       |      12      |      1      |       8       |     11      |
| **Slam Dunks**  |       1       |      7       |     15      |       5       |      1      |

Away Team:

* team name: Charlotte Hornets
* colors: Turquoise, Purple
* players:

|      Stat       |    Info     |      Info      |     Info     |    Info    |      Info       |
| :-------------: | :---------: | :------------: | :----------: | :--------: | :-------------: |
| **Player Name** | Jeff Adrien | Bismak Biyombo | DeSagna Diop | Ben Gordon | Brendan Haywood |
|   **Number**    |      4      |       0        |      2       |     8      |       33        |
|    **Shoe**     |     18      |       16       |      14      |     15     |       15        |
|   **Points**    |     10      |       12       |      24      |     33     |        6        |
|  **Rebounds**   |      1      |       4        |      12      |     3      |       12        |
|   **Assists**   |      1      |       7        |      12      |     2      |       12        |
|   **Steals**    |      2      |       7        |      4       |     1      |       22        |
|   **Blocks**    |      7      |       15       |      5       |     1      |        5        |
| **Slam Dunks**  |      2      |       10       |      5       |     0      |       12        |

### Step 2: Building Methods

### Calling Methods within Methods

You'll be building a series of methods that operate on the above game hash to return certain information about the teams and players. Each method will operate on the game hash by calling the `game_hash` method that returns the `game_hash`. In other words, since our `game_hash` method returns our hash, you can think of the `game_hash` like a variable that points to our hash and operate on it just as you would with hashes in previous lessons.

For example, let's say we want to build a method, `home_team_name`, that returns the name of the home team, `"Brooklyn Nets"`. We can call the method `game_hash` inside of our `home_team_name` method and operate on the game_hash:

```ruby
def home_team_name
  game_hash[:home][:team_name]
end

puts home_team_name
# => "Brooklyn Nets"
```

Now that we understand how we are going to operate on the `game_hash` inside of the methods we're building, let's build those methods:

### Iterating through Nested Levels:

This lab requires us to iterate through the many levels of our nested hash. DON'T TAKE YOUR UNDERSTANDING OF YOUR HASH FOR GRANTED. Every time you iterate into a new level of the hash, immediately place a `binding.pry` there. Then, run RSpec with the `learn` command to see what the key/value pairs of that hash are.

Let's take a look at an example:

```ruby
def good_practices
  game_hash.each do |location, team_data|
    #are you ABSOLUTELY SURE what 'location' and 'team data' are? use binding.pry to find out!
    binding.pry
      team_data.each do |attribute, data|
        #are you ABSOLUTELY SURE what 'attribute' and 'team data' are? use binding.pry to find out!
        binding.pry

        #what is 'data' at each loop through out .each block? when will the following line of code work and when will it break?
        data.each do |data_item|
            binding.pry
      end
    end
  end
end
```

Open up the `hashketball.rb` file and add the line _require "pry"_ at the top and copy and paste the above method. Then, beneath the `end` that closes the method definition, call the method (`good_practices`) and, in your terminal, run the file with `ruby hashketball.rb`. Play around with the methods in each binding until you get comfortable with the iteration. This should give you a stronger sense of how we iterate through so many levels of a nested hash and what happens on each level. **Use this method of placing LOTS of bindings when you iterate in order to solve this lab.**

Okay, _now_ we're ready to build out methods:

### Method Building

* Build a method, `num_points_scored` that takes in an argument of a player's name and returns the number of points scored for that player.

  * Think about where in the hash you will find a player's `:points`. How can you iterate down into that level? Think about the return value of your method. Remember that `.each` returns the original collection that you are iterating over. How can you return the number of points for a particular player?

* Build a method, `shoe_size`, that takes in an argument of a player's name and returns the shoe size for that player.
  * Think about how you will find the shoe size of the correct player. How can you check and see if a player's name matches the name that has been passed into the method as an argument?
* Build a method, `team_colors`, that takes in an argument of the team name and returns an array of that teams colors.
* Build a method, `team_names`, that operates on the game hash to return an array of the team names.
* Build a method, `player_numbers`, that takes in an argument of a team name and returns an array of the jersey number's for that team.
* Build a method, `player_stats`, that takes in an argument of a player's name and returns a hash of that player's stats.
  * Check out the following example of the expected return value of the `player_stats` method:


    ```bash
    player_stats("Alan Anderson")
    => { :number => 0,
         :shoe => 16,
         :points => 22,
         :rebounds => 12,
         :assists => 12,
         :steals => 3,
         :blocks => 1,
         :slam_dunks => 1
       }
    ```

* Build a method, `big_shoe_rebounds`, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
  * First, find the player with the largest shoe size
  * Then, return that player's number of rebounds
  * Remember to think about return values here. Use `binding.pry` to drop into your method and understand what it is returning and why.

**Bonus Questions:**

Define methods to return the answer to the following questions:

1. Which player has the most points? Call the method `most_points_scored`.

2. Which team has the most points? Call the method `winning_team`.

3. Which player has the longest name? Call the method `player_with_longest_name`.

**Super Bonus:**

1. Write a method that returns true if the player with the longest name had the most steals. Call the method `long_name_steals_a_ton?`.

## Resources

<p class='util--hide'>View <a href='https://learn.co/lessons/advanced-hashes-hashketball'>Hashketball</a> on Learn.co and start learning to code for free.</p>
