const router = require('express').Router();
let User = require('../models/user.models');

router.route('/').get((req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const logged = false;
  const newCourse = new User({
    username,
    password,
    logged
  });

  newCourse.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/check/:id').post((res,req)=>{
    User.findById( req.params.id)
    .then(user => {
        user.username = req.body.username
        user.password = req.body.password
        user.logged = true

        user.save()
        .then(()=> res.json(`Logged: ${logged}`))
        .catch(err=> res.json(err))
    })
    .catch(err=> res.json(err))

})


router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;