const defaultState = {
    visible: false
};
export default function reject(state = defaultState, action) {
    const {type} = action;
    switch (type) {
        case 'OC-BUG.SHOW_REJECT':
            return {...state, visible: true};
        case 'OC-BUG.HIDE_REJECT':
            return {...state, visible: false};
        default:
            return state;
    }
}

