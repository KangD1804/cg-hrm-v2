import React, {useEffect, useState} from 'react';
import {
    selectSuccess,
    selectStaffList,
    getStaffs,
    setSuccess,
} from "../../features/staff/staffSlice";
import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
const StaffLists = () => {
    const [staffs, setStaffs] = useState([]);
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const staffList = useSelector(selectStaffList);
    const success = useSelector(selectSuccess);
    const getStaffList = async () => {
        if (!success) {
            dispatch(getStaffs());
        }else {
            setStaffs(staffList);
            dispatch(setSuccess(true));
        }

    };

    useEffect(() => {
        getStaffList();

        // eslint-disable-next-line
    }, [success]);

/*    function handleCreate(e) {
        e.preventDefault();
        // navigate('/staff/add');
    }*/

    return (
        <main>
            <div className="container-fluid">
                <h1 className="mt-4">Tables</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                    <li className="breadcrumb-item active">Tables</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-body">
                        DataTables is a third party plugin that is used to generate the demo table below. For more
                        information about DataTables, please visit the
                        <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table mr-1"></i>
                        DataTable Example
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                                </thead>
                                <tbody>
                                {staffs.map((staff) => (
                                    <tr key={staff.id}>
                                        <td>{staff.name} </td>
                                        <td>{staff.position} </td>
                                        <td>{staff.office} </td>
                                        <td>{staff.age} </td>
                                        <td>{staff.startDate} </td>
                                        <td>{staff.salary} </td>
                                        {/*<td>*/}
                                        {/*    <Link to={`/book/${staff.id}`}>Detail</Link>*/}
                                        {/*</td>*/}
                                        {/*<td>*/}
                                        {/*    <Link to={`/book/edit/${staff.id}`}>Edit</Link>*/}
                                        {/*</td>*/}
                                    </tr>
                                ))}
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                                </tfoot>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default StaffLists;