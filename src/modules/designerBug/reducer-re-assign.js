const defaultState = {
    visible: false
};
export default function modify(state = defaultState, action) {
    const {type} = action;
    switch (type) {
        case 'DESIGNER-BUG.SHOW_RE_ASSIGN':
            return {...state, visible: true};
        case 'DESIGNER-BUG.HIDE_RE_ASSIGN':
            return {...state, visible: false};
        default:
            return state;
    }
}

