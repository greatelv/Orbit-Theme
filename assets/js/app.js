const profile = {
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
    school: '서울 과학 기술대학교',
    time: '2011 - 2012'
  }
]

class Resume extends Vue {
  constructor () {
    super({
      el: '#resume',
      data: { profile, educations },
      created: () => {},
      mounted: () => {}  //after rendering
    })
  }
}

new Resume();
