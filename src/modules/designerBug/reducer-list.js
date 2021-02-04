const defaultState = {
    loading: false,
    dataSource: [],
    transportNo: null,
    selectedRowKeys: [],
    importLoading: false,
    clientList: [],
    carrierList: [],
    page: 1,
    pageSize: 20,
    totalElements: 0
};
export default function list(state = defaultState, action) {
    const {type, payload, error} = action;
    switch (type) {

        case 'DESIGNER-BUG.QUERY':
            if (error === true) {
                return {...state, loading: false};
            }
            return {
                ...state,
                loading: false,
                dataSource: payload.content,
                page: payload.page,
                pageSize: payload.pageSize,
                totalElements: payload.totalElements,
                selectedRowKeys: []
            };
        case 'DESIGNER-BUG.SELECT':
            return {...state, selectedRowKeys: payload};
        default:
            return state;
    }
}

