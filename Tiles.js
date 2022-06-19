function makeTile(div,x,y)
{
    addTransformManager(div);
    div.init="initialized"
    if(Math.random()<0.2)
    {
        div.innerText=""+2;
    }
    else
    {
        div.innerText=""+1;
    }
    board[x][y]=div;
    div.doubleValue=function()
    {
        div.innerText=""+2*Number(div.innerText);
        if(div.innerText.length==4)
        div.style.fontSize="40px";
        let val=Math.log2(Number(div.innerText));
        div.style.backgroundColor=`rgb(${val/11*205},${val/11*205},${7})`
    }
    div.doubleValue();
}
function downMotion()
{
    for(let i=0;i<4;i++)
    {
        let modificationsAllowed;
        for(let j=3;j>=0;j--)
        {
            let k=board[i][j];
            if(k==null)
            continue;
            for(let c=j+1;c<4;c++)
            {
                if(board[i][c]!=null)
                {
                    if(k.innerText==board[i][c].innerText  &&  modificationsAllowed!=k)
                    {
                        board[i][c].scale(0);
                        k.doubleValue();
                        board[i][c]=k;
                        k.move(i*100,c*100);
                        board[i][c-1]=null;
                        modificationsAllowed=k;
                    }
                    break;
                }
                else
                {
                    board[i][c]=k;
                    k.move(i*100,c*100);
                    board[i][c-1]=null;
                }
            }
        }
    }
    
}
function upMotion()
{
    for(let i=0;i<4;i++)
    {
        let modificationsAllowed;
        for(let j=0;j<4;j++)
        {
            let k=board[i][j];
            if(k==null)
            continue;
            for(let c=j-1;c>=0;c--)
            {
                if(board[i][c]!=null )
                {
                    if(k.innerText==board[i][c].innerText &&  modificationsAllowed!=k)
                    {
                        board[i][c].scale(0);
                        k.doubleValue();
                        board[i][c]=k;
                        k.move(i*100,c*100);
                        board[i][c+1]=null;
                        modificationsAllowed=k;
                    }
                    
                    break;
                }
                else
                {
                    board[i][c]=k;
                    k.move(i*100,c*100);
                    board[i][c+1]=null;
                }
            }
        }
    }
}
function rightMotion()
{
    for(let i=0;i<4;i++)
    {
        let modificationsAllowed;
        for(let j=3;j>=0;j--)
        {
            let k=board[j][i];
            if(k==null)
            continue;
            for(let c=j+1;c<4;c++)
            {
                if(board[c][i]!=null)
                {
                    if(k.innerText==board[c][i].innerText  &&  modificationsAllowed!=k)
                    {
                        board[c][i].scale(0);
                        k.doubleValue();
                        board[c][i]=k;
                        k.move(c*100,i*100);
                        board[c-1][i]=null;
                        modificationsAllowed=k;
                    }
                    break;
                }
                else
                {
                    board[c][i]=k;
                    k.move(c*100,i*100);
                    board[c-1][i]=null;
                }
            }
        }
    }
}
function leftMotion()
{
    for(let i=0;i<4;i++)
    {
        let modificationsAllowed;
        for(let j=0;j<=3;j++)
        {
            let k=board[j][i];
            if(k==null)
            continue;
            for(let c=j-1;c>=0;c--)
            {
                if(board[c][i]!=null)
                {
                    if(k.innerText==board[c][i].innerText  &&  modificationsAllowed!=k)
                    {
                        board[c][i].scale(0);
                        k.doubleValue();
                        board[c][i]=k;
                        k.move(c*100,i*100);
                        board[c+1][i]=null;
                        modificationsAllowed=k;
                    }
                    break;
                }
                else
                {
                    board[c][i]=k;
                    k.move(c*100,i*100);
                    board[c+1][i]=null;
                }
            }
        }
    }
}

