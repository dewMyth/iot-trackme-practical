const express = require('express');
const bodyParser = require('body-parser')
const http = require('http');


const app = express()


// Initialize The Middleware
const deviceRouter = require('./routes/devices')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true}));

app.use("/api/devices", deviceRouter)


app.get('/', (req, res) => {
    res.send('Server Running succesfully !')
  })

// Start the server on port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));