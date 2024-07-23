
import express from 'express'
import users from './users.json' assert {type: 'json'};

const app = express();
const port = 3000; app.listen(port)

app.get('/users', (req, res) => {
    res.send(users)
})
