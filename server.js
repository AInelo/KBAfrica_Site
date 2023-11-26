const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "public");

const app = express();

app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
 })

app.get('/team', (req, res) => {
    res.sendFile(path.join(initial_path, "team.html"));
})


app.use((req, res) => {
    res.status(404).json("Not Found.");
});


app.use((req, res) => {
    res.json("404");
})


const port = 3000; // Port sur lequel le serveur écoute

const Port = process.env.PORT || 3000;


 app.listen(Port,   () =>{
     console.log(`Le serveur écoute sur localhost:${Port}.....`);
  });