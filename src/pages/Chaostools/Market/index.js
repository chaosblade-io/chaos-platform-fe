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
import {Divider, PageHeader, Row, Space, Typography} from "antd";
import MarketList from "./MarketList";
import {FormattedMessage} from "react-intl";

const {Paragraph} = Typography;
const IconText = ({icon, text, onClick}) => (
    <Space>
        {React.createElement(icon)}
        <a>{text}</a>
    </Space>
);

const Content = ({children, extraContent}) => (
    <Row>
        <div style={{flex: 1}}>{children}</div>
        <div className="image">{extraContent}</div>
    </Row>
);

class ChaostoolsMarket extends React.Component {

    headerRender = () => {
        return (
            <PageHeader
                style={{paddingBottom: 16}}
                title={<FormattedMessage id={'page.chaostools.market.title'}/>}
                subTitle={<FormattedMessage id={'page.chaostools.market.subtitle'}/>}
                // tags={<IconText icon={GithubOutlined} text="Github" key="list-vertical-star-o"/>}
            >
                <Content>
                    <Paragraph>
                        {<FormattedMessage id={'page.chaostools.market.description'}/>}
                    </Paragraph>
                </Content>
            </PageHeader>
        );
    }

    render() {
        return (
            <div>
                {this.headerRender()}
                <Divider dashed/>
                <MarketList history={this.props.history}/>
            </div>
        );
    }
}

export default ChaostoolsMarket;