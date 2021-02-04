const defaultState = {
    visible: false,
    model: {}
};
export default function modify(state = defaultState, action) {
    const {type, payload} = action;
    switch (type) {
        case 'EXECUTOR-BUG.SHOW_EDIT':
            return {...state, visible: true, model: {}};
        case 'EXECUTOR-BUG.HIDE_EDIT':
            return {...state, visible: false, model: {}};
        case 'EXECUTOR-BUG.GET':
            return {...state, model: {...payload}};
        default:
            return state;
    }
}

