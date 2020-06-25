import Axios from 'axios';

export const fetchStatement = (number) => {
    return dispatch => {
        dispatch( { type: 'FETCH_NUMBER_START'});
        Axios
            .get(`http://numbersapi.com/${number}`)
            .then(res => {
                console.log("Axios Response", res)
                dispatch({ type: 'FETCH_NUMBER_SUCCESS', payload: res.data})  
            })
            .catch(err => {console.log("Axios Error", err) 
            dispatch({ type: 'FETCH_NUMBER_FAILURE', payload: `Error: ${err}`})})
    }   
}