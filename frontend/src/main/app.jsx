import '../common/template/dependencies'
import React from "react";

import Header from '../common/template/header';
import SideBar from '../common/template/sidebar';

export default props => (
    <div className="skin-blue">
        <Header></Header>
        <SideBar></SideBar>
    </div>
)