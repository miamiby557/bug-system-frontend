const defaultState = {
    loading: false,
    mainDto: {},
    dayCountItems:[]
};

export default function home(state = defaultState, action) {
    const {type, payload} = action;
    switch (type) {
        case 'DASHBOARD.QUERY':
            console.info(payload);
            return {...state, mainDto: {...payload}};
        default:
            return state;
    }
}
