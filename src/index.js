const express = require('express');
const {run} = require('./Database/db.js');
const app = express();                                        //creating an object that represents the main app
const port = 4000;

// the issue is that i can't connect to the database in mongoDB
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, (error) => {
    if(error){
        console.log(error, 'error occured');
        return;
    }
    console.log(`Server is running on port ${port}`);
});   