let generateSnake = () => {
    console.log("Function called");
    let x = 300;
    let y = 300;
    snake = document.getElementById('initialBlock');
    console.log(snake)
    snake.style.left = x + 'px';
    snake.style.bottom = y + 'px';
}

let checkKey = (event) => {
    let e = window.event ? window.event : event;
    let upFlag = false;

    if (event.keyCode == 38){
        up();
    }

    else if(event.keyCode == 37){
        left();
    }

    else if (event.keyCode == 39){
        right();
    }

    else if (event.keyCode == 40){
        down();
    }

}


let generateFood = () =>{
    let x = Math.floor(Math.random() * 1000);
    let y = Math.floor(Math.random() * 1000);

    if (x > 590){
        x -= 600;
    }

    if (y > 590){
        y -= 600;
    }

    x -= x % 20;
    y -= y % 20;

    snake = document.getElementById('food');
    console.log(x);
    console.log(y);
    snake.style.left = x + 'px';
    snake.style.bottom = y + 'px';
}


let up = () => {
    console.log("Up called");
    let snake = document.getElementById("initialBlock");
    console.log(snake.style.bottom);
    let x = parseInt(snake.style.bottom) + 10;
    if (x >= 590){
        x = 0;
    }
    snake.style.bottom = x + 'px';
}

let left = () => {
    console.log("Left called");
    let snake = document.getElementById("initialBlock");
    let x = parseInt(snake.style.left) - 10;
    snake.style.left = x + 'px';
}

let down = () => {
    console.log("Down called");
    let snake = document.getElementById("initialBlock");
    console.log(snake.style.bottom);
    let x = parseInt(snake.style.bottom) - 10;
    snake.style.bottom = x + 'px';
}

let right = () => {
    console.log("Right called");
    let snake = document.getElementById("initialBlock");
    let x = parseInt(snake.style.left) + 10;
    snake.style.left = x + 'px';
}

document.addEventListener('keydown', checkKey);

generateSnake();
generateFood();
checkKey();
