import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
const Sider = (props) => {
    return (
        <Layout.Sider
            style={{
                ...props?.style,
            }}
            width={props?.width}
            trigger={props.trigger || null}
            collapsible
            collapsed={props?.collapsed}
            collapsedWidth={!!props?.collapsed ? 60 : undefined}
        >
            <Menu
                style={{
                    borderRadius: 11
                }}
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'nav 1',
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'nav 3',
                    },
                ]}
            />
        </Layout.Sider>
    );
};
export default Sider;