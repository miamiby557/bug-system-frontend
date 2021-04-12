import {combineReducers} from "redux";
import list from "./reducer-list";
import modify from "./reducer-modify";
import reject from "./reducer-reject";
import create from "./reducer-create";
import assign from "./reducer-assign";
import reAssign from "./reducer-re-assign";
import batchAssign from "./reducer-batch-assign";
import publish from "./reducer-publish";

const reducer = combineReducers({
    list,
    create,
    assign,
    reAssign,
    batchAssign,
    reject,
    publish,
    modify
});

export default reducer;
