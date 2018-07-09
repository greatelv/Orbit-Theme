
const profile = {
  profilePhoto: 'assets/images/profile.jpg',
  name: '전태경 Jay',
  job: '소프트웨어 엔지니어',
  mail: 'greatelv@gmail.com',
  mobile: '010 4630 1929',
  linkedin: 'linkedin.com/in/jay-jeon',
  github: 'github.com/greatelv',
  instagram: 'zaaay.t'
}

const educations = [
  {
    degree: '컴퓨터공학 학사',
    school: '서울과학기술대학교',
    time: '2008 - 2015'
  },
  {
    degree: '졸업',
    school: '서울경신고등학교',
    time: '2005 - 2008'
  }
]

const careerSummary = [
  '현재는 일을 좀 쉬고 세계를 여행중입니다.</br>',
  'I want to make common sense world.',
].join('');

const careers = [
  {
    jobTitle: 'Senior Software Engineer',
    time: '2015.3 - 2018.7',
    company: 'EA Korea, 서울',
    details: '레이싱 게임 개발',
  },
  {
    jobTitle: 'Technical Lead',
    time: '2014.7 - 2015.2',
    company: '핸디썸, 대구',
    details: '핸디라이트 개발',
  },
  {
    jobTitle: '선임 연구원',
    time: '2012.6 - 2014.4',
    company: 'Handstudio, 서울',
    details: '스마트TV 개발',
  },
];

const projects = [
  {
    title: 'Need For Speed EDGE',
    link: '#',
    detail: 'hahaha',
  },
  {
    title: 'Need For Speed EDGE',
    link: '',
    detail: 'hahaha',
  }
];

const skills = [
  'Typescript', 'Javascript', 'Angular', 'Nodejs', 'ES6', 'Restful', 'HTML', 'CSS',
  'Webpack', 'Gulp', 'Browserify', 'React', 'Redux', 'Lodash', 'jQuery', 'Vuejs',
  'PhantomJS', 'Jasmine',
  'Git', 'Perforce', 'Subversion',
  'Java', 'Spring', 'Mybatis', 'Jersey', 'SQL', 'JSP/Servlet',
  'Jenkins', 'JIRA', 'Confluence',
  'Atom IDE'
];

class Resume extends Vue {
  constructor () {
    super({
      el: '#resume',
      data: { profile, educations, careerSummary, careers, skills },
      created: () => {},
      mounted: () => {}  //after rendering
    })
  }
}

new Resume();
