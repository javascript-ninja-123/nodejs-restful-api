const router = require('express').Router();
import {register,getUsers,getUser,deleteUser} from '../controller';




router.post('/register', register);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.delete('/users/:id', deleteUser);

router.get('/', (req,res) => {
  res.send({message:'working on it'})
})


module.exports = router;
