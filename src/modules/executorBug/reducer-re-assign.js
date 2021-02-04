const defaultState = {
    visible: false
};
export default function modify(state = defaultState, action) {
    const {type} = action;
    switch (type) {
        case 'EXECUTOR-BUG.SHOW_RE_ASSIGN':
            return {...state, visible: true};
        case 'EXECUTOR-BUG.HIDE_RE_ASSIGN':
            return {...state, visible: false};
        default:
            return state;
    }
}

