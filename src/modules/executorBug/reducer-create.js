
const defaultState = {
    visible: false,
    loading:false,
    model: {}

};
export default function create(state = defaultState, action) {
    const {type, error,payload} = action;
    switch (type) {
        case 'EXECUTOR-BUG.SHOW_CREATE':
            return {...state, visible: true, model: {}};
        case 'EXECUTOR-BUG.HIDE_CREATE':
            return {...state, visible: false,model:{}};
        case 'EXECUTOR-BUG.CREATE':
            if(error===true){
                return {...state, loading:false};
            }
            return {...state, loading:false, visible: false};
        case 'EXECUTOR-BUG.CREATE_PENDING':
            return {...state, loading: true,model:{...payload}};
        case 'EXECUTOR-BUG.GET_DISPATCH_CENTRE':
            if(error===true){
                return state;
            }
            return {...state, dispatchCentre:action.payload};
        default:
            return state;
    }
}

