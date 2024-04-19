const express = require("express")
const app = express();
app.use(express.json())

app.post("/", function(req,res){
  res.json({
    msg : "done"
  })
})

app.listen(3000)