import React from 'react'

const Activite = (props) => {

    const updateActivite = (event) => {
        console.log('change call')
        props.onClickAct({
            ...props.act,
            pourcentage: event.target.value
        })
        
    }

    return (
        <>

    {
        console.log('render Activite', props.act)
    }

       Input <input onBlur={updateActivite}  type="text"/>
            
        </>
    )
}

export default Activite
