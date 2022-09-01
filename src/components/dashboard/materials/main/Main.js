import React, { useState, useEffect } from "react";
import "./Main.css";
// import hello from "../../../assets/hello.svg";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function Main() {
    const [materialUsed, setMaterialUsed] = useState([]);

    async function getMaterialUsed() {
        const response = await axios.get("http://localhost:3001/material-used");
        setMaterialUsed(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        setTimeout(() => {
            getMaterialUsed();
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
                                        table="table-to-materials"
                                        filename="Materials Form"
                                        sheet="tablexls"
                                        buttonText="Export Data to Excel Sheet"/>
                                        <table className="table table-bordered table-hover" id="table-to-materials">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Operator Name</th>
                                                    <th>Shift</th>
                                                    <th>Materials</th>
                                                    <th>Code</th>
                                                    <th>Specification</th>
                                                    <th>Weight</th>
                                                    <th>Date</th>
                                                    <th>Note</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                materialUsed.map((material, index) => (
                                                        <tr key={material._id}>
                                                            <td>{index + 1}</td>
                                                            <td>{material.operatorname}</td>
                                                            <td>{material.shift}</td>
                                                            <td>{material.materialused}</td>
                                                            <td>{material.kodetext}</td>
                                                            <td>{material.spectext}</td>
                                                            <td>{material.weightmattext}</td>
                                                            <td>{material.tanggal}</td>
                                                            <td>{material.notetext}</td>
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