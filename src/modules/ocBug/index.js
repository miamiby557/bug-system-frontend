import React from "react";
import {Card} from "antd";
import List from "./List";
import Filter from "./Filter";
import Toolbar from "./Toolbar";
import ModifyModal from "./ModifyModal";
import CreateModal from "./CreateModal";
import RejectModal from "./RejectModal";
import AssignModal from "./AssignModal";
import ReAssignModal from "./ReAssignModal";
import PublishModal from "./PublishModal";
import "../../index.css";

const DesignerBug = () => {
    return (
        <Card bordered={false}>
            <Filter/>
            <Toolbar/>
            <CreateModal/>
            <RejectModal/>
            <AssignModal/>
            <ReAssignModal/>
            <PublishModal/>
            <ModifyModal/>
            <List/>
        </Card>
    );
};

export default DesignerBug;