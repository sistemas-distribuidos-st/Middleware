const express = require("express");
const readLastLines = require('read-last-lines');
const port = 3000;
const app = express();

let serverAStatus = false;
let serverBStatus = false;
let time='';

setInterval(()=>{
	readLastLines.read('log.txt', 5).then((lines) => {
		let data = lines.split('\n');
		for (var i = 0; i < data.length; i++) {
			if(data[i] == 'ServerA'){
				if(data[i + 1] === '')
					serverAStatus = 'FAIL';
				else
					serverAStatus = 'OK';
				i++;
			}else if(data[i] == 'ServerB'){
				if(data[i + 1] === '')
					serverBStatus = 'FAIL';
				else
					serverBStatus = 'OK';
				i++;
			}else if (data[i].contains('TIME') ){
				time = data[i];
			}
		}
		console.log(time)
		console.log("ServerA", serverAStatus);
		console.log("ServerB", serverBStatus);
	});
},1000);

app.get("/", (req, res) => {
  res.send("This is the home Page");
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
