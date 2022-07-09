const initialState = {}

type initialStateType = {

}

export const loginReducer = (state:initialStateType=initialState,action:LoginActionsType):initialStateType => {
    switch (action.type){
        default:
            return state
    }
}

type LoginActionsType = {
    type:''
}