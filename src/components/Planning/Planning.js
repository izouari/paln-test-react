import React, { useState } from 'react'
import Recherche from '../share/Recherche'
import { Grid, Box } from '@material-ui/core'
import PlanningHeader from '../PlanningHeader'
import Collaborateur from './Collaborateur'
import { affectationByCollab } from '../Model/AffectationByCollab'
import PlanningDetail from './PlanningDetail'
import { DAYS } from '../Model/Utils'


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



const Planning = () => {

    const initialState = false;
    const [displayDetail, setDisplayDetail] = useState(initialState)

    // const initialMatricule = []
    const [selectedMatricule, setSelectedMatricule] = useState([])

    const handleDisplayDetail = (selectedCollabMatricule) => {
        let copySelectedMatricule = [...selectedMatricule];
        console.log('copySelectedMatricule is ', copySelectedMatricule)
        let indexMat = copySelectedMatricule.indexOf(selectedCollabMatricule)
        if (indexMat !== -1) {
            copySelectedMatricule.splice(indexMat, 1)
        } else {
            copySelectedMatricule.push(selectedCollabMatricule)
        }

        setSelectedMatricule(copySelectedMatricule)
        console.log('matricule selected is ', selectedMatricule)
    }

    iterateOverAffectation();

    return (
        <div>
            <br />
            <Grid direction="row" container>
                <Grid container>
                    <Grid item xs={2}>
                        <></>
                    </Grid>
                    <Grid container xs={9}>
                        {
                            DAYS.map(day => {
                                return <Grid item xs >
                                    {day}
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
                        affectationByCollab.map(affectation => {

                            return (
                                <>
                                    <Collaborateur onClick={handleDisplayDetail} key={affectation.idCollaborateur} affectation={affectation} />
                                    <PlanningHeader affectation={affectation} selectedMatricule={selectedMatricule} />
                                    <PlanningDetail affectation={affectation} selectedMatricule={selectedMatricule} />
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

export default Planning
