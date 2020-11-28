const express = require("express");
const port = 3000;
const app = express();

let serverStatus = false;
let clientStatus = false;

setInterval(()=>{
	console.log("server", serverStatus);
	console.log("client", clientStatus);
},1000);

app.get("/", (req, res) => {
  res.send("This is the home Page");
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
