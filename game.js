
let game
const gameCanvas = document.getElementById('game-canvas')
const context = gameCanvas.getContext('2d')

function main(){
    init()
}

function init(){
    game = {
        player: {
            x: 140,
            y: 70,
            points: 2,
            width: 5,
            heigth: 5
        }
    }
    game.playerRender = (direction) => {
            context.fillStyle = '#050505'
            context.globalAlpha = 1
            context.fillRect(game.player.x, game.player.y, game.player.width, game.player.heigth)
            if(direction == 'top'){
               for(i = 1; i <= game.player.points; i++){
                context.fillStyle = '#050505'
                context.globalAlpha = 0.3
                context.fillRect(game.player.x, game.player.y + i*5, game.player.width , game.player.heigth)
                context.strokeRect(game.player.x + 2, game.player.y + i*5 + 2 , game.player.width - 4, game.player.heigth - 4)
               }
            }else{
                if(direction == 'bottom'){

                }else{
                    if(direction == 'left'){

                    }else{

                    }
                }
            } 
    }
    game.playerRender('top')
}


main()