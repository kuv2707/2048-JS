const board=[] 
let gameState=true 

let boardDiv=document.querySelector("#main") 
addTransformManager(boardDiv) 
for(let i=0;i<16;i++)
{
    let k=document.createElement("button") 
    k.className="bedrocks" 
    boardDiv.append(k)  
}
let restart=document.createElement("button")
restart.id="restart"
restart.innerText="Restart"
restart.addEventListener("pointerup",restartGame);
window.addEventListener("resize",function()
{
    boardDiv.move(window.innerWidth/2-210,window.innerHeight/2-200) 
}) 
const DOWN="-1",UP="1",LEFT="-i",RIGHT="i" 
document.addEventListener("keydown",function(e)
{
    let dir=null 
    if(e.key=="ArrowDown")
    dir=DOWN 
    if(e.key=="ArrowUp")
    dir=UP 
    if(e.key=="ArrowLeft")
    dir=LEFT 
    if(e.key=="ArrowRight")
    dir=RIGHT 

    if(dir!=null)
    gameHandler(dir) 

}) 
let xi,yi,xf,yf 
document.addEventListener("pointerdown",function(e)
{
    xi=e.pageX 
    yi=e.pageY 
})
document.addEventListener("pointerup",function(e)
{
    xf=e.pageX 
    yf=e.pageY 

    let dx=xf-xi 
    let dy=yf-yi 
    if(Math.abs(dx)<5 &&  Math.abs(dy)<5)
    return //ignore such subtle movements
    let dir 
    if(Math.abs(dx)>Math.abs(dy))//horizontal swipe
    {
        if(dx<0)
        dir=LEFT 
        else
        dir=RIGHT 
    }
    else
    {
        if(dy>0)
        dir=DOWN 
        else
        dir=UP 
    }
    gameHandler(dir) //obviously dir is never null
})

function gameHandler(direction)
{
    if(gameState==false)
    return //game has ended
    let moved=false 

    if(direction==DOWN)
    moved=downMotion()
    if(direction==UP)
    moved=upMotion() 
    if(direction==LEFT)
    moved=leftMotion() 
    if(direction==RIGHT)
    moved=rightMotion()

    if(moved)
    addRandomTile() 
    let end=true 
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            if(board[i][j]==null)
            end=false
        }
    }
    if(end==true)
    gameOver() 
}
function addRandomTile()
{
    let x=Math.floor(Math.random()*4) 
    let y=Math.floor(Math.random()*4) 
    if(board[x][y]!=null)
    addRandomTile() 
    else
    makeTileAndPut(x,y) 
}

function gameOver()
{
    document.body.style.backgroundColor="red" 
    gameState=false 
    console.log("game ends") 
    boardDiv.append(restart);
}
function restartGame()
{
    board.length=0 
    document.body.style.backgroundColor="#a29385"
    restart.remove();
    let k=document.querySelectorAll(".tiles");
    console.log(k);
    k.forEach(p=>p.remove())
    gameState=true 
    for(let i=0;i<4;i++)
    {
        let k=[] 
        for(let j=0;j<4;j++)
        {
            k.push(null) 
        }
        board.push(k)
    }
    addRandomTile()
    addRandomTile()
}
window.dispatchEvent(new Event("resize"))
restartGame()