import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../views/DashBoard";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<DashBoard />}></Route>
        </Routes>
    );
};
export default Router;