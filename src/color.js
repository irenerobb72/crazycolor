var ctx = canvas.getContext('2d'),
  x, y = 0,
  dia = canvas.width,
  radius = dia * 0.5;

ctx.translate(0.5, 0.5)

for(; y < dia; x++){
  for(x = 0; x < dia; x++){
    ctx.fillStyle = getRndColor()
    ctx.fillRect(x, y, 1, 1)
  }
}

ctx.globalCompositeOperation = 'destination-in'
ctx.arc(radius, radius, 0, 2*Math.PI)
ctx.fill()
