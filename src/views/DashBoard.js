import React from "react";
const DashBoard = () => {
    return (
        <div className="App">
            <div className="Sider">
                <div className="Sider-header">Code siêu lỏ</div><hr />
            </div>
            <div className="Content">
                <div className="Search" id="Search">
                    <div className="SearchLeft">
                        <span style={{ fontSize: 13, color: '#898b8b' }}><i className="fa-solid fa-house" ></i>  /  aaaaa / aaaa</span>
                    </div>
                    <div className="SearchRight">
                        <input className="SearchInput" placeholder="Search here..." />
                        <button className="IconButton">
                            <i className="fa-solid fa-circle-user Icon"></i>
                        </button>
                        <button className="IconButton">
                            <i className="fa-solid fa-gear Icon"></i>
                        </button>
                        <button className="IconButton">
                            <i className="fa-solid fa-bars Icon"></i>
                        </button>
                        <button className="IconButton">
                            <i className="fa-solid fa-bell Icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DashBoard;