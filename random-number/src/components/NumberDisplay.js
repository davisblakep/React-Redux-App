import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { fetchStatement } from '../state/actions/numberActions'


const NumberDisplay = (props) => {
    useEffect(() => {
        props.fetchStatement(props.numberOnProps);
    }, [])


    return(
        <div>
            {props.numberFactOnProps && !props.isFetching ? <p>{props.numberFactOnProps}</p> : <Loader type="ThreeDots" color="#00BFFF" height={20} width={80} />}
            {props.errorOnProps && <p>{props.errorOnProps}</p>}
        </div>
    )
}

const mapStateToProps = state => {
    console.log("numberDisplay State", state)
    return{
        numberFactOnProps: state.numberReducer.numberFact,
        isFetching: state.numberReducer.isFetching,
        numberOnProps: state.numberReducer.number,
        errorOnProps: state.numberReducer.error
    }
}

export default connect(mapStateToProps, {fetchStatement})(NumberDisplay);