// import Typed from "./node_modules/typed.js/lib/typed.js";

// const type = new Typed('.typed',{
//     stringsElement: '.user-name',
// })

// console.log(type);

// import Typed from "typed.js";
import Typed from './node_modules/typed.js/dist/typed.module.js';

const type = new Typed('#typed',{
    strings: [
    'a <span id="designer">UI/UX Designer,'+
    '</span> <span id="reader">Reader,'+ 
    '</span> <br> &amp; <span id="cine">Cinephile.</br></span>'
],
    typeSpeed: 40,
    backSpeed: 0,
    startDelay: 500,
    cursorChar: '_',

    loop: false,
    onComplete: () =>{
        document.querySelector('.typed-cursor').style.display ='none';
    }
    // onComplete:() =>{
    //     document.getElementById('typed').innerHTML =
    //     '<span id="designer">UI/UX Designer,'+
    //     '</span> <span id="reader">Reader</span>,'+ 
    //     '& <span id="cine">Cinephile.</span><br>';
    // }
})

console.log(type);