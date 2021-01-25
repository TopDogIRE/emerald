const express = require("express");
const app = express();  // importing express method
const port = 4000; //Default port for express

app.get("/", (req,res) => {
    res.send("Hello World, this is a man from the Aran Islands");  // Message to be displayed on DOM
});

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`); // http://localhost:4000 
})