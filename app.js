
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'

const app = express()

// Middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // application/x-www-form-urlencoded

// Routes
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
