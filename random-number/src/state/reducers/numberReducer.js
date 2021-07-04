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
                number: 'random',
                isFetching: true,
            }
        case "FETCH_NUMBER_SUCCESS":
            return{
                ...state,
                isFetching: false,
                numberFact: action.payload,
                error: '',
            }
        case "FETCH_NUMBER_RANDOM":
            return{
                ...state, 
                isFetching: true,
                number: 'random',
            }
        case "FETCH_NUMBER_FAILURE":
            return{
                ...state,
                isFetching: false,
                error: action.payload,
            }
            default: 
                return state;
    }
    
}