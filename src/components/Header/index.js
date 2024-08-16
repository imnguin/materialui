import React from "react";
import { Breadcrumb, Col, Flex, Input, Layout, Row, Tooltip } from "antd";
import { UserOutlined, HomeOutlined } from '@ant-design/icons';

const Header = (props) => {
    return (
        <Layout.Header
            style={{
                ...props?.style,
                backgroundColor: '#f0f2f5',
                paddingLeft: 5,
                paddingRight: 5,
                display: "flex", 
                alignItems: 'center'
            }}
        >
            <Row style={{ width: '100%', display : 'flex', gap : 10 }}>
                <Col flex={2}
                    style={{ display: "flex", alignItems: 'center' }}
                >
                    <Breadcrumb
                        items={[
                            {
                                href: '',
                                title: <HomeOutlined />,
                            },
                            {
                                href: '',
                                title: (
                                    <>
                                        <span>Application List</span>
                                    </>
                                ),
                            },
                            {
                                title: 'Application',
                            },
                        ]}
                    />
                </Col>
                <Col
                    flex={3}
                    style={{
                        display: "flex",
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}
                >
                    <Flex gap={20} style={{
                        display: "flex",
                        alignItems: 'center'
                    }} >
                        <Input
                            placeholder="Search here..."
                            style={{
                                height: 40
                            }}
                        />
                        <Flex gap={10}>
                            <Tooltip title='Account'>
                                <button className="IconButton">
                                    <i className="fa-solid fa-circle-user Icon"></i>
                                </button>
                            </Tooltip>
                            <Tooltip title='Account'>
                                <button className="IconButton">
                                    <i className="fa-solid fa-gear Icon"></i>
                                </button>
                            </Tooltip>
                            <Tooltip title='Collapsed'>
                                <button className="IconButton" onClick={() => props?.Collapsed()}>
                                    <i className="fa-solid fa-bars Icon"></i>
                                </button>
                            </Tooltip>
                            <Tooltip title='Account'>
                                <button className="IconButton">
                                    <i className="fa-solid fa-bell Icon"></i>
                                </button>
                            </Tooltip>
                        </Flex>
                    </Flex>
                </Col>
            </Row>
        </Layout.Header>
    );
};
export default Header;