import {createAction, createThunkAction} from "../../lib/redux-utils";
import {get, postJson} from "../../lib/http";

const path = "/designerBug";
const ACTION_PREFIX = "DESIGNER-BUG.";
export const query = createThunkAction(ACTION_PREFIX + "QUERY", params =>
    postJson(path + "/query", params)
);
export const create = createThunkAction(ACTION_PREFIX + "CREATE", params =>
    postJson(path + "/create", params)
);
export const solve = createThunkAction(ACTION_PREFIX + "SOLVE", params =>
    postJson(path + "/solve", params)
);
export const finish = createThunkAction(ACTION_PREFIX + "FINISH", params =>
    postJson(path + "/finish", params)
);
export const getById = createThunkAction(ACTION_PREFIX + "GET", params =>
    get(path + "/getById/"+params)
);
export const assign = createThunkAction(ACTION_PREFIX + "ASSIGN", params =>
    postJson(path + "/assign", params)
);
export const reAssign = createThunkAction(ACTION_PREFIX + "RE-ASSIGN", params =>
    postJson(path + "/reAssign", params)
);
export const batchAssign = createThunkAction(ACTION_PREFIX + "BATCH-ASSIGN", params =>
    postJson(path + "/batchAssign", params)
);
export const publish = createThunkAction(ACTION_PREFIX + "PUBLISH", params =>
    postJson(path + "/publish", params)
);
export const reject = createThunkAction(ACTION_PREFIX + "REJECT", params =>
    postJson(path + "/reject", params)
);
export const showEdit = createAction(ACTION_PREFIX + "SHOW_EDIT");
export const hideEdit = createAction(ACTION_PREFIX + "HIDE_EDIT");
export const showPublish = createAction(ACTION_PREFIX + "SHOW_PUBLISH");
export const hidePublish = createAction(ACTION_PREFIX + "HIDE_PUBLISH");
export const showAssignModal = createAction(ACTION_PREFIX + "SHOW_ASSIGN");
export const hideAssignModal = createAction(ACTION_PREFIX + "HIDE_ASSIGN");
export const showBatchAssignModal = createAction(ACTION_PREFIX + "SHOW_BATCH_ASSIGN");
export const hideBatchAssignModal = createAction(ACTION_PREFIX + "HIDE_BATCH_ASSIGN");
export const showReAssign = createAction(ACTION_PREFIX + "SHOW_RE_ASSIGN");
export const hideReAssign = createAction(ACTION_PREFIX + "HIDE_RE_ASSIGN");
export const showCreate = createAction(ACTION_PREFIX + "SHOW_CREATE");
export const hideCreate = createAction(ACTION_PREFIX + "HIDE_CREATE");
export const showReject = createAction(ACTION_PREFIX + "SHOW_REJECT");
export const hideReject = createAction(ACTION_PREFIX + "HIDE_REJECT");
export const select = createAction(ACTION_PREFIX + "SELECT");
