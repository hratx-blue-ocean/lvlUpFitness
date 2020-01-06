const mongoose = require('mongoose');

const FreeWeightSchema = new mongoose.Schema ({
    muscleGroup: String,
    type: [
        { name: String, 
            amount: String,
            description : [String],
            intensity: String,
            favorite: Boolean 
        }
    ]
});


const FreeWeight = mongoose.model('FreeWeight', FreeWeightSchema);

const fwChest = new FreeWeight({
    muscleGroup: 'chest',
    type: [{
        name: "Barbell Bench Press",
        amount: "8-10 reps 2-4 sets",
        description: ["Lie supine (on your back) on a flat bench. Spread your legs, bring your feet back, and place them firmly on the ground. Either your toes or your heels should be planted on the floor. Arch your back. Dismount the barbell using a grip that is a little over shoulder-width apart. While holding the barbell, retract (push together) your shoulder blades and straighten your wrists. Inhale as you lower the barbell to your chest, keeping your elbows tucked in at a 45-degree angle. Exhale as you press the barbell back up to the starting position. Repeat."],
        intensity: "Intermediate",
        favorite: false,
        },
        {
        name: "Incline Barbell Bench Press",
        amount: "8-10 reps 2-4 sets",
        description: ["Set an adjustable bench to a 30- to 45-degree angle and lie back on it with a dumbbell in each hand at shoulder level. Then arch your back, drive your feet into the floor, and press the weights over your chest."],
        intensity: "Intermediate",
        favorite: false,
        },
        {
        name: "Dumbbell Bench Press",
        amount: "8-10 reps 2-4 sets",
        description: ["Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the bench. To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, and press the dumbbells to lockout at the top. Slowly lower the dumbbells under control as far as comfortably possible (the handles should be about level with your chest). Contract the chest and push the dumbbells back up to the starting position. Repeat for the desired number of repetitions."],
        intensity: "Beginner",
        favorite: false,
        },
        {
        name: 'Incline Dumbbell Bench Press',
        amount: "8-10 reps 2-4 sets",
        description: ["Set an adjustable bench to an incline of 30-45 degrees. Lie on your back on the bench and hold a pair of dumbbells directly above your shoulders with your arms fully extended. Pull your shoulder blades together, and slightly stick out your chest. Lower both dumbbells to the sides of your chest. Pause, and then press the dumbbells back to the starting position."],
        intensity: "Beginner",
        favorite: false,
        },
        {
        name: "Weighted Dips for Chest",
        amount: "8-10 reps 2-4 sets",
        description: ["Start by wrapping your dip belt around your waist, chain side in front. Take the chain end with the carabiner on it and drop it through the belt loop so the belt can tighten. Attach your weight plate to the dropped side before looping it around, and clip it back to the other side of your belt. Mount the dip bar facing outward. Hold onto the bars as you hold your body at arm’s length — arms and elbows straight and locked. Keep your head in line with your trunk, wrists in line with your forearms. Inhale as you slowly start to lower your body. Let your torso move slightly forward and your elbows to flare out to the side. Once you feel a stretch in your chest, breathe out and start to push yourself slowly back up to the starting position. Repeat the movement."],
        intensity: "Beginner",
        favorite: false,
        },
        {
        name: "Decline Bench Press",
        amount: "8-10 reps 2-4 sets",
        description: ["Secure your legs at the end of the decline bench and slowly lay down on the bench. Using a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack. As you breathe in, come down slowly until you feel the bar on your lower chest. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions. When you are done, place the bar back in the rack."],
        intensity: "Beginner",
        favorite: false,
    }]
});

const fwBack = new FreeWeight({
    muscleGroup: "Back",
    type: [
        {
        name: "Barbell Deadlift",
        amount: "8-12 reps",
        description: ["Stand with your mid-foot under the barbell. Bend over and grab the bar with a shoulder-width grip. Bend your knees until your shins touch the bar. Lift your chest up and straighten your lower back. Take a big breath, hold it, and stand up with the weight."],
        intensity: "Intermediate",
        favorite: false 
    },
        {
        name: "Bent-Over Barbell Row",
        amount: "10-15 reps 4 sets",
        description: ["Holding a barbell with a pronated grip (palms facing down), bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The barbell should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position. Now, while keeping the torso stationary, breathe out and lift the barbell to you. Keep the elbows close to the body and only use the forearms to hold the weight. At the top contracted position, squeeze the back muscles and hold for a brief pause. Then inhale and slowly lower the barbell back to the starting position. Repeat for the recommended amount of repetitions."],
        intensity: "Beginner",
        favorite: false 
    },
        {
        name: "Weighted Pull-ups",
        amount: "4 reps 5 sets",
        description: ["Attach a weight to a dip belt and secure it around your waist. Grab the pull-up bar with the palms of your hands facing forward. For a medium grip, your hands should be spaced at shoulder width. Both arms should be extended in front of you holding the bar at the chosen grip. You'll want to bring your torso back about 30 degrees while creating a curvature in your lower back and sticking your chest out. This will be your starting position. Now, exhale and pull your torso up until your head is above your hands. Concentrate on squeezing your shoulder blades back and down as you reach the top contracted position. After a brief moment at the top contracted position, inhale and slowly lower your torso back to the starting position with your arms extended and your lats fully stretched."],
        intensity: "Intermediate",
        favorite: false 
    },
        {
        name: "Wide-Grip Pull-up",
        amount: "5 reps 4 sets",
        description: ["Take a wide grip on a pull-up bar, hanging freely with your arms extended. This will be your starting position. Pull yourself up by flexing the elbows and adducting the glenohumeral joint. Do not swing or use momentum to complete the movement. Attempt to get your chin above your hands. Pause at the top of the motion before lowering yourself to the starting position."],
        intensity: "Intermediate",
        favorite: false 
    },
        {
        name: "Standing T-Bar Row",
        amount: "5-10 reps 3-6 sets",
        description: ["Position a bar into a landmine or in a corner to keep it from moving. Load an appropriate weight onto your end. Stand over the bar, and position a Double D row handle around the bar next to the collar. Using your hips and legs, rise to a standing position. Assume a wide stance with your hips back and your chest up. Your arms should be extended. This will be your starting position. Pull the weight to your upper abdomen by retracting the shoulder blades and flexing the elbows. Do not jerk the weight or cheat during the movement. After a brief pause, return to the starting position."],
        intensity: "Beginner",
        favorite: false 
    },
        {
        name: "Wide-Grip Pulldown",
        amount: "10-15 reps 2-4 sets",
        description: ["Attach a wide grip handle to the lat pull down machine and assume a seated position. Grasp the handle with a pronated grip (double overhand) as wide as possible. Initiate the movement by depressing the shoulder blade and then flexing the elbow while extending the shoulder. Pull the handle towards your body until the elbows are in line with your torso and then slowly lower the handle back to the starting position under control. Repeat for the desired number of repetitions."],
        intensity: "Beginner",
        favorite: false 
    },
        {
        name: "Close-Grip Pulldown",
        amount: "10-15 reps 2-4 sets",
        description: ["Attach a wide grip handle to the lat pulldown machine and assume a seated position. Grasp the handle with a pronated grip (double underhand) at shoulder width. Initiate the movement by depressing the shoulder blades and then flexing the elbow while extending the shoulder. Pull the handle towards your body until the elbows are in line with your torso and then slowly lower the handle back to the starting position under control. Repeat for the desired number of repetitions."],
        intensity: "Beginner",
        favorite: false 
    },
        {
        name: "Seated Cable Row",
        amount: "10-15 reps 2-4 sets",
        description: ["Set the appropriate weight on the weight stack and attach a close grip bar or V-bar to the seated row machine. Grasp the bar with a neutral grip (palms facing in). Keeping your legs slightly bent and your back straight, pull the weight up slightly off the stack. You should be sitting straight upright with your shoulders back. This is the starting position. Keeping your body in position, pull the handle into your stomach. Pull your shoulder blades back, squeeze, pause, and then slowly lower the weight back to the starting position. Repeat for desired reps."],
        intensity: "Beginner",
        favorite: false 
    }
]
})

const fwAbs = new FreeWeight({
    muscleGroup: "Abs",
    type: [
        {
            name: "Cable Crunch",
            amount: "12-15 reps 3-4 sets",
            description: ["Kneel below a high pulley that contains a rope attachment. Grasp cable rope attachment and lower the rope until your hands are placed next to your face. Flex your hips slightly and allow the weight to hyperextend the lower back. This will be your starting position. With the hips stationary, flex the waist as you contract the abs so that the elbows travel towards the middle of the thighs. Exhale as you perform this portion of the movement and hold the contraction for a second. Slowly return to the starting position as you inhale. Tip: Make sure that you keep constant tension on the abs throughout the movement. Also, do not choose a weight so heavy that the lower back handles the brunt of the work. Repeat for the recommended amount of repetitions."],
            intensity: "Beginner",
            favorite: false,
        },
        {
            name: "Hanging Dumbbell Knee Raise",
            amount: "10-15 reps 2-4 sets",
            description: ["Place an ankle weight on each of your ankles or squeeze a dumbbell in between your feet. Grab a chin-up bar with an overhand grip and let your legs dangle. This is your starting position. Bend your knees and bring your legs and weight up towards stomach. Hold and then return legs and weight to starting position."],
            intensity: "Advanced",
            favorite: false,
        },
        {
            name: "Landmine",
            amount: "8-10 reps 2-4 sets",
            description: ["Position a bar into a landmine or securely anchor it in a corner. Load the bar to an appropriate weight. Raise the bar from the floor, taking it to shoulder height with both hands with your arms extended in front of you. Adopt a wide stance. This will be your starting position. Perform the movement by rotating the trunk and hips as you swing the weight all the way down to one side. Keep your arms extended throughout the exercise. Reverse the motion to swing the weight all the way to the opposite side. Continue alternating the movement until the set is complete."],
            intensity: "Beginner",
            favorite: false,
        },
        {
            name: "Captain’s Chair Leg Raise",
            amount: "10-15 reps 2-4 sets",
            description: ["Stand on the chair and grip handholds to stabilize your upper body. Press your back against the pad and contract the abs to raise the legs and lift knees towards your chest. Don’t arch the back or swing the legs up. bring your legs close to your abdominals. Do not swing your legs or arch your back. Breathe out as you rise. Keep abdominals contracted throughout movement. Slowly lower your legs back in a downward motion. Do not allow your legs to “crash” back down. Descend until your legs are completely retracted and repeat reps."],
            intensity: "Intermediate",
            favorite: false,
        },
        {
            name: "Ab-Wheel Rollout",
            amount: "8-10 reps 2-4 sets",
            description: ["Hold the Ab Roller with both hands and kneel on the floor. Now place the ab roller on the floor in front of you so that you are on all your hands and knees (as in a kneeling push up position). This will be your starting position. Slowly roll the ab roller straight forward, stretching your body into a straight position. Tip: Go down as far as you can without touching the floor with your body. Breathe in during this portion of the movement. After a pause at the stretched position, start pulling yourself back to the starting position as you breathe out. Tip: Go slowly and keep your abs tight at all times."],
            intensity: "Intermediate",
            favorite: false,
        },
        {
            name: "Plank",
            amount: "30 seconds - 1 minute",
            description: ["Get in the pushup position, only put your forearms on the ground instead of your hands. Your elbows should line up directly underneath your shoulders. Toes on the ground. Squeeze your glutes and tighten your abdominals. Keep a neutral neck and spine. Create a straight, strong line from head to toes – a plank, if you will. Hold that position."],
            intensity: "Beginner",
            favorite: false,
        },
        {
            name: "Weighted Decline Sit-up",
            amount: "8-10 reps 2-4 sets",
            description: ["Sit on decline bench with weight in your lap. As you lower yourself backwards lock your arms out and raise the weight over your body. Touch your back to the bench and then using your abs lift your body back to starting position. As you sit-up keep the weight and your arms pointed to the ceiling."],
            intensity: "Intermediate",
            favorite: false,
        },
        {
            name: "Bicycle",
            amount: "10-15 reps 2-4 sets",
            description: ["Lie on your back with your knees bent and feet flat on the floor. Place your hands behind head. Raise your shoulder blades off the ground and lift your legs off the floor and bend knees are to 90 degrees. Then slowly pedal them in the air, alternating as if riding a bicycle."],
            intensity: "Beginner",
            favorite: false,
        },
        {
            name: "Flag",
            amount: "5-8 reps 3 sets",
            description: ["Lie on your back and reach your arms behind you to hold onto a sturdy pole, column, or bench. Lift up your hips as your roll your weight onto your shoulders. Lift your feet, legs, and torso to come in one straight line. Bring your body in a straight line so that your shoulders, hips, and knees are aligned. Don’t put the weight of your body on your neck. Keep the weight on your shoulders and upper back. Your upper back is the only part of your body that should be in contact with the floor. Hold here for up to 10 seconds. Slowly lower your body back down to the floor until it’s parallel to the floor, keeping your core and buttocks tight. Make sure you’re keeping your legs together and straight. For a challenge, you can hold your body just above the ground and hold this position before lifting up again."],
            intensity: "Advanced",
            favorite: false,
        }
    ]
})

const fwShoulder = new FreeWeight({
    muscleGroup: "Shoulders",
    type: [
        {
            name: "Standing Barbell Overhead Press",
            amount: "5-8 reps 2-4 sets",
            description: ["Start by placing a barbell that is about chest high on a squat rack. Once you have selected the weights, grab the barbell using a pronated (palms facing forward) grip. Make sure to grip the bar wider than shoulder width apart from each other. Slightly bend the knees and place the barbell on your collar bone. Lift the barbell up keeping it lying on your chest. Take a step back and position your feet shoulder width apart from each other. Once you pick up the barbell with the correct grip length, lift the bar up over your head by locking your arms. Hold at about shoulder level and slightly in front of your head. This is your starting position. Lower the bar down to the collarbone slowly as you inhale. Lift the bar back up to the starting position as you exhale. Repeat for the recommended amount of repetitions."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Seated Dumbbell Overhead Press",
            amount: "5-8 reps 2-4 sets",
            description: ["Sit on a Military Press Bench with a bar behind your head and either have a spotter give you the bar (better on the rotator cuff this way) or pick it up yourself carefully with a pronated grip (palms facing forward). Tip: Your grip should be wider than shoulder width and it should create a 90-degree angle between the forearm and the upper arm as the barbell goes down. Once you pick up the barbell with the correct grip length, lift the bar up over your head by locking your arms. Hold at about shoulder level and slightly in front of your head. This is your starting position. Lower the bar down to the collarbone slowly as you inhale. Lift the bar back up to the starting position as you exhale. Repeat for the recommended amount of repetitions."],
            intensity: "intermediate",
            favorite: false
        },
        {
            name: "Arnold Shoulder Press",
            amount: "5-8 reps 2-4 sets",
            description: ["Sit on an exercise bench with back support and hold two dumbbells in front of you at about upper chest level with your palms facing your body and your elbows bent. Tip: Your arms should be next to your torso. The starting position should look like the contracted portion of a dumbbell curl. Now to perform the movement, raise the dumbbells as you rotate the palms of your hands until they are facing forward. Continue lifting the dumbbells until your arms are extended above you in straight arm position. Breathe out as you perform this portion of the movement. After a second pause at the top, begin to lower the dumbbells to the original position by rotating the palms of your hands towards you. Tip: The left arm will be rotated in a counter clockwise manner while the right one will be rotated clockwise. Breathe in as you perform this portion of the movement. Repeat for the recommended amount of repetitions."],
            intensity: "Intermediate",
            favorite: false
        },
        {
            name: "Bent-Over Reverse Fly",
            amount: "8-10 reps 2-4 sets",
            description: ["Select the desired weight from the rack then take a few steps back into an open area. Hinge from the hips until your body is almost parallel to the floor and allow the arms to hang straight down from the shoulders with a neutral grip. Take a deep breath and pull the dumbbells towards the ceiling using the rear deltoids. Slowly lower the dumbbells back to the starting position under control. Repeat for the desired number of repetitions."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Lateral Raise",
            amount: "8-10 reps 2-4 sets",
            description: ["Pick a couple of dumbbells and stand with a straight torso and the dumbbells by your side at arms length with the palms of the hand facing you. This will be your starting position. While maintaining the torso in a stationary position (no swinging), lift the dumbbells to your side with a slight bend on the elbow and the hands slightly tilted forward as if pouring water in a glass. Continue to go up until you arms are parallel to the floor. Exhale as you execute this movement and pause for a second at the top. Lower the dumbbells back down slowly to the starting position as you inhale. Repeat for the recommended amount of repetitions."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Front Dumbbell Raise",
            amount: "8-10 reps 2-4 sets",
            description: ["Pick a couple of dumbbells and stand with a straight torso and the dumbbells on front of your thighs at arms length with the palms of the hand facing your thighs. This will be your starting position. While maintaining the torso stationary (no swinging), lift the left dumbbell to the front with a slight bend on the elbow and the palms of the hands always facing down. Continue to go up until you arm is slightly above parallel to the floor. Exhale as you execute this portion of the movement and pause for a second at the top. Inhale after the second pause. Now lower the dumbbell back down slowly to the starting position as you simultaneously lift the right dumbbell. Continue alternating in this fashion until all of the recommended amount of repetitions have been performed for each arm."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Handstand Push-ups",
            amount: "5-8 reps 2-3 sets",
            description: ["With your back to the wall bend at the waist and place both hands on the floor at shoulder width. Kick yourself up against the wall with your arms straight. Your body should be upside down with the arms and legs fully extended. Keep your whole body as straight as possible. Tip: If doing this for the first time, have a spotter help you. Also, make sure that you keep facing the wall with your head, rather than looking down. Slowly lower yourself to the ground as you inhale until your head almost touches the floor. Tip: It is of utmost importance that you come down slow in order to avoid head injury. Push yourself back up slowly as you exhale until your elbows are nearly locked. Repeat for the recommended amount of repetitions."],
            intensity: "Advanced",
            favorite: false
        }
    ]
})

const fwLegs = new FreeWeight({
    muscleGroup: "Legs",
    type: [
        {
            name: "Barbell Squat",
            amount: "8-10 reps 2-4 sets",
            description: ["Begin with the barbell supported on top of the traps. The chest should be up and the head facing forward. Adopt a hip-width stance with the feet turned out as needed. Descend by flexing the knees, refraining from moving the hips back as much as possible. This requires that the knees travel forward. Ensure that they stay align with the feet. The goal is to keep the torso as upright as possible. Continue all the way down, keeping the weight on the front of the heel. At the moment the upper legs contact the lower legs reverse the motion, driving the weight upward."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Standing Calf Raise",
            amount: "10-15 reps 2-4 sets",
            description: ["Set up for the standing barbell calf raise by getting a block or step and placing it in front of you. Grasp a barbell and place it across the back of your shoulders. Make sure the bar sits across the muscles in your upper back, not your neck. Stand up on the block with the balls of your feet on the edge. Keeping your balance, raise your heels off the floor. Squeeze the calves, and then slowly lower your heals back down as far as possible without letting them touch the floor. Repeat for desired reps."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Calf Press",
            amount: "10-15 reps 2-4 sets",
            description: ["Adjust the seat so that your legs are only slightly bent in the start position. The balls of your feet should be firmly on the platform. Select an appropriate weight, and grasp the handles. This will be your starting position. Straighten the legs by extending the knees, just barely lifting the weight from the stack. Your ankle should be fully flexed, toes pointing up. Execute the movement by pressing downward through the balls of your feet as far as possible. After a brief pause, reverse the motion and repeat."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Romanian Deadlift",
            amount: "8-10 reps",
            description: ["Hold a bar at hip level with a pronated (palms facing down) grip. Your shoulders should be back, your back arched, and your knees slightly bent. This will be your starting position. Lower the bar by moving your butt back as far as you can. Keep the bar close to your body, your head looking forward, and your shoulders back. Done correctly, you should reach the maximum range of your hamstring flexibility just below the knee. Any further movement will be compensation and should be avoided for this movement. At the bottom of your range of motion, return the starting position by driving the hips forward to stand up tall."],
            intensity: "Intermediate",
            favorite:false
        },
        {
            name: "Leg Press",
            amount: "10-12 reps 2-4 sets",
            description: ["Load the machine with the desired weight and take a seat. Sit down and position your feet on the sled with a shoulder width stance. Take a deep breath, extend your legs, and unlock the safeties. Lower the weight under control until the legs are roughly 45 degrees or slightly below. Drive the weight back to the starting position by extending the knees but don’t forcefully lockout. Repeat for the desired number of repetitions."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Hack Squat",
            amount: "10-12 reps 2-4 sets",
            description: ["Load the machine with the desired weight and position your shoulders and back against the pads. Position your feet at shoulder width, extend your legs, and release the safety handles. Slowly lower the weight by bending your knees until your thighs are approximately at 90 degrees. Reverse the movement by driving into the platform and extending the knees and hips. Repeat for the desired number of repetitions."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Dumbbell Lunge",
            amount: "10-12 reps 2-4 sets",
            description: ["Choose a pair of dumbbells and stand up straight with a slight bend in your knees. Hold the dumbbells down at your sides. You are now in the starting position. Step forward with your left leg while maintaining your balance and squat down through your hips. Keep your torso straight and head up. Don't allow your knee to track out over your toes. Push yourself back to the starting position by using your heal to drive you. Repeat this movement with your right leg and then repeat for desired reps."],
            intensity: "Beginner",
            favorite: false
        }]
})

const fwBicep = new FreeWeight({
    muscleGroup: "Biceps",
    type: [
        {
            name: "Seated Hammer Curl",
            amount: "10-12 reps 3-4 sets",
            description: ["Set up for the seated hammer curl by grabbing a flat bench or adjustable bench and placing a set of dumbbells at one end. If you're using an adjustable bench, adjust the back to a 90 degree angle. Sit on the end of the bench with your feet out in front of you and your knees together. Pick the dumbbells up off the floor and let them hang by your sides with your palms facing your body (neutral grip). Bend the arms slightly to take up the tension into the biceps. This is the starting position for the exercise. Keeping your back straight and your elbows tucked in at your sides, slowly curl up the dumbbells up as far as possible. Squeeze the biceps hard, and then slowly lower the dumbbells back to the starting position. Repeat for desired reps."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Standing Barbell Curl",
            amount: "10-12 reps 3-4 sets",
            description: ["Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. This will be your starting position. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Inverted Rows",
            amount: "10-12 reps 3-4 sets",
            description: ["Position a bar in a rack to about waist height. You can also use a smith machine. Take a wider than shoulder width grip on the bar and position yourself hanging underneath the bar. Your body should be straight with your heels on the ground with your arms fully extended. This will be your starting position. Begin by flexing the elbow, pulling your chest towards the bar. Retract your shoulder blades as you perform the movement. Pause at the top of the motion, and return yourself to the start position. Repeat for the desired number of repetitions."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Zottman Curl",
            amount: "8-10 reps 3-4 sets",
            description: ["Select the desired weight from the rack and assume a shoulder width stance. Using a supinated grip, take a deep breath and curl the dumbbells towards your shoulders. Once the biceps are fully shortened, rotate the forearms to a pronated position (palms down) and slowly lower the weight back to the starting position. Repeat for the desired number of repetitions."],
            intensity: "Intermediate",
            favorite: false
        },
        {
            name: "Weighted Chin-ups",
            amount: "4-6 reps 3-4 sets",
            description: ["Load a weight belt with the desired weight and loop it around your waist. Using a supinated grip, grasp the bar with a shoulder width grip. Take a deep breath, squeeze your glutes and brace your abs. Depress the shoulder blades and then drive the elbows straight down to the floor while activating the lats. Pull your chin towards the bar until the lats are fully contracted, then slowly lower yourself back to the start position and repeat for the assigned number of repetitions."],
            intensity: "Intermediate",
            favorite: false
        },
        {
            name: "Incline-Bench Curl",
            amount: "10-12 reps 3-4 sets",
            description: ["Position an incline bench at roughly 55-65 degrees, select the desired weight from the rack, and sit upright with your back flat against the pad. Using a supinated (palms up) grip, take a deep breath and curl both dumbbells towards your shoulders. Once the biceps are fully shortened, slowly lower the weights back to the starting position. Repeat for the desired number of repetitions."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Preacher EZ-Bar Curl",
            amount: "8-10 reps 3-4 sets",
            description: ["The EZ bar preacher curl is a great exercise to isolate the biceps, while minimizing the strain on your wrists. Adjust the seat on the preacher bench so that your upper arms sit comfortably on the padding when seated. Load the desired weight on the barbell. Sit on the preacher bench and grip the EZ bar with your hands shoulder width apart using an underhand (palms facing up) grip. (note: You can use a wide or narrow grip on this exercise) Keeping your back straight and eyes facing forward, take the weight off the rack so that you're supporting it with your arms slightly bent. This is the starting position. Slowly bring the weight up until your forearms are at a right angle to the floor. Squeeze the bicep at the top of the movement, and then slowly lower it back to the starting position. Repeat for desired reps."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Standing Cable Curl",
            amount: "10-12 reps 3-4 sets",
            description: ["Stand up with your torso upright while holding a cable curl bar that is attached to a low pulley. Grab the cable bar at shoulder width and keep the elbows close to the torso. The palm of your hands should be facing up (supinated grip). This will be your starting position. While holding the upper arms stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second as you squeeze the muscle. Slowly begin to bring the curl bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions."],
            intensity: "Beginner",
            favorite: false
        }
    ]
})

const fwTricep = new FreeWeight({
    muscleGroup: "Triceps",
    type: [
        {
            name: "Close-Grip Bench Press",
            amount: "6-8 reps 3-4 sets",
            description: ["Lie flat on a bench and set your hands at shoulder width. Set your shoulder blades by pinching them together and driving them into the bench. Take a deep breath and allow your spotter to help you with the lift off in order to maintain tightness through your upper back. Let the weight settle and ensure your upper back remains tight after lift off. Inhale and allow the bar to descend slowly by unlocking the elbows. Lower the bar in a straight line to the base of the sternum (breastbone) and touch the chest. Push the bar back up in a straight line by pressing yourself into the bench, driving your feet into the floor for leg drive, and extending the elbows. Repeat for the desired number of repetitions."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Skullcrusher",
            amount: "8-10 reps 3-4 sets",
            description: ["Select your desired weight and sit on the edge of a flat bench. To get into position, lay back and keep the bar close to your chest. Once you are supine, press the weight to lockout. Lower the weights towards your head by unlocking the elbows and allowing the ez bar to drop toward your forehead or just above. Once your forearms reach parallel or just below, reverse the movement by extending the elbows while flexing the triceps to lockout the weight. Repeat for the desired number of repetitions."],
            intensity: "Beginner",
            favorite:false
        },
        {
            name: "Weighted Dips",
            amount: "6-8 reps 3-4 sets",
            description: ["Step up onto the dip station (if possible) and position your hands with a neutral grip. Initiate the dip by unlocking the elbows and slowly lowering the body until the forearms are almost parallel with the floor. Control the descent to parallel and then drive back to the starting position by pushing through the palms. Repeat for the desired number of repetitions."],
            intensity: "Advanced",
            favorite: false
        },
        {
            name: "Cable Push-Down",
            amount: "10-12 reps 3-4 sets",
            description: ["Attach a straight or angled bar to a high pulley and grab with an overhand grip (palms facing down) at shoulder width. Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. This is your starting position. Using the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement. After a second hold at the contracted position, bring the bar slowly up to the starting point. Breathe in as you perform this step. Repeat for the recommended amount of repetitions."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Dumbbell Kickback",
            amount: "10-12 reps 3-4 sets",
            description: ["Start with a dumbbell in each hand and your palms facing your torso. Keep your back straight with a slight bend in the knees and bend forward at the waist. Your torso should be almost parallel to the floor. Make sure to keep your head up. Your upper arms should be close to your torso and parallel to the floor. Your forearms should be pointed towards the floor as you hold the weights. There should be a 90-degree angle formed between your forearm and upper arm. This is your starting position. Now, while keeping your upper arms stationary, exhale and use your triceps to lift the weights until the arm is fully extended. Focus on moving the forearm. After a brief pause at the top contraction, inhale and slowly lower the dumbbells back down to the starting position. Repeat the movement for the prescribed amount of repetitions."],
            intensity: "Beginner",
            favorite: false
        },
        {
            name: "Seated Overhead Dumbbell Extension",
            amount: "10-12 reps 3-4 sets",
            description: ["Sit down on a bench with back support and grasp a dumbbell with both hands and hold it overhead at arm's length. Tip: a better way is to have somebody hand it to you especially if it is very heavy. The resistance should be resting in the palms of your hands with your thumbs around it. The palm of the hand should be facing inward. This will be your starting position. Keeping your upper arms close to your head (elbows in) and perpendicular to the floor, lower the resistance in a semi-circular motion behind your head until your forearms touch your biceps. Tip: The upper arms should remain stationary and only the forearms should move. Breathe in as you perform this step. Go back to the starting position by using the triceps to raise the dumbbell. Breathe out as you perform this step. Repeat for the recommended amount of repetitions."],
            intensity: "Beginner",
            favorite: false
        }
    ]
})

module.exports = {fwChest, fwBack, fwAbs, fwShoulder, fwLegs, fwBicep, fwTricep}
