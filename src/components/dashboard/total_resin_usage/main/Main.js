import React, { useState, useEffect } from "react";
import "./Main.css";
// import hello from "../../../assets/hello.svg";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function Main() {
    const [totalResinUsage, setTotalResinUsage] = useState([]);

    async function getTotalResinUsage() {
        const response = await axios.get("http://localhost:3001/total-resin-usage");
        setTotalResinUsage(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        setTimeout(() => {
            getTotalResinUsage();
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
                                    <h4>Data Table Materials</h4>
                                    <p>Data table with print, pdf, csv</p>
                                </div>
                                    <div className="card-body mt-3">
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button btn btn-success mb-3"
                                        table="table-to-resin"
                                        filename="Total Resin Usage Form"
                                        sheet="tablexls"
                                        buttonText="Export Data to Excel Sheet"/>
                                        <table className="table table-bordered table-hover" id="table-to-resin">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Operator Name</th>
                                                    <th>Shift</th>
                                                    <th>Materials</th>
                                                    <th>Actual Weight (kg)</th>
                                                    <th>Percentages (%)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                totalResinUsage.map((resin, index) => (
                                                        <tr key={resin._id}>
                                                            <td>{index + 1}</td>
                                                            <td>{resin.operatorname}</td>
                                                            <td>{resin.shift}</td>
                                                            <td>{resin.materialschoice}</td>
                                                            <td>{resin.valactualweight}</td>
                                                            <td>{resin.percent}</td>
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