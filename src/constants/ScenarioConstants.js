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
import {FormattedMessage} from "react-intl";
export const ScenarioConstants = {

    STATUS_READY: {code: 0, desc:  "page.scenario.column.detail.to_be_released"},
    STATUS_PUBLISH: {code: 1, desc:  "page.scenario.column.detail.released"},

    STATUS: {
        0: {code: 0, desc:  <FormattedMessage id={"page.scenario.column.detail.to_be_released"}/>},
        1: {code: 1, desc:  <FormattedMessage id={"page.scenario.column.detail.released"}/>},
    },

    SUPPORT_HOST_SCOPE: {
        code: 0, desc: 'host',
    },
    SUPPORT_CONTAINER_SCOPE: {
        code: 1, desc: 'container',
    },
    SUPPORT_POD_SCOPE: {
        code: 2, desc: 'pod',
    },
    SUPPORT_NODE_SCOPE: {
        code: 3, desc: 'node',
    }
}