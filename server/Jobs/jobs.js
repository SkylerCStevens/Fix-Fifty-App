const router = require("express").Router()
const Job = require("../../models/job.model");

router.get("/", (req,res) => {
    Job.find({}, (err, result) => {
        if(err) res.json(err);
        res.json(result)
    })
})

router.post("/new", (req,res) => {
    Job.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
})

router.put("/:id", (req, res) => {
    Job.update(req.body, {_id: req.params.id})
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
})

router.delete("/:id", (req, res) => {
    Job.remove({_id: req.params.id})
    .then(() => res.send("Deleted"))
    .catch(err => res.status(500).json(err))
})

module.exports = router;