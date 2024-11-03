const express = require('express');
const connectDB = require('./Database/db.js');
const mongoose = require('mongoose');
const {User} = require('./Model/Model.js');
const app = express();                                        //creating an object that represents the main app
const port = 4000;
const ObjectId = mongoose.Types.ObjectId;

connectDB();

app.get('/', async (req, res) => {
    const id = new ObjectId('6726bcc8f4345efef987f2b0');

    try{
        const updateResult = await User.updateOne(
                { _id: id },                                    // Filter criteria
                { $set: {status: 'active' } }        // Update operation
            );
        console.log(updateResult);
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