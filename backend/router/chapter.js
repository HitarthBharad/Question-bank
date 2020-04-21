const router = require('express').Router();
let Chapter = require('../models/chapter.models');

router.route('/').get((req, res) => {
  Chapter.find()
    .then(Chapters => res.json(Chapters))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const s_id = req.body.s_id;
  const topic = req.body.topic;
  const newChapter = new Chapter({
    s_id,
    topic
  });

  newChapter.save()
  .then(() => res.json('Chapter added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Chapter.find({s_id: req.params.id})
    .then(Chapters => res.json(Chapters))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
