require('./config/config');

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/users'));

mongoose.connect('mongodb://localhost:27017/coffee', (err, res) => {
    if (err) throw err;
    console.log(`Connected to MongoDB coffee`);
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});