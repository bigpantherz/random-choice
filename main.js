function moveContainer() {
    const container = document.getElementById('container');
    const maxX = window.innerWidth - container.offsetWidth;
    const maxY = window.innerHeight - container.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    container.style.position = 'absolute';
    container.style.left = `${randomX}px`;
    container.style.top = `${randomY}px`;
}

function showCongratulations() {
    const heartContainer = document.querySelector('.heart-container');
    heartContainer.innerHTML = ''; // Xóa các trái tim cũ
    const numHearts = 40;
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heartContainer.appendChild(heart);
    }
     alert('Chúc mừng! Bạn đã chọn đúng người <3');
     setTimeout(() => {
       heartContainer.innerHTML = '';
   }, 5000);
}
