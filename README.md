# Why?
We are looking for high-performance team members. So, in order to know you a little bit we have created a challenge.

# The Challenge
We are looking for a way that allows us to fetch our favorite songs from Spotify, store them, and filter them inside our own app. Why? Why not!

## Brief

### First part
- We want to create the best music streaming app in the market
- The app must have a form with a "search field" and a button "search". Be free to take inspiration on spotify.com 
- When a user completes the album or artist name in the field "search field" and press the button "search" the list of albums must be filtered.

### Second part
- The app must connect to Spotify and fetch resources (albums and artists)  and store it in the app's database (model or table called "results")
- The app must display a list (or table) with results

### Third part 
- We have an agreement with several discographic companies and they provide us with their complete catalog (albums.csv) so we must create a database to store it, categorize and rank it. 

 
# The rules for Full-Stack Developers
- Fork this repository and create a PR
- Use any framework and language as you want
- You can use any kind of platform to deploy (if you want) i.e.: Heroku, GCP, AWS, etc
- Add unitary tests to your app (as much as you can)
- Add integration and e2e test (as much you can)

# The rules for UI Frontend Developers
- Fork this repository and create a PR
- Provide a **UI + frontend solution only** for the problem described in the *Brief* section 
- Your UI + frontend solutions must include this (micro-interaction)[https://dribbble.com/shots/4827926-Search-input-animation] in the search field
- Use any framework and language as you want
- You can add integration and e2e test (if you want, as much you can)
- You can use any kind of platform to deploy (if you want) i.e.: Heroku, GCP, AWS, etc

# The rules for Frontend Developers
- Fork this repository and create a PR
- Provide a frontend for **First Part** of the problem described in the *Brief* section 
- Your frontend solution must include this (micro-interaction)[https://dribbble.com/shots/4827926-Search-input-animation] in the search field
- Use javascript or typescript with react
- You can add integration and e2e test (**if you want**, as much you can)
- You can use any kind of platform to deploy (**if you want**) i.e.: Heroku, GCP, AWS, etc

# Backend Automation and Ops Developer
- Fork this repository and create a PR
- Use any framework and language as you want (Javascript, Python, Ruby, PHP, Golang)
- You can use any kind of platform to deploy (if you want) i.e.: Heroku, GCP, AWS, etc
- Create a script, API or any piece of software that allow you import albums from [Top 500 albums](https://github.com/Currie32/500-Greatest-Albums/blob/master/albumlist.csv) in your own database (mysql, postgres or mongodb)
- Display the data in a simple table that rank the albums in the following way:
-- Each rock album rank 3 stars, folk 2 stars, every other 1 star except pop that rank 0 stars
- Allow deleting albums from the table from a "Delete Button"
