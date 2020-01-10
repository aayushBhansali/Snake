let generateSnake = () => {
    console.log("Function called");
    let x = 300;
    let y = 300;
    snake = document.getElementById('initialBlock');
    console.log(snake)
    snake.style.left = x + 'px';
    snake.style.bottom = y + 'px';
}


window.onload = generateSnake();