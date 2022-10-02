const express = require('express')
const app = express()

app.get('/', function (req, resp) {
	resp.send('Hello World')
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})