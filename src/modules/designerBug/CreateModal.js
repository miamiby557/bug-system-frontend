import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Modal} from "antd";
import {create, hideCreate, query} from "./actions";
import FormEditor from '../../components/FormEditor';
import {getPrincipal} from "../../lib/identity";

class CreateModal extends PureComponent {

    handleCreate = () => {
        const formEditor = this.formEditor.props.form;
        if (formEditor) {
            const {dispatch} = this.props;
            const p = getPrincipal();
            formEditor.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    dispatch(create({...values, userId: p.id})).then(action => {
                        if (action.error !== true) {
                            formEditor.resetFields();
                            dispatch(hideCreate());
                            dispatch(query({}));
                        }
                    });
                }
            });
        }
    };
    handleCancel = () => {
        const {dispatch} = this.props;
        dispatch(hideCreate());
    };

    render() {
        const {loading, visible, model} = this.props;
        const schema = [
            {
                title: '基础信息',
                fields: [
                    {
                        field: 'designerVersion',
                        title: '版本号',
                        type: 'text',
                        fieldOptions: {
                            rules: [{required: true, message: '请输入版本号'}]
                        }
                    }, {
                        field: 'funcId',
                        title: '功能点ID',
                        type: 'text'
                    }, {
                        field: 'title',
                        title: '标题',
                        type: 'text',
                        fieldOptions: {
                            rules: [{required: true, message: '请输入标题'}],
                        }
                    }, {
                        field: 'bugLevel',
                        title: '紧急程度',
                        type: 'listSelector',
                        controlProps: {
                            dataSource: [{"label": "普通", "value": "普通"}, {"label": "紧急", "value": "紧急"}, {"label": "建议", "value": "建议"}]
                        }
                    }, {
                        field: 'remark',
                        title: '问题描述',
                        type: 'textArea',
                        fieldOptions: {
                            rules: [{required: true, message: '请详细描述问题'}],
                        },
                        controlProps: {
                            rows: 4
                        }
                    }
                ]
            }];

        return (
            <Modal
                title="新增"
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
        ...state.designerBug.create
    };
};

export default connect(mapStateToProps)(CreateModal);
