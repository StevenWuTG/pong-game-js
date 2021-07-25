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

}

const createCanvas = () => {
    canvas.width = width
    canvas.height = height
    body.appendChild(canvas)
    renderCanvas()
}

createCanvas()