const { Router } = require("express");
const Ad = require("./model");
const router = new Router();

router.post("/ad", (req, res, next) => {
  Ad.create(req.body)
    .then(ad => res.status(201).send(ad))
    .catch(next);
});

router.get("/ads", (req, res, next) => {
  Ad.findAll()
    .then(ad => res.status(201).send(ad))
    .catch(next);
});

router.get("/ad/:id", (req, res, next) => {
  Ad.findByPk(req.params.id)
    .then(ad => {
      if (!ad) {
        res.status(404).end();
      } else {
        res.status(201).json(ad);
      }
    })
    .catch(next);
});

router.put("/ad/:id", (req, res, next) => {
  Ad.findByPk(req.params.id)
    .then(ad => {
      if (ad) {
        ad.update(req.body).then(ad => res.status(201).send(ad));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

router.delete("/ad/:id", (req, res, next) => {
  Ad.destroy({ where: { id: req.params.id } })
    .then(numberOfAdsDeleted => {
      if (numberOfAdsDeleted === 0) {
        res.status(404).send({ ad: "ad not found" });
      } else {
        res.status(201).send({ message: "ad deleted successfully" });
      }
    })
    .catch(next);
});

module.exports = router;
