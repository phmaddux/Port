Project.destroy_all

whoHasIt = Project.new({
    name: "Who Has It?",
    photo: "https://i.imgur.com/E60w0Ag.png",
    description: 'I drew inspiration for this site from the same place I always do with these projects, my life. When I left Tennessee I realized a lot of my stuff was missing, and being the kind of person I am I relaized I had lent out a lot of my stuff, forgotten who I had given it to, and then had no way to track it down. Therefore I created "Who Has It?", through it I could log in as a user, see who I had loaned what to, whether or not the item had been returned. Each of the three models will have full CRUD functionality in the next update.',
    technical_description: 'This project is a MERN stack app built with Rails and React, containining three models including unique users, "RESTful routing", Postgres SQL for the database, and is deployed online via heroku.',
    link_to_project: "https://who-has-it.herokuapp.com/",
    link_to_readMe: "https://github.com/phmaddux/Who_has_it/blob/master/README.md",
    date_created: "November 17th, 2017",
})
whoHasIt.save

projectVagabond = Project.new({
    name: "Project Vagabond",
    photo: "https://i.imgur.com/e9ltQKe.png",
    description: "This project was to create a website that was about users leaving their thoughts on cities and attractions within the city. It was a group project we undertook together with 4 of us pair programming and planning all together. It was my primary experience pair programming and honestly was my favorite project as I felt I learned the most working in a group.",
    technical_description: "This project was React blended with Ruby on Rails, we accomplished full CRUD functionality on the posts, used an interal API, and posted it to github.",
    link_to_project: "https://wander-wisely.herokuapp.com/",
    link_to_readMe: "https://github.com/ern19/project_vagabond/blob/master/README.md",
    date_created: "November 5th, 2017",
})
projectVagabond.save

theForge = Project.new({
    name: "The Forge",
    photo: "https://i.imgur.com/7KUhBf4.png",
    description: "This website was concieved from a passion of mine. Metalworking ",
    technical_description: 'This was the first "Full Stack" project that we did. I used the MERN stack, using react as the front end framework, and again focused on building "RESTful routes".',
    link_to_project: 'https://fathomless-basin-57658.herokuapp.com/',
    link_to_readMe: "https://github.com/phmaddux/project3",
    date_created: "October 19th, 2017",
})
theForge.save