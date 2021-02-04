
const defaultState = {
    visible: false,
    loading:false,
    model: {}

};
export default function create(state = defaultState, action) {
    const {type, error,payload} = action;
    switch (type) {
        case 'DESIGNER-BUG.SHOW_CREATE':
            return {...state, visible: true, model: {}};
        case 'DESIGNER-BUG.HIDE_CREATE':
            return {...state, visible: false,model:{}};
        case 'DESIGNER-BUG.CREATE':
            if(error===true){
                return {...state, loading:false};
            }
            return {...state, loading:false, visible: false};
        case 'DESIGNER-BUG.CREATE_PENDING':
            return {...state, loading: true,model:{...payload}};
        case 'DESIGNER-BUG.GET_DISPATCH_CENTRE':
            if(error===true){
                return state;
            }
            return {...state, dispatchCentre:action.payload};
        default:
            return state;
    }
}

