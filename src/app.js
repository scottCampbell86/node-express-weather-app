const path = require('path')
//not just defining a const, but this is declaring a function with the label express, this loads express into our app, giving us access to the express function
const express = require('express')
//declaring a const with the label app and assigning it to the invocation of the express function
const app = express()

//below two lines form root path...overwrites an express route to the path '/'
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

// lines 8 and 9 make the below useless...

// app.get('/', function(req, res){
//   res.send(`this is the server response...`)
// })
// app.get('/help', (req, res) => {
//   res.send({
//     name: 'Buddy',
//     species: 'cat'
//   })
// })
// app.get('/about', (req, res) => {
//   res.send('<h1>About</h1>')
// })

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Stormy',
    location: 'Portland'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})