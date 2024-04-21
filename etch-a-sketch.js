const canvas = document.querySelector('.container');
const button = document.querySelector('button');
const pixelColor = 'aquamarine';
const penColor = 'cadetblue';

button.addEventListener('click', () => {
    prompt('Choose the number of pixels per side.');
})

function createPixel() {
    const pixel = document.createElement('div');
    let x = 100/16;
    pixel.classList.add('pixel');
    pixel.style.flexBasis = `${x}%`;
    pixel.style.backgroundColor = pixelColor;

    pixel.addEventListener('mouseenter', () => {
        pixel.style.backgroundColor = penColor;
    })

    canvas.appendChild(pixel);
}

function resetPixel() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = pixelColor;
    })
}

function resetGrid() {
    let response = prompt('Choose the number of pixels per side.');

}

for (let i = 0; i < 256; i++) {
    createPixel();   
}
