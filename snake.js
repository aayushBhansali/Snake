let upFlag = false;
let leftFlag = false;
let rightFlag = false;
let downFlag = false;
let prevDir = 0;
const speed = 100;
let count = 0;

let prevX = 0;
let prevY = 0
let prevX1 = 0;
let prevY1 = 0;

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

    else if (event.keyCode == 32){
        console.log(count);
        if (count % 2 == 0){
            clearInterval(eve);
            upFlag = false;
            leftFlag = false;
            rightFlag = false;
            downFlag = false;
        }   

        else {
            console.log("Keep going buddy");
            eve = setInterval(down, speed);
        }

        count++;
        
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
        prevDir = 1;
        clearInterval(eve);
        eve = setInterval(left, speed);
    }

    else if(rightFlag){
        prevDir = 1;
        clearInterval(eve);
        eve = setInterval(right, speed);
    }

    else if(downFlag){
        prevDir = 1;
        clearInterval(eve);
        eve = setInterval(down, speed);
    }

    let snake = document.getElementById("initialBlock");
    let food = document.getElementById("food");
    prevX = parseInt(snake.style.left);
    prevY = parseInt(snake.style.bottom);
    let x = parseInt(snake.style.bottom) + 20;
    if (x >= 590){
        x = 0;
    }

    let elements = document.getElementsByTagName("div");
    
    for(let i = 4; i < elements.length; i++){
        prevX1 = parseInt(elements[i].style.left);
        prevY1 = parseInt(elements[i].style.bottom);
        elements[i].style.left = prevX + "px";
        elements[i].style.bottom = prevY + "px";
        prevX = prevX1;
        prevY = prevY1;
    }

    checkFoodStat(x);

    snake.style.bottom = x + 'px';
}


// Moton in left direction
let left = () => {
    if(upFlag){
        prevDir = 2;
        clearInterval(eve);
        eve = setInterval(up, speed);
    }

    else if(rightFlag){
        prevDir = 2;
        clearInterval(eve);
        eve = setInterval(right, speed);
    }

    else if(downFlag){
        prevDir = 2;
        clearInterval(eve);
        eve = setInterval(down, speed);
    }

    let snake = document.getElementById("initialBlock");
    prevX = parseInt(snake.style.left);
    prevY = parseInt(snake.style.bottom);
    let x = parseInt(snake.style.left) - 20;
    if(x < 0) x += 1400;

    let elements = document.getElementsByTagName("div");
    
    for(let i = 4; i < elements.length; i++){
        prevX1 = parseInt(elements[i].style.left);
        prevY1 = parseInt(elements[i].style.bottom);
        elements[i].style.left = prevX + "px";
        elements[i].style.bottom = prevY + "px";
        prevX = prevX1;
        prevY = prevY1;
    }
    
    checkFoodStat(x);
    snake.style.left = x + 'px';
}


// Motion in downward direction
let down = () => {
    if(upFlag){
        prevDir = 3;
        clearInterval(eve);
        eve = setInterval(up, speed);
    }

    else if(rightFlag){
        prevDir = 3;
        clearInterval(eve);
        eve = setInterval(right, speed);
    }

    else if(leftFlag){
        prevDir = 3;
        clearInterval(eve);
        eve = setInterval(left, speed);
    }

    let snake = document.getElementById("initialBlock");
    prevX = parseInt(snake.style.left);
    prevY = parseInt(snake.style.bottom);
    let x = parseInt(snake.style.bottom) - 20;
    if(x < 0) x = 580;
    checkFoodStat(x);

    let elements = document.getElementsByTagName("div");

    for(let i = 4; i < elements.length; i++){
        prevX1 = parseInt(elements[i].style.left);
        prevY1 = parseInt(elements[i].style.bottom);
        elements[i].style.left = prevX + "px";
        elements[i].style.bottom = prevY + "px";
        prevX = prevX1;
        prevY = prevY1;
    }

     snake.style.bottom = x + 'px';
    
}



// Motion in right direction
let right = () => {
    if(upFlag){
        prevDir = 4;
        clearInterval(eve);
        eve = setInterval(up, speed);
    }

    else if(leftFlag){
        prevDir = 4;
        clearInterval(eve);
        eve = setInterval(left, speed);
    }

    else if(downFlag){
        prevDir = 4;
        clearInterval(eve);
        eve = setInterval(down, speed);
    }

    let snake = document.getElementById("initialBlock");
    prevX = parseInt(snake.style.left);
    prevY = parseInt(snake.style.bottom);
    let x = parseInt(snake.style.left) + 20;
    if (x > 1410) x -= 1400;
    checkFoodStat(x);

    let elements = document.getElementsByTagName("div");
    
    for(let i = 4; i < elements.length; i++){
        prevX1 = parseInt(elements[i].style.left);
        prevY1 = parseInt(elements[i].style.bottom);
        elements[i].style.left = prevX + "px";
        elements[i].style.bottom = prevY + "px";
        prevX = prevX1;
        prevY = prevY1;
    }

    snake.style.left = x + 'px';
}

let checkFoodStat = (x) => {
    let snake = document.getElementById("initialBlock");
    let node = document.createElement("div");
    if (snake.style.left == food.style.left && snake.style.bottom == food.style.bottom){
        console.log("Food Captured");
        generateFood();
        document.getElementById("innerframe").append(node);
    }
}

document.addEventListener('keydown', checkKey);

generateSnake();
generateFood();



let eve = window.setInterval(down, speed);
