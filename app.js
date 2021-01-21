const express = require('express');
const path = require('path');
const moment = require('moment');
const logger = require('./middleware/logger')
const app = express();


//body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//set static folder

app.use(express.static(path.join(__dirname, 'public')));


//Members API Routes 
app.use('/api/members', require('./routes/api/members.js'));

const PORT  = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
