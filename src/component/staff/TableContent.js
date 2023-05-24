import React from 'react';
import Footer from "../common/Footer";
import StaffLists from "./StaffLists";

const TableContent = () => {
    return (
        <div id="layoutSidenav_content">
            <StaffLists/>
            <Footer/>
        </div>

    );
};

export default TableContent;