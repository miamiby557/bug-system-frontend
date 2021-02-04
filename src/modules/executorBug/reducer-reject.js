const defaultState = {
    visible: false
};
export default function reject(state = defaultState, action) {
    const {type} = action;
    switch (type) {
        case 'EXECUTOR-BUG.SHOW_REJECT':
            return {...state, visible: true};
        case 'EXECUTOR-BUG.HIDE_REJECT':
            return {...state, visible: false};
        default:
            return state;
    }
}

