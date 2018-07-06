const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT|| 5000;

app.listen(port);
console.log(`My website is listening to ${port}`);

let projectsData= [{
    name: 'Guess-timator',
    html_ulr: 'https://github.com/oliviamorrison/Guess-timator',
    desription: 'A fun project for the summer of tech web weekend challenge!'
}];

app.get('/api/projects', (req,res) => {
    // return projects as a json
    res.json(projectsData);
});

