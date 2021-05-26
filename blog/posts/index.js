const express = require('express');

const app = express();

app.get('/posts', (req, res) => {
	req.send('Hello, world');
});

app.post('/posts', (req, res) => {

});

app.listen(3333, () => {
	console.log('Server running!!');
});
