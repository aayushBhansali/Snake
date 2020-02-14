$("document").ready(function(){
    let upFlag = false;
    let leftFlag = false;
    let rightFlag = false;
    let downFlag = false;

    let prevDir = 0;
    let speed = 100;
    let count = 0;

    let prevX = 0;
    let prevY = 0
    let prevX1 = 0;
    let prevY1 = 0;

    let loopStart = 5;
    let score = 0;

    
    // Generate a snake at start
    let generateSnake = () => {
        $("#initialBlock").css("left", 300);
        $("#initialBlock").css("bottom", 300);
    }


    let resetFlag = () => {
        upFlag = rightFlag = leftFlag = downFlag = false;
    }


    let setFlag = (x) => {
        switch(x){
            case 0:
                leftFlag = true;
                upFlag = rightFlag = downFlag = false;
                break;

            case 1:
                upFlag = true;
                leftFlag = rightFlag = downFlag = false;
                break;

            case 2:
                rightFlag = true;
                upFlag = leftFlag = downFlag = false;
                break;

            case 3:
                downFlag = true;
                upFlag = leftFlag = rightFlag = false;
                break;
        }
    }


    // Event listener to check which key was pressed
    let checkKey = (event) => {

        setFlag(event.keyCode % 37);

        if (event.keyCode == 32) {
            if (count % 2 == 0){
                clearInterval(eve);
                resetFlag();
            }   

            else {
                eve = setInterval(down, speed);
            }
            count++;
        }
    }


    // Generate a random food
    let generateFood = () =>{
        let x = Math.floor(Math.random() * 1000);
        let y = Math.floor(Math.random() * 1000);

        x = (x > 590) ? x-600 : x
        y = (y > 590) ? y-600 : y
    
        x -= x % 20;
        y -= y % 20;

        $("#food").css("left", x);
        $("#food").css("bottom", y);
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

        prevX = parseInt($("#initialBlock").css("left"));
        prevY = parseInt($("#initialBlock").css("bottom"));
        
        
        let x = parseInt($("#initialBlock").css("bottom")) + 20;
        x = (x > 590) ? 0 : x

        checkFoodStat();
        checkCollision();

        let elements = document.getElementsByTagName("div");
        
        for(let i = loopStart; i < elements.length; i++){
            prevX1 = parseInt(elements[i].style.left);
            prevY1 = parseInt(elements[i].style.bottom);
            elements[i].style.left = prevX + "px";
            elements[i].style.bottom = prevY + "px";
            prevX = prevX1;
            prevY = prevY1;
        }

        $("#initialBlock").css("bottom", x);
        showScore();
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
        prevX = parseInt(snake.style.left);
        prevY = parseInt(snake.style.bottom);
        let x = parseInt($("#initialBlock").css("left")) - 20;

        x = (x < 0) ? x + 1400 : x

        checkFoodStat();
        checkCollision();

        let elements = document.getElementsByTagName("div");
        
        for(let i = loopStart; i < elements.length; i++){
            prevX1 = parseInt(elements[i].style.left);
            prevY1 = parseInt(elements[i].style.bottom);
            elements[i].style.left = prevX + "px";
            elements[i].style.bottom = prevY + "px";
            prevX = prevX1;
            prevY = prevY1;
        }

        $("#initialBlock").css("left", x);
        showScore();
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
        prevX = parseInt(snake.style.left);
        prevY = parseInt(snake.style.bottom);
        let x = parseInt($("#initialBlock").css("bottom")) - 20;
        x = (x < 0) ? 580 : x
        
        checkFoodStat();
        checkCollision();

        let elements = document.getElementsByTagName("div");

        for(let i = loopStart; i < elements.length; i++){
            prevX1 = parseInt(elements[i].style.left);
            prevY1 = parseInt(elements[i].style.bottom);
            elements[i].style.left = prevX + "px";
            elements[i].style.bottom = prevY + "px";
            prevX = prevX1;
            prevY = prevY1;
        }

        $("#initialBlock").css("bottom", x)
        showScore();
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
        prevX = parseInt(snake.style.left);
        prevY = parseInt(snake.style.bottom);
        

        let x = parseInt($("#initialBlock").css("left")) + 20;
        x = (x > 1410) ? x - 1400 : x

        checkFoodStat();
        checkCollision();

        let elements = document.getElementsByTagName("div");
        
        for(let i = loopStart; i < elements.length; i++){
            prevX1 = parseInt(elements[i].style.left);
            prevY1 = parseInt(elements[i].style.bottom);
            elements[i].style.left = prevX + "px";
            elements[i].style.bottom = prevY + "px";
            prevX = prevX1;
            prevY = prevY1;
        }

        $("#initialBlock").css("left", x);
        showScore();
    }


    let checkFoodStat = (x) => {
        let snake = document.getElementById("initialBlock");
        let node = document.createElement("div");
        if (snake.style.left == food.style.left && snake.style.bottom == food.style.bottom){
            console.log("Food Captured");
            generateFood();
            document.getElementById("innerframe").append(node);
            score += 10;
        }
    }


    let checkCollision = () => {
        let snake = document.getElementById("initialBlock");
        let elements = document.getElementsByTagName("div");

        for(let i = 4; i < elements.length; i++){
            if ((parseInt(snake.style.left) == parseInt(elements[i].style.left) && (parseInt(snake.style.bottom) == parseInt(elements[i].style.bottom)))) {
                alert("Game Over");
                clearInterval(eve);
            }
        }
    }


    let showScore = () => {
        document.getElementById("score").innerHTML = "Score : " + score;
        if (score % 100 == 0 && score != 0){
            speed -= 20;
            score += 10;
        }   
        if (speed < 10) speed = 10;

        console.log(score);
    }

    document.addEventListener('keydown', checkKey);

    generateSnake();
    generateFood();

    let eve = window.setInterval(down, speed);
})