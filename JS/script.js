"use strict"


// CREARE FUNZIONE
function createSquareElement(){
    let square= document.createElement('div');
    square.classList.add('square');
    return square;
}

function generateRandomNumber(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}

function fillArrayBombs(arrayBombs, max){
    let check=false;
    let random_number;
    while(check === false){
        random_number = generateRandomNumber(1, max);

        if(!arrayBombs.includes(random_number)){
            check = true;
        }
    }
    return random_number;
}

// ARRAY DELLE BOMBE
const arrayBombs = [];

// RECUPERO L'ELEMENTO CON ID='BUTTON'
const button_element= document.getElementById('button');


// EVENT LISTENER
button_element.addEventListener('click', function(){
     // RECUPERO L'ELEMENTO CON ID='DIFFICULTY'
     const difficult_level= parseInt(document.getElementById('select-difficulty').value);
 
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
    const points= document.getElementById('points');
    
    // RIGENERO LA GRIGLIA
    grid_element.innerHTML= '';
    points.innerHTML='';
    // INVOCAZIONE DELLE FUNZIONI
    generateRandomNumber(1, cellsNumber);

    for(let i=0; i<16; i++){
        let number = fillArrayBombs(arrayBombs, cellsNumber);
        arrayBombs.push(number);
    }

    // VARIABILE PER INTERROMPERE IL GIOCO
    let gameOver = false;

    // NUMERO CASELLE BLU CLICCATE
    let clickForWin = 0;
    
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
            if(gameOver === false){
                if(!arrayBombs.includes(parseInt(this.innerText))){
                    this.classList.add('clicked');
                    clickForWin++;
                    console.log(clickForWin);
                }
                else{
                    this.classList.add('bomb');
                    gameOver = true;
                    document.getElementById('points').innerText = `PUNTEGGIO: ${clickForWin}`;
                }
            }
        }) 
        // APPENDO LA GRIGLIA
        grid_element.append(square);
    }
        
})
    
