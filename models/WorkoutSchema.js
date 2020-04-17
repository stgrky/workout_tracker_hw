const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
  },

  exercises: [{
    type: {type: String},
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number,
  }],
  


}, {toJSON:{virtuals:true}});

WorkoutSchema.virtual ('totalDuration').get(function() {
  return this.exercises.reduce((acc, curr)=>{
    return acc + current.duration
  }, 0)
})

const User = mongoose.model("User", WorkoutSchema);

module.exports = User;
