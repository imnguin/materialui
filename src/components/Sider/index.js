import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';

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
        >

        </Layout.Sider>
    );
};
export default Sider;