const initialState = {
    number: 'random',
    numberFact: '',
    isFetching: false,
    error: ''
}


export const numberReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_NUMBER_START":
            return{
                ...state,
                isFetching: true,
            }
        case "FETCH_NUMBER_SUCCESS":
            return{
                ...state,
                isFetching: false,
                numberFact: action.payload,
                error: '',
            }
            default: 
                return state;
    }
    
}