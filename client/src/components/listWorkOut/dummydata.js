const data = [
  {
    muscleGroup: "Core",
    typre: [
      {
        name: "Lower Back Stretch",
        amount: "Hold for at least 30 seconds then repeat on the other side.",
        description: [
          "Lie faceup with your arms out to your sides, either straight or bent into the shape of a goal post (pictured above).",
          "Keeping one leg extended, pull one knee into your chest, and then let it slowly drop over the extended leg.",
          "Keep your shoulders flat on the floor as you feel a stretch in your back"
        ],
        intensity: "Medium",
        targetMuscle: "Oblique Muscless",
        favorite: false
      },
      {
        name: "Butterfly Stretch",
        amount: "Hold this stretch for 30 seconds to 2 minutes",
        description: [
          "Sit tall on the floor with the soles of your feet together, knees bent out to sides.",
          "Hold onto your ankles or feet, engage your abs, and slowly lower your body toward your feet as far as you can while pressing your knees toward the floor.",
          "If you're too tight to bend over, simply press your knees down."
        ],
        intensity: "Medium",
        targetMuscle: "Hips, Thights and Glutes",
        favorite: false
      },
      {
        name: "Sphinx Pose",
        amount: "Hold this stretch for 30 seconds to 2 minutes",
        description: [
          "Lie on your stomach with your legs straight out behind you.",
          "Place your elbows under your shoulders and your forearms on the floor as you lift your chest up off the floor.",
          "Press your hips and thighs into the floor, and think about lengthening your spine while keeping your shoulders relaxed.",
          "Sit up just enough to feel a nice stretch in your lower back. Don't hyperextend, and stop immediately if you start to feel any discomfort or pain."
        ],
        intensity: "Medium",
        targetMuscle: "Lower Back and abs",
        favorite: false
      },
      {
        name: "Reclining Bound Angle Pose",
        duration: "Hold for 30 seconds to 2 minutes.",
        description: [
          "Lie on your back.",
          "Bring the soles of your feet together and allow your knees to open up and move closer to the floor."
        ],
        intensity: "Low",
        targetMuscle: "Inner thighs, Hips and Groin",
        favorite: false
      },
      {
        name: "Knees to Chest",
        amount: "Hold for 30 seconds to 2 minutes.",
        description: [
          "Lie on your back and pull your knees into your chest with both hands.",
          "Keep your lower back on the floor."
        ],
        intensity: "Low",
        targetMuscle: "Lower back, glutes",
        favorite: false
      },
      {
        name: "Lunging Hip Flexor Stretch",
        amount: "Hold for 30 seconds to 2 minutes.",
        description: [
          "Kneel on your left knee. Place your right foot flat on the floor in front of you, knee bent.",
          "Lean forward, stretching your left hip toward the floor.",
          "Squeeze your butt; this will allow you to stretch your hip flexor even more.",
          "Switch sides and repeat."
        ],
        intensity: "Medium",
        targetMuscle: "hips, quads, glutes",
        favorite: false
      },
      {
        name: "90/90 Stretch",
        amount: "Hold for 30 seconds to 2 minutes.",
        description: [
          "Sit with your right knee bent at 90-degrees in front of you, calf perpendicular to your body and the sole of your foot facing to the left. Keep your right foot flexed.",
          "Let your leg rest flat on the floor.",
          "Place your left knee to the left of your body, and bend the knee so that your foot faces behind you. Keep your left foot flexed.",
          "Keep your right butt cheek on the floor. Try to move the left cheek as close to the floor as possible. It may not be possible if you're super tight.",
          "Repeat on the other side."
        ],
        intensity: "Medium",
        targetMuscle: "Hips",
        favorite: false
      },
      {
        name: "Seated spinal twist",
        amount: "Hold this pose for up to 1 minute.",
        description: [
          "Sit on the edge of a cushion with both legs extended out in front and bend your right knee and place your foot to the outside of your left thigh.",
          "Bend your right knee and place your foot to the outside of your left thigh and lift your arms up with your palms facing each other.",
          "Starting at the base of your spine, twist to the right side and place your right hand behind you for support.",
          "Place your left arm around your right leg as though you’re hugging it, or bring your upper arm to the outside of your thigh.",
          "epeat on the other side."
        ],
        intensity: "Medium",
        targetMuscle: "Lower back",
        favorite: false
      }
    ]
  },
  {
    muscleGroup: "Upper Body",
    type: [
      {
        name: "Neck Stretch",
        amount:
          "Hold for at least 30 seconds and then repeat on the other side.",
        description: [
          "Start standing or sitting tall, and place one hand on your lower back, the other hand on the opposite side of your head.",
          "Pull your head toward your shoulder, looking straight ahead, until you feel a stretch in your neck.",
          "Hold for at least 30 seconds and then repeat on the other side."
        ],
        intensity: "Low",
        targetMuscle: "Upper Trapezius",
        favorite: false
      },
      {
        name: "Overhead Triceps and Shoulder Stretch",
        amount:
          "Hold for at least 30 seconds and then repeat on the other side.",
        description: [
          "Start standing or sitting tall. Bring one arm overhead and drop your forearm behind you, resting it on your back between your shoulder blades.",
          "With your other hand, grab right above your bent elbow and pull gently, until you feel a stretch in your shoulder and the back of your arm.",
          "Try to keep your bicep close to your ear, and don’t force it past."
        ],
        intensity: "Medium",
        targetMuscle: "Deltoids and Triceps",
        favorite: false
      },
      {
        name: "Cross-Body Shoulder Stretch",
        amount:
          "Hold for at least 30 seconds and then repeat on the other side.",
        description: [
          "Start standing or sitting tall. Grab one arm above your elbow with your opposite hand, and pull it across your body toward your chest until you feel a stretch in your shoulder.",
          "Make sure to keep your elbow below shoulder height."
        ],
        intensity: "Low",
        targetMuscle: "Deltoids"
      },
      {
        name: "Biceps Stretch",
        amount: "Hold for at least 30 seconds.",
        description: [
          "Sit on the floor with your feet flat and knees bent.",
          "Place your palms on the floor behind you with your fingers pointing away from your body.",
          "Keeping your hands in place, slowly slide your butt away from your hands until you feel a stretch in your biceps.",
          "You'll also feel a stretch in your chest and shoulders."
        ],
        intensity: "Medium",
        targetMuscle: "Biceps",
        favorite: false
      },
      {
        name: "Chest Stretch",
        amount: "Hold for at least 30 seconds.",
        description: [
          "Start standing tall, fingers interlocked behind you near your butt.",
          "Keeping your back straight and shoulder blades together, push your arms up until you feel the stretch in your pecs."
        ],
        intensity: "Medium",
        targetMuscle: "Pectorals",
        favorite: false
      },
      {
        name: "Wrist Flexion and Extension",
        amount: "Hold for at least 30 seconds then repeat on the other side.",
        description: [
          "Start standing or sitting tall. Extend one arm forward in front of you at shoulder height or just below.",
          "Keep your extended arm straight and with your opposite hand, press down on the top of your extended hand. Slowly bend your wrist down, so that your fingertips point toward the floor, until you feel a stretch on the top of your forearm and wrist.",
          "Keep your extended arm straight and with your opposite hand, grab onto your fingers just above your palm. Pull on your hand to bend your wrist up, so your fingertips point toward the ceiling, until you feel a stretch on the bottom of your forearm and wrist."
        ],
        intensity: "Low",
        targetMuscle: "Extensors Muscles",
        favorite: false
      },
      {
        name: "Upper back stretch",
        amount: "Hold for at least 30 seconds.",
        description: [
          "Start standing or sitting tall. Arms extended with palms facing inward. Cross fingers and bring palms to chest.",
          "Now face palms outwards and push hands out as you sligthly lean foward."
        ],
        intensity: "Medium",
        targetMuscle: "Supra, Rhomboid, Lats",
        favorite: false
      }
    ]
  },
  {
    muscleGroup: "Lower Body",
    type: [
      {
        name: "Standing Quad Stretch",
        amount:
          "Maintain position for 30 seconds, repeat exercise 3 to 5 times with each leg.",
        description: [
          "While standing, hold onto a countertop or chair back to assist in balance.",
          "Bend your knee back by grasping your ankle with one hand.",
          "Assist in bending your knee back as far as possible."
        ],
        intensity: "Low",
        targetMuscle: "Quads",
        favorite: false
      },
      {
        name: "Hamstring Stretch",
        amount: "Hold this position for 15 to 30 seconds. Repeat three times.",
        description: [
          "Sit on the floor with both legs out straight.",
          "Bend the other leg at the knee and position the sole of that foot against your opposite inner thigh.",
          "Extend your arms and reach forward over the one straight leg by bending at the waist as far as possible."
        ],
        intensity: "Mediun",
        targetMuscle: "Hamstrings",
        favorite: false
      },
      {
        name: "Standing Hamstring Stretch",
        amount: "Hold this position for 15 to 30 seconds.",
        description: [
          "Stand and cross your right foot in front of your left.",
          "Slowly lower your forehead to your right knee by bending at the waist.",
          "Keep both knees straight.",
          "Repeat for the other side by crossing your left foot in front of your right."
        ],
        intensity: "Medium",
        targetMuscle: "Hamstring",
        favorite: false
      },
      {
        name: "Standing Bent-Over Calf Stretch",
        amount: "Hold this position for 15 to 30 seconds.",
        description: [
          "Stand with your feet staggered.",
          "Bend your back knee and keep your front knee straight as you fold forward and grab onto your front foot underneath your toes",
          "Pull up gently on your toes, feeling the stretch in your calf.",
          "Repeat on the other side."
        ],
        intensity: "Medium",
        targetMuscle: "Calves",
        favorite: false
      },
      {
        name: "Lying Quad Stretch",
        amount: "Hold this position for 30 seconds.",
        description: [
          "Lie in a face-down position, propping your head on your left hand. Alternatively, you can lie on your side to perform this stretch.",
          "After a couple of seconds, pull your right foot toward your butt and bend your left knee to stabilize yourself.",
          "Switch sides, pulling your left foot toward your back and bending your right knee."
        ],
        intensity: "Low",
        targetMuscle: "Quads",
        favorite: false
      },
      {
        name: "IT Band Stretch",
        amount: "Hold for 15-30 seconds and switch sides",
        description: [
          "Start by crossing the left foot behind the right.",
          "Take the left arm up and gently lean to the right, pressing the hip out to feel a stretch down your outer thigh."
        ],
        intensity: "Low",
        targetMuscle: "IT Band",
        favorite: false
      },
      {
        name: "Straddle",
        amount: "Hold for 30 seconds.",
        description: [
          "Sit on the floor with both legs extended out to the sides so that you're in a V.",
          "Open your legs as wide as possible and flex your feet.",
          "Take a few deep breaths and try to inch your body forward and open your legs wider. If it feels comfortable to you, fold forward and reach your arms out on the floor in front of you as far as you can."
        ],
        intensity: "Medium",
        targetMuscle: "Hamstring and hips",
        favorite: false
      }
    ]
  }
];

module.exports = data;
