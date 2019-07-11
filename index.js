const express = require('express')
const app = express()

app.get('/', (req, res) => {
    let str = '啦啦啦啦啦啦'
    if(req.query.type == 1){
        str = '雷总你大爷的'
    }
    return res.send(str)
})

var port = process.env.PORT || '3000'

app.listen(port, () => console.log(`Example app listening on port ${port}!`));