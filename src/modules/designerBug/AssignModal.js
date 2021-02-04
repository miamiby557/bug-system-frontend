import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Modal} from "antd";
import {assign, hideAssignModal, hideEdit, query} from "./actions";
import FormEditor from '../../components/FormEditor';
import {getPrincipal} from "../../lib/identity";

class AssignModal extends PureComponent {

    handleCreate = () => {
        const formEditor = this.formEditor.props.form;
        if (formEditor) {
            const {dispatch, model} = this.props;
            const p = getPrincipal();
            formEditor.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    dispatch(assign({...values, userId: p.id, bugId:model.id})).then(action => {
                        if (action.error !== true) {
                            formEditor.resetFields();
                            dispatch(hideAssignModal());
                            dispatch(hideEdit());
                            dispatch(query({}));
                        }
                    });
                }
            });
        }
    };
    handleCancel = () => {
        const {dispatch} = this.props;
        dispatch(hideAssignModal());
    };

    render() {
        const {loading, visible, users, model} = this.props;
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
                title="指派页面"
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
                    defaultValues={model}
                    showActionBar={false}
                    wrappedComponentRef={inst => (this.formEditor = inst)}
                />
            </Modal>

        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.designerBug.assign,
        users: state.user.list.dataSource,
        model:state.designerBug.modify.model
    };
};

export default connect(mapStateToProps)(AssignModal);
