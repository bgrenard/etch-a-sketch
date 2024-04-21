const canvas = document.querySelector('.container');

function createPixel() {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.borderColor = 'black';
    pixel.textContent = "Hello";
    canvas.appendChild(pixel);
}

for (let i = 0; i < 16; i++) {
    createPixel();    
}
