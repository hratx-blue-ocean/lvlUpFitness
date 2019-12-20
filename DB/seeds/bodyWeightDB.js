const bodyWeightSchema = new mongoose.Schema ({
    muscleGroup: String,
    type: [
        { name: String, 
            amount: String,
            description : String,
            intensity: String,
            favorite: Boolean 
        }
    ]
});


const BodyWeight = mongoose.model('BodyWeight', bodyWeightSchema);

const fullBody = new BodyWeight({
    muscleGroup: 'Full body',
    type: [{
        name: 'Inchworm',
        amount: '4-6 reps, 3 sets',
        description: ['Stand up tall with legs straight, making sure your knees aren’t locked. Slowly lower', 
        'torso toward the floor, then walk hands forward. Once in a push-up position', 
        'start taking tiny steps so feet meet hands. '],
        intensity: 'Intermediate',
        favorite: false
        
    },
    {
        name: 'Tuck jump',
        amount: '8-10 reps, 2-4 sets',
        description: ['Stand with your knees slightly bent, then jump up as high as possible.', 
        'Bring knees in toward chest while extending arms straight out. Land with knees', 
        'slightly bent and quickly jump (on it) again!'],
        intensity: 'Beginner',
        favorite: false
    },
    {
        name: 'Bear crawl',
        amount: '8-10 reps, 1-3 sets',
        description: ['Embrace that inner grizzly. Starting on hands and knees, rise up onto your toes,', 
        ' tighten your core, and slowly reach forward with right arm and right knee, followed by the left', 
        ' side. Continue the crawl for 8–10 reps (or until you scare your roommates off).'],
        intensity: 'Intermediate',
        favorite: false
    },
    {
        name: 'Mountain Climber',
        amount: '15-20 reps, 2-4 sets',
        description: ['Start on your hands and knees. Bring left foot forward, directly under chest, while', 
        ' straightening right leg. Keeping hands on the floor and core tight, jump and switch legs. Your left',
        ' leg should now be extended behind you, with your right knee forward.'],
        intensity: 'Beginner',
        favorite: false
    },
{
   name: 'Plyometric push-up',
   amount: '10-12 reps, 1-3 sets',
   description: ['Ready to catch some air? Start on a well-padded surface and complete a traditional push-up.',
   ' In an explosive motion, push up hard enough to come off the floor (and hang ten for a second!). Once ',
   'back on solid ground, immediately head into the next repetition.'],
   intensity: 'Advanced',
   favorite: false
},
{
    name: 'Stair climb with biceps curl',
    amount: '1-3 flights, 1-2 sets',
    description: ['Turn those stairs into a cardio machine — no magic wand necessary. Grab some dumbbells',
    ' (or household objects) and briskly walk up and down the stairs while simultaneously doing biceps curls',
    ' to work the whole body.'],
    intensity: 'Intermediate',
    favorite: false
},
{
    name: 'Prone walkout',
    amount: '8-10 reps, 1-3 sets',
    description: ['Start on all fours with your core engaged. Slowly walk hands forward, staying on toes ',
    'but not moving them forward. Next, gradually walk hands backward to the starting position, maintaining ',
    'stability and balance.'],
    intensity: 'Intermediate',
    favorite: false
},
{
    name: 'Burpee',
    amount: '8-10 reps, 1-3 sets',
    description:['One of the most effective full-body exercises around, this one starts in a low squat ',
    'position with your hands on the floor. Next, kick your feet back to a push-up position.',
    'Complete one push-up, then immediately return your feet to the squat position. Leap up as high as ',
    'possible before squatting and moving back into the push-up portion of the show.'],
    intensity: 'Advanced',
    favorite: false
},
{
    name: 'Plank',
    amount: '30 seconds - 1 minute',
    description: ['Nope, we’re (thankfully) not walking the plank. Lie facedown with forearms on the floor ',
    'and hands clasped. Extend legs behind you and rise up on toes. Keeping back straight, tighten core and ',
    'hold the position for 30 to 60 seconds (or as long as you can hang).'],
    intensity: 'Beginner',
    favorite: false
},
{
    name: 'Plank to push-up',
    amount: '10-12 reps, 1-3 sets',
    description: ['Start in a plank position. Place one hand at a time on the floor to lift up into a push-up',
    ' position, with your back straight and core engaged. Move one arm at a time back into the plank position', 
    ' (forearms on the floor). Repeat, alternating the arm that makes the first move.'],
    intensity: 'Intermediate',
    favorite: false
}]
});

module.exports = bodyWeight;