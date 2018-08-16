import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';


module.exports = app => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'))
  app.use(helmet())
}
