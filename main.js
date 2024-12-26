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
</head>
<body>
    <div id="container">
        <h1>Trả nợ?</h1>
        <button id="yes" onclick="showCongratulations()">Có</button>
        <button id="no" onclick="randomizePosition()">Không</button>
    </div>
     <script src="main.js"></script>
      <script>
        function showCongratulations() {
            alert('Chúc mừng! Bạn đã chọn trả nợ.');
        }
    </script>
</body>
</html>
