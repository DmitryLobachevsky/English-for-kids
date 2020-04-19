let MyStorage = window.localStorage;
// const Second_Page = {
//     elements:[
//      {  
//          el_1: null
//      },
//      {  
//         el_2: null
//     },
//     {  
//         el_3: null
//     },
//     {  
//         el_4: null
//     },
//     {  
//         el_5: null
//     },
//     {  
//         el_6: null
//     },
//     {  
//         el_7: null
//     },
//     {  
//         el_8: null
//     },
//     ],
//     pages:{
//         action_a: 
//         [
//             {
//               word: 'cry',
//               translation: 'плакать',
//               image: './static/img/Action_A/cry.png',
//               audioSrc: 'audio/cry.mp3'
//             },
//             {
//               word: 'dance',
//               translation: 'танцевать',
//               image: './static/img/Action_A/dance.png',
//               audioSrc: 'audio/dance.mp3'
//             },
//             {
//               word: 'dive',
//               translation: 'нырять',
//               image: './static/img/Action_A/dance.png',
//               audioSrc: 'audio/dive.mp3'
//             },
//             {
//               word: 'draw',
//               translation: 'рисовать',
//               image: './static/img/Action_A/draw.png',
//               audioSrc: 'audio/draw.mp3'
//             },
//             {
//               word: 'fish',
//               translation: 'ловить рыбу',
//               image: './static/img/Action_A/fish.png',
//               audioSrc: 'audio/fish.mp3'
//             },
//             {
//               word: 'fly',
//               translation: 'летать',
//               image: './static/img/Action_A/fly.png',
//               audioSrc: 'audio/fly.mp3'
//             },
//             {
//               word: 'hug',
//               translation: 'обнимать',
//               image: './static/img/Action_A/run.png',
//               audioSrc: 'audio/hug.mp3'
//             },
//             {
//               word: 'jump',
//               translation: 'прыгать',
//               image: './static/img/Action_A/jump.png',
//               audioSrc: 'audio/jump.mp3'
//             }
//           ],
       
//         action_b: [
//             {
//                 word: 'open',
//                 translation: 'открывать',
//                 image: './static/img/Action_B/open.jpg',
//                 audioSrc: 'audio/open.mp3'
//               },
//               {
//                 word: 'play',
//                 translation: 'играть',
//                 image: './static/img/Action_B/play.jpg',
//                 audioSrc: 'audio/play.mp3'
//               },
//               {
//                 word: 'point',
//                 translation: 'указывать',
//                 image: './static/img/Action_B/point.jpg',
//                 audioSrc: 'audio/point.mp3'
//               },
//               {
//                 word: 'ride',
//                 translation: 'ездить',
//                 image: './static/img/Action_B/ride.jpg',
//                 audioSrc: 'audio/ride.mp3'
//               },
//               {
//                 word: 'run',
//                 translation: 'бегать',
//                 image: './static/img/Action_B/run.jpg',
//                 audioSrc: 'audio/run.mp3'
//               },
//               {
//                 word: 'sing',
//                 translation: 'петь',
//                 image: './static/img/Action_B/sing.jpg',
//                 audioSrc: 'audio/sing.mp3'
//               },
//               {
//                 word: 'skip',
//                 translation: 'пропускать, прыгать',
//                 image: './static/img/Action_B/skip.jpg',
//                 audioSrc: 'audio/skip.mp3'
//               },
//               {
//                 word: 'swim',
//                 translation: 'плавать',
//                 image: './static/img/Action_B/swim.jpg',
//                 audioSrc: 'audio/swim.mp3'
//               }
//         ],
//         action_c: [],
//         adjective: [],
//         animal_a: [
//             {
//                 word: 'cat',
//                 translation: 'кот',
//                 image: './static/img/Animal_A/cat.jpg',
//                 audioSrc: 'audio/cat.mp3'
//               },
//               {
//                 word: 'chick',
//                 translation: 'цыплёнок',
//                 image: './static/img/Animal_A/chick.jpg',
//                 audioSrc: 'audio/chick.mp3'
//               },
//               {
//                 word: 'chicken',
//                 translation: 'курица',
//                 image: './static/img/Animal_A/chicken.jpg',
//                 audioSrc: 'audio/chicken.mp3'
//               },
//               {
//                 word: 'dog',
//                 translation: 'собака',
//                 image: './static/img/Animal_A/dog.jpg',
//                 audioSrc: 'audio/dog.mp3'
//               },
//               {
//                 word: 'horse',
//                 translation: 'лошадь',
//                 image: './static/img/Animal_A/horse.jpg',
//                 audioSrc: 'audio/horse.mp3'
//               },
//               {
//                 word: 'pig',
//                 translation: 'свинья',
//                 image: './static/img/Animal_A/pig.jpg',
//                 audioSrc: 'audio/pig.mp3'
//               },
//               {
//                 word: 'rabbit',
//                 translation: 'кролик',
//                 image: './static/img/Animal_A/rabbit.jpg',
//                 audioSrc: 'audio/rabbit.mp3'
//               },
//               {
//                 word: 'sheep',
//                 translation: 'овца',
//                 image: './static/img/Animal_A/sheep.jpg',
//                 audioSrc: 'audio/sheep.mp3'
//               }
          
//         ],
//         animal_b: [
//             {
//                 word: 'bird',
//                 translation: 'птица',
//                 image: './static/img/Animal_B/bird.jpg',
//                 audioSrc: 'audio/bird.mp3'
//               },
//               {
//                 word: 'fish',
//                 translation: 'рыба',
//                 image: './static/img/Animal_B/fish1.jpg',
//                 audioSrc: 'audio/fish.mp3'
//               },
//               {
//                 word: 'frog',
//                 translation: 'жаба',
//                 image: './static/img/Animal_B/frog.jpg',
//                 audioSrc: 'audio/frog.mp3'
//               },
//               {
//                 word: 'giraffe',
//                 translation: 'жирафа',
//                 image: './static/img/Animal_B/giraffe.jpg',
//                 audioSrc: 'audio/giraffe.mp3'
//               },
//               {
//                 word: 'lion',
//                 translation: 'лев',
//                 image: './static/img/Animal_B/lion.jpg',
//                 audioSrc: 'audio/lion.mp3'
//               },
//               {
//                 word: 'mouse',
//                 translation: 'мышь',
//                 image: './static/img/Animal_B/mouse.jpg',
//                 audioSrc: 'audio/mouse.mp3'
//               },
//               {
//                 word: 'turtle',
//                 translation: 'черепаха',
//                 image: './static/img/Animal_B/turtle.jpg',
//                 audioSrc: 'audio/turtle.mp3'
//               },
//               {
//                 word: 'dolphin',
//                 translation: 'дельфин',
//                 image: './static/img/Animal_B/dolphin.jpg',
//                 audioSrc: 'audio/dolphin.mp3'
//               }
          
//         ],
//         clothes: [
//             {
//                 word: 'skirt',
//                 translation: 'юбка',
//                 image: './static/img/Clothes/skirt.jpg',
//                 audioSrc: 'audio/skirt.mp3'
//               },
//               {
//                 word: 'pants',
//                 translation: 'брюки',
//                 image: './static/img/Clothes/pants.jpg',
//                 audioSrc: 'audio/pants.mp3'
//               },
//               {
//                 word: 'blouse',
//                 translation: 'блузка',
//                 image: './static/img/Clothes/blouse.jpg',
//                 audioSrc: 'audio/blouse.mp3'
//               },
//               {
//                 word: 'dress',
//                 translation: 'платье',
//                 image: './static/img/Clothes/dress.jpg',
//                 audioSrc: 'audio/dress.mp3'
//               },
//               {
//                 word: 'boot',
//                 translation: 'ботинок',
//                 image: './static/img/Clothes/boot.jpg',
//                 audioSrc: 'audio/boot.mp3'
//               },
//               {
//                 word: 'shirt',
//                 translation: 'рубашка',
//                 image: './static/img/Clothes/shirt.jpg',
//                 audioSrc: 'audio/shirt.mp3'
//               },
//               {
//                 word: 'coat',
//                 translation: 'пальто',
//                 image: './static/img/Clothes/coat.jpg',
//                 audioSrc: 'audio/coat.mp3'
//               },
//               {
//                 word: 'shoe',
//                 translation: 'туфли',
//                 image: './static/img/Clothes/shoe.jpg',
//                 audioSrc: 'audio/shoe.mp3'
//               }
          
//         ],
//         emotion: [
//             {
//                 word: 'sad',
//                 translation: 'грустный',
//                 image: './static/img/Emotion/sad.jpg',
//                 audioSrc: 'audio/sad.mp3'
//               },
//               {
//                 word: 'angry',
//                 translation: 'сердитый',
//                 image: './static/img/Emotion/angry.jpg',
//                 audioSrc: 'audio/angry.mp3'
//               },
//               {
//                 word: 'happy',
//                 translation: 'счастливый',
//                 image: './static/img/Emotion/happy.jpg',
//                 audioSrc: 'audio/happy.mp3'
//               },
//               {
//                 word: 'tired',
//                 translation: 'уставший',
//                 image: './static/img/Emotion/tired.jpg',
//                 audioSrc: 'audio/tired.mp3'
//               },
//               {
//                 word: 'surprised',
//                 translation: 'удивлённый',
//                 image: './static/img/Emotion/surprised.jpg',
//                 audioSrc: 'audio/surprised.mp3'
//               },
//               {
//                 word: 'scared',
//                 translation: 'испуганный',
//                 image: './static/img/Emotion/scared.jpg',
//                 audioSrc: 'audio/scared.mp3'
//               },
//               {
//                 word: 'smile',
//                 translation: 'улыбка',
//                 image: './static/img/Emotion/smile.jpg',
//                 audioSrc: 'audio/smile.mp3'
//               },
//               {
//                 word: 'laugh',
//                 translation: 'смех',
//                 image: './static/img/Emotion/laugh.jpg',
//                 audioSrc: 'audio/laugh.mp3'
//               }
//         ],
//         page: [],
//         flag: 0,
//     },

//     init() {
//         let t = window.localStorage.getItem('test');
//         if(t === 1)
//             this.pages.page = this.pages.action_a;
//             else
//             if(myStorage.getItem('test1') === 2)
//             this.pages.page = this.pages.action_b;
//             else
//             if(myStorage.getItem('test1') === 3)
//             this.pages.page = this.pages.action_c;
//             else
//             if(myStorage.getItem('test1') === 4)
//             this.pages.page = this.pages.adjective;
//             else
//             if(myStorage.getItem('test1') === 5)
//             this.pages.page = this.pages.animal_a;
//             else
//             if(myStorage.getItem('test1') === 6)
//             this.pages.page = this.pages.animal_b;
//             else
//             if(myStorage.getItem('test1') === 7)
//             this.pages.page = this.pages.clothes;
//             else
//             if(myStorage.getItem('test1') === 8)
//             this.pages.page = this.pages.emotion;
            

//         for (let i = 0; i < this.pages.action_a.length; i++ ){
//             this.elements[i] = document.createElement('div');
//             this.elements[i].setAttribute('id', 'img');
//             this.elements[i].classList.add('English_words');
//             let img = document.createElement('img');
//             img.src = this.pages.action_a[i].image;
//             this.elements[i].appendChild(img);
//             document.body.appendChild(this.elements[i]);
//         }
//     },

// };

window.addEventListener('DOMContentLoaded', () => {
    Second_Page.init();
  });

  document.addEventListener('mousedown', ()=>{
      MyStorage.getItem('test', 11);
  })