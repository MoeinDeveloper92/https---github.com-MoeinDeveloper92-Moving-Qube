const gameArea = document.querySelector('.game')
const message = elMaker('div', gameArea, 'message', 'MESSAGEAREA')
const scoreBoard = elMaker('div', gameArea, 'scoreBoard', "SCOREBOARD");
const gamePlay = elMaker('div', gameArea, 'gamePlay', 'GAME_AREA');
const box = elMaker('div', gamePlay, 'box', "")

// bellow we should create a global game object in order to track the mvoemet of the box
const game = {
    ani: null,
    x: 0,
    y: 0,
    speed: 5
    // setting x and y allows us to manuipulate element on the page much easier
}

const keyz = {
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false
}



// bellow we need to add event listener for key up and down and right and left
window.addEventListener('keydown', (e) => {
    if (e.code in keyz) {
        keyz[e.code] = true
    }

    // we set this conditipn in order to make sure we dont add additonal item into the keyz
})

window.addEventListener('keyup', e => {
    keyz[e.code] = false

})



game.ani = window.requestAnimationFrame(mover)

function mover() {
    if (keyz.ArrowDown) {
        game.y += game.speed;
    }
    if (keyz.ArrowUp) {
        game.y -= game.speed;
    }
    if (keyz.ArrowRight) {
        game.x += game.speed;
    }
    if (keyz.ArrowLeft) {
        game.x -= game.speed;
    }
    box.style.left = game.x + 'px';
    box.style.top = game.y + 'px';
    game.ani = window.requestAnimationFrame(mover)

}





function elMaker(elType, elParent, elClass, html) {
    const ele = document.createElement(elType);
    elParent.append(ele);
    ele.classList.add(elClass);
    ele.innerHTML = html;
    return ele;
}