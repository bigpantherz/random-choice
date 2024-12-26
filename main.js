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
    heartContainer.innerHTML = ''; // Xóa các trái tim cũ nếu có
     for (let i = 0; i < 100; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * window.innerWidth + 'px';
             heart.style.top = Math.random() * window.innerHeight - 200 + 'px';
            heart.style.animationDelay = Math.random() * 3 + 's';
            heartContainer.appendChild(heart);
             heart.addEventListener('animationend', () => {
                heart.remove(); // Xóa trái tim khi animation kết thúc
        });
     }

    alert('Chúc mừng! Bạn đã chọn đúng người <3');
    setTimeout(() => {
       heartContainer.innerHTML = '';
   }, 5000);
}
