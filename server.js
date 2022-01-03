const express=require('express')
const {addWord ,sendAll,searchWord}=require('./controller/route')
const PORT=process.env.PORT || 5006
const app=express()
app.use(express.static('website'))


app.get('/all', sendAll)
app.get('/add/:word/:score?', addWord)
app.get('/search/:word', searchWord)
app.listen(PORT, console.log(`App running on port ${PORT}`)) 