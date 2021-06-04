export const initialState = null

export const reducer = (state, action) => {
    if (action.type === 'user') {
        return action.payload
    }
    if (action.type === 'Active_Class') {
        return {
            ...state,
            ActiveclassId: action.payload
        }
    }

    return state
}