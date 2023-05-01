const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
app.use(cors())

const chefData=require('./data/data.json')
app.get('/', (req, res) => {
    res.send('Assignment-10-server-site')
})
app.get('/data',(req,res)=>{
    res.send(chefData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})