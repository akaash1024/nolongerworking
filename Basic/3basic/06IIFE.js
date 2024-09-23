// Immediately Invoked Function Expression



// what is IIFE, when we want to run our specific function starting executing after complete it.. . that time we need
//like, talk out data base, we want after writing immediately basis that function should run so, our database get start working 

//interview ANS: Many times having with global scope polution like what is declare there, to prevent we use IIFE




////// ()() in first bracket we will write our function and in second you know well we learn earlier in last lesson '03arrow.js'

(function chai(){  
    console.log('DB Connected');
})(); 


//////updatig 
// (function chai(){
        ////named IIFE
//     console.log('DB Connected');
// })();                            //////this will work run it after remove commenting 



//keep read with focus else could lost



/////not necessary to store somewhere 'Arrow Function'
( () => {
    console.log("DB Connect two");
})();   //////dont forget to add semicolon if remove this wouldn't understand where to STOP, from here ill started givin value to semicolon

//////voila its working and can you see this is arrow function which was irritating the class 😂

//bonus
( (nameFirst) => {
    console.log(`DB Connect two ${nameFirst}`);
})("Akash");