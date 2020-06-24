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
            {props.numberFactOnProps && <p>{props.numberFactOnProps}</p>}
            {props.isFetching && <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
}
        </div>
    )
}

const mapStateToProps = state => {
    console.log("numberDisplay State", state)
    return{
        numberFactOnProps: state.numberReducer.numberFact,
        isFetching: state.numberReducer.isFetching,
        numberOnProps: state.numberReducer.number,
    }
}

export default connect(mapStateToProps, {fetchStatement})(NumberDisplay);