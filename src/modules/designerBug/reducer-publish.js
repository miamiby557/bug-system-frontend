const defaultState = {
    visible: false,
    model: {}
};
export default function publish(state = defaultState, action) {
    const {type} = action;
    switch (type) {
        case 'DESIGNER-BUG.SHOW_PUBLISH':
            return {...state, visible: true, model: {}};
        case 'DESIGNER-BUG.HIDE_PUBLISH':
            return {...state, visible: false, model: {}};
        default:
            return state;
    }
}

