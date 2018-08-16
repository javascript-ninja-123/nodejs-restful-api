import dev from './dev';
import prod from './prod';
import {FP} from '../utils';

const CheckNodeEnv = () => process.env.NODE_ENV === 'production';

const either = FP.Either(CheckNodeEnv)


either('figuring out').fold(
  () => module.exports = dev,
  () => module.exports = prod
)
