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
    alert('Chúc mừng! Bạn đã chọn đúng người <3');
}
