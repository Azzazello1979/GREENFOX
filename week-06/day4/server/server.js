const express = require('express')
const app = express()
const port = 3000


// send a msg as reply
//app.get('/', (req, res) => res.send('Hello, this is the root of the doc!'))

// send a img as reply
app.get('/', (req, res) => res.sendFile(__dirname + '/assets/result.jpg'))

// send a page as reply
//app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))







app.listen(port, () => console.log(`Example app listening on port ${port}!`))