
const defaultState = {
    visible: false,
    loading:false,
    model: {}

};
export default function create(state = defaultState, action) {
    const {type, error,payload} = action;
    switch (type) {
        case 'OC-BUG.SHOW_CREATE':
            return {...state, visible: true, model: {}};
        case 'OC-BUG.HIDE_CREATE':
            return {...state, visible: false,model:{}};
        case 'OC-BUG.CREATE':
            if(error===true){
                return {...state, loading:false};
            }
            return {...state, loading:false, visible: false};
        case 'OC-BUG.CREATE_PENDING':
            return {...state, loading: true,model:{...payload}};
        case 'OC-BUG.GET_DISPATCH_CENTRE':
            if(error===true){
                return state;
            }
            return {...state, dispatchCentre:action.payload};
        default:
            return state;
    }
}

