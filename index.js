const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('所有的人都不是人')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})