
const create = document.querySelector('#create');
const etchContainer = document.querySelector('#etch');
const clearGridButton = document.querySelector('#clear-grid');
let gridSize = 0;

// Mouse Down Functionality
let isMouseDown = false;

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});


document.addEventListener('DOMContentLoaded', () => {
    createGrid(16); // Calls createGrid function with a default value of 16
});

// Fade Slider - Keeping it in comments to reference for future use

//const fadeSliderId = document.getElementById('fade-slider-id');
//const fadeSliderValue = document.getElementById('fade-slider-value');

//fadeSliderId.addEventListener('input', function () {
   //console.log('Fade slider value (during slide):', this.value);
   //delayInSeconds = (parseInt(this.value) / 1000).toFixed(1);
   
   ////fadeSliderValue.innerHTML = `fade after ${delayInSeconds} seconds` 

//});

//fadeSliderId.addEventListener('change', function () {
  //// console.log('Fade Slider value (after release):', this.value);

 

//});

// Grid Slider

const gridSliderId = document.getElementById('grid-slider-id');
const gridSliderValue = document.getElementById('grid-slider-value');

gridSliderId.addEventListener('input', function () {
    
    console.log('Grid Slider value (during slide):', this.value);
    gridSliderValue.innerHTML = `'${this.value} x ${this.value}' grid`;


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
                if (isMouseDown) {
                    let currentOpacity = parseFloat(square.style.opacity) || 0;
                    let newOpacity = currentOpacity + 0.1;
                    square.style.opacity = newOpacity; 
                }
            });

            row.appendChild(square);
        }
    }
}