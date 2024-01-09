
const createButton = document.querySelector('#create');
const etchContainer = document.querySelector('#etch');
const clearButton = document.querySelector('#create');


createButton.addEventListener('click', () => {
    etchContainer.innerHTML = '';
    let input = prompt("How large would you like your grid?", "0");
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
        
        });    




   



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
