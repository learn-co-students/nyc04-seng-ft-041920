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
* 10 mins: discuss domain modeling in SQL
* 30 mins: look at a SQL database and write some SQL

## Key Questions
* What can I do with data?
- collect data and infer conclusions (analyze)
- enter information in form
- ask question, or make changes to it

* Why is persistence important? How have we been persisting data so far?
- arrays, @@all << self
  - issues: can't exist outside of the class, volume of data that can stored depends on computer memory
  - arrays can only category of thing

* What is a (relational) database?
- table in Excel (spreadsheet), all connected to each (some of going between the tables)

* What kinds of databases are there?
- relational database (SQL database) -> SQLite3, Postgresql, MySQL, MSSQL
- NoSQL database - MongoDb (document datatype), Redis (key-value store), GraphQL

* What is SQL?
- Structured Query Language
  - Declarative - 

* What is CRUD?
C - Create 
R - Read/Retrieve
U - Update
D - Delete

* How does an app like Instagram use CRUD?
C - Follow a user, post a photo, post a comment
R - Scroll through the feed, reading a DM, looking at followers, search a hashtag
U - Like a photo (increase the number of likes), editing a caption, editing your bio
D - Your account?, delete a post, delete a comment, unfollowing a user


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

games - id, name, genre
reviews - id, review, game_id, player_id
players - id, name

## Set Up 

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `game-reviews.db` file from this repo. 
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the games table
```sql
select *
from games;
```

2. Write the SQL to select the game with the title "Mario Kart 64"
```sql
select *
from games
where games.title = "Mario Kart 64";
```
  2a. Change the query to include all games with the word 'Mario' in their title
```sql
select *
from games
where games.title like "%mario%";
```

3. Write the SQL to display an game's titles next to their review ratings
```sql
select title, comment
from games
join reviews on games.id=reviews.game_id
```

  3a. Write the SQL to show the game title, the review rating, and the player's name

4. Write the SQL to create a review
