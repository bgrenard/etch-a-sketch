const canvas = document.querySelector('.container');
const button = document.querySelector('button');
const pixelColor = 'aquamarine';
const penColor = 'cadetblue';

button.addEventListener('click', () => {
    let length = prompt('Choose the number of pixels per side.');
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