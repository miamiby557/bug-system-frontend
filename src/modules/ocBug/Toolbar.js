import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Button, Icon} from "antd";
import {showCreate, showPublish, showReAssign, showBatchAssignModal} from "./actions";
import {all as userQuery} from "../user/actions";

class Toolbar extends PureComponent {

    handleShowCreate = () => {
        const {dispatch} = this.props;
        dispatch(showCreate());
    };
    handleShowPublish = () => {
        const {dispatch} = this.props;
        dispatch(showPublish());
    };
    handleReAssign = () => {
        const {dispatch} = this.props;
        dispatch(showReAssign());
    };

    handleBatchAssign = () => {
        const {dispatch, selectedRowKeys} = this.props;
        dispatch(userQuery()).then(dispatch(showBatchAssignModal(selectedRowKeys)));
    };

    render() {
        return (
            <div className="actions">
                <Button onClick={this.handleShowCreate}><Icon type="plus"/>新增</Button>
                <Button disabled={this.props.selectedRowKeys.length !== 1} onClick={this.handleReAssign}>重新指派</Button>
                <Button disabled={this.props.selectedRowKeys.length === 0}
                        onClick={this.handleBatchAssign}>批量指派</Button>
                <Button disabled={this.props.selectedRowKeys.length === 0}
                        onClick={this.handleShowPublish}>更新修复版本号</Button>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.ocBug.list
    };
};

export default connect(mapStateToProps)(Toolbar);
