
let game
const gameCanvas = document.getElementById('game-canvas')
const context = gameCanvas.getContext('2d')

function main() {
    init()
}

function playerRender() {
    context.fillStyle = '#f5f5f5'
    context.globalAlpha = 1
    context.clearRect(0, 0, 50, 50)
    context.fillStyle = '#050505'
    context.globalAlpha = 1
    context.fillRect(game.player.x, game.player.y, game.player.width, game.player.heigth)
    if (game.move == 'top') {
        for (i = 1; i <= game.player.points; i++) {
            context.fillStyle = '#050505'
            context.globalAlpha = 0.3
            context.fillRect(game.player.x, game.player.y + i, game.player.width, game.player.heigth)
        }
    } else {
        if (game.move == 'botton') {
            for (i = 1; i <= game.player.points; i++) {
                context.fillStyle = '#050505'
                context.globalAlpha = 0.3
                context.fillRect(game.player.x, game.player.y - i, game.player.width, game.player.heigth)
            }
        } else {
            if (game.move == 'rigth') {
                for (i = 1; i <= game.player.points; i++) {
                    context.fillStyle = '#050505'
                    context.globalAlpha = 0.3
                    context.fillRect(game.player.x - i, game.player.y, game.player.width, game.player.heigth)
                }
            } else {
                if (game.move == 'left') {
                    for (i = 1; i <= game.player.points; i++) {
                        context.fillStyle = '#050505'
                        context.globalAlpha = 0.3
                        context.fillRect(game.player.x + i, game.player.y, game.player.width, game.player.heigth)
                    }
                }
            }
        }
    }
    if (game.fruit !== null) {
        context.fillStyle = 'green'
        context.globalAlpha = 1
        context.fillRect(game.fruit.x, game.fruit.y, game.player.width, game.player.heigth)
    }
    document.querySelector(".points").innerHTML = 'Pontos:' + game.player.points
    requestAnimationFrame(playerRender)
}


function init() {
    game = {
        player: {
            x: 25,
            y: 25,
            points: 0,
            width: 1,
            heigth: 1
        },
        time: 1000,
        move: 'rigth',
        fruit: null
    }
    playerRender(game.move)
    document.addEventListener('keydown', handleKeydown)
    game.loop = setInterval(movePlayer, game.time)
}
function handleKeydown(e) {
    const keyPress = e.key
    console.log(keyPress)

    if (keyPress === 'ArrowDown') {
        game.move = 'botton'
    }
    if (keyPress === 'ArrowLeft') {
        game.move = 'left'
    }
    if (keyPress === 'ArrowRight') {
        game.move = 'rigth'
    }
    if (keyPress === 'ArrowUp') {
        game.move = 'top'
    }
}
function movePlayer() {
    if (game.move === 'botton' && game.player.y + 1 < gameCanvas.height) {
        game.player.y = game.player.y + 1
    }
    if (game.move === 'left' && game.player.x - 1 >= 0) {
        game.player.x = game.player.x - 1
    }
    if (game.move === 'rigth' && game.player.x + 1 < gameCanvas.width) {
        game.player.x = game.player.x + 1
    }
    if (game.move === 'top' && game.player.y - 1 >= 0) {
        game.player.y = game.player.y - 1
    }
    let random = Math.floor(Math.random() * (3 - 0)) + 0
    let random2 = Math.floor(Math.random() * (3 - 0)) + 0

    if (game.fruit === null && random == random2) {
        game.fruit = {
            x: Math.floor(Math.random() * (gameCanvas.width - 0)) + 0,
            y: Math.floor(Math.random() * (gameCanvas.height - 0)) + 0
        }
    }

    if (game.fruit != null) {
        if (game.player.x === game.fruit.x && game.player.y === game.fruit.y) {
            game.fruit = null
            game.player.points++
        }
    }
}

main()