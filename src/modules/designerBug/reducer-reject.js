const defaultState = {
    visible: false
};
export default function reject(state = defaultState, action) {
    const {type} = action;
    switch (type) {
        case 'DESIGNER-BUG.SHOW_REJECT':
            return {...state, visible: true};
        case 'DESIGNER-BUG.HIDE_REJECT':
            return {...state, visible: false};
        default:
            return state;
    }
}

