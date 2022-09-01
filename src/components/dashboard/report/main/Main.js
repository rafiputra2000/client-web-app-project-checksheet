import React, { useState, useEffect } from "react";
import "./Main.css";
// import hello from "../../../assets/hello.svg";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function Main() {
    const [report, setReport] = useState([]);

    async function getReport() {
        const response = await axios.get("http://localhost:3001/total-resin-usage");
        setReport(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        setTimeout(() => {
            getReport();
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
                                    <h4>Data Table Export</h4>
                                    <p>Data table with print, pdf, csv</p>
                                </div>
                                    <div className="card-body mt-3">
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button btn btn-success mb-3"
                                        table="table-to-report"
                                        filename="Report Form"
                                        sheet="tablexls"
                                        buttonText="Export Data to Excel Sheet"/>
                                        <table className="table table-bordered table-hover" id="table-to-report">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Operator Name</th>
                                                    <th>Machine</th>
                                                    <th>Line</th>
                                                    <th data-priority="2">Shift</th>
                                                    <th>Time</th>
                                                    <th>Report</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                report.map((Report, index) => (
                                                        <tr key={Report._id}>
                                                            <td>{index + 1}</td>
                                                            <td>{Report.operatorname}</td>
                                                            <td>{Report.machine}</td>
                                                            <td>{Report.lineproduction}</td>
                                                            <td>{Report.shift}</td>
                                                            <td>{Report.troubletime}</td>
                                                            <td>{Report.myreport}</td>
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