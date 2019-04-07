
const defaultState = {
    a : 1,
    b : 2
}



export default (state = defaultState, action)=>{

    return  action.value;
}