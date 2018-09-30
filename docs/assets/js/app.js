
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
  '상식이 통하는 세상 만들기.</br>',
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
      '서비스 개발을 총괄하는 자리에 있었습니다. 서비스 런칭 직후 어른의 사정으로 문을 닫았지만 기억에 남는 경험이었습니다.',
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

const skills = [
  'Typescript', 'Javascript', 'Angular', 'Nodejs', 'ES6', 'Restful', 'HTML', 'CSS',
  'Webpack', 'Gulp', 'Browserify', 'React', 'Redux', 'Lodash', 'jQuery', 'Vuejs',
  'PhantomJS', 'Jasmine',
  'Git', 'Perforce', 'Subversion',
  'Java', 'Spring', 'Mybatis', 'Jersey', 'SQL', 'JSP/Servlet',
  'Jenkins', 'JIRA', 'Confluence',
  'Atom IDE'
];

const projects = [
  {
    title: 'Need For Speed EDGE',
    summary: '레이싱 온라인 게임 개발',
    time: '2015.3 - 2018.7',
    details: [
      'Typescript, Angular, React + Redux 등을 활용하여 클라이언트 UI 개발',
      'NodeJS 기반 MSA 환경에서 게임서버 개발',
      '게임내에 인벤토리, 상점, 차고, 퀘스트등 다수의 게임 콘텐츠 구현 및 유지보수',
      '다수의 클라이언트 디펜던시를 지속적으로 업그레이드하고 안정화, 관리 함',
      '플래시 소스맵으로 추출된 정보를 DOM에 맵핑하여 UI를 렌더링하는 FaceJS 구현 및 유지보수',
      '모듈번들러를 Browserify에서 Webpack으로 마이그레이션하여 빌드 최적화',
      '퍼블리셔에게 편의를 제공하는 OPTOOL 개발 및 유지보수',
      'Swarm이란 도구를 사용하여 팀멤버와 코드리뷰',
    ],
  },
  {
    title: 'HandyWrite',
    summary: '취업포탈 서비스 개발',
    time: '2014.7 - 2015.1',
    details: [
      '서비스 핸디라이트의 구조를 설계',
      '순수 js 모듈패턴을 이용하여 화면을 단위로 UI 개발',
      '드래그로 영역 지정 후 코멘트가 가능한 전용 에디터 구현',
      '전체 페이지 마크업 및 스타일링',
      'Spring, Jersey, Mybatis 등의 도구를 이용하여 Http API 설계 및 구현',
      'Melody를 통한 서비스 모니터링 및 커넥션 관리',
      'AWS를 통한 서비스 배포',
    ],
  },
  {
    title: 'Brain Training',
    summary: '지능개발 게임 구현 (스마트 TV 애플리케이션)',
    time: '2014.1 - 2014.3',
    details: [
      '웹 프론트엔드 기술을 활용하여 스마트 TV 게임 구현',
      '플레이어, 기록, 통계등의 콘텐츠를 활용하기위한 DB 설계 및 구축',
      'Jersey, Mybatis 등의 도구를 이용하여 Http API 설계 및 구현',
      'TV 앱 개발을 위한 자체 라이브러리 Hz를 활용하여 포커스 처리',
      '초기 오픈 시점의 20종 게임 구현 (도형매칭, 색상매칭, 길찾기 등)',
      '임의의 게임 인스턴스를 적절한 시점에 불러오고 지워주는 게임매니저 구현',
    ],
  },
  {
    title: 'Smart Simulator',
    summary: '삼성닷컴의 가이드 시뮬레이터',
    time: '2013.4 - 2013.11',
    details: [
      '각 디바이스의 가이드 스텝 및 포인팅 스텝을 위한 DB 설계 및 구축',
      'Jersey, Mybatis 등의 도구를 이용하여 Http API 설계 및 구현',
      'Backbone, Coffee, Handlebars 등을 이용하여 관리자 도구 구현',
      'AWS를 통한 서비스 배포',
      '삼성전자 Global QA팀과 협업하며 디버깅',
    ],
  },
];

const allProjectLink = 'https://drive.google.com/open?id=1vysq1K3c1eYANBznP3qkxKuljgru6TkH';

class Resume extends Vue {
  constructor () {
    super({
      el: '#resume',
      data: { profile, educations, careerSummary, careers, skills, allProjectLink },
      created: () => {},
      mounted: () => {}  //after rendering
    })
  }
}

new Resume();
