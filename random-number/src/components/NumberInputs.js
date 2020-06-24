import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'

import { fetchStatement } from '../state/actions/numberActions'

const NumberInputs = (props) => {
    // const [formState, setFormState] = useState({
    //     number: ''
    // })

    // const inputChange = (e) => {
    //     return(
    //         {...formState, setFormState([e.target.value]: )}
    //     )
    // }

    return(
        <div>
            <Button variant="outlined" onClick={(() => props.fetchStatement(props.numberOnProps))}>Choose Random Number</Button>
            {/* <form>
                <input 
                type='num'
                name='number'
                value={formState}
                onChange={inputChange}
                />
            </form> */}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        numberOnProps: state.numberReducer.number,
    }
}

export default connect(mapStateToProps, {fetchStatement})(NumberInputs);