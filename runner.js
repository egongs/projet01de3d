let Runner = function (posX, posY) {
    this.posX = posX;
    this.posY = posY;
}

Runner.prototype.dessiner = function () {
    objC2D.beginPath()
    objC2D.fillStyle = "white"
    objC2D.fillRect(0, 0 / 2, 12, 10)
    objC2D.fillRect(4, 10, 7, 12)
    objC2D.rotate(40 * Math.PI / 180)
    objC2D.fillRect(15, 10, 4, 12)
    objC2D.rotate(-80 * Math.PI / 180)
    objC2D.fillRect(-9, 20, 4, 12)
    objC2D.closePath()
}
Runner.prototype.dessiner2 = function () {
    objC2D.beginPath()
    objC2D.fillStyle = "white"
    objC2D.fillRect(3, 0 / 2, 12, 10)
    objC2D.fillRect(4, 10, 7, 12)
    objC2D.rotate(40 * Math.PI / 180)
    objC2D.fillRect(15, 10, 4, 12)
    objC2D.rotate(-80 * Math.PI / 180)
    objC2D.fillRect(-9, 20, 4, 12)
    objC2D.closePath()
}
Runner.prototype.dessiner3 = function () {
    objC2D.beginPath()
    objC2D.fillStyle = "white"
    objC2D.fillRect(1, 0 / 2, 12, 10)
    objC2D.fillRect(4, 10, 7, 12)
    objC2D.rotate(40 * Math.PI / 180)
    objC2D.fillRect(15, 10, 4, 12)
    objC2D.rotate(-80 * Math.PI / 180)
    objC2D.fillRect(-9, 20, 4, 12)
    objC2D.closePath()
}