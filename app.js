const express = require('express')
const app = express()

const morgan = require('morgan');
app.use(morgan('tiny'));

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/', function (req, resp) {
	resp.send('Hello World')
})

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('Example app listening on port '+ app.get('port'));
});
