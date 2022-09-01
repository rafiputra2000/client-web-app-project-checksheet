import React, { useState, useEffect } from "react";
import "./Main.css";
// import hello from "../../../assets/hello.svg";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function Main() {
    const [imdReject, setImdReject] = useState([]);

    async function getImdReject() {
        const response = await axios.get("http://localhost:3001/imd-reject");
        setImdReject(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        setTimeout(() => {
            getImdReject();
        },2000);
       }, []);

    return(
        <main>
            <div className="main__container">
                <div className="container" style={{ paddingTop:"20px" }}>
                    <div className="container">
                        <div className="col-md-12">
                            <div className="card__table">
                                <div className="card-header">
                                    <h4>Data Table IMD Reject</h4>
                                    <p>Data table with print, pdf, csv</p>
                                </div>
                                    <div className="card-body mt-3">
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button btn btn-success mb-3"
                                        table="table-to-imdreject"
                                        filename="Imd Reject Form"
                                        sheet="tablexls"
                                        buttonText="Export Data to Excel Sheet"/>
                                        <table className="table table-bordered table-hover" id="table-to-imdreject">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Operator Name</th>
                                                    <th>Shift</th>
                                                    <th>Flash</th>
                                                    <th>Ovality</th>
                                                    <th>Color</th>
                                                    <th>Freckless</th>
                                                    <th>Short</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                imdReject.map((reject, index) => (
                                                        <tr key={reject._id}>
                                                            <td>{index + 1}</td>
                                                            <td>{reject.operatorname}</td>
                                                            <td>{reject.shift}</td>
                                                            <td>{reject.flash}</td>
                                                            <td>{reject.ovality}</td>
                                                            <td>{reject.warna}</td>
                                                            <td>{reject.bintik}</td>
                                                            <td>{reject.shorts}</td>
                                                        </tr>
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main> 
    )
}

export default Main;