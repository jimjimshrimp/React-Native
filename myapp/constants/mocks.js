import {Linking} from 'react-native'

const requests = [
  {
    id: 1,
    mood: "Happy",
    number:4,
    thing: "play",
    place: "At home",
    month: "Jul",
    date: 28,
  },
  {
    id: 2,
    mood: "Happy",
    number:5,
    thing: "play",
    place: "At home",
    month: "Aug",
    date: 29,
  },
  {
    id: 3,
    mood: "Happy",
    number: 6,
    thing: "play",
    place: "At home",
    month: "Sep",
    date: 2,
  },

];


const videos = [
  {
    id: 1,
    name: "How to feel happier",
    description:"In this session, we're focusing on low mood and depression.",
    web:() => Linking.openURL("https://www.nhs.uk/Video/Pages/low-mood-and-depression-podcast.aspx?searchtype=Tag&searchterm=Mental+health__Moodzone&")
  },
  {
    id: 2,
    name: "How to control anxiety",
    description:"In this session, we're going to focus on how to live better with anxiety.",
    web:()=> Linking.openURL("https://www.nhs.uk/Video/Pages/anxiety-control-training-podcast.aspx?searchtype=Tag&searchterm=Mental+health__Moodzone&")
  },
  {
    id: 3,
    name: "How to cut down alcohol",
    description:' If you already feel anxious or sad, drinking can make this worse.',
    web: ()=> Linking.openURL('https://www.nhs.uk/live-well/alcohol-support/tips-on-cutting-down-alcohol/')
  },
  {
  id: 4,
  name:"Ways to manage chronic pain",
  description:'Chronic pain affects your mood, learn some tips to manage it.',
  web: ()=> Linking.openURL('https://www.nhs.uk/live-well/healthy-body/ways-to-manage-chronic-pain/')
  },
  {
  id: 5,
  name:'Tips for physical exercise',
  description:"Regular exercise can boost your mood if you have depression.",
  web: ()=> Linking.openURL('https://www.nhs.uk/conditions/stress-anxiety-depression/exercise-for-depression/')
  },
];


//const {navigation} = this.props;

const features = [
  {
    id:1,
    name:'Moods',
    image: require ('../assets/images/mood.png'),
    page: 'Moodrating'
  },

  {
id:2,
    name:'Results',
    image: require ('../assets/images/results.png'),
    page: 'Results2'
  },

  {

    id:3,
    name:'Strategies',
    image: require ('../assets/images/strategies.png'),
    page: 'Strategies'
  },
{

    id:4,
    name:'Community',
    image: require ('../assets/images/community.png'),
    page:'Home'

  },

  {

    id:5,
    name:'Emergency',
    image: require ('../assets/images/emergency.png'),
    page: 'Emergency'
  },
  {

    id:6,
    name:'Setting',
    image: require ('../assets/images/setting.png'),
    page:'Home'
  },

];


const contactlists =[ {
id:1,
name: 'Anxiety UK',
description: 'Charity providing support if you have been diagnosed with an anxiety condition.',
phone: '03444 775 774(Monday to Friday, 9.30am to 5.30pm)',
web: 'www.anxietyuk.org.uk',
webtap:()=> Linking.openURL('https://www.anxietyuk.org.uk/')
},
{
id:2,
name: 'Bipolar UK',
description:'A charity helping people living with manic depression or bipolar disorder.',
phone: 'No phone service',
web: 'www.bipolaruk.org.uk',
webtap: ()=> Linking.openURL('https://www.bipolaruk.org/')
},
{
id: 3,
name: 'Mental Health Foundation',
description: 'Provides information and support for anyone with mental health problems.',
phone: 'No phone service',
web:  ' www.mentalhealth.org.uk',
webtap:  ()=> Linking.openURL('https://www.mentalhealth.org.uk/')

},

{
  id:4,
  name: 'YoungMinds',
  description: 'Information on child and adolescent mental health. Services for parents and professionals.',
  phone:'Parents helpline 0808 802 5544 (Monday to Friday, 9.30am to 4pm)',
  web:'www.youngminds.org.uk',
  webtap: ()=> Linking.openURL('https://youngminds.org.uk/') 
},

{
  id:5,
  name: 'Alcoholics Anonymous',
  description:'Help with drinking problem',
  phone:'0845 769 7555 (24-hour helpline)',
  web:'www.alcoholics-anonymous.org.uk',
  webtap: ()=> Linking.openURL('https://www.alcoholics-anonymous.org.uk/') 
},

{
id: 6,
name: 'UK Restricted Growth Association',
description: 'Here you can find out more about restricted growth, RGA UK, and what you can do to help make society a better place for people with skeletal dysplasia.',
phone: '0300 111 1970',
web: 'https://rgauk.org/',
webtap: ()=> Linking.openURL('https://rgauk.org/')
},

];

export {
  requests,
  videos,
  features,
  contactlists,
}