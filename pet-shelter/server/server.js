const express = require('express');
const app = express();
const cors = require('cors')
require('./config/mongoose.config');
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));

// DONT FORGET TO ADD ROUTE REQUIRE
require('./routes/pet.route')(app);




app.listen(8000, () => {
    console.log("Listening at Port 8000")
})



