require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDB = require('./db');
const isBlocked = require('./middleware/isblocked');
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
connectToDB();
app.use('/api/emailspam', require('./routes/emailspam'));

app.listen(port, async ()=>{
    console.log(`Server is running on port ${port}`);
})