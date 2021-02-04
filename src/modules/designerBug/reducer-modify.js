const defaultState = {
    visible: false,
    model: {}
};
export default function modify(state = defaultState, action) {
    const {type, payload} = action;
    switch (type) {
        case 'DESIGNER-BUG.SHOW_EDIT':
            return {...state, visible: true, model: {}};
        case 'DESIGNER-BUG.HIDE_EDIT':
            return {...state, visible: false, model: {}};
        case 'DESIGNER-BUG.GET':
            return {...state, model: {...payload}};
        default:
            return state;
    }
}

