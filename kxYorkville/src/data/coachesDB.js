import bodyCoachOne from '../assets/images/coaches/bodyBuildingCoachOne.jpg'
import bodyCoachTwo from '../assets/images/coaches/bodyBuildingCoachTwo.jpeg'
import crossfitCoachOne from '../assets/images/coaches/crossfitCoachOneCropped.jpg'
import crossfitCoachTwo from '../assets/images/coaches/crossfitCoachTwo.jpg'
import yogaCoachOne from '../assets/images/coaches/yogaCoachOneCropped.jpg'
import boxingCoachOne from '../assets/images/coaches/boxingCoachOne.jpg'

const coachesDB = [
  {
    id: 1,
    name: 'Jack Hummel',
    route: 'jack-hummel',
    motto:
      "Remember, consistency is key! Keep up with your training routine, and you'll see progress.",
    profession: 'Body Building',
    img: bodyCoachOne
  },
  {
    id: 2,
    name: 'Josh Davis',
    route: 'josh-davis',
    motto:
      "Nutrition is just as important as exercise. Make sure you're fueling your body with the right nutrients to support your goals.",
    profession: 'Body Building',
    img: bodyCoachTwo
  },
  {
    id: 3,
    name: 'Sara Smith',
    route: 'sara-smith',
    motto:
      "Set specific, measurable goals. Whether it's weight loss, strength gain, or improved endurance, having clear objectives will keep you on track.",
    profession: 'Crossfit',
    img: crossfitCoachOne
  },
  {
    id: 4,
    name: 'Julio Rodriguez',
    route: 'julio-rodriguez',
    motto: "Don't be afraid to push yourself. You'll be surprised at what you can achieve!",
    profession: 'Crossfit',
    img: crossfitCoachTwo
  },
  {
    id: 5,
    name: 'Liu Williams',
    route: 'liu-williams',
    motto:
      'Good form is crucial. Focus on your technique to maximize results and minimize the risk of injury.',
    profession: 'Boxing',
    img: boxingCoachOne
  },
  {
    id: 6,
    name: 'Jade Thomb',
    route: 'jade-thomb',
    motto:
      "Fitness is not just about the body; it's about the mind too. Stay positive and stay motivated.",
    profession: 'Yoga',
    img: yogaCoachOne
  }
]

export default coachesDB
