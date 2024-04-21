const canvas = document.querySelector('.container');

function createPixel() {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    canvas.appendChild(pixel);

    pixel.addEventListener('mouseenter', (e) => {
        pixel.style.backgroundColor = 'cadetblue';
    })

    pixel.addEventListener('mouseleave', (e) => {
        pixel.style.backgroundColor = 'aquamarine';
    })
}

for (let i = 0; i < 16; i++) {
    createPixel();   
}
