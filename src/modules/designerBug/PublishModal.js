import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Modal} from "antd";
import {publish, hidePublish, query} from "./actions";
import FormEditor from '../../components/FormEditor';
import {getPrincipal} from "../../lib/identity";

class PublishModal extends PureComponent {

    handleCreate = () => {
        const formEditor = this.formEditor.props.form;
        if (formEditor) {
            const {dispatch, selectedRowKeys} = this.props;
            const p = getPrincipal();
            formEditor.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    dispatch(publish({...values, bugIds: selectedRowKeys, userId: p.id})).then(action => {
                        if (action.error !== true) {
                            formEditor.resetFields();
                            dispatch(hidePublish());
                            dispatch(query({}));
                        }
                    });
                }
            });
        }
    };
    handleCancel = () => {
        const {dispatch} = this.props;
        dispatch(hidePublish());
    };

    render() {
        const {loading, visible, model} = this.props;
        const schema = [
            {
                title: '基础信息',
                fields: [
                    {
                        field: 'publishVersion',
                        title: '发布版本号',
                        type: 'text',
                        fieldOptions: {
                            rules: [{required: true, message: '请输入发布版本号'}]
                        }
                    }
                ]
            }];

        return (
            <Modal
                title="更新版本号"
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
                    defaultValues={model}
                    wrappedComponentRef={inst => (this.formEditor = inst)}
                />
            </Modal>

        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.designerBug.publish,
        ...state.designerBug.list
    };
};

export default connect(mapStateToProps)(PublishModal);
