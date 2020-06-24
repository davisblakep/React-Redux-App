import React from 'react';
import { connect } from 'react-redux';

import { fetchStatement } from '../state/actions/numberActions'

const NumberInputs = (props) => {
    return(
        <div>
            <button onClick={(() => props.fetchStatement(props.numberOnProps))}>Choose Random Number</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        numberOnProps: state.numberReducer.number,
    }
}

export default connect(mapStateToProps, {fetchStatement})(NumberInputs);