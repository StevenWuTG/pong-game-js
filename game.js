const { body } = document
//canvas code
const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')

const width = 500
const height = 700

const screenWidth = window.screen.width
const canvasPosition = screenWidth / 2 - width / 2
const isMobile = window.matchMedia('(max-width: 600px)')

//paddle code
const paddleHeight = 10
const paddleWidth = 50
const paddleDiff = 25
let paddleBottomX = 225
let paddleTopX = 225
let playerMoved = false
let paddleContact = false

//ball code
let ballX = 250
let ballY = 350
const ballRadius = 5

// Score
let playerScore = 0
let botScore = 0
const winningScore = 7


//generating canvas

const renderCanvas = () => {
    //canvas background
    context.fillStyle = 'black'
    context.fillRect( 0, 0, width, height)

    //paddle color
    context.fillStyle = 'white'

    //player paddle
    context.fillRect(paddleBottomX, height - 20, paddleWidth, paddleHeight)

    //bot paddle
    context.fillRect(paddleTopX, 10, paddleWidth, paddleHeight)

    //middle line
    context.beginPath()
    context.setLineDash([4])
    context.moveTo(0, 350)
    context.lineTo(500,350)
    context.strokeStyle = 'lime'
    context.stroke()

    //ball 
    context.beginPath()
    context.arc(ballX, ballY, ballRadius, 2 * Math.PI, false)
    context.fillStyle = 'white'
    context.fill()

    //score

    context.font = '32px Courier New'
    context.fillText(playerScore, 20, canvas.height / 2 + 50)
    context.fillText(botScore, 20, canvas.height / 2 - 30)


}

const createCanvas = () => {
    canvas.width = width
    canvas.height = height
    body.appendChild(canvas)
    renderCanvas()
}

createCanvas()