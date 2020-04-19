// eslint-disable-next-line no-undef
const myStorage = window.localStorage;

const Second_Page = {
  elements: [
    {
      main: null,
    },
    {
      el_1: null,
    },
    {
      el_2: null,
    },
    {
      el_3: null,
    },
    {
      el_4: null,
    },
    {
      el_5: null,
    },
    {
      el_6: null,
    },
    {
      el_7: null,
    },
    {
      el_8: null,
    },
  ],
  pages: {
    main_page: [
      {
        word: 'Action A',
        image: './static/img/Action_A.png',
      },
      {
        word: 'Action B',
        image: './static/img/Action_B.png',
      },
      {
        word: 'Action C',
        image: './static/img/Action_C.png',
      },
      {
        word: 'Adjective',
        image: './static/img/Adjective.png',
      },
      {
        word: 'Animal A',
        image: './static/img/Animal_A.png',
      },
      {
        word: 'Animal B',
        image: './static/img/Animal_B.png',
      },
      {
        word: 'Clothes',
        image: './static/img/Clothes.png',
      },
      {
        word: 'Emotion',
        image: './static/img/Emotion.png',
      },
    ],
    action_a:
        [
          {
            word: 'cry',
            translation: 'плакать',
            image: './static/img/Action_A/cry.png',
            audioSrc: './static/audio/cry.mp3',
          },
          {
            word: 'dance',
            translation: 'танцевать',
            image: './static/img/Action_A/dance.png',
            audioSrc: './static/audio/dance.mp3',
          },
          {
            word: 'dive',
            translation: 'нырять',
            image: './static/img/Action_A/dive.png',
            audioSrc: './static/audio/dive.mp3',
          },
          {
            word: 'draw',
            translation: 'рисовать',
            image: './static/img/Action_A/draw.png',
            audioSrc: './static/audio/draw.mp3',
          },
          {
            word: 'fish',
            translation: 'ловить рыбу',
            image: './static/img/Action_A/fish.png',
            audioSrc: './static/audio/fish.mp3',
          },
          {
            word: 'fly',
            translation: 'летать',
            image: './static/img/Action_A/fly.png',
            audioSrc: './static/audio/fly.mp3',
          },
          {
            word: 'run',
            translation: 'бежать',
            image: './static/img/Action_A/run.png',
            audioSrc: './static/audio/run.mp3',
          },
          {
            word: 'jump',
            translation: 'прыгать',
            image: './static/img/Action_A/jump.png',
            audioSrc: './static/audio/jump.mp3',
          },
        ],

    action_b: [
      {
        word: 'open',
        translation: 'открывать',
        image: './static/img/Action_B/open.jpg',
        audioSrc: './static/audio/open.mp3',
      },
      {
        word: 'play',
        translation: 'играть',
        image: './static/img/Action_B/play.jpg',
        audioSrc: './static/audio/play.mp3',
      },
      {
        word: 'point',
        translation: 'указывать',
        image: './static/img/Action_B/point.jpg',
        audioSrc: './static/audio/point.mp3',
      },
      {
        word: 'ride',
        translation: 'ездить',
        image: './static/img/Action_B/ride.jpg',
        audioSrc: './static/audio/ride.mp3',
      },
      {
        word: 'run',
        translation: 'бегать',
        image: './static/img/Action_B/run.jpg',
        audioSrc: './static/audio/run.mp3',
      },
      {
        word: 'sing',
        translation: 'петь',
        image: './static/img/Action_B/sing.jpg',
        audioSrc: './static/audio/sing.mp3',
      },
      {
        word: 'skip',
        translation: 'пропускать, прыгать',
        image: './static/img/Action_B/skip.jpg',
        audioSrc: './static/audio/skip.mp3',
      },
      {
        word: 'swim',
        translation: 'плавать',
        image: './static/img/Action_B/swim.jpg',
        audioSrc: './static/audio/swim.mp3',
      },
    ],
    action_c: [
      {
        word: 'argue',
        translation: 'спорить',
        image: './static/img/Action_C/argue.jpg',
        audioSrc: './static/audio/open.mp3',
      },
      {
        word: 'build',
        translation: 'строить',
        image: './static/img/Action_C/build.jpg',
        audioSrc: './static/audio/play.mp3',
      },
      {
        word: 'carry',
        translation: 'нести',
        image: './static/img/Action_C/carry.jpg',
        audioSrc: './static/audio/point.mp3',
      },
      {
        word: 'catch',
        translation: 'ловить',
        image: './static/img/Action_C/catch.jpg',
        audioSrc: './static/audio/ride.mp3',
      },
      {
        word: 'drive',
        translation: 'водить машину',
        image: './static/img/Action_C/drive.jpg',
        audioSrc: './static/audio/run.mp3',
      },
      {
        word: 'drop',
        translation: 'падать',
        image: './static/img/Action_C/drop.jpg',
        audioSrc: './static/audio/sing.mp3',
      },
      {
        word: 'pull',
        translation: 'тянуть',
        image: './static/img/Action_C/pull.jpg',
        audioSrc: './static/audio/skip.mp3',
      },
      {
        word: 'push',
        translation: 'толкать',
        image: './static/img/Action_C/push.jpg',
        audioSrc: './static/audio/swim.mp3',
      },
    ],
    adjective: [
      {
        word: 'big',
        translation: 'большой',
        image: './static/img/Adjective/big.jpg',
        audioSrc: './static/audio/open.mp3',
      },
      {
        word: 'small',
        translation: 'маленький',
        image: './static/img/Adjective/small.jpg',
        audioSrc: './static/audio/play.mp3',
      },
      {
        word: 'fast',
        translation: 'быстрый',
        image: './static/img/Adjective/fast.jpg',
        audioSrc: './static/audio/point.mp3',
      },
      {
        word: 'slow',
        translation: 'медленный',
        image: './static/img/Adjective/slow.jpg',
        audioSrc: './static/audio/ride.mp3',
      },
      {
        word: 'friendly',
        translation: 'дружелюбный',
        image: './static/img/Adjective/friendly.jpg',
        audioSrc: './static/audio/run.mp3',
      },
      {
        word: 'unfriendly',
        translation: 'недружелюбный',
        image: './static/img/Adjective/unfriendly.jpg',
        audioSrc: './static/audio/sing.mp3',
      },
      {
        word: 'young',
        translation: 'молодой',
        image: './static/img/Adjective/young.jpg',
        audioSrc: './static/audio/skip.mp3',
      },
      {
        word: 'old',
        translation: 'старый',
        image: './static/img/Adjective/old.jpg',
        audioSrc: './static/audio/swim.mp3',
      },
    ],
    animal_a: [
      {
        word: 'cat',
        translation: 'кот',
        image: './static/img/Animal_A/cat.jpg',
        audioSrc: './static/audio/cat.mp3',
      },
      {
        word: 'chick',
        translation: 'цыплёнок',
        image: './static/img/Animal_A/chick.jpg',
        audioSrc: './static/audio/chick.mp3',
      },
      {
        word: 'chicken',
        translation: 'курица',
        image: './static/img/Animal_A/chicken.jpg',
        audioSrc: './static/audio/chicken.mp3',
      },
      {
        word: 'dog',
        translation: 'собака',
        image: './static/img/Animal_A/dog.jpg',
        audioSrc: './static/audio/dog.mp3',
      },
      {
        word: 'horse',
        translation: 'лошадь',
        image: './static/img/Animal_A/horse.jpg',
        audioSrc: './static/audio/horse.mp3',
      },
      {
        word: 'pig',
        translation: 'свинья',
        image: './static/img/Animal_A/pig.jpg',
        audioSrc: './static/audio/pig.mp3',
      },
      {
        word: 'rabbit',
        translation: 'кролик',
        image: './static/img/Animal_A/rabbit.jpg',
        audioSrc: './static/audio/rabbit.mp3',
      },
      {
        word: 'sheep',
        translation: 'овца',
        image: './static/img/Animal_A/sheep.jpg',
        audioSrc: './static/audio/sheep.mp3',
      },

    ],
    animal_b: [
      {
        word: 'bird',
        translation: 'птица',
        image: './static/img/Animal_B/bird.jpg',
        audioSrc: './static/audio/bird.mp3',
      },
      {
        word: 'fish',
        translation: 'рыба',
        image: './static/img/Animal_B/fish1.jpg',
        audioSrc: './static/audio/fish.mp3',
      },
      {
        word: 'frog',
        translation: 'жаба',
        image: './static/img/Animal_B/frog.jpg',
        audioSrc: './static/audio/frog.mp3',
      },
      {
        word: 'giraffe',
        translation: 'жирафа',
        image: './static/img/Animal_B/giraffe.jpg',
        audioSrc: './static/audio/giraffe.mp3',
      },
      {
        word: 'lion',
        translation: 'лев',
        image: './static/img/Animal_B/lion.jpg',
        audioSrc: './static/audio/lion.mp3',
      },
      {
        word: 'mouse',
        translation: 'мышь',
        image: './static/img/Animal_B/mouse.jpg',
        audioSrc: './static/audio/mouse.mp3',
      },
      {
        word: 'turtle',
        translation: 'черепаха',
        image: './static/img/Animal_B/turtle.jpg',
        audioSrc: './static/audio/turtle.mp3',
      },
      {
        word: 'dolphin',
        translation: 'дельфин',
        image: './static/img/Animal_B/dolphin.jpg',
        audioSrc: './static/audio/dolphin.mp3',
      },
    ],
    clothes: [
      {
        word: 'skirt',
        translation: 'юбка',
        image: './static/img/Clothes/skirt.jpg',
        audioSrc: './static/audio/skirt.mp3',
      },
      {
        word: 'pants',
        translation: 'брюки',
        image: './static/img/Clothes/pants.jpg',
        audioSrc: './static/audio/pants.mp3',
      },
      {
        word: 'blouse',
        translation: 'блузка',
        image: './static/img/Clothes/blouse.jpg',
        audioSrc: './static/audio/blouse.mp3',
      },
      {
        word: 'dress',
        translation: 'платье',
        image: './static/img/Clothes/dress.jpg',
        audioSrc: './static/audio/dress.mp3',
      },
      {
        word: 'boot',
        translation: 'ботинок',
        image: './static/img/Clothes/boot.jpg',
        audioSrc: './static/audio/boot.mp3',
      },
      {
        word: 'shirt',
        translation: 'рубашка',
        image: './static/img/Clothes/shirt.jpg',
        audioSrc: './static/audio/shirt.mp3',
      },
      {
        word: 'coat',
        translation: 'пальто',
        image: './static/img/Clothes/coat.jpg',
        audioSrc: './static/audio/coat.mp3',
      },
      {
        word: 'shoe',
        translation: 'туфли',
        image: './static/img/Clothes/shoe.jpg',
        audioSrc: './static/audio/shoe.mp3',
      },

    ],
    emotion: [
      {
        word: 'sad',
        translation: 'грустный',
        image: './static/img/Emotion/sad.jpg',
        audioSrc: './static/audio/sad.mp3',
      },
      {
        word: 'angry',
        translation: 'сердитый',
        image: './static/img/Emotion/angry.jpg',
        audioSrc: './static/audio/angry.mp3',
      },
      {
        word: 'happy',
        translation: 'счастливый',
        image: './static/img/Emotion/happy.jpg',
        audioSrc: './static/audio/happy.mp3',
      },
      {
        word: 'tired',
        translation: 'уставший',
        image: './static/img/Emotion/tired.jpg',
        audioSrc: './static/audio/tired.mp3',
      },
      {
        word: 'surprised',
        translation: 'удивлённый',
        image: './static/img/Emotion/surprised.jpg',
        audioSrc: './static/audio/surprised.mp3',
      },
      {
        word: 'scared',
        translation: 'испуганный',
        image: './static/img/Emotion/scared.jpg',
        audioSrc: './static/audio/scared.mp3',
      },
      {
        word: 'smile',
        translation: 'улыбка',
        image: './static/img/Emotion/smile.jpg',
        audioSrc: './static/audio/smile.mp3',
      },
      {
        word: 'laugh',
        translation: 'смех',
        image: './static/img/Emotion/laugh.jpg',
        audioSrc: './static/audio/laugh.mp3',
      },
    ],
    page: [],
    flag: 0,
  },

  init() {
    this.elements[0] = document.createElement('div');


    for (let i = 1; i < this.pages.main_page.length + 1; i++) {
      this.elements[i] = document.createElement('div');
      this.elements[i].setAttribute('id', this.pages.main_page[i - 1].word);
      this.elements[i].classList.add('topic');
      const img = document.createElement('img');
      img.src = this.pages.main_page[i - 1].image;
      img.classList.add('main_topic');
      img.id = this.pages.main_page[i - 1].word;
      const p = document.createElement('p');
      p.innerHTML = this.pages.main_page[i - 1].word;
      p.classList.add('topic_name');
      this.elements[i].appendChild(img);
      this.elements[i].appendChild(p);
      this.elements[0].appendChild(this.elements[i]);
    }
    document.body.appendChild(this.elements[0]);
  },

  reprint() {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].remove();
    }
    const div = document.getElementsByClassName('topic');
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }

    if (myStorage.getItem('test_1') == 1) { this.pages.page = this.pages.action_a; } else
    if (myStorage.getItem('test_1') == 2) { this.pages.page = this.pages.action_b; } else
    if (myStorage.getItem('test_1') == 3) { this.pages.page = this.pages.action_c; } else
    if (myStorage.getItem('test_1') == 4) { this.pages.page = this.pages.adjective; } else
    if (myStorage.getItem('test_1') == 5) { this.pages.page = this.pages.animal_a; } else
    if (myStorage.getItem('test_1') == 6) { this.pages.page = this.pages.animal_b; } else
    if (myStorage.getItem('test_1') == 7) { this.pages.page = this.pages.clothes; } else
    if (myStorage.getItem('test_1') == 8) { this.pages.page = this.pages.emotion; } else
    if (myStorage.getItem('test_1') == 0) { this.pages.page = this.pages.main_page; }


    this.elements[0] = document.createElement('div');
    this.elements[0].classList.add('wrapper_new');

    for (let i = 1; i < this.pages.page.length + 1; i++) {
      this.elements[i] = document.createElement('div');
      this.elements[i].setAttribute('id', this.pages.page[i - 1].word);
      const temp = this.pages.page[i - 1].audioSrc;

      this.elements[i].classList.add('English_words');
      const img = document.createElement('img');
      img.src = this.pages.page[i - 1].image;
      img.classList.add('second_main_topic');
      img.id = this.pages.page[i - 1].word;
      const p = document.createElement('p');
      p.innerHTML = this.pages.page[i - 1].word;
      p.classList.add('second_topic_name');
      this.elements[i].appendChild(img);
      this.elements[i].appendChild(p);
      this.elements[0].appendChild(this.elements[i]);
    }
    document.body.appendChild(this.elements[0]);
  },


  reprint_main() {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].remove();
    }
    const div = document.getElementsByClassName('topic');
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }

    this.elements[0] = document.createElement('div');

    for (let i = 1; i < this.pages.main_page.length + 1; i++) {
      this.elements[i] = document.createElement('div');
      this.elements[i].setAttribute('id', this.pages.main_page[i - 1].word);
      this.elements[i].classList.add('topic');
      const img = document.createElement('img');
      img.src = this.pages.main_page[i - 1].image;
      img.classList.add('main_topic');
      img.id = this.pages.main_page[i - 1].word;
      const p = document.createElement('p');
      p.innerHTML = this.pages.main_page[i - 1].word;
      p.classList.add('topic_name');
      this.elements[i].appendChild(img);
      this.elements[i].appendChild(p);
      this.elements[0].appendChild(this.elements[i]);
    }
    document.body.appendChild(this.elements[0]);
  },

};

function burgerMenu() {
  const menu = document.querySelector('.burger-menu');
  const button = menu.querySelector('.burger-menu__button');
  const links = menu.querySelector('.burger-menu__link');
  const overlay = menu.querySelector('.burger-menu__overlay');


  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  [].forEach.call(links, (el) => {
    el.addEventListener('click', () => toggleMenu());
  });
  // overlay.addEventListener("click", () => toggleMenu());


  function toggleMenu() {
    menu.classList.toggle('burger-menu_active');
    if (menu.classList.contains('burger-menu_active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }
}
window.addEventListener('DOMContentLoaded', () => {
  burgerMenu();
  Second_Page.init();
});

document.addEventListener('mousedown', (event) => {
  console.log(event);
  if (event.target.id === 'Action A') {
    myStorage.setItem('test_1', 1);
    Second_Page.reprint();
    console.log(Second_Page.pages.page);
  } else
  if (event.target.id === 'Action B') {
    myStorage.setItem('test_1', 2);
    Second_Page.reprint();
  } else
  if (event.target.id === 'Action C') {
    myStorage.setItem('test_1', 3);
    Second_Page.reprint();
  } else
  if (event.target.id === 'Adjective') {
    myStorage.setItem('test_1', 4);
    Second_Page.reprint();
  } else
  if (event.target.id === 'Animal A') {
    myStorage.setItem('test_1', 5);
    Second_Page.reprint();
  } else
  if (event.target.id === 'Animal B') {
    myStorage.setItem('test_1', 6);
    Second_Page.reprint();
  } else
  if (event.target.id === 'Clothes') {
    myStorage.setItem('test_1', 7);
    Second_Page.reprint();
  } else
  if (event.target.id === 'Emotion') {
    myStorage.setItem('test_1', 8);
    Second_Page.reprint();
  } else
  if (event.target.id === 'main_page') {
    myStorage.setItem('test_1', 0);
    Second_Page.reprint_main();
  }
});

document.addEventListener('click', (event) => {
  const audio = new Audio();
  audio.src = `/static/audio/${event.target.id}.mp3`;
  audio.autoplay = true;
});
