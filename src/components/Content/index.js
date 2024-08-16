import React from "react";
import { Layout } from "antd";

const Content = (props) => {
    return (
        <Layout.Content
            style={{
                ...props.style
            }}>
            This is contents
        </Layout.Content>
    );
};
export default Content;