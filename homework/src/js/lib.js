btnStart.addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('.start').style.display = 'none';
    document.querySelector('.game').style.display = 'block';
    document.querySelector('.endgame').style.display = 'block';
})


const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const winner = () => {
    if (count === 3) {
        let win = Math.max(sCount, pCount, rCount)
        if (win === sCount) {
            gameOver.textContent = `Scissors winner`
        } else if (win === pCount) {
            gameOver.textContent = `Paper winner`
        } else {
            gameOver.textContent = `Rock winner`
        }
        count = 0;
        sCount = 0;
        pCount = 0;
        rCount = 0;
    }
}

let count = 0;
let sCount = 0;
let pCount = 0;
let rCount = 0;

scissors.addEventListener('click', (event) => {
    count++;
    let res = '';
    event.preventDefault();
    const choise = random(0, 3);
    if (choise === 0) {
        res = `Round ${count} equal`;
    } else if (choise === 1) {
        res = `Round ${count} You have WON`;
        sCount++;
    } else {
        res = `Round ${count} You have LOST!`;
        rCount++;
    }
    result.textContent = res;
    winner();
})

paper.addEventListener('click', (event) => {
    count++;
    event.preventDefault();
    let res = '';
    event.preventDefault();
    const choise = random(0, 3);
    if (choise === 0) {
        res = `Round ${count} You have LOST!`;
        sCount++;
    } else if (choise === 1) {
        res = `Round ${count} equal`;
    } else {
        res = `Round ${count} You have WON!`;
        pCount++;
    }
    result.textContent = res;
    winner();
})

rock.addEventListener('click', (event) => {
    event.preventDefault();
    count++;
    event.preventDefault();
    let res = '';
    event.preventDefault();
    const choise = random(0, 3);
    if (choise === 0) {
        res = `Round ${count} You have WON!`;
        rCount++;
    } else if (choise === 1) {
        res = `Round ${count} You have LOST!`;
        pCount++;
    } else {
        res = `Round ${count} equal!`;
    }
    result.textContent = res;
    winner();
})


newGame.addEventListener('click', (event) => {
    event.preventDefault();
    count = 0;
    sCount = 0;
    pCount = 0;
    rCount = 0;
    result.textContent = 'result';
    gameOver.textContent = 'final';

})
