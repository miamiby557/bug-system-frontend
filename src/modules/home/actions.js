import {createThunkAction} from "../../lib/redux-utils";
import {get} from "../../lib/http";

const path = "/home";
const ACTION_PREFIX = "DASHBOARD.";

export const query = createThunkAction(ACTION_PREFIX + "QUERY", (userId) =>
    get(path + "/query/" + userId)
);






