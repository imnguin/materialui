import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { AppMenu } from '../Menu';

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
            <div style={{
                color: 'white',
                display: !!props?.collapsed ? 'none' : 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 60,
                fontWeight: 'bold'
            }}>
                Nguin company
            </div>
            <Menu
                style={{
                    borderRadius: 11
                }}
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[...AppMenu]}
            />
        </Layout.Sider>
    );
};
export default Sider;