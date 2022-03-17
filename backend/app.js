require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
app.use('/api/emailspam', require('./routes/emailspam'));

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})