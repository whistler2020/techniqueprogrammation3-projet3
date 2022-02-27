export interface Objetvoyage {
    idReservation: string,
    destination: string,
    villeDepart: string,
    "hotel": {
        nomHotel: string,
        coordonneesHotel: string,
        nombreEtoiles: number,
        nombreChambres: number,
        caracteristiques: string[]
    },
    dateDepart: string,
    dateRetour: string,
    prix: number,
    rabais: number,
    vedette: boolean
}
