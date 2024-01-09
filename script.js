
const create = document.querySelector('#create');
const etchContainer = document.querySelector('#etch');
const clearGridButton = document.querySelector('#clear-grid');
let gridSize = 0;
let fadeActive = false;
let fadeValue = 0;


// Fade Slider

const fadeSliderId = document.getElementById('fade-slider-id');
const fadeSliderValue = document.getElementById('fade-slider-value');

fadeSliderId.addEventListener('input', function () {
   console.log('Fade slider value (during slide):', this.value);
   delayInSeconds = (parseInt(this.value) / 1000).toFixed(1);
   
   fadeSliderValue.innerHTML = `${delayInSeconds} second delay` 

});

fadeSliderId.addEventListener('change', function () {
   console.log('Fade Slider value (after release):', this.value);

 

});

// Grid Slider

const gridSliderId = document.getElementById('grid-slider-id');
const gridSliderValue = document.getElementById('grid-slider-value');

gridSliderId.addEventListener('input', function () {
    
    console.log('Grid Slider value (during slide):', this.value);
    gridSliderValue.innerHTML = `${this.value} x ${this.value}`;


});

gridSliderId.addEventListener('change', function () {
    console.log('Grid Slider value (after release):', this.value);
    gridSize = this.value;
    createGrid(parseInt(this.value));
    return gridSize;

});

// clear grid 
clearGridButton.addEventListener('click', function () {
    etchContainer.innerHTML = '';
    createGrid(gridSize);

});


// Create Grid Function


function createGrid(gridInput) {
    etchContainer.innerHTML = '';
    let input = gridInput;
        let text;
        if (input === null || input > 100 || input <= 0 || input === ''|| isNaN(input)) {
            text = "please enter a value between 0 and 100";
            window.alert(text);

        } else {
            const n = parseInt(input);
            etchContainer.style.setProperty('--n', n);
            for (let i = 0; i < n ; i++) {
                const row = document.createElement('div');
                row.setAttribute('style', 'display: flex; flex: 1; padding: 0px; margin: 0px; ');
                etchContainer.appendChild(row);
        
                for (let j = 0; j < n ; j++) {
                    const square = document.createElement('div');
                    square.classList.add('square')
                    square.setAttribute('style', 'opacity: 0; background: black; padding-bottom: calc(100% / var(--n)); width: calc(100% / var(--n)); padding: 0px; margin: 0px;');
                    square.addEventListener('mouseenter', () => {
                        let currentOpacity = parseFloat(square.style.opacity) || 0;
                        let newOpacity = currentOpacity + 0.1;
                        square.style.opacity = newOpacity; 
                        
                    })
                    square.addEventListener('mouseleave', () => {
                        setTimeout(() => {
                            square.style.opacity -= 0.1;

                        }, 5000);
                        
                    
                    })
                    row.appendChild(square);
                }
            }
        }
        
        };    




   



// have a button that populates and centers a grid of 16x16 squares
// button click

    // create 16 x 16 squares 

// NEXT 
// Add a button that will create a popup to prompt user for number of squares
// sketch container DOESNT CHANGE Sizes just the squares within
// Input number into field with 100 as max 
// input = n 


// NEXT 
// Set up hover class and hover functionality to turn a square black.... 
// Set up a timer so that square slowly reverts 
// Set up a gradient so the square darkens 10% on each hover and loses 10% for X seconds
