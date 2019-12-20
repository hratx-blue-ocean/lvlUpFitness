const mongoose = require('mongoose');

const cardioSchema = new mongoose.Schema({
    muscleGroup: String,
    type: [{
        name: String,
        duration: String,
        description: [ String ],
        intensity: String,
        favorite: Boolean
    }]
});

const exercises  = mongoose.model('exercise', cardioSchema);

const jumpRope = new exercise({
    muscleGroup: 'Cardiovascular',
    type: [{
        name: 'Beginner Jump Rope',
        duration: '15 to 25 min, 3 to 5 times per week',
        description: ['Start by jogging forward as you swing the jump rope over your head and under your feet.',
        'Do this move for 15 seconds. Next, reverse your direction and jog backward as you continue to swing the jump rope.',
        'Do this move for 15 seconds. Finish your set by doing a hopscotch jump for 15 seconds. To do this move, jump rope in place, and as you jump',
        'alternate between jumping your feet out to the sides and then back to the center, similar to how you’d move them while doing jumping jacks.',
        'Do this move for 15 seconds. Rest for 15 seconds between sets.Repeat 18 times.'],
        intensity: 'Beginner',
        favorite: false
    },
        {
            name: 'Intermdiate Jump Rope',
            duration: '15 to 25 min',
            description: ['Start by jogging forward as you swing the jump rope over your head and under your feet.',
                'Do this move for 30 seconds. Next, reverse your direction and jog backward as you continue to swing the jump rope.',
                'Do this move for 30 seconds. Finish your set by doing a hopscotch jump for 30 seconds. To do this move, jump rope in place, and as you jump',
                'alternate between jumping your feet out to the sides and then back to the center,  similar to how you’d move them while doing jumping jacks.',
                'Do this move for 30 seconds. Rest for 30 seconds between sets.Repeat 18 times.'],
            intensity: 'Intermediate',
            favorite: false
        },
        {
            name: 'Advanced Jump Rope',
            duration: '15 to 25 min',
            description: ['Start by jogging forward as you swing the jump rope over your head and under your feet.',
                'Do this move for 30 seconds. Next, reverse your direction and jog backward as you continue to swing the jump rope.',
                'Do this move for 30 seconds. Finish your set by doing a hopscotch jump for 30 seconds. To do this move, jump rope in place, and as you jump',
                'alternate between jumping your feet out to the sides and then back to the center,  similar to how you’d move them while doing jumping jacks.',
                'Do this move for 30 seconds. Rest for 30 seconds between sets.Repeat 18 times.'],
            intensity: 'Advanced',
            favorite: false
        }]
});

const StrengthCircuit = new exercise ({
    muscleGroup: 'Cardiovascular',
    type: [{
        name: 'Beginner Aerobic Strength Circuit',
        duration: '15 to 25 min, 3 to 5 times per week',
        description: ['This aerobic circuit is designed to get your heart rate up. Perform the following strength exercises for 1 minute:',
            'squats, lunges, pushups, dips, torso twist',
            'Then jog or march in place for 1 minute for your active rest.This is one circuit.',
            'Repeat the circuit 2 to 3 times. You can rest for up to 5 minutes between circuits.', 
            'Cool down afterward with some light stretching.'],
        intensity: 'Beginner',
        favorite: false
    },
        {
            name: 'Intermediate Aerobic Strength Circuit',
            duration: '15 to 25 min, 3 to 5 times per week',
            description: ['This aerobic circuit is designed to get your heart rate up. Perform the following strength exercises for 1 minute:',
                'squats, lunges, pushups, dips, torso twist',
                'Then jog or march in place for 1 minute for your active rest.This is one circuit.',
                'Repeat the circuit 2 to 3 times. You can rest for up to 5 minutes between circuits.',
                'Cool down afterward with some light stretching.'],
            intensity: 'Intermediate',
            favorite: false
        },
        {
            name: 'Advanced Aerobic Strength Circuit',
            duration: '15 to 25 min, 3 to 5 times per week',
            description: ['This aerobic circuit is designed to get your heart rate up. Perform the following strength exercises for 1 minute:',
                'squats, lunges, pushups, dips, torso twist',
                'Then jog or march in place for 1 minute for your active rest.This is one circuit.',
                'Repeat the circuit 2 to 3 times. You can rest for up to 5 minutes between circuits.',
                'Cool down afterward with some light stretching.'],
            intensity: 'Advanced',
            favorite: false
        }]     
})

const distanceRunning = new exercise({
    muscleGroup: 'Cardiovascular',
    type: [{
        name: 'Beginner Distance Running',
        duration: '12 weeks',
        description: ['This a program designed to help those that are not runners to get into shape, lose weight or even run a marathon.',
            'This program is a weekly program with 4 run days, 1 walk day, and two rest days.',
            'Weeks 1-3: Mon: Rest, Tue: 1.5 mi run, Wed: 3 mi run, Thu: 1.5 mi run, Fri: Rest, Sat: 30 min walk, Sun: 3-3.5 mi run',
            'Weeks 4-7: Mon: Rest, Tue: 2 mi run, Wed: 3 mi run, Thu: 1.5-2 mi run, Fri: Rest, Sat: 30 min walk, Sun: 3-4.5 mi run',
            'Weeks 8-10: Mon: Rest, Tue: 2.5 mi run, Wed: 3 mi run, Thu: 2-2.5 mi run, Fri: Rest, Sat: 30 min walk, Sun: 3-5.5 mi run',
            'Weeks 11-12: Mon: Rest, Tue: 3 mi run, Wed: 3 mi run, Thu: 3 mi run, Fri: Rest, Sat: 30 min walk, Sun: 3-6 mi run'
            ],
        intensity: 'Beginner',
        favorite: false
    },
        {
            name: 'Intermediate Distance Running',
            duration: '12 weeks',
            description: ['This a program designed to help those runners that would like to get into great shape, improve speed or better your past performance',
                'This program is a weekly program',
                'Hill Training: Select a hill about a quarter-mile long, but do not worry about pitch or the exact distance.',
                'Run up hard, then turn and jog back down, repeating the uphill sprints until finished.',
                'Tempo Runs: A tempo run is a continuous run with a buildup in the middle to near race pace.',
                'Fartlek Runs: A continuous run that starts and ends slow with fast running in the middle.',
                'This includes multiple changes of pace over varied (mostly short) distances.',
                'Weeks 1-3: Mon: 3 mi + Strength, Tue: 3 mi run, Wed: 3x hills, Thu: 3 mi + Strength, Fri: Rest, Sat: 30 min tempo/fartlek, Sun: 6-7 mi run',
                'Weeks 4-7: Mon: 3 mi + Strength, Tue: 4-5 mi run, Wed: 4-5x hills/track(8x 200), Thu: 3 mi + Strength, Fri: Rest, Sat: 35-40 min tempo/fartlek, Sun: 7-8 mi run',
                'Weeks 8-10: Mon: 3 mi + Strength, Tue: 4-6 mi run, Wed: track (10x 200/6/7 x400), Thu: 3 mi + Strength, Fri: Rest, Sat: 45 min tempo/fartlek, Sun: 7-8 mi run',
                'Weeks 11-12: Mon: 3 mi + Strength, Tue: 5-6 mi run, Wed: track (12x 200/8 x400), Thu: 3 mi run, Fri: Rest, Sat: Rest, Sun: 10K Race'
            ],
            intensity: 'Intermediate',
            favorite: false
        },
        {
            name: 'Advanced Distance Running',
            duration: ' 20 to 30 min',
            description: ['This a program designed to help those runners that would like to get into great shape, improve speed or better your past performance',
                'This program is a weekly program',
                'Hill Training: Select a hill about a quarter-mile long, but do not worry about pitch or the exact distance.',
                'Run up hard, then turn and jog back down, repeating the uphill sprints until finished.',
                'Tempo Runs: A tempo run is a continuous run with a buildup in the middle to near race pace.',
                'Fartlek Runs: A continuous run that starts and ends slow with fast running in the middle.',
                'This includes multiple changes of pace over varied (mostly short) distances.',
                'Weeks 1-3: Mon: 3 mi + Strength, Tue: 5-7x hills, Wed:  3-5 mi + Stretch, Thu: 40 min tempo/fartlek, Fri: 3 mi + Strength, Sat: 30 min tempo/fartlek, Sun: 6-8 mi run',
                'Weeks 4-7: Mon: 3 mi + Strength, Tue: 8-10x hills/track (16x 200), Wed: 3-6 mi + Stretch, Thu: 40 min tempo/fartlek, Fri: 3 mi + Strength, Sat: 30 min tempo/fartlek, Sun: 9-10 mi run',
                'Weeks 8-10: Mon: 3 mi + Strength, Tue: track (10x 400/16x 200), Wed: track 3 mi + stretchThu: 30-45 min tempo/fartlek,  Fri: 3 mi + Strength, Sat: 30-45 min tempo/fartlek/3 mi run, Sun: 10 mi run',
                'Weeks 11-12: Mon: 3 mi + Strength, Tue: track (10x 400/16x 200), Wed: 3 mi + stretch, Thu: 30-45 tempo/fartlek, Fri: 3 mi + Stretch, Sat: Rest,  Sun: 5-10K Race],
            intensity: 'Advanced',
            favorite: false
        }]
});

const sprints = new exercise({
    muscleGroup: 'Cardiovascular',
    type: [{
        name: '30 Second Sprint Training',
        duration: '3 x Week',
        description: ['Perform sprint workout routines three times a week for the first 2 weeks. Then 2x a week for 6-8 weeks for maintenance',
            'Allow at least one to two days of rest or another easy exercise between sprint workouts.',
            'Warmup: Before sprints, warm up thoroughly with easy exercise for 5-10 minutes.',
            'Perform the same exercise you will be using for your sprints.',
            'Sprint: Perform your first sprint at about 60 percent max intensity.',
            'If you feel any muscle tightness or joint pain, back off and continue to warm up.',
            'Recover: Recover for 2 minutes by slowing to a comfortable pace, but keep moving.',
            'This can be an easy jog or a walk, depending on your fitness.',
            'Sprint: Perform your next sprint at about 80 percent max intensity.',
            'Recover: Recover for 2 minutes.',
            'Sprint: Perform the remainder of your sprints at 100 percent max intensity or all- out efforts of 30 seconds.',
            'You should be pushing yourself to the max for each one.',
            'Recover: Recover for 2 to 4 minutes after each sprint to allow your breathing and heart rate to slow to the point',
            'that you can hold a conversation without gasping.',
            'Repeat: Repeat the sprint/ recovery routine 4 - 8 times depending on your level and ability.',
            'For your first workout, you will want to stop at 4 sprints.',
            "That's fine. Try to build up to 8."
        ],
        intensity: 'Beginner',
        favorite: false
    },
        {
            name: '45 Second Sprint Training',
            duration: '2 x Week',
            description: ['Perform sprint workout routines three times a week for the first 2 weeks. Then 2x a week for 6-8 weeks for maintenance',
                'Allow at least one to two days of rest or another easy exercise between sprint workouts.',
                'Warmup: Before sprints, warm up thoroughly with easy exercise for 5-10 minutes.',
                'Perform the same exercise you will be using for your sprints.',
                'Sprint: Perform your first sprint at about 60 percent max intensity.',
                'If you feel any muscle tightness or joint pain, back off and continue to warm up.',
                'Recover: Recover for 2 minutes by slowing to a comfortable pace, but keep moving.',
                'This can be an easy jog or a walk, depending on your fitness.',
                'Sprint: Perform your next sprint at about 80 percent max intensity.',
                'Recover: Recover for 2 minutes.',
                'Sprint: Perform the remainder of your sprints at 100 percent max intensity or all- out efforts of 30 seconds.',
                'You should be pushing yourself to the max for each one.',
                'Recover: Recover for 2 to 4 minutes after each sprint to allow your breathing and heart rate to slow to the point',
                'that you can hold a conversation without gasping.',
                'Repeat: Repeat the sprint/ recovery routine 8-10 times depending on your level and ability.'
        ],
            intensity: 'Intermediate',
            favorite: false

        },
        {
            name: '60 Second Sprint Training',
            duration: '2 x Week',
            description: ['Perform sprint workout routines three times a week for the first 2 weeks. Then 2x a week for 6-8 weeks for maintenance',
                'Allow at least one to two days of rest or another easy exercise between sprint workouts.',
                'Warmup: Before sprints, warm up thoroughly with easy exercise for 5-10 minutes.',
                'Perform the same exercise you will be using for your sprints.',
                'Sprint: Perform your first sprint at about 60 percent max intensity.',
                'If you feel any muscle tightness or joint pain, back off and continue to warm up.',
                'Recover: Recover for 2 minutes by slowing to a comfortable pace, but keep moving.',
                'This can be an easy jog or a walk, depending on your fitness.',
                'Sprint: Perform your next sprint at about 80 percent max intensity.',
                'Recover: Recover for 2 minutes.',
                'Sprint: Perform the remainder of your sprints at 100 percent max intensity or all- out efforts of 30 seconds.',
                'You should be pushing yourself to the max for each one.',
                'Recover: Recover for 2 to 4 minutes after each sprint to allow your breathing and heart rate to slow to the point',
                'that you can hold a conversation without gasping.',
                'Repeat: Repeat the sprint/ recovery routine 8-10 times depending on your level and ability.'
            intensity: 'Advanced',
            favorite: false

        }]
});

const walk = new exercise({
    muscleGroup: 'Cardiovascular',
    type: [{
        name: 'Beginner Walking',
        duration: '15-30 min',
        description: ['Week 1: Start with a daily 15-minute walk at an easy pace.',
            'Walk five days the first week. You want to build a habit, so consistency is important.',
            'Spread out your rest days, such as making day 3 a rest day and day 6 a rest day.',
            'Weekly total goal: 60 to 75 minutes.',
            'Week 2: Add five minutes a day so you are walking for 20 minutes, five days a week.',
            'Or, you may wish to extend yourself more on some days, followed by a rest day.',
            'Weekly total goal: 75 to 100 minutes.',
            'Week 3: Add five minutes a day so you are walking for 25 minutes, five days a week.',
            'Weekly total goal: 100 to 125 minutes.',
            'Week 4: Add five minutes a day to walk for 30 minutes, five days a week.',
            'Weekly total goal: 125 to 150 minutes.'],
        intensity: 'Beginner',
        favorite: false
    },
        {
            name: 'Intermediate Walking',
            duration: '30 min ',
            description: ['The week should include one day of Economy workouts to build speed',
                'two days of Threshold workouts to build aerobic performance, and one day of long distance.',
                'Monday: Rest day. No walking of significant distance or intensity.',
                'Tuesday: Economy Workout.Warm up for 10 minutes at an easy pace. Then walk as fast as you can for 30 seconds or 200 meters(two city blocks in most cities).',
                'After 30 seconds, drop down to an easy pace for 2 minutes. Repeat the 30 seconds speed/ 2 minutes rest 8 to 12 times.Cool down with a 10-minute easy pace walk.',
                'Wednesday: Recovery.Easy 3-mile walk at 65% to 70% of your max heart rate.This is a pace at which you can easily maintain a conversation but are breathing harder than at rest.',
                'Thursday: Threshold Workout #1 - Speed. 10-minute warm up at easy walking pace.Walk fast for 8 minutes or 1 kilometer at 85% to 92% of your max heart rate.',
                'Then slow down to an easy pace for 2 minutes.Repeat this for 3 to 4 repetitions.Cool down for 10 minutes at an easy pace.',
                'The threshold pace is strenuous, but one you could maintain throughout a 10 kilometer / 6 mile race.',
                'You will be breathing very hard and able to speak only in short phrases.',
                'Friday: Recovery.Easy 3-mile walk at 65% to 70% of your max heart rate.',
                'Saturday: Threshold Workout #2: Steady state or tempo workout.Warm up for 10 minutes at an easy pace.',
                'Walk 20 to 30 minutes at 85% of your max heart rate then cool down with 10 minutes easy pace.',
                'Sunday: Distance Workout. 8 to 12 kilometers(5 to 7 miles) at 70 to 75% of your max heart rate.',
                'This is a conversational pace. '
            ],
            intensity: 'Intermediate',
            favorite: false

        },
        {
            name: 'Advanced Walking',
            duration: '12 Weeks ',
            description: ['This is designed for someone who walks more than 5 miles at a time or one or more hours almost every day.',
                'Has done some distance walking in the past; and has participated in numerous competitive events.',
                'Weeks 1-4: Mon: 4 mi, Tue: 6 mi, Wed: 4 mi, Thu: 6 mi, Fri: Rest, Sat: 5 mi, Sun: 8-13 mi',
                'Weeks 5-8: Mon: 4 mi, Tue: 6-8 mi, Wed: 5 mi, Thu: 7-8 mi, Fri: Rest, Sat: 5 mi, Sun: 9-17 mi',
                'Weeks 9-12: Mon: 4-5 mi, Tue: 6-8 mi, Wed: 5-6 mi, Thu: 6-10 mi, Fri: Rest, Sat: 5 mi, Sun: 12-20 mi',
                'Weeks 13-16: Mon: 3-5 mi, Tue: 4-10 mi, Wed: 3-5 mi, Thu: 0-10 mi, Fri: Rest, Sat: 0-5 mi, Sun: 8-20 mi',
            ],
            intensity: 'Advanced',
            favorite: false

        }]
});

const cycling = new exercise({
    muscleGroup: 'Cardiovascular',
    type: [{
        name: 'Beginner Cycling',
        duration: '12Weeks',
        description: ['The plans include intervals based on maximum heart rate, functional threshold power or effort.',
            'Training Zones: Z1: 60-65% max heart rate (hr), Z2: 65-75%(hr), Z3: 75-82%(hr), Z4: 82-89%(hr),',
            'Z5: 89%- maximum (hr) ',
            'Week 1: Mon: 60 min, ride on the border of Z2 and Z3 at 90-95 rpm, Tue: Rest, Wed: 60 min, ride on the border of Z2 and Z3 at 90-95 rpm', 
            'Thu: 60 min, ride on the border of Z2 and Z3 at 90-95 rpm except for 5x 5min at 50-60rpm,  Fri: Rest, Sat: 2 hr, on a rolling route bordering on Z2 and Z3, start',
            'with 30 min Z2 then 60 min pushing up to Z3 on any rises, recovering to Z2 on the flats and downhills. Finish with 30 min Z2 at 90rpm, Sun: 2hr, on the border of Z2 and Z3 at 90-95rpm',
            'Week 2: Mon: Rest, Tue: 75 min, ride on the border of Z2 and Z3 at 90-95 rpm, Wed: 75 min, ride on the border of Z2 and Z3 at 90-95 rpm',
            'Thu: 75 min, ride on the border of Z2 and Z3 at 90-95 rpm except for 4x 7min at 50-60rpm,  Fri: Rest, Sat: 2 hr, on a rolling route bordering on Z2 and Z3, start',
            'with 30 min Z2 then 75 min pushing up to Z3 on any rises, recovering to Z2 on the flats and downhills. Finish with 15 min Z2 at 90rpm, Sun: 2.5hr, on the border of Z2 and Z3 at 90-95rpm',
            'Week 3: Mon: Rest,  Tue: 75 min, ride on the border of Z2 and Z3 at 90-95 rpm, Wed: 75 min, ride on the border of Z2 and Z3 at 90-95 rpm',
            'Thu: 90 min, ride on the border of Z2 and Z3 at 90-95 rpm except for 3x 10min at 50-60rpm,  Fri: Rest, Sat: 2 hr, on a rolling route bordering on Z2 and Z3, start',
            'with 15 min Z2 then 90 min pushing up to Z3 on any rises, recovering to Z2 on the flats and downhills. Finish with 15 min Z2 at 90rpm, Sun: 3hr, on the border of Z2 and Z3 at 90-95rpm',
            'Week 4: Mon: Rest, Tue: 90 min, ride on the border of Z2 and Z3 at 90-95 rpm, Wed: 90 min, ride on the border of Z2 and Z3 at 90-95 rpm',
            'Thu: 90 min, ride on the border of Z2 and Z3 at 90-95 rpm except for 3x 10min at 50-60rpm,  Fri: Rest, Sat: 2 hr, on a rolling route bordering on Z2 and Z3, start',
            'with 15 min Z2 then 90 min pushing up to Z3 on any rises, recovering to Z2 on the flats and downhills. Finish with 15 min Z2 at 90rpm, Sun: 2hr, on the border of Z2 and Z3 at 90-95rpm',
            'Sun: 3hr, on the border of Z2 and Z3 at 90-95rpm',
            'Repeat for weeks 5-12.'
        ],
        intensity: 'Beginner',
        favorite: false
    },
        {
            name: 'Intermediate Stationary Bike',
            duration: '12 Weeks',
            description: ['The plans include intervals based on maximum heart rate, functional threshold power or effort.',
                'Training Zones: Z1: 60-65% max heart rate (hr), Z2: 65-75%(hr), Z3: 75-82%(hr), Z4: 82-89%(hr),',
                'Z5: 89%- maximum (hr)',
                ' Week 1: Mon: 60 min ride on the border of Z2-Z3, 90-95 rpm apart from 5x 5 minute iterations of 70 rpm, Tue: Rest',
                'Wed: 60 min ride, 90-95 rpm apart from 5x 5 minute iterations of 70 rpm',
                'Thu: Rest, Fri: 90 min ride along rolling route, start w/ 30 min pushing Z2, then 30 min pushing up to Z3 on any rises, recovering to Z2 on flats.',
                'Finish with 30 min pushing  Z2 at 90 rpm, Sat: Rest, Sun: 2 hr ride on the border of Z2-Z3 at 90-95rpm',
                'Week 2: Mon: Rest, Tue: 75 min ride on the border of Z2-Z3, 90-95 rpm apart from 4x 7 minute iterations of 70 rpm, Wed: 75 min ride, 90-95 rpm apart from 4x 7 minute iterations of 100 rpm , Thu: Rest, Fri: 90 min ride along rolling route, start w/ 30 min pushing Z2,',
                'then 45 min pushing up to Z3 on any rises, recovering to Z2 on flats, Finish with 15 pushing Z2 at 90 rpm, Sat: Rest, Sun: 2 hr ride on the border of Z2-Z3 at 90-95rpm',
                'Week 3: Mon: Rest, Tue: 90 min, between Z2 and Z3 throughout stay around 90 - 95rpm apart from 3 x 10min at 70rpm, Wed: 90 between Z2 and Z3 throughout stay around 90 - 95rpm apart from 3 x 10min at 100rpm',
                'Thu: Rest, Fri: 90 min ride along rolling route, start w/ 15 min pushing Z2, then 60 min pushing up to Z3 on any rises, recovering to Z2 on flats.',
                'Finish with 15 min pushing  Z2 at 90 rpm, Sat: Rest, Sun: 2 hr ride on the border of Z2-Z3 at 90-95rpm',
                'Week 4: Mon: Rest, Tue: 60 min ride on the border of Z2-Z3, 90-95 rpm apart from 5x 5 minute iterations of 70 rpm, Wed: Rest, Thu: 90 min ride along rolling route',
                'start w/ 30 min pushing Z2, then 30 min pushing up to Z3 on any rises, recovering to Z2 on flats. Finish with 30 min pushing  Z2 at 90 rpm, Fri: Rest',
                'Sat: 60 min easy spin, relaxed ride, Sun: 2 hr ride on the border of Z2-Z3 at 90-95rpm', 
                'Repeat Weeks 1-4 through 12 weeks.'
            ],
            intensity: 'Intermediate',
            favorite: false

        },
        {
            name: 'Advanced Stationary Bike',
            duration: '12 Weeks',
            description: ['The plans include intervals based on maximum heart rate, functional threshold power or effort.',
                'Training Zones: Z1: 60-65% max heart rate (hr), Z2: 65-75%(hr), Z3: 75-82%(hr), Z4: 82-89%(hr),',
                'Z5: 89%- maximum (hr)',
                'Week 1: Mon: 60 min ride on the border of Z2-Z3, 90-95 rpm apart from 5 x 10 sec standing hill sprints spread throughout the ride, Tue: Rest',
                'Wed: 60 min ride on the border of Z2-Z3, 90-95 rpm',
                'Thu: 60 min ride on the border of Z2-Z3, 90-95 rpm apart from 5 x 10 sec standing hill sprints spread throughout the ride, Fri: Rest',
                'Sat: 90 min ride, start w/ 5 min of Z1-Z2 then 5 min top of Z2, 5 min build up to Z4, and 5 min of Z2 at 90-95 rpm, next do 14x 1 min at the top of Z4 around 100 rpm',
                'with 2 min relaxed Z1/2 riding after each. Finish ride at Z2 around 90-95 rpm, Sun: 2 hr rolling route on the border of Z2-Z3 at 90-95rpm',
                'Week 2: Mon: Rest, Tue: 75 min ride on the border of Z2-Z3, 90-95 rpm apart from 5 x 15 sec standing hill sprints spread throughout the ride,  Wed: 75 min ride on the border of Z2-Z3, 90-95 rpm',
                'Thu: 75 min ride on the border of Z2-Z3, 90-95 rpm apart from 3 x 10 min at 105 rpm, Fri: Rest, Sat: 90 min ride, start w/ 5 min of Z1-Z2 then 5 min top of Z2, 5 min build up to Z4, and 5 min of Z2',
                'at 90-95 rpm, next do 8x 2 min at the top of Z4 around 100 rpm, Sun: 2.5 hr ride on the border of Z2 - Z3 at 90 - 95rpm',
                'Week 3: Mon: Rest, Tue: 90 min ride on the border of Z2-Z3, 90-95 rpm apart from 5 x 15 sec standing hill sprints spread throughout the ride, Wed: 90 min between Z2 and Z3 throughout stay around 90 - 95rpm',
                'Thu: 75 min ride on the border of Z2-Z3, 90-95 rpm apart from 3 x 10 min at 110 rpm, Fri: Rest',
                'Sat: 90 min ride, start w/ 5 min of Z1-Z2 then 5 min top of Z2, 5 min build up to Z4, and 5 min of Z2 at 90-95 rpm, next do 6x 3 min at the top of Z4 around 100 rpm',
                'Sun: 2 hr ride on the border of Z2-Z3 at 90-95rpm',
                'Week 4: Mon: Rest, Tue: 90 min ride on the border of Z2-Z3, 90-95 rpm, Wed: 60 min easy spin Thu: Rest, Fri: 90 min ride, start w/ 5 min of Z1-Z2 then 5 min top of Z2, 5 min build up to Z4',
                'and 5 min of Z2 at 90-95 rpm, next do 10x 1 min at the top of Z4 around 100 rpm,',
                'Sat: Rest Sun: 2 hr ride on the border of Z2-Z3 at 90-95rpm',
                'Repeat Weeks 1-4 through 12 weeks.'],
            intensity: 'Advanced',
            favorite: false

        }]
});

const swimming = newExercise({
    muscleGroup: 'Cardiovascular',
    type: [{
        name: 'Beginner Swimming',
        duration: '30-45 min',
        description: [''],
        intensity: 'Beginner',
        favorite: false

    },
        {
            name: 'Intermediate Swimming',
            duration: '30-45 min',
            description: [''],
            intensity: 'Intermediate',
            favorite: false      
    },
        {
            name: 'Advanced Swimming',
            duration: '30-45 min',
            description: [''],
            intensity: 'Advanced',
            favorite: false
            
    }]

});





module.exports = cardio;