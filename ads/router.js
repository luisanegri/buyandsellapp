const { Router } = require('express');
const Ad = require('./model');
const router = new Router();

router.post('/ad', (req, res, next) => {
  Ad.create(req.body)
    .then(ad => res.status(201).send(ad))
    .catch(next);
});

module.exports = router;
