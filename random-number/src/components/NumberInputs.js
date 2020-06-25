import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'

import { fetchStatement } from '../state/actions/numberActions'

const NumberInputs = (props) => {

    return(
        <div>
            <Button variant="outlined" onClick={(() => props.fetchStatement(props.numberOnProps))}>Choose Random Number</Button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        numberOnProps: state.numberReducer.number,
    }
}

export default connect(mapStateToProps, {fetchStatement})(NumberInputs);