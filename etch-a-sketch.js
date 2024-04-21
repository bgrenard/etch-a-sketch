const canvas = document.querySelector('.container');
const button = document.querySelector('button');
const pixelColor = 'aquamarine';
const penColor = 'cadetblue';

button.addEventListener('click', () => {
    let length = prompt('Choose the number of pixels per side. (max 100)');
    
    //We need to reject input that is not a number, any empty input, and any number not in the range 0-100.
    while (Number(length) !== Number(length) ||
            Number(length) === null || 
            Number(length) === 0 || 
            Number(length) > 100
        ) {
        length = prompt('Please type in a number between 1 and 100')
    }
    length = Number(length)
    removeGrid();
    createGrid(length);
})

function createPixel(length) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.flexBasis = `${length}%`;
    pixel.style.backgroundColor = pixelColor;

    pixel.addEventListener('mouseenter', () => {
        pixel.style.backgroundColor = penColor;
    })

    canvas.appendChild(pixel);
}

function createGrid(length) {
    for (let i = 0; i < length**2; i++) {
        createPixel(100/length);
    }
}

function removeGrid() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.remove();
    })
}

createGrid(16);