import React from 'react'
import { useSelector } from 'react-redux';
import { isNavigationLoading } from '../../navigation/redux/selectors';
import AffectationSideBar from '../AffectationSideBar';
import CollaborateurTimelineContainer from '../CollaborateurTimelineContainer'
import { getEquipe } from "../store/selectors";

const PlanningCollaborateur = () => {

    const equipe = useSelector(getEquipe);

    const navigationLoading = useSelector(isNavigationLoading);

    return (

        <>
            {
                equipe.map(collaborateur => {
                    return (<CollaborateurTimelineContainer key={`${collaborateur.matricule}`} collaborateur={collaborateur} />)
                })


            }
            {
                !navigationLoading && <AffectationSideBar libelleHeader="Ajouter une affectation" />
            }

        </>
    )
}

export default PlanningCollaborateur