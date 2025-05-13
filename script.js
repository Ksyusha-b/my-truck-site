
function create(x,y) {
      let pixel = document.createElement('div')
      pixel.className='pixel'

      pixel.style.left=x+'px'
      pixel.style.top=y+'px'

    let size= Math.random()*6+2
    pixel.style.height=size+'px' 
    pixel.style.width=size+'px'

    let mX = (Math.random()-0.5)*400
    let mY = (Math.random()-0.5)*400

    pixel.style.setProperty('--mX',mX+'px')
    pixel.style.setProperty('--mY',mY+'px')

    let t = Math.random()*3+2;

    pixel.style.animationDuration = t+'s'


      document.body.append(pixel);
}

document.body.onmousemove=function(e){
	create(e.clientX,e.clientY)
}
