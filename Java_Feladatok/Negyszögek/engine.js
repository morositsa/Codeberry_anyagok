var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function negyzet(kx,ky,mx,my,szin,mire){
  mire.fillStyle = szin;
  mire.fillRect(kx,ky,mx,my);
  return;
}

for (i=1;i<6;i++){
  for (o=1;o<=i;o++){
    negyzet(o*30,i*30,20,20,"red",context);
  }
}