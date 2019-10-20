import React from 'react'
import { byCacke } from './redux/cackes/CackeActions'
import {connect} from 'react-redux';

const CackeContainer = (props) => {
    return (
        <div>
            <h2>Number of Cacke - {props.numOfCackes}</h2>
            <button onClick={props.byOneCacke}>By Cacke</button>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
      numOfCackes: state.numberOfCackes
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        byOneCacke: () => dispatch(byCacke())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    ) (CackeContainer)
