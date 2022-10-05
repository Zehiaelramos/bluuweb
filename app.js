const express = require('express')
const app = express()

const morgan = require('morgan');
app.use(morgan('tiny'));

const cors = require('cors');
app.use(cors());

app.use(express.json());

// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Para acceder al directorio actual
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('Example app listening on port '+ app.get('port'));
});

app.get('/', (req, resp) => {
  res.send('Hello World!');
});

