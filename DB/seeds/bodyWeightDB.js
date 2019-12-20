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

const bwFullBody = new BodyWeight({
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

const bwLegs = new BodyWeight({
    muscleGroup: 'Legs',
    type: [{
        name: 'Wall sit',
        amount: '45-60 seconds, 1-3 sets',
        description: ['Who needs a chair when there’s a wall? Slowly slide your back down a wall until your', 
        'thighs are parallel to the floor. Make sure knees are directly above ankles and keep back straight.',
        ' Go for 60 seconds per set (or however long it takes to turn those legs to jelly). Need more fire?', 
        'Add some biceps curls.'],
        intensity: 'Beginner',
        favorite: false
    },
    {
        name: 'Lunge',
        amount: '20 meters, 2 sets',
        description: ['Stand with hands on hips and feet hip-width apart. Step your right leg forward and ',
        'slowly lower your body until left (back) knee is close to or touching the floor and bent at least 90',
         'degrees. Return to the starting position and repeat on the other side. For a variation, try ',
         'stepping backward into the lunge.'],
         intensity: 'Beginner',
         favorite: false
    },
    {
        name: 'Clock lunge',
        amount: '10-12 reps, per leg',
        description: ['Time for a challenge. Complete a traditional forward lunge, then take a big step ',
        'to the right and lunge again. Finish off the semicircle with a backward lunge, then return to ',
        'standing. And all that’s 1 rep! Aim for 10 reps, then switch legs.'],
        intensity: 'Intermediate',
        favorite: false
    }, 
    {
        name: 'Lunge to row',
        amount: '10-12 reps, 2 sets',
        description: ['Start by doing a normal lunge. Instead of bringing that forward leg back to the ',
        'starting position, raise it off the floor while lifting your arms overhead. The leg should remain ',
        'bent at about 90 degrees. Add weights to really bring the heat.'],
        intensity: 'Intermediate',
        favorite: false
    }, 
    {
        name: 'Pistol squat',
        amount: '8-10 reps, per leg',
        description: ['There may be no gun permit necessary for this one, but it’s still no joke.', 
        'Stand holding your arms straight out in front of your body. Raise right leg, flexing right ankle ',
        'and pushing hips back. Lower your body while keeping right leg raised. Hold (have fun with that), ',
        'then return to standing.'],
        intensity: 'Advanced',
        favorite: false
    }, 
    {
        name: 'Lunge Jump',
        amount: '8-10 reps, once each side',
        description: ['Ready to impress some friends? Stand with feet together and lunge forward with right ',
        'foot. Jump straight up, propelling arms forward while keeping elbows bent. While in the air, switch ',
        'legs and land in a lunge with the opposite leg forward. Repeat and continue switching legs. Try to do ',
        '10!'],
        intensity: 'Advanced',
        favorite: false
    }, 
    {
        name:'Curtsy lunge',
        amount: '8-12 reps, 2 sets',
        description: ['Let’s show a little respect. When lunging, step left leg back behind right leg, ',
        'bending knees and lowering hips until right thigh is almost parallel to the floor. Remember to keep ',
        'your torso upright and your hips square.'],
        intensity: 'Intermediate',
        favorite: false
    }, 
    {
        name: 'Squat',
        amount: '10-12 reps, 2-3 sets',
        description: ['Stand with feet parallel or turned out 15 degrees — whatever is most comfortable. ',
        'Slowly start to crouch by bending hips and knees until thighs are at least parallel to the floor.',
        ' Make sure your heels do not rise off the floor. Press through your heels to return to a standing ',
        'position.'],
        intensity: 'Beginner',
        favorite: false
    }, 
    {
        name: 'Single-leg deadlift',
        amount: '6-8, 2 sets',
        description: ['Start in a standing position with feet together. Lift right leg slightly. Lower arms ',
        'and torso while raising right leg behind you. Keep left knee slightly bent and reach arms as close ',
        'to the floor as possible. Raise torso while lowering right leg. Switch legs.'],
        intensity: 'Advanced',
        favorite: false
    }, 
    {
        name: 'Squat reach and jump',
        amount: '15-20 reps, 2-3 sets',
        description: ['Ready to add some pizzazz (and cardio!) to that squat? Perform a normal squat, but ',
        'immediately jump up, reaching your arms straight overhead. Aim for 15 reps, then take a quick ',
        'breather before the next set.'],
        intensity: 'Advanced',
        favorite: false
    }, 
    {
        name: 'Chair Pose squat',
        amount: '10-12 reps, 2-3 sets',
        description: ['Stand with feet hip-width apart and squat until thighs are parallel to the floor while',
        ' swinging arms up. Straighten legs, then lift right knee while swinging left arm outside right knee. ',
        'Return to standing and repeat on the other side.'],
        intensity: 'Intermediate',
        favorite: false
    }, 
    {
        name: 'Quadruped leg lift',
        amount: '10 seconds each leg, 3 sets',
        description: ['Start on hands and knees, with back flat and core engaged. Raise left leg straight ',
        'back, stopping when foot is at hip level and thigh is parallel to the floor. Balance for as long as ',
        'possible, then raise your bottom right toe off the floor, tightening butt, back, and abs — try to be ',
        'graceful here! Hold for up to 10 seconds, then switch legs.'],
        intensity: 'Intermediate',
        favorite: false
    }, 
    {
        name: 'Step-up',
        amount: '10-12 reps, each side',
        description: ['Find a step or bench. Place right foot on the elevated surface. Step up until right', 
        'leg is straight, then return to the starting position. Repeat, aiming for 10–12 reps on each side.'],
        intensity: 'Intermediate',
        favorite: false
    }, 
    {
        name: 'Calf raise',
        amount: '15-20 reps, 2-3 sets',
        description: ['From a standing position, slowly rise up on your toes, keeping knees straight and ',
        'heels off the floor. Hold briefly, then come back down. Aaaand repeat. Try standing on something ',
        'elevated (like a step) to achieve a wider range of motion.'],
        intensity: 'Beginner',
        favorite: false
    }]
});

const chest = new BodyWeight({
    muscleGroup: 'Chest',
    type: [{
        name: 'Standard push-up',
        amount: '15-20 reps, 2-3 sets',
        description: ['There’s a reason this one’s a classic. With hands shoulder-width apart, keep feet ',
        'flexed at hip distance and tighten your core. Bend elbows until chest reaches the floor, then push ',
        'back up. Make sure to keep your elbows tucked close to your body. That’s one!'],
        intensity: 'Beginner',
        favorite: false
    }, 
    {
        name: 'Dolphin push-up',
        amount: '8-10 reps, 2 sets',
        description: ['Start out in Dolphin Pose (think Downward-Facing Dog Pose with elbows on the floor). ',
        'Lean forward, lowering shoulders until head is over hands. Push up with your arms and return to the ',
        'starting position. No ocean necessary.'],
        intensity: 'Advanced',
        favorite: false
    }, 
    {
        name: 'Handstand push-up',
        amount: '4-6 reps, 2-3 sets',
        description: ['Fair warning: This move is for the pros. Get set in a handstand position against a ',
        'wall. Bend your elbows at a 90-degree angle, doing an upside-down push-up so your head moves toward ',
        'the floor and your legs remain against the wall. First-timer? Grab a friend to spot you — safety ',
        'first!'],
        intensity: 'Advanced',
        favorite: false
    }, 
    {
        name: 'Judo push-up',
        amount: '30-60 seconds, 2 sets',
        description: ['From a push-up position, raise those hips and in one swift movement — hai-yah! — use ',
        'your arms to lower the front of your body until your chin comes close to the floor. Swoop head and ',
        'shoulders upward and lower hips, keeping knees off the floor. Reverse the move to come back to the ',
        'raised-hip position. Try to repeat for 30 to 60 seconds.'],
        intensity: 'Intermediate',
        favorite: false
    }, 
    {
        name: 'Reverse fly',
        amount: '15-20 reps, 2-3 sets',
        description: ['For DIY dumbbells, grab two cans or bottles of water. Stand up straight, with one foot ',
        'in front of the other and your front knee slightly bent. With palms facing each other and abs ',
        'engaged, bend forward slightly from your waist and extend arms out to the sides, squeezing shoulder ',
        'blades. Repeat.'],
        intensity: 'Beginner',
        favorite: false
    }]
});

const bwBack = new BodyWeight({
    muscleGroup: 'Back',
    type: [{
        name: 'Contralateral limb raise',
        amount: '10-12 reps, 2 sets',
        description: ['Sounds fancy, huh? Here’s the breakdown: Lie facedown with arms outstretched and palms ',
        'facing each other. Slowly lift one arm a few inches off the floor, keeping it straight without ',
        'rotating your shoulders and keeping head and torso still. Hold the position, then lower your arm ',
        'back down. Repeat on the other side. For an extra challenge, lift the opposite leg a few inches off ',
        'the floor at the same time.'],
        intensity: 'Beginner',
        favorite: false
        }, 
        {
            name: 'Donkey kick',
            amount: '10-12 reps, 2-3 sets',
            description: ['It’s time to embrace that wild side. Start in a push-up position with your legs ',
            'together. Tighten core and kick both legs into the air with knees bent, reaching feet back ',
            'toward glutes. Try to land gently when returning to the starting position.'],
            intensity: 'Intermediate',
            favorite: false
        }, 
        {
            name: 'Superman',
            amount: '8-10 reps, 2-3 sets',
            description: ['Want some superpowers? Lie facedown with arms and legs extended. Keeping the torso ',
            'as still as possible, simultaneously raise your arms and legs to form a small curve in your ',
            'body. Cape optional.'],
            intensity: 'Advanced',
            favorite: false
        }]
});

const bwArms = new BodyWeight({
    muscleGroup: 'Arms',
    type: [{
        name: 'Tricep dip',
        amount: '8-10 reps, 2 sets',
        description: ['Sit on the floor near a step or bench, with knees slightly bent. Grab the edge of the',
        ' elevated surface and straighten your arms. Bend your arms to a 90-degree angle and straighten again',
        ' while your heels push into the floor. For some extra fire, reach right arm out while lifting left leg.'],
        intensity: 'Beginner',
        favorite: false
    }, 
    {
        name: 'Diamond Push-up',
        amount: '6-10 reps, 2-3 sets',
        description: ['Rhianna would approve of this one! Get into a push-up position with diamond-shaped ',
        'hands, so that your thumbs and index fingers touch. Then do push-ups! This hand position will give ',
        'those triceps some extra (burning) love.'],
        intensity: 'Advanced',
        favorite: false
    }, 
    {
        name: 'Boxer',
        amount: '15-20 reps, 2-3 sets',
        description: ['Time to make Muhammad Ali proud. Stand with feet hip-width apart and knees bent. Bend ',
        'forward until your torso is almost parallel to the floor. Keep your elbows in and extend one arm ',
        'forward and the other arm back. Hug your arms back in and switch arms like you’re in the ring!'],
        intensity: 'Intermediate',
        favorite: false
    }, 
    {
        name: 'Arm Circles',
        amount: '20-30 seconds, 2-3 sets',
        description: ['Remember PE class? Stand with arms extended by your sides, perpendicular to your ',
        'torso. Slowly make clockwise circles about 1 foot in diameter for 20 to 30 seconds. Then reverse the',
        ' movement, going counterclockwise.'],
        intensity: 'Beginner',
        favorite: false
    }]
});

const bwShoulders = new BodyWeight({
    muscleGroup: 'Shoulders',
    type: [{
        name: 'Shoulder stabilization series',
        amount: '2 sets',
        description: ['(I-Y-T-W-O) OK, it may look ridiculous, but stay with us. Lie facedown with arms ',
        'extended overhead and palms facing each other. Move your arms into each letter formation. ',
        'Gimme a Y — you know you want to!'],
        intensity: 'Intermediate',
        favorite: false
    }, 
    {
        name: 'Incline push-up',
        amount: '10-12 reps, 3-4 sets',
        description: ['Having your upper body higher than your lower body in this movement is going to ',
        'recruit more of the anterior deltoid. Make sure that your core is engaged and your hips, shoulders ',
        'and feet are in one line (as in a regular push-up). You want the edge of whatever surface you’re doing',
        ' this exercise on to come right underneath your chest.'],
        intensity: 'Intermediate',
        favorite: false
    }, 
    {
        name: 'Pike push-up',
        amount: '10-12 reps, 3-4 sets',
        description: ['This exercise is a step on your way to mastering a handstand push-up and is great for ',
        'the anterior as well as the medial deltoids. Make sure that you look at your legs (not your hands) ',
        'while keeping your spine neutral and the crown of your head pointing towards the ground.'],
        intensity: 'Intermediate',
        favorite: false
    }]
});

const bwCore = new BodyWeight({
    muscleGroup: 'Core',
    type: [{
        name: '',
        amount: '',
        description: [''],
        intensity: '',
        favorite: false
    }, 
    {
        name: '',
        amount: '',
        description: [''],
        intensity: '',
        favorite: false
    }, 
    {
        name: '',
        amount: '',
        description: [''],
        intensity: '',
        favorite: false
    }, 
    {
        name: '',
        amount: '',
        description: [''],
        intensity: '',
        favorite: false
    }, 
    {
        name: '',
        amount: '',
        description: [''],
        intensity: '',
        favorite: false
    }, 
    {
        name: '',
        amount: '',
        description: [''],
        intensity: '',
        favorite: false
    }, 
    {
        name: '',
        amount: '',
        description: [''],
        intensity: '',
        favorite: false
    }, 
    {
        name: '',
        amount: '',
        description: [''],
        intensity: '',
        favorite: false
    }, 
    {
        name: '',
        amount: '',
        description: [''],
        intensity: '',
        favorite: false
    }, 
    {
        name: '',
        amount: '',
        description: [''],
        intensity: '',
        favorite: false
    }, 
    {
        name: '',
        amount: '',
        description: [''],
        intensity: '',
        favorite: false
    }, 
    {
        name: '',
        amount: '',
        description: [''],
        intensity: '',
        favorite: false
    }, 
    {
        name: '',
        amount: '',
        description: [''],
        intensity: '',
        favorite: false
    }]
});

module.exports = bodyWeight;