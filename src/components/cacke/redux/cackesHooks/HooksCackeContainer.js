import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { byCacke } from '../cackes/CackeActions'

const HooksCackeContainer = () => {

    const numOfCackes = useSelector(state => state.numberOfCackes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cacke - {numOfCackes}</h2>
            <button onClick={() => dispatch(byCacke())}>By Cacke</button>
            
        </div>
    )
}



export default HooksCackeContainer