import React from 'react'
import AffectationCard2 from '../AffectationCard2'

const CardContainer = ({ day, affectations }) => {
    return (

        affectations.map(affectation => {
            return <AffectationCard2 key={`${day}-${affectation.codeActivite}`} affectation={affectation} />
        })

    )
}

export default CardContainer