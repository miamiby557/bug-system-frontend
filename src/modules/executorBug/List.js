import React, {PureComponent} from "react";
import {Table} from "antd";
import {connect} from "react-redux";
import {paginationProps, tableProps} from "../../lib/ui";
import {all as userQuery} from "../user/actions";
import {getById, query, select, showEdit} from "./actions";

class List extends PureComponent {
    onPageChange = (page, pageSize) => {
        const {dispatch, transportNo} = this.props;
        dispatch(query({transportNo, page, pageSize}));
    };

    handleShowEdit = row => {
        const {dispatch} = this.props;
        dispatch(getById(row.id)).then(dispatch(showEdit()));
    };

    componentWillMount() {
        const {dispatch, page, pageSize} = this.props;
        dispatch(query({page, pageSize}));
        dispatch(userQuery());
    };

    handleSelectChange = (selectedRowKeys) => {
        const {dispatch} = this.props;
        dispatch(select(selectedRowKeys));
    };

    render() {
        const {
            page,
            pageSize,
            totalElements,
            selectedRowKeys,
            dataSource,
            loading
        } = this.props;
        const columns = [
            {value: 'designerVersion', label: '版本号'},
            {value: 'title', label: '标题', "clickable": true},
            {value: 'userName', label: '提出人'},
            {value: 'createTime', label: '提出时间', type: "dateTime"},
            {value: 'bugLevel', label: '紧急程度'},
            {value: 'reviewUserName', label: '处理人'},
            {value: 'bugStatus', label: '状态'},
            {value: 'publishVersion', label: '修复版本号'},
            {value: 'fixStatus', label: '测试情况'}
        ];
        const newColumns = columns.map(column => {
            if ("dateTime" === column.type) {
                return {
                    title: column.label,
                    dataIndex: column.value,
                    render: text => <span>{text}</span>,
                    width: 200
                };
            } else if ("number" === column.type) {
                return {
                    title: column.label,
                    dataIndex: column.value,
                    render: text => <span>{text && Number(text).toFixed(3)}</span>,
                    width: 200
                };
            } else if ("money" === column.type) {
                return {
                    title: column.label,
                    dataIndex: column.value,
                    render: text => <span>{text && Number(text).toFixed(2)}</span>,
                    width: 200
                };
            } else {
                if (column.clickable === true) {
                    return {
                        title: column.label,
                        dataIndex: column.value,
                        render: (text, record) => (
                            <a
                                onClick={() => {
                                    this.handleShowEdit(record);
                                }}
                            >
                                {text}
                            </a>
                        ),
                        width: 200
                    };
                } else {
                    return {
                        title: column.label,
                        dataIndex: column.value,
                        render: text => <span>{text}</span>,
                        width: 200
                    };
                }
            }
        });

        const tablePagination = {
            ...paginationProps,
            total: totalElements,
            current: page,
            pageSize: pageSize,
            onShowSizeChange: (current, newSize) =>
                this.onPageChange && this.onPageChange(1, newSize),
            onChange: this.onPageChange
        };
        const rowSelection = {
            selectedRowKeys,
            onChange: this.handleSelectChange
        };
        return (
            <Table
                {...tableProps}
                columns={newColumns}
                pagination={tablePagination}
                rowSelection={rowSelection}
                dataSource={dataSource}
                loading={loading}
            />
        );
    }
}

const
    mapStateToProps = state => {
        return {
            ...state.executorBug.list
        };
    };

export default connect(mapStateToProps)(List);
