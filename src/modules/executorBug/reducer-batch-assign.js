const defaultState = {
    visible: false,
    selectedRowKeys: []
};
export default function batchAssign(state = defaultState, action) {
    const {type, payload} = action;
    switch (type) {
        case 'EXECUTOR-BUG.SHOW_BATCH_ASSIGN':
            return {...state, visible: true, selectedRowKeys: [...payload]};
        case 'EXECUTOR-BUG.HIDE_BATCH_ASSIGN':
            return {...state, visible: false, selectedRowKeys: []};
        default:
            return state;
    }
}

