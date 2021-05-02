import React, { useState } from 'react'
import Recherche from '../share/Recherche'
import { Grid, Box, Button, Typography } from '@material-ui/core'

import Collaborateur from './Collaborateur'
import { affectationByCollab } from '../Model/AffectationByCollab'
import PlanningDetail from './PlanningDetail'
import { DAYS } from '../Model/Utils'
import ModalAffectation from './ModalAffectation'
import { getAffectations, getCollaborateurs, getEquipe } from './store/selectors'
import { useSelector } from 'react-redux'
import PlanningHeaderV2 from './PlanningHeaderV2'
import PlanningDetailV2 from './PlanningDetailV2'


const collaborateurs = []
const affectations = []


//ToSee for more information about spread operator
//https://codeburst.io/a-simple-guide-to-destructuring-and-es6-spread-operator-e02212af5831

const iterateOverAffectation = () => {
    affectationByCollab.map(affect => {
        const { affectationsMap, ...collaborateurz } = affect
        collaborateurs.push(collaborateurz)
        affectations.push(affectationsMap)

    })
}



const PlanningV2 = () => {

    const initialState = false;
    const [displayDetail, setDisplayDetail] = useState(initialState)

    // const initialMatricule = []
    const [selectedMatricule, setSelectedMatricule] = useState([])

    const collaborateurs = useSelector(getCollaborateurs);
    const affectations = useSelector(getAffectations);
    const equipe = useSelector(getEquipe);


    const handleDisplayDetail = (selectedCollabMatricule) => {
        let copySelectedMatricule = [...selectedMatricule];
        console.log('copySelectedMatricule is ', copySelectedMatricule)
        let indexMat = copySelectedMatricule.indexOf(selectedCollabMatricule)
        if (indexMat !== -1) {
            copySelectedMatricule.splice(indexMat, 1)
        } else {
            copySelectedMatricule.push(selectedCollabMatricule)
        }

        console.log('matricule selected is ', copySelectedMatricule)
        setSelectedMatricule(copySelectedMatricule)

    }

    iterateOverAffectation();

    const addAffectation = () => {
        console.log('addAffectation');
    }

    return (
        <div>
            <Button style={{ backgroundColor: 'red' }} onClick={addAffectation}>Ajouter Affectation</Button>
            <ModalAffectation />
            <br />
            <Grid direction="row" container>
                <Grid container>
                    <Grid item xs={2}>
                        <></>
                    </Grid>
                    <Grid container xs={10}>
                        {
                            DAYS.map(day => {
                                return <Grid item xs >
                                    <Grid container direction="column" alignItems="stretch" justify="center" >
                                        <Grid item xs>
                                            <Typography component="h6" align="center">
                                                {day}
                                            </Typography>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            })
                        }

                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2}>
                        <Recherche />
                    </Grid>
                    <Grid item xs={9}>
                        <></>
                    </Grid>

                </Grid>
                <Grid container spacing={1}>
                    {
                        equipe.map(collaborateur => {

                            return (
                                <>
                                    <Collaborateur collaborateur={collaborateur} key={collaborateur.matricule} />
                                    <PlanningHeaderV2 affectations={collaborateur.affectations} />
                                    <PlanningDetailV2 affectations={collaborateur.affectations} selectedMatricule={selectedMatricule} />
                                </>
                            )
                        })
                    }
                    {/* <Collaborateur />
                    <PlanningHeader />
                    <PlanningDetail/>
                   
                    <Collaborateur />
                    <PlanningHeader />
                    <PlanningDetail/> */}
                </Grid>


            </Grid>
        </div>
    )
}

export default PlanningV2
