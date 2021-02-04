import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Modal} from "antd";
import {hideEdit, hideReject, query, reject} from "./actions";
import FormEditor from '../../components/FormEditor';
import {getPrincipal} from "../../lib/identity";

class RejectModal extends PureComponent {

    handleCreate = () => {
        const formEditor = this.formEditor.props.form;
        if (formEditor) {
            const {dispatch, model} = this.props;
            const p = getPrincipal();
            formEditor.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    dispatch(reject({...values, userId: p.id, bugId: model.id})).then(action => {
                        if (action.error !== true) {
                            formEditor.resetFields();
                            dispatch(hideReject());
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
        dispatch(hideReject());
    };

    render() {
        const {loading, visible, model} = this.props;
        const schema = [
            {
                title: '详细信息',
                fields: [
                    {
                        field: 'remark',
                        title: '问题描述',
                        type: 'textArea',
                        fieldOptions: {
                            rules: [{required: true, message: '请详细描述问题'}],
                        }
                    }
                ]
            }];

        return (
            <Modal
                title="拒绝通过页面"
                visible={visible}
                onOk={this.handleCreate}
                onCancel={this.handleCancel}
                confirmLoading={loading}
                okText="保存"
                cancelText="取消"
                width="40%"
            >
                <FormEditor
                    schema={schema}
                    column={1}
                    defaultReadonly={false}
                    showActionBar={false}
                    defaultValues={{}}
                    wrappedComponentRef={inst => (this.formEditor = inst)}
                />
            </Modal>

        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.ocBug.reject,
        model:state.ocBug.modify.model
    };
};

export default connect(mapStateToProps)(RejectModal);
