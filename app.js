
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path') // Para acceder al directorio actual

const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // application/x-www-form-urlencoded

app.get('/', (req, resp) => {
  resp.send('Hello World!')
});

// Middleware para vue.js router modo history
const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname, 'public')))

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
  console.log('Example app listening on port ' + app.get('port'))
});