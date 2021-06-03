import React from'react';
import {AutoComplete, Col, Input, Row, Space, Typography} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../state";
import {SearchOutlined} from "@ant-design/icons";

export default function SearchInput() {
    const keyword = useSelector(state => state.search.keyword)
    const dispatch = useDispatch()
    function setKeyword(value) {
        if (value !== keyword) {
            dispatch(actions.setValue('keyword', value))
            dispatch(actions.fetchAutoComplete(value))
        }
    }
    const autoCompletes = useSelector(state => state.search.authCompletes)
    function gotoUser() {}
    return (
        <AutoComplete
            value={keyword}
            onChange={setKeyword}
            onSelect={gotoUser}
            style={{width: '100%'}}
            autoFocus
            options={autoCompletes.map(item => ({
                value: item.name,
                label: (
                    <Space>
                        <Typography.Text strong>{item.name}</Typography.Text>
                        <Typography.Text type="secondary">
                            {item.department}
                        </Typography.Text>
                        <Typography.Text>{item.tag}</Typography.Text>
                    </Space>
                ),
            }))}
        >
            <Input size="large" placeholder="input here" prefix={<SearchOutlined />}/>
        </AutoComplete>
    );
}
