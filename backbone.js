
function addTransformManager(go)
{
    go.scaleVal={x:1,y:1} 
    go.rotateVal=0 
    go.translateCoords={x:0,y:0} 
    go.rotated=false 
    go.updateAppearance=function()
    {
        this.style.transform=
        `translate(${this.translateCoords.x}px,${this.translateCoords.y}px)
        scale(${this.scaleVal.x},${this.scaleVal.y})
        rotate(${this.rotateVal}deg)
        
        ` 
    }
    go.rotate=function(value)
    {
        if(this.rotateVal==value)
        return 
        this.rotateVal=value 
        this.updateAppearance() 
        if(value%360==0)
        this.rotated=false 
        else
        this.rotated=true 
    }
    go.scale=function(valueX,valueY)
    {
        if(valueY==undefined)
        valueY=valueX 
        if(this.scaleVal.x==valueX&&this.scaleVal.y==valueY)
        return 
        this.scaleVal={x:valueX,y:valueY} 
        this.updateAppearance() 
    }
    go.move=function(xx,yy)
    {
        this.translateCoords.x=xx 
        this.translateCoords.y=yy 
        this.updateAppearance() 
    }
}
function printBoard()
{
    for(let i=0;i<4;i++)
    {
        let s="" 
        for(let j=0;j<4;j++)
        {
            let k=board[j][i] 
            s+=(k==null?"x":k.innerText)+"|" 
        }
        console.log(s+"\t\t\t"+Math.random()) 
    }
}

function artificialFool()
{
    
}