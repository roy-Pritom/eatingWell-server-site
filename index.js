const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
app.use(cors())

const chefData=require('./data/data.json')
app.get('/', (req, res) => {
    res.send('Assignment-10-server-site')
})
// all data
app.get('/data',(req,res)=>{
    res.send(chefData)
})

// particular data
app.get('/data/:id',(req,res)=>{
    const id=req.params.id;
    const selectedData=chefData.find(pd=>pd.id===id);
    res.send(selectedData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})