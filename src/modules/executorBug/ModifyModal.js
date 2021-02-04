import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Button, Divider, Modal} from "antd";
import FormEditor from '../../components/FormEditor';
import {finish, hideEdit, query, showAssignModal, showReject, solve} from "./actions";
import {all as userQuery} from "../user/actions";
import LogTimeline from "../../components/LogTimeline";
import {getPrincipal} from "../../lib/identity";

class ModifyModal extends PureComponent {
    handleCancel = () => {
        const {dispatch} = this.props;
        dispatch(hideEdit());
    };

    handleSolved = () => {
        const formEditor = this.formEditor.props.form;
        if (formEditor) {
            const {dispatch, model} = this.props;
            const p = getPrincipal();
            formEditor.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    dispatch(solve({...model, ...values, bugId: model.id})).then(action => {
                        if (action.error !== true) {
                            formEditor.resetFields();
                            dispatch(hideEdit());
                            dispatch(query({}));
                        }
                    });
                }
            });
        }
    };

    handleFinished = () => {
        const p = getPrincipal();
        const {dispatch, model} = this.props;
        dispatch(finish({reviewUserId: p.id, bugId: model.id})).then(action => {
            if (action.error !== true) {
                dispatch(hideEdit());
                dispatch(query({}));
            }
        });
    };
    handleReject = () => {
        const {dispatch} = this.props;
        dispatch(showReject());
    };

    handleAssign = () => {
        const {dispatch} = this.props;
        dispatch(userQuery()).then(dispatch(showAssignModal()));
    };

    render() {
        const {visible, model} = this.props;
        let schema;
        let footer = null;
        if (model.bugStatus === "任务待指派") {
            schema = [
                {
                    title: '详细情况',
                    fields: [
                        {
                            field: 'designerVersion',
                            title: '版本号',
                            readonly: true
                        }, {
                            field: 'title',
                            title: '标题',
                            readonly: true
                        }, {
                            field: 'bugStatus',
                            title: '状态',
                            readonly: true
                        }, {
                            field: 'remark',
                            title: '详细问题',
                            readonly: true
                        }
                    ]
                }];
            footer = <Button type="primary" onClick={this.handleAssign}>
                指派
            </Button>;
        } else if (model.bugStatus === "开发待解决") {
            schema = [
                {
                    title: '详细情况',
                    fields: [
                        {
                            field: 'designerVersion',
                            title: '版本号',
                            readonly: true
                        }, {
                            field: 'title',
                            title: '标题',
                            readonly: true
                        }, {
                            field: 'bugStatus',
                            title: '状态',
                            readonly: true
                        }, {
                            field: 'remark',
                            title: '详细问题',
                            readonly: true
                        }
                    ]
                }, {
                    title: '开发反馈',
                    fields: [{
                        field: 'reviewRemark',
                        title: '修复备注',
                        type: 'textArea',
                        fieldOptions: {
                            rules: [{required: true, message: '请输入反馈备注'}]
                        }
                    }
                    ]
                }];
            footer = <Button type="primary" onClick={this.handleSolved}>
                已修复
            </Button>;
        } else if (model.bugStatus === "开发已发布") {
            schema = [
                {
                    title: '详细情况',
                    fields: [
                        {
                            field: 'designerVersion',
                            title: '版本号',
                            readonly: true
                        }, {
                            field: 'title',
                            title: '标题',
                            readonly: true
                        }, {
                            field: 'bugStatus',
                            title: '状态',
                            readonly: true
                        }, {
                            field: 'remark',
                            title: '详细问题',
                            readonly: true
                        }
                    ]
                }, {
                    title: '开发反馈',
                    fields: [{
                        field: 'reviewRemark',
                        title: '修复备注',
                        readonly: true
                    }
                    ]
                }];
            footer = [<Button onClick={this.handleReject}>
                验证不通过
            </Button>, <Button type="primary" onClick={this.handleFinished}>
                验证通过
            </Button>];
        } else {
            schema = [
                {
                    title: '详细情况',
                    fields: [
                        {
                            field: 'designerVersion',
                            title: '版本号',
                            readonly: true
                        }, {
                            field: 'title',
                            title: '标题',
                            readonly: true
                        }, {
                            field: 'bugStatus',
                            title: '状态',
                            readonly: true
                        }, {
                            field: 'remark',
                            title: '详细问题',
                            readonly: true
                        }
                    ]
                }, {
                    title: '开发反馈',
                    fields: [
                        {
                            field: 'reviewRemark',
                            title: '反馈备注',
                            readonly: true
                        }
                    ]
                }];
        }
        return (
            <Modal
                title="详情页面"
                visible={visible}
                onCancel={this.handleCancel}
                footer={footer}
                width="80%"
            >
                <FormEditor
                    schema={schema}
                    column={3}
                    defaultReadonly={false}
                    showActionBar={false}
                    defaultValues={model}
                    wrappedComponentRef={inst => (this.formEditor = inst)}
                />
                <Divider/>
                <h3>日志</h3>
                <LogTimeline dataSource={model.logList}/>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.executorBug.modify
    };
};


export default connect(mapStateToProps)(ModifyModal);
