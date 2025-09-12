const express = require('express')
const app = express()
const { add, minus} = require("./calculator");
const port = 3000

app.get('/', (req, res) => {
 res.send('Hello World!')
})

// app.get("/add", (req, res) => {
//     const result = add(6,3);
//     res.send(result);
// })

app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  const result = add(Number.parseInt(num1), Number.parseInt(num2));
  if(!result){
    res.send({result:"Plase provide a number"}); 
  }
  res.json({ result });    
});

app.get('/minus', (req, res) => {
  const result = minus(6, 3);
  res.json({ result });              
});

app.listen(port, () => {
 console.log(`Example app listening at 
http://localhost:${port}`)
})