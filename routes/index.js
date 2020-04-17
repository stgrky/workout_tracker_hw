const express = require("express");
const router = express.Router();
const db = require("../models");
const path = require("path")

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    res.redirect(301, '/api/workouts')
})

router.put("/api/workouts/:id", function (req, res) {
    const chosenid = req.params.id
    console.log(req.body)
    db.Workout.findByIdAndUpdate(
        chosenid, { $push: { exercises: req.body } }, { new: true }
    ).then(updatedWorkout => {
        console.log(updatedWorkout)
        res.json({ ok: true })
    }).catch(function (a, b, c) {
        console.log(a)
        res.json({ ok: false })
    })
})



router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

router.post("/api/workouts", function (req, res) {
    console.log(req.body);
    db.Workout.create(
        {
            exercises: [],
            day: Date.now(),
        }
    ).then(data => {
        res.json(data)
    }).catch(err => console.log(err))
})

module.exports = router