const categories = [
    {
        name: "vehicles",
        hebrewName:  "כלי תחבורה",
        image: "images/categories/vehicles/vehicles.png",
        words: [
            {
                name: 'boat',
                image: 'images/categories/vehicles/boat.png',
                sound_reading: 'sounds/categories/vehicles/reading/boat.mp3',
                hebrewName: "סירה",
            },
            {
                name: 'bicycle',
                image: 'images/categories/vehicles/bicycle.png',
                sound_reading: 'sounds/categories/vehicles/reading/bicycle.mp3',
                sound_hearing: 'sounds/categories/vehicles/hearing/bicycle.mp3',
                hebrewName: "אופניים",
            },
            {
                name: 'green_car',
                image: 'images/categories/vehicles/green_car.png',
                sound_reading: 'sounds/categories/vehicles/reading/green_car.mp3',
                hebrewName: "מכונית ירוקה",
            },
            {
                name: 'pink_car',
                image: 'images/categories/vehicles/pink_car.png',
                sound_reading: 'sounds/categories/vehicles/reading/pink_car.mp3',
                hebrewName: "מכונית ורודה",
            },
            {
                name: 'police_car',
                image: 'images/categories/vehicles/police_car.png',
                sound_reading: 'sounds/categories/vehicles/reading/police_car.mp3',
                sound_hearing: 'sounds/categories/vehicles/hearing/police_car.mp3',
                hebrewName: "משטרה",
            },
            {
                name: 'red_car',
                image: 'images/categories/vehicles/red_car.png',
                sound_reading: 'sounds/categories/vehicles/reading/red_car.mp3',
                hebrewName: "מכונית אדומה",
            },

            {
                name: 'red',
                image: 'images/categories/vehicles/red_car.png',
                sound_reading: 'sounds/categories/vehicles/reading/car.mp3',
                sound_lls: 'sounds/categories/vehicles/LLS/car.mp3',
                hebrewName: "מכונית"
            },

            {
                name: 'red_truck',
                image: 'images/categories/vehicles/red_truck.png',
                sound_reading: 'sounds/categories/vehicles/reading/red_truck.mp3',
                hebrewName: "משאית",
            },
            {
                name: 'school_bus',
                image: 'images/categories/vehicles/school_bus.png',
                sound_reading: 'sounds/categories/vehicles/reading/school_bus.mp3',
                hebrewName: "אוטובוס",
            },
            {
                name: 'ship',
                image: 'images/categories/vehicles/ship.png',
                sound_reading: 'sounds/categories/vehicles/reading/ship.mp3',
                hebrewName: "ספינה",
            },
            {
                name: 'taxi',
                image: 'images/categories/vehicles/taxi.png',
                sound_reading: 'sounds/categories/vehicles/reading/taxi.mp3',
                hebrewName: "מונית",
            },
            {
                name: 'tracktor',
                image: 'images/categories/vehicles/tracktor.png',
                sound_reading: 'sounds/categories/vehicles/reading/tracktor.mp3',
                hebrewName: "טרקטור",
            },
            {
                name: 'ambulance',
                image: 'images/categories/vehicles/ambulance.png',
                sound_hearing: 'sounds/categories/vehicles/hearing/ambulance.mp3',
                sound_reading: 'sounds/categories/vehicles/reading/ambulance.mp3',
                sound_lls: 'sounds/categories/vehicles/LLS/ambulance.mp3',
                hebrewName: "אמבולנס",
            },
            {
                name: 'helicopter',
                image: 'images/categories/vehicles/helicopter.png',
                sound_hearing: 'sounds/categories/vehicles/hearing/helicopter.mp3',
                sound_reading: 'sounds/categories/vehicles/reading/helicopter.mp3',
                hebrewName: "מסוק",
            },

            {
                name: 'plane',
                image: 'images/categories/vehicles/plane.png',
                sound_reading: 'sounds/categories/vehicles/reading/plane.mp3',
                sound_lls: 'sounds/categories/vehicles/LLS/plane.mp3',
                hebrewName: "מטוס"
            },

            {
                name: 'train',
                image: 'images/categories/vehicles/train.png',
                sound_hearing: 'sounds/categories/vehicles/hearing/train.mp3',
                sound_reading: 'sounds/categories/vehicles/reading/train.mp3',
                sound_lls: 'sounds/categories/vehicles/LLS/train.mp3',
                hebrewName: "רכבת",
            },

            {
                name: 'motorcycle',
                image: 'images/categories/vehicles/motorcycle.png',
                sound_hearing: 'sounds/categories/vehicles/hearing/motorcycle.mp3',
                sound_reading: 'sounds/categories/vehicles/reading/motorcycle.mp3',
                sound_lls: 'sounds/categories/vehicles/LLS/motorcycle.mp3',
                hebrewName: "אופנוע",
            },

        ]
    },

    {
        name: "tools",
        hebrewName:  "כלי עבודה",
        image: "images/categories/tools/tools.png",
        words: [
            {
                name: 'axe',
                image: 'images/categories/tools/axe.png',
                sound_reading: 'sounds/categories/tools/reading/axe.mp3',
                hebrewName: "גרזן"
            },
            {
                name: 'brush',
                image: 'images/categories/tools/brush.png',
                sound_reading: 'sounds/categories/tools/reading/brush.mp3',
                hebrewName: "מברשת"
            },
            {
                name: 'drill',
                image: 'images/categories/tools/drill.png',
                sound_reading: 'sounds/categories/tools/reading/drill.mp3',
                hebrewName: "מקדחה"
            },
            {
                name: 'hammer',
                image: 'images/categories/tools/hammer.png',
                sound_reading: 'sounds/categories/tools/reading/hammer.mp3',
                hebrewName: "פטיש"
            },
            {
                name: 'screwdrive',
                image: 'images/categories/tools/screwdrive.png',
                sound_reading: 'sounds/categories/tools/reading/screwdrive.mp3',
                hebrewName: "מברג"
            },
            {
                name: 'nail',
                image: 'images/categories/tools/nail.png',
                sound_reading: 'sounds/categories/tools/reading/nail.mp3',
                hebrewName: "מסמר"
            },
            {
                name: 'saw',
                image: 'images/categories/tools/saw.png',
                sound_reading: 'sounds/categories/tools/reading/saw.mp3',
                hebrewName: "מסור"
            },
            {
                name: 'scisors',
                image: 'images/categories/tools/scisors.png',
                sound_reading: 'sounds/categories/tools/reading/scisors.mp3',
                hebrewName: "מספריים"
            },
        ]
    },

    {
        name: "musical_tools",
        hebrewName:  "כלי נגינה",
        image: "images/categories/musical_tools/musical_tools.png",
        words: [
            {
                name: 'accordion',
                image: 'images/categories/musical_tools/accordion.png',
                sound_reading: 'sounds/categories/musical_tools/reading/accordion.mp3',
                sound_hearing: 'sounds/categories/musical_tools/hearing/accordion.mp3',
                hebrewName: "אקורדיון"
            },

            {
                name: 'guitar',
                image: 'images/categories/musical_tools/guitar.png',
                sound_reading: 'sounds/categories/musical_tools/reading/guitar.mp3',
                sound_hearing: 'sounds/categories/musical_tools/hearing/guitar.mp3',
                hebrewName: "גיטרה"
            },

            {
                name: 'trumpet',
                image: 'images/categories/musical_tools/trumpet.png',
                sound_reading: 'sounds/categories/musical_tools/reading/trumpet.mp3',
                sound_hearing: 'sounds/categories/musical_tools/hearing/trumpet.mp3',
                hebrewName: "חצוצרה"
            },

            {
                name: 'darbuka',
                image: 'images/categories/musical_tools/darbuka.png',
                sound_reading: 'sounds/categories/musical_tools/reading/darbuka.mp3',
                sound_hearing: 'sounds/categories/musical_tools/hearing/darbuka.mp3',
                hebrewName: "דרבוקה"
            },

            {
                name: 'drums',
                image: 'images/categories/musical_tools/drums.png',
                sound_reading: 'sounds/categories/musical_tools/reading/drums.mp3',
                sound_hearing: 'sounds/categories/musical_tools/hearing/drums.mp3',
                hebrewName: "תופים"
            },

            {
                name: 'flute',
                image: 'images/categories/musical_tools/flute.png',
                sound_reading: 'sounds/categories/musical_tools/reading/flute.mp3',
                sound_hearing: 'sounds/categories/musical_tools/hearing/flute.mp3',
                hebrewName: "חליל"
            },

            {
                name: 'piano',
                image: 'images/categories/musical_tools/piano.png',
                sound_reading: 'sounds/categories/musical_tools/reading/piano.mp3',
                sound_hearing: 'sounds/categories/musical_tools/hearing/piano.mp3',
                hebrewName: "פסנתר"
            },

            {
                name: 'triangle',
                image: 'images/categories/musical_tools/triangle.png',
                sound_reading: 'sounds/categories/musical_tools/reading/triangle.mp3',
                sound_hearing: 'sounds/categories/musical_tools/hearing/triangle.mp3',
                hebrewName: "משולש"
            },

            {
                name: 'violin',
                image: 'images/categories/musical_tools/violin.png',
                sound_reading: 'sounds/categories/musical_tools/reading/violin.mp3',
                sound_hearing: 'sounds/categories/musical_tools/hearing/violin.mp3',
                hebrewName: "כינור"
            },

            {
                name: 'whistle',
                image: 'images/categories/musical_tools/whistle.png',
                sound_reading: 'sounds/categories/musical_tools/reading/whistle.mp3',
                sound_hearing: 'sounds/categories/musical_tools/hearing/whistle.mp3',
                hebrewName: "משרוקית"
            },
        ]
    },

    {
        name: "home",
        hebrewName: "בית",
        image: "images/categories/home/home.png",
        words: [
            {
                name: 'ball',
                image: 'images/categories/home/ball.png',
                sound_reading: 'sounds/categories/home/reading/ball.mp3',
                sound_lls: 'sounds/categories/home/LLS/ball.mp3',
                hebrewName: "כדור"
            },

            {
                name: 'bell',
                image: 'images/categories/home/bell.png',
                sound_reading: 'sounds/categories/home/reading/bell.mp3',
                sound_lls: 'sounds/categories/home/LLS/bell.mp3',
                hebrewName: "פעמון"
            },

            {
                name: 'phon',
                image: 'images/categories/home/phon.png',
                sound_reading: 'sounds/categories/home/reading/phon.mp3',
                sound_lls: 'sounds/categories/home/LLS/phon.mp3',
                hebrewName:"טלפון"
            },

            {
                name: 'bath',
                image: 'images/categories/home/bath.png',
                sound_reading: 'sounds/categories/home/reading/bath.mp3',
                hebrewName: "אמבטיה"
            },

            {
                name: 'bed',
                image: 'images/categories/home/bed.png',
                sound_reading: 'sounds/categories/home/reading/bed.mp3',
                hebrewName: "מיטה"
            },

            {
                name: 'brome',
                image: 'images/categories/home/brome.png',
                sound_reading: 'sounds/categories/home/reading/brome.mp3',
                hebrewName: "מטאטא"
            },

            {
                name: 'clock',
                image: 'images/categories/home/clock.png',
                sound_reading: 'sounds/categories/home/reading/clock.mp3',
                sound_lls: 'sounds/categories/home/LLS/clock.mp3',
                hebrewName: "שעון"
            },

            {
                name: 'dining_table',
                image: 'images/categories/home/dining_table.png',
                sound_reading: 'sounds/categories/home/reading/dining_table.mp3',
                hebrewName: "שולחן"
            },

            {
                name: 'fan',
                image: 'images/categories/home/fan.png',
                sound_reading: 'sounds/categories/home/reading/fan.mp3',
                hebrewName: "מאוורר"
            },

            {
                name: 'fence',
                image: 'images/categories/home/fence.png',
                sound_reading: 'sounds/categories/home/reading/fence.mp3',
                hebrewName: "גדר"
            },

            {
                name: 'house',
                image: 'images/categories/home/house.png',
                sound_reading: 'sounds/categories/home/reading/house.mp3',
                hebrewName: "בית"
            },

            {
                name: 'lamp',
                image: 'images/categories/home/lamp.png',
                sound_reading: 'sounds/categories/home/reading/lamp.mp3',
                hebrewName: "מנורה"
            },

            {
                name: 'sofa',
                image: 'images/categories/home/sofa.png',
                sound_reading: 'sounds/categories/home/reading/sofa.mp3',
                hebrewName: "ספה"
            },

            {
                name: 'television',
                image: 'images/categories/home/television.png',
                sound_reading: 'sounds/categories/home/reading/television.mp3',
                hebrewName: "טלוויזיה"
            },

            {
                name: 'window',
                image: 'images/categories/home/window.png',
                sound_reading: 'sounds/categories/home/reading/window.mp3',
                hebrewName: "חלון"
            },
        ]
    },

    {
        name: "food",
        hebrewName: "אוכל",
        image: "images/categories/food/food.png",
        words: [
            {
                name: 'avocado',
                image: 'images/categories/food/avocado.png',
                sound_reading: 'sounds/categories/food/reading/avocado.mp3',
                hebrewName: "אבוקדו"
            },

            {
                name: 'banana',
                image: 'images/categories/food/banana.png',
                sound_reading: 'sounds/categories/food/reading/banana.mp3',
                hebrewName: "בננה"
            },

            {
                name: 'bread',
                image: 'images/categories/food/bread.png',
                sound_reading: 'sounds/categories/food/reading/bread.mp3',
                hebrewName: "לחם"
            },

            {
                name: 'brokoly',
                image: 'images/categories/food/brokoly.png',
                sound_reading: 'sounds/categories/food/reading/brokoly.mp3',
                hebrewName: "ברוקולי"
            },

            {
                name: 'burger',
                image: 'images/categories/food/burger.png',
                sound_reading: 'sounds/categories/food/reading/burger.mp3',
                hebrewName: "המבורגר"
            },

            {
                name: 'carot',
                image: 'images/categories/food/carot.png',
                sound_reading: 'sounds/categories/food/reading/carot.mp3',
                hebrewName: "גזר"
            },

            {
                name: 'cherry',
                image: 'images/categories/food/cherry.png',
                sound_reading: 'sounds/categories/food/reading/cherry.mp3',
                hebrewName: "דובדבן"
            },

            {
                name: 'chicken',
                image: 'images/categories/food/chicken.png',
                sound_reading: 'sounds/categories/food/reading/chicken.mp3',
                hebrewName: "עוף"
            },

            {
                name: 'chicken_stick',
                image: 'images/categories/food/chicken_stick.png',
                sound_reading: 'sounds/categories/food/reading/chicken_stick.mp3',
                hebrewName: "פולקה"
            },

            {
                name: 'chips',
                image: 'images/categories/food/chips.png',
                sound_reading: 'sounds/categories/food/reading/chips.mp3',
                hebrewName: "צ'יפס'"
            },

            {
                name: 'cookie',
                image: 'images/categories/food/cookie.png',
                sound_reading: 'sounds/categories/food/reading/cookie.mp3',
                hebrewName: "עוגיה"
            },

            {
                name: 'corn',
                image: 'images/categories/food/corn.png',
                sound_reading: 'sounds/categories/food/reading/corn.mp3',
                hebrewName: "תירס"
            },

            {
                name: 'eggplant',
                image: 'images/categories/food/eggplant.png',
                sound_reading: 'sounds/categories/food/reading/eggplant.mp3',
                hebrewName: "חציל"
            },

            {
                name: 'hotdog',
                image: 'images/categories/food/hotdog.png',
                sound_reading: 'sounds/categories/food/reading/hotdog.mp3',
                hebrewName: "נקניקיה"
            },

            {
                name: 'icecream',
                image: 'images/categories/food/icecream.png',
                sound_reading: 'sounds/categories/food/reading/icecream.mp3',
                hebrewName: "גלידה"
            },

            {
                name: 'kiwi',
                image: 'images/categories/food/kiwi.png',
                sound_reading: 'sounds/categories/food/reading/kiwi.mp3',
                hebrewName: "קיוי"
            },

            {
                name: 'lemon',
                image: 'images/categories/food/lemon.png',
                sound_reading: 'sounds/categories/food/reading/lemon.mp3',
                hebrewName: "לימון"
            },

            {
                name: 'pancake',
                image: 'images/categories/food/pancake.png',
                sound_reading: 'sounds/categories/food/reading/pancake.mp3',
                hebrewName: "פנקייק"
            },

            {
                name: 'pepper',
                image: 'images/categories/food/pepper.png',
                sound_reading: 'sounds/categories/food/reading/pepper.mp3',
                hebrewName: "פלפל"
            },

            {
                name: 'pineapple',
                image: 'images/categories/food/pineapple.png',
                sound_reading: 'sounds/categories/food/reading/pineapple.mp3',
                hebrewName: "אננס"
            },

            {
                name: 'pizza',
                image: 'images/categories/food/pizza.png',
                sound_reading: 'sounds/categories/food/reading/pizza.mp3',
                hebrewName: "פיצה"
            },

            {
                name: 'salad',
                image: 'images/categories/food/salad.png',
                sound_reading: 'sounds/categories/food/reading/salad.mp3',
                hebrewName: "סלט"
            },

            {
                name: 'sandwich',
                image: 'images/categories/food/sandwich.png',
                sound_reading: 'sounds/categories/food/reading/sandwich.mp3',
                hebrewName: "כריך"
            },

            {
                name: 'spagethi',
                image: 'images/categories/food/spagethi.png',
                sound_reading: 'sounds/categories/food/reading/spagethi.mp3',
                hebrewName: "ספגטי"
            },

            {
                name: 'steak',
                image: 'images/categories/food/steak.png',
                sound_reading: 'sounds/categories/food/reading/steak.mp3',
                hebrewName: "סטייק"
            },

            {
                name: 'strawberry',
                image: 'images/categories/food/strawberry.png',
                sound_reading: 'sounds/categories/food/reading/strawberry.mp3',
                hebrewName: "תות"
            },
        ]
    },
    {
        name: "animals",
        hebrewName:  "חיות",
        image: "images/categories/animals/animals.png",
        words: [
            {
                name: 'bird',
                hebrewName: 'ציפור',
                image: 'images/categories/animals/bird.png',
                sound_hearing: 'sounds/categories/animals/hearing/bird.mp3',
                sound_reading: 'sounds/categories/animals/reading/bird.mp3',
                sound_lls: 'sounds/categories/animals/LLS/bird.mp3'
            },
            {
                name: 'cat',
                hebrewName: 'חתול',
                image: 'images/categories/animals/cat.png',
                sound_hearing: 'sounds/categories/animals/hearing/cat.mp3',
                sound_reading: 'sounds/categories/animals/reading/cat.mp3',
                sound_lls: 'sounds/categories/animals/LLS/cat.mp3'
            },
            {
                name: 'chicken',
                hebrewName: 'תרנגול',
                image: 'images/categories/animals/chicken.png',
                sound_hearing: 'sounds/categories/animals/hearing/chicken.mp3',
                sound_reading: 'sounds/categories/animals/reading/chicken.mp3',
                sound_lls: 'sounds/categories/animals/LLS/chicken.mp3'
            },
            {
                name: 'dog',
                hebrewName: 'כלב',
                image: 'images/categories/animals/dog.png',
                sound_hearing: 'sounds/categories/animals/hearing/dog.mp3',
                sound_reading: 'sounds/categories/animals/reading/dog.mp3',
                sound_lls: 'sounds/categories/animals/LLS/dog.mp3'
            },
            {
                name: 'elephant',
                hebrewName: 'פיל',
                image: 'images/categories/animals/elephant.png',
                sound_hearing: 'sounds/categories/animals/hearing/elephant.mp3',
                sound_reading: 'sounds/categories/animals/reading/elephant.mp3'
            },
            {
                name: 'frog',
                hebrewName: 'צפרדע',
                image: 'images/categories/animals/frog.png',
                sound_hearing: 'sounds/categories/animals/hearing/frog.mp3',
                sound_reading: 'sounds/categories/animals/reading/frog.mp3'
            },
            {
                name: 'horse',
                hebrewName: 'סוס',
                image: 'images/categories/animals/horse.png',
                sound_hearing: 'sounds/categories/animals/hearing/horse.mp3',
                sound_reading: 'sounds/categories/animals/reading/horse.mp3',
                sound_lls: 'sounds/categories/animals/LLS/horse.mp3'
            },
            {
                name: 'monkey',
                hebrewName: 'קוף',
                image: 'images/categories/animals/monkey.png',
                sound_hearing: 'sounds/categories/animals/hearing/monkey.mp3',
                sound_reading: 'sounds/categories/animals/reading/monkey.mp3'
            },
            {
                name: 'sheep',
                hebrewName: 'כבשה',
                image: 'images/categories/animals/sheep.png',
                sound_hearing: 'sounds/categories/animals/hearing/sheep.mp3',
                sound_reading: 'sounds/categories/animals/reading/sheep.mp3',
                sound_lls: 'sounds/categories/animals/LLS/sheep.mp3'
            },
            {
                name: 'tiger',
                hebrewName: 'נמר',
                image: 'images/categories/animals/tiger.png',
                sound_hearing: 'sounds/categories/animals/hearing/tiger.mp3',
                sound_reading: 'sounds/categories/animals/reading/tiger.mp3'
            },
            {
                name: 'cow',
                hebrewName: 'פרה',
                image: 'images/categories/animals/cow.png',
                sound_hearing: 'sounds/categories/animals/hearing/cow.mp3',
                sound_reading: 'sounds/categories/animals/reading/cow.mp3',
                sound_lls: 'sounds/categories/animals/LLS/cow.mp3'
            },
            {
                name: 'bear',
                hebrewName: 'דוב',
                image: 'images/categories/animals/bear.png',
                sound_reading: 'sounds/categories/animals/reading/bear.mp3'
            },
            {
                name: 'crocodile',
                hebrewName: 'תנין',
                image: 'images/categories/animals/crocodile.png',
                sound_reading: 'sounds/categories/animals/reading/crocodile.mp3'
            },
            {
                name: 'fish',
                hebrewName: 'דג',
                image: 'images/categories/animals/fish.png',
                sound_reading: 'sounds/categories/animals/reading/fish.mp3'
            },
            {
                name: 'fox',
                hebrewName: 'שועל',
                image: 'images/categories/animals/fox.png',
                sound_reading: 'sounds/categories/animals/reading/fox.mp3'
            },
            {
                name: 'giraffe',
                hebrewName: 'גירפה',
                image: 'images/categories/animals/giraffe.png',
                sound_reading: 'sounds/categories/animals/reading/giraffe.mp3'
            },
            {
                name: 'lion',
                hebrewName: 'אריה',
                image: 'images/categories/animals/lion.png',
                sound_reading: 'sounds/categories/animals/reading/lion.mp3',
                sound_lls: 'sounds/categories/animals/LLS/lion.mp3'
            },
            {
                name: 'rhinoceros',
                hebrewName: 'קרנף',
                image: 'images/categories/animals/rhinoceros.png',
                sound_reading: 'sounds/categories/animals/reading/rhinoceros.mp3'
            },
            {
                name: 'turtle',
                hebrewName: 'צב',
                image: 'images/categories/animals/turtle.png',
                sound_reading: 'sounds/categories/animals/reading/turtle.mp3'
            },
            {
                name: 'vulture',
                hebrewName: 'נשר',
                image: 'images/categories/animals/vulture.png',
                sound_reading: 'sounds/categories/animals/reading/vulture.mp3'
            },
            {
                name: 'zebra',
                hebrewName: 'זברה',
                image: 'images/categories/animals/zebra.png',
                sound_reading: 'sounds/categories/animals/reading/zebra.mp3'
            },
            {
                name: 'donkey',
                hebrewName: 'חמור',
                image: 'images/categories/animals/donkey.png',
                sound_reading: 'sounds/categories/animals/reading/donkey.mp3',
                sound_lls: 'sounds/categories/animals/LLS/donkey.mp3'
            },

            {
                name: 'duck',
                hebrewName: 'ברווז',
                image: 'images/categories/animals/duck.png',
                sound_reading: 'sounds/categories/animals/reading/duck.mp3',
                sound_lls: 'sounds/categories/animals/LLS/duck.mp3'
            },

            {
                name: 'fly',
                hebrewName: 'זבוב',
                image: 'images/categories/animals/fly.png',
                sound_reading: 'sounds/categories/animals/reading/fly.mp3',
                sound_lls: 'sounds/categories/animals/LLS/fly.mp3'
            },

            {
                name: 'snake',
                hebrewName: 'נחש',
                image: 'images/categories/animals/snake.png',
                sound_reading: 'sounds/categories/animals/reading/snake.mp3',
                sound_lls: 'sounds/categories/animals/LLS/snake.mp3'
            },
        ]
    },
];
export default categories;
