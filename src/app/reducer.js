import {combineReducers} from "redux";

import home from "../modules/home/reducer.js";
import common from "../app/commonReducer.js";
import profile from "../modules/profile/reducer.js";
import user from "../modules/user/reducer.js";
import designerBug from "../modules/designerBug/reducer.js";
import executorBug from "../modules/executorBug/reducer.js";
import ocBug from "../modules/ocBug/reducer.js";

const rootReducer = combineReducers({
    home,
    common,
    profile,
    designerBug,
    executorBug,
    ocBug,
    user,
});

export default rootReducer;
