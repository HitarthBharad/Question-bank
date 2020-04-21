const router = require('express').Router();
let Questions = require('../models/question.models');

router.route('/').get((req, res) => {
  Questions.find()
    .then(quest => res.json(quest))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const s_id = req.body.s_id;
  const t_id = req.body.t_id;
  const question = req.body.question;
  const oa = req.body.oa;
  const ob= req.body.ob;
  const oc= req.body.oc;
  const od= req.body.od;
  const ans= req.body.ans;
  const newQuestions = new Questions({
    s_id,
    t_id,
    question,
    oa,
    ob,
    oc,
    od,
    ans
  });

  newQuestions.save()
  .then(() => res.json('Questions added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/edit/:id').post((req,res)=> {
  Questions.findById(req.params.id)
  .then(quest => {
    quest.s_id = req.body.s_id;
    quest.t_id = req.body.t_id;
    quest.question = req.body.question;
    quest.oa = req.body.oa;
    quest.ob = req.body.ob;
    quest.oc = req.body.oc;
    quest.od = req.body.od;
    quest.ans = req.body.ans;

    quest.save()
    .then(()=> res.json('Question Updated !!'))
    .catch(err=> res.status(400).json(err))
  })
})

router.route('/:id').get((req, res) => {
  Questions.findById(req.params.id)
    .then(quest => res.json(quest))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Questions.findByIdAndDelete(req.params.id)
    .then(() => res.json('Questions deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;