<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trả Nợ</title>
    <style>
        html, body {
            width: 100%;
            height: 100%;
            overflow: hidden;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
            transition: transform 0.3s ease;
            position: relative;
        }
        #container {
            text-align: center;
            background-color: #f4f4f4;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        button {
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
        }
        #yes {
            background-color: #4caf50;
            color: white;
        }
        #no {
            background-color: #f44336;
            color: white;
        }
    </style>
    <script>
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

        function showCongratulations() {
            alert('Chúc mừng! Bạn đã chọn trả nợ.');
        }
    </script>
</head>
<body>
    <div id="container">
        <h1>Trả nợ?</h1>
        <button id="yes" onclick="showCongratulations()">Có</button>
        <button id="no" onclick="randomizePosition()">Không</button>
    </div>
</body>
</html>
