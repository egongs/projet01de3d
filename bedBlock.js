let BedBlock = function(image,blockSizeX,blockSizeY){
    this.image = image;
    this.blockSizeX = blockSizeX;
    this.blockSizeY = blockSizeY;
}
BedBlock.prototype.dessiner = function()
{
    objC2D.beginPath();
    objC2D.moveTo(0, 0);
    objC2D.drawImage(this.image, 0, 0,this.blockSizeX, this.blockSizeY);
    objC2D.closePath();
}