const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            required: true,
            default: Date.now 
        },
        exercises: [{
            type: {
                type: String,
                required: "Enter exercise here"
            },
            name: {
                type: String,
                required: "Enter exercise name"
            },
            duration: {
                type: Number,
                required: "Enter the duration of the exercise"
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
                required: "Enter the number of reps performed"
            },
            sets: {
                type: Number,
                required: "Enter the number of sets performed"
            },
            distance: {
                type: Number
            }
        }]
    }
);

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;