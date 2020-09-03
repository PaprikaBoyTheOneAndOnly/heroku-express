const express = require('express');
const app = express();

app.get('/', (req, res) => {
	console.log('in get');
	return res.send('[GET] Hello There');
});

app.post('/', (req, res) => {
	console.log('in post');
	return res.send('[POST] Hello There'); 
});

app.listen(process.env.PORT, () => { 
	console.log(`App listenting on ${process.env.PORT}`);
});
