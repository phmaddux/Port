Project.destroy_all

whoHasIt = Project.new({
    name: "Who Has It?",
    photo: "****",
    description: 'I drew inspiration for this site, from the same place I always do with these projects my life. When I left Tennessee I realized a lot of my stuff was missing, and being the kind of person I am I relaized I had lent out a lot of my stuff, forgotten who I had given it to, and then had to way to track it down. Therefore I created "Who Has It?", through it I could log in as a user, see who I had loaned what to, whether or not the item had been returned. Each of the three models will have full CRUD functionality in the next update.',
    technical_description: 'This project is a MERN stack app built with Rails and React, containining three models including unique users, "RESTful routing", Postgres SQL for the database, and is deployed online via heroku.',
    link_to_project: "https://who-has-it.herokuapp.com/",
    link_to_readMe: "https://github.com/phmaddux/Who_has_it/blob/master/README.md",
    date_created: "November 17th, 2017",
})
whoHasIt.save

projectVagabond = Project.new({
    name: "Project Vagabond",
    photo: "****",
    description: "This project was to create a website that was about users leaving their thoughts on cities and attractions within the city. However it was also the largest group project we undertook together. It was my primary experience pair programming and honestly was my favorite project, seeing as I felt I learnt the most working in a group.",
    technical_description: "This project was React blended with Ruby on Rails, we accomplished full CRUD functionality on the posts, used an interal API, and posted it to github.",
    link_to_project: "https://wander-wisely.herokuapp.com/",
    link_to_readMe: "https://github.com/ern19/project_vagabond/blob/master/README.md",
    date_created: "November 5th, 2017",
})
projectVagabond.save

theForge = Project.new({
    name: "The Forge",
    photo: "****",
    description: "This website was concieved from another passion of mine. Art, specifically metalworking ",
    technical_description: 'This was the first "Full Stack" project that we did. I used the MERN stack, using react as the front end framework, and again focused on building "RESTful routes".'
    link_to_project: "https://fathomless-basin-57658.herokuapp.com/",
    link_to_readMe: "https://github.com/phmaddux/project3",
    date_created: "October 19th, 2017",
})
theForge.save

letsPlay = Project.new({
    name: "Let's Play",
    photo: "****",
    description: "This second project was born out of my love of board games, and my terrible memory whether or not I have tried a game before. This is a board game tracker designed to help the user inventory the games they have played, the games they want to play, and their thoughts on the games both before and after.",
    technical_description: 'Though we were still expected to incorporate all the expectations fromt the previous project, this project was focused on building a full stack server application with node/express and Mongo; while also ensuring the application contained "RESTful routes".',
    link_to_project: "https://shrouded-wave-63544.herokuapp.com/",
    link_to_readMe: "https://github.com/phmaddux/Project_Two_Lets_Play/blob/master/README.md",
    date_created: "October 3rd, 2017",
})
letsPlay.save

blackJack = Project.new({
    name: "Blackjack!",
    photo: "****",
    description: "Just your standard blackjack game, and my first attempt at any major coding. ",
    technical_description: "This project was intended to test our understanding of HTML, CSS, Flexbox, Javascript, and Jquery. Most, if not all of my project was controlled through Javascript functions in the end.",
    link_to_project: "http://helmsman-derek-41414.bitballoon.com/",
    link_to_readMe: "https://github.com/phmaddux/atl-wdi/blob/master/projects/unit_01/Blackjack/README.md",
    date_created: "September 21st, 2017",
})
blackJack.save