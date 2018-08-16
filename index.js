import express from 'express';
import {PORT} from './secret';
const app  = express();



require('./middleware')(app)

require('./database');

require('./route')(app)



app.listen(PORT, () => console.log(`listening to ${PORT}`))
