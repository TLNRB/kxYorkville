import bodyImg from '../assets/images/classes/bodyBuilding.jpg'
import yogaImg from '../assets/images/classes/yoga.jpg'
import boxingImg from '../assets/images/classes/box.jpg'
import crossfitImg from '../assets/images/classes/crossfit.jpg'

const classesDB = [
  {
    id: 1,
    name: 'Body Building',
    route: 'bodyBuilding',
    img: bodyImg,
    description:
      "Bodybuilding is the use of progressive resistance exercise to control and develop one's musculature for aesthetic purposes. An individual who engages in this activity is referred to as a bodybuilder.",
    intensity: 'Moderate',
    duration: '60',
    class: 'Private',
    coaches: ['John Doe', 'Jane Doe']
  },
  {
    id: 2,
    name: 'Yoga',
    route: 'yoga',
    img: yogaImg,
    description:
      'Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. Yoga is one of the six orthodox schools of Hindu philosophical traditions.',
    intensity: 'Low',
    duration: '45',
    class: 'Group',
    coaches: ['John Doe', 'Jane Doe']
  },
  {
    id: 3,
    name: 'Boxing',
    route: 'boxing',
    img: boxingImg,
    description:
      'Boxing is a combat sport in which two people, usually wearing protective gloves, throw punches at each other for a predetermined amount of time in a boxing ring.',
    intensity: 'High',
    duration: '60',
    class: 'Group',
    coaches: ['John Doe', 'Jane Doe']
  },
  {
    id: 4,
    name: 'Crossfit',
    route: 'crossfit',
    img: crossfitImg,
    description:
      'CrossFit is a branded fitness regimen created by Greg Glassman and is a registered trademark of CrossFit, Inc. which was founded by Greg Glassman and Lauren Jenai in 2000.',
    intensity: 'Extreme',
    duration: '50',
    class: 'Group',
    coaches: ['John Doe', 'Jane Doe']
  }
]

export default classesDB
