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

function getRndColor() {
  var r = 255*Math.random()|0,
      g = 255*Math.random()|0,
      b = 255*Math.random()|0;
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}
