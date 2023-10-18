class Vehicule {
    nombreDeRoues;
    couleur;
    marque;
    #numeroDeSerie;

    constructor(nombreDeRoues, couleur, marque, numeroDeSerie) {
        this.nombreDeRoues = nombreDeRoues;
        this.couleur = couleur;
        this.marque = marque;
        this.#numeroDeSerie = numeroDeSerie;
    }

    #afficherLaMarque() {
        console.log(this.marque);
    }

    avancer() {
        console.log('trajet a <=> b');
    }

    peutRouler() {
        return this.nombreDeRoues !== undefined && this.nombreDeRoues > 0;
    }

    afficherNumeroDeSerie() {
        console.log(this.#numeroDeSerie);
    }


}

class Voiture extends Vehicule {
    constructor(marque, couleur) {
        super(4, couleur, marque);
    }

    avancer() {
        console.log('appuyer sur l\'accelerateur')
    }
}

class Bateau extends Vehicule {
    nombreDePassagers;
    constructor(marque, couleur, nombreDePassagers, numeroDeSerie) {
        super(0, couleur, marque, numeroDeSerie);
        this.nombreDePassagers = nombreDePassagers;
    }

    avancer() {
        console.log('hisser les voiles')
    }
}

class VaisseauSpatial extends Vehicule {
    constructor() {
        super();
    }
}

const bateau = new Bateau('titanic', 'rouille', 'tous dead', '777');
const voiture = new Voiture('kia', 'violet');
const vaisseauSpatial = new VaisseauSpatial('test');

bateau.afficherNumeroDeSerie()
