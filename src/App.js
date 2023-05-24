import React from 'react';
import './App.css';
import Navbar from "./component/common/navbar/Navbar";
import Sidebar from "./component/common/sidebar/Sidebar";
import TableContent from "./component/staff/TableContent";

function App() {
  return (
    <>
      <Navbar/>
      <div id="layoutSidenav">
        <Sidebar/>
        <TableContent/>
      </div>
    </>
  );
}

export default App;
