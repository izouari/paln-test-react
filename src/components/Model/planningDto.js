import { normalize } from "normalizr";

export const planningDto = {
    collaborateurs: [
        {'matricule': 'X178200', 'nom': 'nomCollab1', 'prenom': 'prenomCollab1', 'isRenfort': 'false'},
        {'matricule': 'X178300', 'nom': 'nomCollab2', 'prenom': 'prenomCollab2', 'isRenfort': 'false'}
    ],
    affectations: [
        {'id': '1', 'matricule': 'X178200', 'codeActivite': 'OPE10', 'day': 'FRIDAY', 'date': '2021-01-05', 'pourcentage': '25', 'foRenfort': false},
        {'id': '2', 'matricule': 'X178200', 'codeActivite': 'OPE11',  'day': 'TUESDAY', 'date': '2021-01-02', 'pourcentage': '30', 'foRenfort': false},
        {'id': '3', 'matricule': 'X178200', 'codeActivite': 'OPE12',  'day': 'MONDAY', 'date': '2021-01-01', 'pourcentage': '25', 'foRenfort': false},
        {'id': '4', 'matricule': 'X178200', 'codeActivite': 'CRE10',  'day': 'MONDAY', 'date': '2021-01-01', 'pourcentage': '75', 'foRenfort': false},
        {'id': '5', 'matricule': 'X178300', 'codeActivite': 'OPE10',  'day': 'FRIDAY', 'date': '2021-01-05', 'pourcentage': '25', 'foRenfort': false}
    ],
    renforts: [
        {'id': '1', 'matricule': 'X178200', 'day': 'FRIDAY', 'date': '2021-01-05', 'codeCDSAide': '3000'}
    ],
    absences: [],
};