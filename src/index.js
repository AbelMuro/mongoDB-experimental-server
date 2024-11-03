const express = require('express');
const connectDB = require('./Database/db.js');
const mongoose = require('mongoose');
const {User} = require('./Model/Model.js');
const app = express();                                        //creating an object that represents the main app
const port = 4000;
const ObjectId = mongoose.Types.ObjectId;


app.get('/', async (req, res) => {
    const id = new ObjectId('67269b183f1c7d0987ddcdf9');

    try{
        await connectDB();
        const user = await User.findOne({_id: id});
        console.log(user);
        res.status(200).send('Hello World');    
    }
    catch(error){
        res.status(500).send(error.message);    
    }     
})

app.listen(port, (error) => {
    if(error){
        console.log(error, 'error occured');
        return;
    }
    console.log(`Server is running on port ${port}`);
});   