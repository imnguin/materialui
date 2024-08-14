import React from "react";
import '../App.css'
import { Flex } from "antd";
const DashBoard = () => {
    return (
        <div className="App">
            <div className="Sider">
                <div className="Sider-header">
                    Bizlinks Company
                </div>
                <hr />
            </div>

            <div style={{
                marginLeft : 300,
                minHeight : '100vh',
                backgroundColor : 'red',
            }}>
            </div>
        </div>
    );
};
export default DashBoard;