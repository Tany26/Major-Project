const express = require("express");
require('dotenv').config();
const DB = require('./config/db');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4444;
DB();

const corsOptions = {
    origin: "*",
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


app.use('/files/', require('./routes/show'));
app.use('/files/download', require('./routes/download'));
app.use('/api/files', require('./routes/files'));



app.listen(PORT, () => {
    console.log(`http://localhost${PORT}`);
})