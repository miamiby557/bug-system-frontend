import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Form} from "antd";
import {query} from "./actions";
import {DATE_FORMAT} from "../../lib/func";
import FilterForm from "../../components/FilterForm";

class Filter extends PureComponent {
    state = {};
    handleSearch = (values) => {
        const {dispatch, pageSize} = this.props;
        let fields = values;
        this.setState({...fields});
        if (fields.createDateRange && fields.createDateRange.length > 1) {
            fields.startDate = fields.createDateRange[0].format(DATE_FORMAT);
            fields.endDate = fields.createDateRange[1].format(DATE_FORMAT);
        }
        delete fields.createDateRange;
        dispatch(query({...fields, page: 1, pageSize}));
    };

    render() {
        const {loading, users} = this.props;
        const statusList = [{"label": "任务待指派", "value": "任务待指派"}, {
            "label": "开发待解决",
            "value": "开发待解决"
        }, {"label": "开发已处理", "value": "开发已处理"},
            {
                "label": "开发已发布",
                "value": "开发已发布"
            }, {"label": "问题已关闭", "value": "问题已关闭"}];
        const fixStatus = [
            {"label": "未验证", "value": "未验证"},
            {"label": "验证已通过", "value": "验证已通过"},
            {"label": "验证不通过", "value": "验证不通过"}
        ];
        const filterSchema = [
            {
                key: 'version',
                field: 'version',
                type: 'text',
                expandable: true,
                width: 200,
                title: '版本号',
                fieldOptions: {
                    initialValue: this.state.version
                },
                controlProps: {
                    allowClear: true
                }
            }, {
                key: 'title',
                field: 'title',
                type: 'text',
                expandable: true,
                width: 200,
                title: '标题',
                fieldOptions: {
                    initialValue: this.state.title
                },
                controlProps: {
                    allowClear: true
                }
            },
            {
                key: 'userId',
                field: 'userId',
                type: 'listSelector',
                expandable: true,
                title: '处理人',
                fieldOptions: {
                    initialValue: this.state.userId
                },
                controlProps: {
                    dataSource: users,
                    labelField: 'name',
                    valueField: 'id'
                },
            },
            {
                key: 'bugStatus',
                field: 'bugStatus',
                type: 'listSelector',
                expandable: true,
                title: '状态',
                fieldOptions: {
                    initialValue: this.state.bugStatusText
                },
                controlProps: {
                    dataSource: statusList
                },
            },
            {
                key: 'publishVersion',
                field: 'publishVersion',
                expandable: true,
                title: '修复版本号',
                fieldOptions: {
                    initialValue: this.state.publishVersion
                },
                controlProps: {
                    allowClear: true
                }
            },
            {
                key: 'fixStatus',
                field: 'fixStatus',
                type: 'listSelector',
                expandable: true,
                title: '测试状态',
                fieldOptions: {
                    initialValue: this.state.fixStatusText
                },
                controlProps: {
                    dataSource: fixStatus
                },
            }, {
                key: 'createDateRange',
                field: 'createDateRange',
                type: 'dateRangePicker',
                expandable: true,
                title: '创建日期',
                fieldOptions: {
                    initialValue: this.state.createDateRange
                }
            }
        ];
        return (
            <FilterForm schema={filterSchema} callback={this.handleSearch} loading={loading}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.designerBug.list,
        users: state.user.list.dataSource
    };
};

export default connect(mapStateToProps)(Form.create()(Filter));
