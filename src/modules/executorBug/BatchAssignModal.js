import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Modal} from "antd";
import {batchAssign, hideBatchAssignModal, query} from "./actions";
import FormEditor from '../../components/FormEditor';
import {getPrincipal} from "../../lib/identity";

class BatchAssignModal extends PureComponent {

    handleCreate = () => {
        const formEditor = this.formEditor.props.form;
        if (formEditor) {
            const {dispatch, selectedRowKeys} = this.props;
            const p = getPrincipal();
            formEditor.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    dispatch(batchAssign({...values, userId: p.id, bugIds: selectedRowKeys})).then(action => {
                        if (action.error !== true) {
                            formEditor.resetFields();
                            dispatch(hideBatchAssignModal());
                            dispatch(query({}));
                        }
                    });
                }
            });
        }
    };
    handleCancel = () => {
        const {dispatch} = this.props;
        dispatch(hideBatchAssignModal());
    };

    render() {
        const {loading, visible, users} = this.props;
        const schema = [
            {
                title: '指派人列表',
                fields: [
                    {
                        field: 'reviewUserId',
                        title: '选择处理人',
                        type: 'listSelector',
                        controlProps: {
                            labelField: 'name',
                            valueField: 'id',
                            dataSource: users
                        }
                    }
                ]
            }];

        return (
            <Modal
                title="批量指派页面"
                visible={visible}
                onOk={this.handleCreate}
                onCancel={this.handleCancel}
                confirmLoading={loading}
                okText="指派"
                cancelText="取消"
                width="40%"
            >
                <FormEditor
                    schema={schema}
                    column={1}
                    defaultReadonly={false}
                    defaultValues={{}}
                    showActionBar={false}
                    wrappedComponentRef={inst => (this.formEditor = inst)}
                />
            </Modal>

        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.executorBug.batchAssign
    };
};

export default connect(mapStateToProps)(BatchAssignModal);
