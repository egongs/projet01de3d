let Runner = function (posX, posY) {
    this.posX = posX;
    this.posY = posY;
}

Runner.prototype.dessinerGaucheFull = function () {
    objC2D.save()
    objC2D.beginPath()
    objC2D.fillStyle = "white"
    objC2D.fillRect(0, 0 / 2, 12, 10)
    objC2D.fillRect(4, 10, 7, 12)
    objC2D.rotate(40 * Math.PI / 180)
    objC2D.fillRect(15, 10, 4, 12)
    objC2D.rotate(-80 * Math.PI / 180)
    objC2D.fillRect(-9, 20, 4, 12)
    objC2D.closePath()
    objC2D.restore()
}
Runner.prototype.dessinerDroiteFull = function () {
    objC2D.save()
    objC2D.beginPath()
    objC2D.fillStyle = "white"
    objC2D.fillRect(3, 0 / 2, 12, 10)
    objC2D.fillRect(4, 10, 7, 12)
    objC2D.rotate(40 * Math.PI / 180)
    objC2D.fillRect(15, 10, 4, 12)
    objC2D.rotate(-80 * Math.PI / 180)
    objC2D.fillRect(-9, 20, 4, 12)
    objC2D.closePath()
    objC2D.restore()
}
Runner.prototype.dessinerSpawn = function () {
    objC2D.save()
    objC2D.beginPath()
    objC2D.fillStyle = "white"
    objC2D.fillRect(1, 0 / 2, 12, 10)
    objC2D.fillRect(4, 10, 7, 12)
    objC2D.fillRect(5.5, 17, 4, 12)
    objC2D.closePath()
    objC2D.restore()
}
Runner.prototype.dessinerGaucheMid = function () {
    objC2D.save()
    objC2D.beginPath()
    objC2D.fillStyle = "white"
    objC2D.fillRect(0, 0 / 2, 12, 10)
    objC2D.fillRect(4, 10, 7, 12)
    objC2D.rotate(15 * Math.PI / 180)
    objC2D.fillRect(8, 15, 4, 12)
    objC2D.rotate(-30 * Math.PI / 180)
    objC2D.fillRect(2, 19, 4, 12)
    objC2D.closePath()
    objC2D.restore()
}
Runner.prototype.dessinerDroiteMid = function () {
    objC2D.save()
    objC2D.beginPath()
    objC2D.fillStyle = "white"
    objC2D.fillRect(3, 0 / 2, 12, 10)
    objC2D.fillRect(4, 10, 7, 12)
    objC2D.rotate(15 * Math.PI / 180)
    objC2D.fillRect(8, 15, 4, 12)
    objC2D.rotate(-30 * Math.PI / 180)
    objC2D.fillRect(2, 19, 4, 12)
    objC2D.closePath()
    objC2D.restore()
}
Runner.prototype.dessinerGauche = function () {
    objC2D.save()
    objC2D.beginPath()
    objC2D.fillStyle = "white"
    objC2D.fillRect(0, 0 / 2, 12, 10)
    objC2D.fillRect(4, 10, 7, 12)
    objC2D.fillRect(6, 17, 4, 12)
    objC2D.closePath()
    objC2D.restore()
}
Runner.prototype.dessinerDroite = function () {
    objC2D.save()
    objC2D.beginPath()
    objC2D.fillStyle = "white"
    objC2D.fillRect(3, 0 / 2, 12, 10)
    objC2D.fillRect(4, 10, 7, 12)
    objC2D.fillRect(6, 17, 4, 12)
    objC2D.closePath()
    objC2D.restore()
}