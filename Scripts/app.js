"use strict";


// self-executing anonymous function
// IIFE -- Immediately Invoked Function Expression
(function(){

    let myFunctionalVariable = 0;

    let Start = function() {
        let myLocalVariable = 0;
        console.log(`App Started...${myFunctionalVariable}`);
    }



    window.addEventListener("load", Start);
})();