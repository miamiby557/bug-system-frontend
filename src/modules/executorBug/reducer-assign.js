const defaultState = {
    visible: false,
    model: {}
};
export default function modify(state = defaultState, action) {
    const {type} = action;
    switch (type) {
        case 'EXECUTOR-BUG.SHOW_ASSIGN':
            return {...state, visible: true, model: {}};
        case 'EXECUTOR-BUG.HIDE_ASSIGN':
            return {...state, visible: false, model: {}};
        default:
            return state;
    }
}

