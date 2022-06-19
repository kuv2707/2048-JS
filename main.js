const board=[];
let gameState=true;
for(let i=0;i<4;i++)
{
    let k=[];
    for(let j=0;j<4;j++)
    {
        k.push(null);
    }
    board.push(k);
}
let boardDiv=document.querySelector("#main");
addTransformManager(boardDiv);
for(let i=0;i<16;i++)
{
    let k=document.createElement("button");
    k.className="bedrocks";
    boardDiv.append(k);

    
}
addRandomTile()
addRandomTile()
//putTileAt(2,0)
//putTileAt(2,1)
window.addEventListener("resize",function()
{
    boardDiv.move(window.innerWidth/2-210,window.innerHeight/2-200);
});
window.dispatchEvent(new Event("resize"));
const DOWN="-1",UP="1",LEFT="-i",RIGHT="i";
document.addEventListener("keydown",function(e)
{
    let dir=null;
    if(e.key=="ArrowDown")
    dir=DOWN;
    if(e.key=="ArrowUp")
    dir=UP;
    if(e.key=="ArrowLeft")
    dir=LEFT;
    if(e.key=="ArrowRight")
    dir=RIGHT;

    if(dir!=null)
    gameHandler(dir);

});
let xi,yi,xf,yf;
document.addEventListener("pointermove",function(e)
{
    e.preventDefault();
    e.stopPropagation();
},{passive:false})
document.addEventListener("pointerdown",function(e)
{
    xi=e.pageX;
    yi=e.pageY;
})
document.addEventListener("pointerup",function(e)
{
    xf=e.pageX;
    yf=e.pageY;

    let dx=xf-xi;
    let dy=yf-yi;
    if(Math.abs(dx)<5 &&  Math.abs(dy)<5)
    return;//ignore such subtle movements
    let dir;
    if(Math.abs(dx)>Math.abs(dy))//horizontal swipe
    {
        if(dx<0)
        dir=LEFT;
        else
        dir=RIGHT;
    }
    else
    {
        if(dy>0)
        dir=DOWN;
        else
        dir=UP;
    }
    gameHandler(dir);//obviously dir is never null
})
function gameHandler(direction)
{
    if(gameState==false)
    return;//game has ended

    if(direction==DOWN)
    {
        downMotion();
    }
    if(direction==UP)
    {
        upMotion();
    }
    if(direction==LEFT)
    {
        leftMotion();
    }
    if(direction==RIGHT)
    {
        rightMotion();
    }
    
    addRandomTile();
    //printBoard();
    let end=true;
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            if(board[i][j]==null)
            {
                end=false;
            }
        }
    }
    if(end==true)
    {
        gameOver();
    }
}
function addRandomTile()
{
    let x=Math.floor(Math.random()*4);
    let y=Math.floor(Math.random()*4);
    if(board[x][y]!=null)
    addRandomTile();
    else
    {
        putTileAt(x,y);
    }
}
function putTileAt(x,y)
{
    let p=document.createElement("button");
    p.className="tiles";
    boardDiv.append(p);
    makeTile(p,x,y);
    p.move(x*100,y*100);
}
function printBoard()
{
    for(let i=0;i<4;i++)
    {
        let s="";
        for(let j=0;j<4;j++)
        {
            let k=board[j][i];
            s+=(k==null?"x":k.innerText)+"|";
        }
        console.log(s+"\t\t\t"+Math.random());
    }
}
function gameOver()
{
    document.body.style.backgroundColor="red";
    document.body.style.background="none";
    gameState=false;
    console.log("game ends");
}
function restartGame()
{

}