function makeTileAndPut(x,y,forceValue)
{
    let tile=document.createElement("button") 
    tile.className="tiles" 
    boardDiv.append(tile)
    addTransformManager(tile)
    if(forceValue==undefined)
    {
        if(Math.random()<0.2)
        tile.innerText=""+2;
        else
        tile.innerText=""+1;
    }
    else
    tile.innerText=forceValue/2+""
        
    board[x][y]=tile
    tile.move(x*100,y*100)
    tile.doubleValue=function()
    {
        tile.innerText=""+2*Number(tile.innerText);
        if(tile.innerText.length==4)
        tile.style.fontSize="40px";
        let val=Math.log2(Number(tile.innerText));
        tile.style.backgroundColor=`rgb(${val/11*205},${val/11*205},${7})`
    }
    tile.doubleValue();
}
function downMotion()
{
    let moved=false
    for(let i=0;i<4;i++)
    {
        let lastModified
        for(let j=3;j>=0;j--)
        {
            let k=board[i][j]
            if(k==null)
            continue
            for(let c=j+1;c<4;c++)
            {
                if(board[i][c]!=null)
                {
                    if(k.innerText==board[i][c].innerText  &&  lastModified!=k  &&  board[i][c]!=lastModified)
                    {
                        board[i][c].scale(0)
                        k.doubleValue()
                        board[i][c]=k
                        k.move(i*100,c*100)
                        moved=true
                        board[i][c-1]=null
                        lastModified=k
                    }
                    break
                }
                else
                {
                    board[i][c]=k
                    k.move(i*100,c*100)
                    moved=true
                    board[i][c-1]=null
                }
            }
        }
    }
    return moved
}
function upMotion()
{
    let moved=false
    for(let i=0;i<4;i++)
    {
        let lastModified
        for(let j=0;j<4;j++)
        {
            let k=board[i][j]
            if(k==null)
            continue
            for(let c=j-1;c>=0;c--)
            {
                if(board[i][c]!=null )
                {
                    if(k.innerText==board[i][c].innerText &&  lastModified!=k  &&  board[i][c]!=lastModified)
                    {
                        board[i][c].scale(0)
                        k.doubleValue()
                        board[i][c]=k
                        k.move(i*100,c*100)
                        moved=true
                        board[i][c+1]=null
                        lastModified=k
                    }
                    break
                }
                else
                {
                    board[i][c]=k
                    k.move(i*100,c*100)
                    moved=true
                    board[i][c+1]=null
                }
            }
        }
    }
    return moved
}
function rightMotion()
{
    let moved=false
    for(let i=0;i<4;i++)
    {
        let lastModified
        for(let j=3;j>=0;j--)
        {
            let k=board[j][i]
            if(k==null)
            continue
            for(let c=j+1;c<4;c++)
            {
                if(board[c][i]!=null)
                {
                    if(k.innerText==board[c][i].innerText  &&  lastModified!=k  &&  board[c][i]!=lastModified)
                    {
                        board[c][i].scale(0)
                        k.doubleValue()
                        board[c][i]=k
                        k.move(c*100,i*100)
                        moved=true
                        board[c-1][i]=null
                        lastModified=k
                    }
                    break
                }
                else
                {
                    board[c][i]=k
                    k.move(c*100,i*100)
                    moved=true
                    board[c-1][i]=null
                }
            }
        }
    }
    return moved
}
function leftMotion()
{
    let moved=false
    for(let i=0;i<4;i++)
    {
        let lastModified
        for(let j=0;j<=3;j++)
        {
            let k=board[j][i]
            if(k==null)
            continue
            for(let c=j-1;c>=0;c--)
            {
                if(board[c][i]!=null)
                {
                    if(k.innerText==board[c][i].innerText  &&  lastModified!=k  &&  board[c][i]!=lastModified)
                    {
                        board[c][i].scale(0)
                        k.doubleValue()
                        board[c][i]=k
                        k.move(c*100,i*100)
                        moved=true
                        board[c+1][i]=null
                        lastModified=k
                    }
                    break
                }
                else
                {
                    board[c][i]=k
                    k.move(c*100,i*100)
                    moved=true
                    board[c+1][i]=null
                }
            }
        }
    }
    return moved
}

