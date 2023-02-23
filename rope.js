let Rope = function(blockSizeX, posX){
    this.blockSizeX = blockSizeX;
    this.posX = posX;
    this.posY = posY;
}
Rope.prototype.dessiner = function()
{
    objC2D.beginPath();
    objC2D.moveTo(0, 10);
    objC2D.lineTo(this.blockSizeX, 10);
    objC2D.lineWidth = 3;
    objC2D.strokeStyle = "red";
    objC2D.stroke();
    objC2D.closePath();
}