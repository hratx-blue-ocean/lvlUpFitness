const mongoose = require('mongoose');

const cardioSchema = new mongoose.Schema({
    muscleGroup: String,
    type: [{
        name: String,
        duration: String,
        description: String,
        intensity: String,
        favorite: Boolean
    }]
});

const exercises  = mongoose.model('exercise', cardioSchema);

const jumpRope = new Exercise({
    muscleGroup: 'Cardiovascular',
    type: [{
        name: 'Jump Rope',
        duration: '15 to 25 min',
        description: 'Start by joggin forward as you swing the jump rope over your head and under your feet. Do this move for 15 seconds.Next, reverse your direction and jog backward as you continue to swing the jump rope. Do this move for 15 seconds. Finish your set by doing a hopscotch jump for 15 seconds.To do this move, jump rope in place, and as you jump, alternate between jumping your feet out to the sides and then back to the center, similar to how you’d move them while doing jumping jacks.Do this move for 15 seconds. Rest for 15 seconds between sets.  Repeat 18 times.',
        intensity: 'Beginner',
        favorite: false
    }]
});

const slowRun = new Exercise({
    muscleGroup: 'Cardiovascular',
    type: [{
        name: 'Slow run',
        duration: ' 20 to 30 min',
        description: ' Your pace should be conversational during the run. You can alternate between 5 minutes of running and 1 minute of walking to start. To stay injury-free, always stretch after your run.',
        intensity: 'Beginner',
        favorite: true
    }]
});

const walk = new Exercise({
    muscleGroup: 'Cardiovascular',
    type: [{
        name: 'Walk',
        duration: '30 min ',
        description: 'This can be broken down into 30 minutes of walking 5 days a week. Or, walk briskly for 10 minutes at a time, 3 times each day.',
        intensity: 'Beginner',
        favorite: false
    }]
});

const beginInterval = new Exercise({
    muscleGroup: 'Cardiovascular',
    type: [{
        name: 'Interval Training',
        duration: '21 min',
        description: 'For each work set, use the settings on your machine (incline, speed, resistance, ramps, etc.) to increase intensity. For each rest set, lower those same settings, or slow down/go downhill. Modify the speed and intensity according to your fitness level. ',
        intensity: 'Beginner',
        favorite: false
    }]
});

const beginCycling = new Exercise({
    muscleGroup: 'Cardiovascular',
    type: [{
        name: 'Stationary Bike',
        duration: '30-45 min',
        description: 'After stretching and warming up by cycling at an easy rhythm for 5 to 10 minutes, increase your pace to 15 miles per hour and aim for 20 to 30 minutes of steady cycling. Cool down for 5 minutes. Stretch to finish.',
        intensity: 'Beginner',
        favorite: true
    }]
});

