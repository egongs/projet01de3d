function mouvement(e) {
    let numCle = e.keyCode;
    if (binPeutBouger) {
        if (numCle === 37 && posX > 0) { // Gauche
            posX -= 0.06;
            binRunnerLeft = true;
            binRunnerRight = false;
            timer++
        } else if (numCle === 39 && posX < 27.5) { // Droite
            posX += 0.06;
            binRunnerLeft = false;
            binRunnerRight = true;
            timer++
        } else if (numCle === 38 && binPeutMonter) { // Haut
            posY -= 1;
        } else if (numCle === 40 && binPeutDescendre) { // Bas
            posY += 1;
            binDecend = true;
        }
        else {
            timer = 0
            binDecend = false;
        }

    }
}