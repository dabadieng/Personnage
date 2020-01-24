/**
 * Objet contenant une horloge et une alarme
 */
class Personnage {
    /**
     * 
     * @param {string} nom 
     * @param {integer} force définit la force du coup lors d'une attaque
     * @param {integer} defence définit la capacité à parer une attaque
     * @param {integer} vitali  définit les points de vie maximum possible
     * @param {string} parent emplacement de l'objet dans le DOM 
     */
    constructor(nom, force, defence, vitalite, parent, imgPersonnage) {
        //création d'un objet div et insertion dans le dom
        let div = document.createElement("div");
        parent.appendChild(div);
        this.dom = div;

        //personnage
        this.img = () => this.creerImage(imgPersonnage);
        this.dom.appendChild(img);

        // initialisation de la force, defence, vitalité
        let tab = [];
        tab = checkValeur(force, defence, vitalite);
        this.force = tab[0];
        this.defence = tab[1];
        this.vitalite = tab[2];
        this.sante = this.vitalite;


        this.timer = setInterval(() => this.attaque(), 1000);
    }
    /**
 * Créer une balise img
 * @param {string} imgurl 
 */
    creerImage(imgurl) {
        let img = document.createElement("img");
        img.src = imgurl;
        img.style.width = "40px";
        img.style.height = "40px";
        return img;
    }
    /*
    attaque(this.Personnage, Personnage) {

    }*/

}


/**************************************************************************************************/
/**fonction qui vérifie que la somme des données ne dépasse pas 100
 * 
 * @param {integer} force 
 * @param {integer} defence 
 * @param {integer} vitalite 
 */

function checkValeur(force, defence, vitalite) {
    force = 200;
    defence = 20;
    vitalite = 200;

    // controle des limites 
    let limite = force + defence + vitalite;


    if (limite > 100 || limite < 100) {
        //calcul du ratio pour chaque valeur sasisie sur la total saisie 
        let ratforce = force / limite;
        let ratdef = defence / limite;
        let ratvit = vitalite / limite;
        //console.log(ratforce, ratdef, ratvit);

        //calcul des nouvelles valeurs en tenant compte des rations
        limite = 100;
        force = limite * ratforce;
        force = parseInt(force);
        defence = limite * ratdef;
        defence = parseInt(defence);
        vitalite = 100 - force - defence;
        //total = force + defence + vitalite;
        //console.log(force, defence, vitalite, total);

    }
    return [force, defence, vitalite];
}