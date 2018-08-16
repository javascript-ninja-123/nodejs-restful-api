import router from 'express'.Router();
import {register} from '../controller';


router.post('/register', register);

router.get('/', (req,res) => {
  res.send({message:'working on it'})
})


module.exports = router;
