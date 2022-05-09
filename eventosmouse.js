
var cuadro = document.getElementById("areaDeDibujo");
var papel = cuadro.getContext("2d");
var x;
var y;
var estado= 0;
var color = "blue";

document.addEventListener("mousedown", pressMouse);
document.addEventListener("mouseup", notPressMouse);
document.addEventListener("mousemove", moveMouse);

function moveMouse (evento)
{
  if (estado == 1)
  dibujarLinea (color, x, y, evento.offsetX, evento.offsetY, papel);

  x = evento.offsetX;
  y = evento.offsetY;
}

function pressMouse (evento)
{
  estado = 1;
  x = evento.offsetXx;
  y = evento.offsety;
}

function notPressMouse (evento)
{
  estado =0;
  x = evento.offsetx;
  y = evento.offsety;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.linewidth = 5;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
