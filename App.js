const express = require("express");

const App = express ();

App.get("/", (req, res) => {
    //res.send("EHHH QUE PASA GENTE");+
    res.sendFile("C:/Users/Usuario/Desktop/SERVIDOR BACKEND/index.html")

}); 

App.listen(8000,() => {
    console.log("Server listo papi sin miedo", 8000);
});