"use strict"


// CREARE FUNZIONE
function createSquareElement(){
    let square= document.createElement('div');
    square.classList.add('square');
    return square;
}

// RECUPERO L'ELEMENTO CON ID='BUTTON'
const button_element= document.getElementById('button');


// EVENT LISTENER
button_element.addEventListener('click', function(){
     // RECUPERO L'ELEMENTO CON ID='DIFFICULTY'
     const difficult_level= parseInt(document.getElementById('select-difficulty').value);
     console.log(difficult_level);
 
     // DEFINISCO VALORE LIVELLI
     let cellsNumber;
     switch(difficult_level){
         case 1: 
             cellsNumber = 100;
             break;
         case 2: 
             cellsNumber = 81;
             break;
         case 3:
             cellsNumber = 49;
             break;
     }
   
    // RECUPERO L'ELEMENTO CON ID='GRID'
    const grid_element= document.getElementById('grid');
    
    // RIGENERO LA GRIGLIA
    grid_element.innerHTML= '';
    
    // CICLO FOR
    for(let i=0; i<cellsNumber; i++){
        // INVOCO LA FUNZIONE
        let square = createSquareElement();
        square.innerText= i + 1;

        // STILE CELLE IN BASE AL LIVELLO DI DIFFICOLTA'
        let cellsPerRow= Math.sqrt(cellsNumber);
        square.style.width = `calc(100% / ${cellsPerRow})`;
        square.style.height = square.style.width;

        // EVENT LISTENER
        square.addEventListener('click', function(){
            this.classList.add('clicked');
            console.log(this.innerText);
        }) 
        // APPENDO LA GRIGLIA
        grid_element.append(square);
    }
        
})
    
