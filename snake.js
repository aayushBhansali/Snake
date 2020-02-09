let upFlag = false;
let leftFlag = false;
let rightFlag = false;
let downFlag = false;

let speed = 100;

// Generate a snake at start
let generateSnake = () => {
    console.log("Function called");
    let x = 300;
    let y = 300;
    snake = document.getElementById('initialBlock');
    snake.style.left = x + 'px';
    snake.style.bottom = y + 'px';
}


// Event listener to check which key was pressed
let checkKey = (event) => {
    let e = window.event ? window.event : event;
    
    if (event.keyCode == 38){
        console.log("Up flag set");
        upFlag = true;
        leftFlag = false;
        rightFlag = false;
        downFlag = false;
    }

    else if (event.keyCode == 37){
        upFlag = false;
        leftFlag = true;
        rightFlag = false;
        downFlag = false;
    }

    else if (event.keyCode == 39){
        upFlag = false;
        leftFlag = false;
        rightFlag = true;
        downFlag = false;
    }

    else if (event.keyCode == 40){
        upFlag = false;
        leftFlag = false;
        rightFlag = false;
        downFlag = true;
    }

}

// Generate a random food
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

    food = document.getElementById('food');
    food.style.left = x + 'px';
    food.style.bottom = y + 'px';
}

// Motion in upward direction
let up = () => {

    if(leftFlag){
        clearInterval(eve);
        eve = setInterval(left, speed);
    }

    else if(rightFlag){
        clearInterval(eve);
        eve = setInterval(right, speed);
    }

    else if(downFlag){
        clearInterval(eve);
        eve = setInterval(down, speed);
    }

    let snake = document.getElementById("initialBlock");
    let food = document.getElementById("food");
    let x = parseInt(snake.style.bottom) + 20;
    if (x >= 590){
        x = 0;
    }

    checkFoodStat(x);

    snake.style.bottom = x + 'px';
}


// Moton in left direction
let left = () => {
    if(upFlag){
        clearInterval(eve);
        eve = setInterval(up, speed);
    }

    else if(rightFlag){
        clearInterval(eve);
        eve = setInterval(right, speed);
    }

    else if(downFlag){
        clearInterval(eve);
        eve = setInterval(down, speed);
    }

    let snake = document.getElementById("initialBlock");
    let x = parseInt(snake.style.left) - 20;
    if(x < 0) x += 890;
    
    checkFoodStat(x);
    snake.style.left = x + 'px';
}


// Motion in downward direction
let down = () => {
    if(upFlag){
        clearInterval(eve);
        eve = setInterval(up, speed);
    }

    else if(rightFlag){
        clearInterval(eve);
        eve = setInterval(right, speed);
    }

    else if(leftFlag){
        clearInterval(eve);
        eve = setInterval(left, speed);
    }

    let snake = document.getElementById("initialBlock");
    let x = parseInt(snake.style.bottom) - 20;
    if(x < 0) x = 580;
    checkFoodStat(x);

     snake.style.bottom = x + 'px';
    
}



// Motion in right direction
let right = () => {
    if(upFlag){
        clearInterval(eve);
        eve = setInterval(up, speed);
    }

    else if(leftFlag){
        clearInterval(eve);
        eve = setInterval(left, speed);
    }

    else if(downFlag){
        clearInterval(eve);
        eve = setInterval(down, speed);
    }

    let snake = document.getElementById("initialBlock");
    let x = parseInt(snake.style.left) + 20;
    if (x > 1410) x -= 1400;
    checkFoodStat(x);
    snake.style.left = x + 'px';
}

let checkFoodStat = (x) => {
    let snake = document.getElementById("initialBlock");
    
    if (snake.style.left == food.style.left && snake.style.bottom == food.style.bottom){
        console.log("Food Captured");
        generateFood();
        
    }
}

document.addEventListener('keydown', checkKey);

generateSnake();
generateFood();

let eve = window.setInterval(down, speed);
