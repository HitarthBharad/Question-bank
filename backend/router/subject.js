const router = require('express').Router();
let Course = require('../models/suject.models');

router.route('/').get((req, res) => {
  Course.find()
    .then(Courses => res.json(Courses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;

  const newCourse = new Course({
    name,
  });

  newCourse.save()
  .then(() => res.json('Course added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  Course.findById(req.params.id)
    .then(Course => res.json(Course))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Course.findByIdAndDelete(req.params.id)
    .then(() => res.json('Course deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;