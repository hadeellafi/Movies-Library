const data = require("./Movie Data/data.json")

const express = require("express");

const server = express();//best practise call it server or app

const PORT = 3000;

function Movie(movie_data) {
    this.title = movie_data.title;
    this.poster_path = movie_data.poster_path;
    this.overview = movie_data.overview;
}
//Routes

// Home Route
//https://localhost:3000/
server.get('/', (req, res) => {
    let movie1=new Movie(data);
    res.send(movie1);//will be shown in localhost:3000
})

//https://localhost:3000/favorite
server.get('/favorite',(req,res)=>{
    //const x = y + 1; //here if we want to show error 500 we have to create an error cause  it's server error
    res.send("Welcome to Favorite Page");
})

server.get('*',(req,res)=>{
    const notFoundError={status: 404,responseText: "page not found error"};
    res.status(404).send(notFoundError);
});

server.use(function(err, req, res, next) {
    //console.error(err.stack);// this will show what is the error in console 
    const serverError={status: 500,responseText: "Sorry, something went wrong"};
    res.status(500).send(serverError);
  });

  
server.listen(PORT, () => {
    console.log(`listening on ${PORT} i  am ready`)
})



