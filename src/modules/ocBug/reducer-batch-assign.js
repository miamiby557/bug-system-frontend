const defaultState = {
    visible: false,
    selectedRowKeys: []
};
export default function batchAssign(state = defaultState, action) {
    const {type, payload} = action;
    switch (type) {
        case 'OC-BUG.SHOW_BATCH_ASSIGN':
            return {...state, visible: true, selectedRowKeys: [...payload]};
        case 'OC-BUG.HIDE_BATCH_ASSIGN':
            return {...state, visible: false, selectedRowKeys: []};
        default:
            return state;
    }
}

