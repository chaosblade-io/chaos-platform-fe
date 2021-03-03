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
import {Tabs} from "antd";
import {AndroidOutlined, AppleOutlined} from "@ant-design/icons";
import PodList from "./PodList";
import NodeList from "./NodeList";
import { FormattedMessage } from 'react-intl'

const {TabPane} = Tabs

class KubernetesList extends React.Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="pod">
                    <TabPane tab={<span><AppleOutlined/><FormattedMessage id={"page.machine.k8s.tab.pod"}/> </span>} key="pod">
                        <PodList/>
                    </TabPane>
                    <TabPane tab={<span> <AndroidOutlined/><FormattedMessage id={"page.machine.k8s.tab.node"}/></span>} key="node">
                        <NodeList/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default KubernetesList;
