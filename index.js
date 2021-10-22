const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
// const port = process.env.PORT || 3000
const port = 5000;

app.get('/', (req, res) => {
    res.send('My Trial')
})

const users = [
    { id: 0, name: 'monib' },
    { id: 1, name: 'akash' },
    { id: 2, name: 'pulok' },
    { id: 3, name: 'anamul' },
]


// use query parameter
app.get('/users', (req, res) => {
    const search = req.query.search
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    } else {
        res.send(users)
    }
})

// dynamic id
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})


// app.post method
app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    console.log('hiting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})



app.listen(port, () => {
    console.log('Listen to', port);
})