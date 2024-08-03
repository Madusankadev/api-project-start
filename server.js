
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let user = {
   'ishara': {
    'age': 21,
    'name': 'Ishara Madusanka',
    'gender': 'Male'
   }, 

   'ashen': {
    'age': 20,
    'name': 'Ashen Himasha',
    'gender': 'Male'
   }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/users/:userName', (request, response) => {
    const userName = request.params.userName.toLocaleLowerCase()
    response.json(user[userName])
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})