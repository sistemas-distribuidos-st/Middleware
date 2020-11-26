const express = require("express");
const fs = require("fs");
const axios = require('axios');
const port = 3000;
const app = express();

let s1 = '192.168.0.26:3000';

const getActualRequestDurationInMilliseconds = start => {
	const NS_PER_SEC = 1e9;
	const NS_TO_MS = 1e6;
	const diff = process.hrtime(start);
	return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

let logger = message => {
	let current_datetime = new Date();
	let formatted_date = current_datetime.getFullYear() + "-" +
		(current_datetime.getMonth() + 1) + "-" +
    	current_datetime.getDate() + " " + 
    	current_datetime.getHours() + ":" + 
    	current_datetime.getMinutes() + ":" + 
    	current_datetime.getSeconds();
    const start = process.hrtime();
    const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);

    let log = `[${formatted_date}] ${message} ${durationInMilliseconds.toLocaleString() + "ms"}`;

    console.log(log);

    fs.appendFile("logs.txt", log + "\n", err => {
    	if (err) {
    		console.log(err);
    	}
    });
};

setInterval(()=>{
    //a continuación se haria la petición
    //axios-get(`http://${s1}`).then(res => {logger(res.data)});
    logger(`http://${s1}`);
},1000);

app.get("/", (req, res) => {
  res.status(200).send("This is the home Page");
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
