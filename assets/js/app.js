
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
    details: [
      '게임 제작사 Electronic Arts 한국 스튜디오의 일원으로 ',
      '넥슨에서 퍼블리싱한 레이싱 게임 Need For Speed Edge의 초기 설계부터 런칭까지 함께 했습니다. ',
      '게임 콘텐츠에서 필요한 Frontend / Backend 개발, UI 성능 최적화 그리고 Frontend 개발환경 유지보수를 주로 담당했습니다. ',
    ].join(''),
  },
  {
    jobTitle: '기술 책임',
    time: '2014.7 - 2015.2',
    company: '핸디썸, 대구',
    details: [
      '대구시에서 운영하는 스마트벤처캠퍼스의 벤처사관학교 대회 입상을 시작으로 창업을 했습니다. ',
      '자기소개서를 온라인으로 첨삭해주는 매칭 플랫폼 "핸디라이트"를 거진 8개월동안 만들었고 ',
      '서비스 개발을 총괄하는 자리에 있었습니다. 서비스 런칭 직후 문을 닫았지만 기억에 남는 경험이었습니다.',
    ].join(''),
  },
  {
    jobTitle: '선임 연구원',
    time: '2012.6 - 2014.4',
    company: 'Handstudio, 서울',
    details: [
      '디지털 미디어 에이전시 핸드스튜디오에서 본격적으로 개발을 시작했습니다. ',
      '다수의 크고 작은 스마트 TV 애플리케이션과 웹서비스를 구현했고 디버깅 및 유지보수를 담당했습니다. ',
    ].join(''),
  },
  {
    jobTitle: '사원',
    time: '2010.3 - 2012.5',
    company: '송우아이엔티, 서울',
    details: [
      '병역특례로 첫 사회 생활을 시작했습니다. ',
      '입사후 퇴사할때까지 회사에서 운영하고 있었던 Java 웹환경의 영어교육관리 솔루션을 고도화하고 각 업체에 맞는 기능을 개발했습니다. ',
      '회사 공식홈페이지를 만들었고 회사에서 요구하는 여러 프로토타입 개발도 담당했습니다. ',
    ].join(''),
  },
];

const projects = [
  {
    title: 'Need For Speed EDGE',
    link: 'https://www.ea.com/studios/spearhead-kr/studio',
    detail: '레이싱 온라인 게임 개발',
    skills: 'Typescript, Nodejs, Javascript, ES6, AngularJS, React, Redux, Webpack, Browserify, Gulp, Redis, RabbitMQ, MongoDB',
  },
  {
    title: 'Beemeal',
    link: 'https://play.google.com/store/apps/details?id=com.beemeal',
    detail: '취업정보 추천 모바일 앱 개발',
    skills: 'Apache Cordova, HTML, CSS, Javascript, Lodash',
  },
  {
    title: 'Basic Design',
    link: 'https://apkpure.com/basic-design/com.bd',
    detail: '기초디자인교육 앱 개발',
    skills: 'Apache Cordova, HTML, CSS, Javascript, Lodash, Jersey, Restful',
  },
  {
    title: 'HandyWrite',
    link: 'http://svik.or.kr/page/school/view.php?id=109&cat=sw',
    detail: '취업포탈 서비스 개발',
    skills: 'Spring, Mysql, Jersey, Mybatis, jQuery, Amazon EC2, Melody, HTML, Javascript, Lodash',
  },
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
