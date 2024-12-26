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
      const heart = document.querySelector('.heart');
      for (let i = 0; i < 20; i++) {
            const newHeart = heart.cloneNode(true);
            newHeart.style.left = Math.random() * window.innerWidth + 'px';
            newHeart.style.animationDelay = Math.random() * 3 + 's';
            heartContainer.appendChild(newHeart);
        }
       alert('Chúc mừng! Bạn đã chọn trả nợ.');
        setTimeout(() => {
            heartContainer.innerHTML = '';
            heartContainer.appendChild(heart);
      }, 5000);
}
