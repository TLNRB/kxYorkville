import yogaImg from '../assets/images/classes/yoga.jpg'
import crossfitImg from '../assets/images/classes/crossfit.jpg'
import boxingImg from '../assets/images/classes/box.jpg'

const timetableDB = [
  {
    id: 0,
    day: 'Sunday',
    classes: [
      {
        id: 1,
        name: 'Yoga',
        img: yogaImg,
        from: '9:00',
        to: '9:45',
        coach: 'John Doe',
        size: 25
      },
      {
        id: 2,
        name: 'Crossfit',
        img: crossfitImg,
        from: '12:00',
        to: '12:50',
        coach: 'Jane Doe',
        size: 30
      },
      {
        id: 3,
        name: 'Crossfit',
        img: crossfitImg,
        from: '15:00',
        to: '15:50',
        coach: 'John Doe',
        size: 30
      },
      {
        id: 4,
        name: 'Boxing',
        img: boxingImg,
        from: '18:00',
        to: '19:00',
        coach: 'John Doe',
        size: 20
      }
    ]
  },
  {
    id: 1,
    day: 'Monday',
    classes: [
      {
        id: 1,
        name: 'Yoga',
        img: yogaImg,
        from: '9:00',
        to: '9:45',
        coach: 'Jane Doe',
        size: 25
      },
      {
        id: 2,
        name: 'Crossfit',
        img: crossfitImg,
        from: '11:00',
        to: '11:50',
        coach: 'John Doe',
        size: 30
      },
      {
        id: 3,
        name: 'Crossfit',
        img: crossfitImg,
        from: '15:00',
        to: '15:50',
        coach: 'Jane Doe',
        size: 30
      },
      {
        id: 4,
        name: 'Boxing',
        img: boxingImg,
        from: '18:00',
        to: '19:00',
        coach: 'John Doe',
        size: 20
      }
    ]
  },
  {
    id: 2,
    day: 'Tuesday',
    classes: [
      {
        id: 1,
        name: 'Yoga',
        img: yogaImg,
        from: '8:30',
        to: '9:15',
        coach: 'John Doe',
        size: 25
      },
      {
        id: 2,
        name: 'Crossfit',
        img: crossfitImg,
        from: '12:00',
        to: '12:50',
        coach: 'Jane Doe',
        size: 30
      },
      {
        id: 3,
        name: 'Yoga',
        img: yogaImg,
        from: '17:00',
        to: '17:45',
        coach: 'Jane Doe',
        size: 25
      },
      {
        id: 4,
        name: 'Boxing',
        img: boxingImg,
        from: '19:00',
        to: '20:00',
        coach: 'John Doe',
        size: 20
      }
    ]
  },
  {
    id: 3,
    day: 'Wednesday',
    classes: [
      {
        id: 1,
        name: 'Yoga',
        img: yogaImg,
        from: '9:30',
        to: '10:15',
        coach: 'John Doe',
        size: 25
      },
      {
        id: 2,
        name: 'Crossfit',
        img: crossfitImg,
        from: '11:00',
        to: '11:50',
        coach: 'Jane Doe',
        size: 30
      },
      {
        id: 3,
        name: 'Crossfit',
        img: crossfitImg,
        from: '17:00',
        to: '17:50',
        coach: 'John Doe',
        size: 30
      },
      {
        id: 4,
        name: 'Boxing',
        img: boxingImg,
        from: '18:30',
        to: '19:30',
        coach: 'John Doe',
        size: 20
      }
    ]
  },
  {
    id: 4,
    day: 'Thursday',
    classes: [
      {
        id: 1,
        name: 'Yoga',
        img: yogaImg,
        from: '8:30',
        to: '9:15',
        coach: 'John Doe',
        size: 25
      },
      {
        id: 2,
        name: 'Crossfit',
        img: crossfitImg,
        from: '11:00',
        to: '11:50',
        coach: 'Jane Doe',
        size: 30
      },
      {
        id: 3,
        name: 'Yoga',
        img: yogaImg,
        from: '16:00',
        to: '16:45',
        coach: 'Jane Doe',
        size: 25
      },
      {
        id: 4,
        name: 'Crossfit',
        img: crossfitImg,
        from: '17:30',
        to: '18:20',
        coach: 'John Doe',
        size: 30
      },
      {
        id: 5,
        name: 'Boxing',
        img: boxingImg,
        from: '19:00',
        to: '20:00',
        coach: 'John Doe',
        size: 20
      }
    ]
  },
  {
    id: 5,
    day: 'Friday',
    classes: [
      {
        id: 1,
        name: 'Yoga',
        img: yogaImg,
        from: '9:30',
        to: '10:15',
        coach: 'John Doe',
        size: 25
      },
      {
        id: 2,
        name: 'Crossfit',
        img: crossfitImg,
        from: '14:00',
        to: '14:50',
        coach: 'John Doe',
        size: 30
      },
      {
        id: 3,
        name: 'Crossfit',
        img: crossfitImg,
        from: '17:00',
        to: '17:50',
        coach: 'Jane Doe',
        size: 30
      },
      {
        id: 4,
        name: 'Boxing',
        img: boxingImg,
        from: '19:15',
        to: '20:15',
        coach: 'John Doe',
        size: 20
      }
    ]
  },
  {
    id: 6,
    day: 'Saturday',
    classes: [
      {
        id: 1,
        name: 'Yoga',
        img: yogaImg,
        from: '10:00',
        to: '10:45',
        coach: 'Jane Doe',
        size: 25
      },
      {
        id: 2,
        name: 'Crossfit',
        img: crossfitImg,
        from: '13:00',
        to: '13:50',
        coach: 'Jane Doe',
        size: 30
      },
      {
        id: 3,
        name: 'Yoga',
        img: yogaImg,
        from: '15:00',
        to: '15:45',
        coach: 'Jane Doe',
        size: 25
      },
      {
        id: 4,
        name: 'Boxing',
        img: boxingImg,
        from: '17:45',
        to: '18:45',
        coach: 'John Doe',
        size: 20
      }
    ]
  }
]

export default timetableDB
