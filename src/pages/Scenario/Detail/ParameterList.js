/*
 * Copyright 1999-2021 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import {FormattedMessage} from "react-intl";
import styles from './index.module.scss';
import {Space, Table} from "antd";
import {getEmptyContent} from "../../../libs/Search";
import {connect} from "react-redux";

class ParameterList extends React.Component {
    formRef = React.createRef()


    update = (values) => {

    }

    edit = (record) => {
        // 弹框
    }

    TableColumns = [
        {
            title: <FormattedMessage id={"page.machine.host.column.title.index"}/>,
            key: "index",
            render: (text, record, index) => `${index + 1}`
        },
        {
            title: '参数ID',
            dataIndex: "parameterId",
            key: "parameterId",
            className: `${styles.hidden}`
        },
        {
            title: <FormattedMessage id={"page.scenario.column.title.parameters"}/>,
            dataIndex: 'paramName',
            key: 'paramName',
        },
        {
            title: <FormattedMessage id={"page.scenario.column.title.alias"}/>,
            dataIndex: 'alias',
            key: 'alias',
        },
        {
            title: <FormattedMessage id={"page.scenario.column.title.description"}/>,
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: <FormattedMessage id={"page.scenario.column.title.component"}/>,
            dataIndex: 'component',
            key: 'component',
            render: (text, record) => {
                return (<span><FormattedMessage id={"page.scenario.column.detail.not_avaliable"}/></span>);
            }
        },
        {
            title: <FormattedMessage id={"page.scenario.column.title.operation"}/>,
            dataIndex: 'operation',
            key: 'operation',
            render: (text, record) => {
                return (
                    <Space>
                        <FormattedMessage id={"page.scenario.column.detail.not_avaliable"}/>
                    </Space>
                );
            }
        },
    ]

    render() {
        const {loading, parameters} = this.props;
        return (
            <div>
                <Table columns={this.TableColumns}
                       rowKey={record => record.parameterId}
                       dataSource={loading ? [] : parameters}
                       locale={{
                           emptyText: getEmptyContent(<span>无参数</span>)
                       }}
                       loading={loading}
                       pagination={false}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const scenario = state.scenarioDetail.toJS();
    return {
        loading: scenario.loading,
        parameters: scenario.parameters,
    }
}
const mapDispatchToProps = dispatch => {
    return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(ParameterList);