import React, { useState } from 'react';
import { Grid, Layout as LayoutAntd } from 'antd';
import Sider from '../Sider';
import Header from '../Header';
import Content from '../Content';
const {useBreakpoint} = Grid;

const Layout = () => {
    const screens = useBreakpoint()
    const isMobile = screens.xs;

    const [collapsed, setCollapsed] = useState(false);
    const onCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <LayoutAntd style={{
            minHeight: '100vh',
            backgroundColor: '#f0f2f5'
        }}>
            <Sider
                collapsed={isMobile || collapsed}
                // width={250}
                style={{
                    borderRadius: 11,
                    margin: 15,
                    // background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
                }}
            />
            <LayoutAntd>
                <Header
                    style={{
                        margin: 15,
                        borderRadius: 11
                    }}
                    Collapsed={onCollapsed}
                />
                <Content
                    style={{
                        margin: 15
                    }} />
            </LayoutAntd>
        </LayoutAntd>
    );
};
export default Layout;