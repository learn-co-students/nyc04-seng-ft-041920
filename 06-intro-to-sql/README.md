Intro to SQL
===

## SWBATs

* [ ] Explain persistence and the need for using SQL
* [ ] Define SQL
* [ ] Explain the difference between SQLite3 and SQL
* [ ] Explore provided data through SQLite Browser
* [ ] Define CRUD
* [ ] Perform CRUD actions on a single table
* [ ] Perform CRUD actions across related tables

## Outline
* 15 mins: discussion of databases and SQL
* 30 mins: look at a SQL database and write some SQL

## Key Questions
* What can I do with data?
* Why is persistence important? How have we been persisting data so far?
* What is a (relational) database?
* What kinds of databases are there?
* What is SQL?
* What is CRUD?
* How does an app like Instagram use CRUD?

## Domain Modeling in SQL

How would we model a domain like Twitter in SQL tables?

User -< Tweet

- A User *has many* Tweets
- A Tweet *belongs to* a User 

(Pair) Model this domain using SQL tables. Where do the foreign keys go?

Game -< Review >- Player

- A Game *has many* Reviews
- A Game *has many* Players *through* Reviews

- A Review *belongs to* a Game 
- A Review *belongs to* a Player

- A Player *has many* Reviews
- A Player *has many* Games *through* Reviews

## Set Up 

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `game-reviews.db` file from this repo. 
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the games table

2. Write the SQL to select the game with the title "Mario Kart 64"

  2a. Change the query to include all games with the word 'Mario' in their title

3. Write the SQL to display an game's titles next to their review ratings

  3a. Write the SQL to show the game title, the review rating, and the player's name

4. Write the SQL to create a review
