        function randomizePosition() {
            const container = document.getElementById('container');
            const maxX = window.innerWidth - container.offsetWidth; // Window width minus element width
            const maxY = window.innerHeight - container.offsetHeight; // Window height minus element height

            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;

            container.style.position = 'absolute';
            container.style.left = `${randomX}px`;
            container.style.top = `${randomY}px`;
        }
