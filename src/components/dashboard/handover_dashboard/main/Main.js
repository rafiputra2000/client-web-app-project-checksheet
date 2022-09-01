import React, { useState, useEffect } from "react";
import "./Main.css";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

// import hello from "../../../assets/hello.svg";

function Main() {
    const [handovers, setHandovers] = useState([]);


    async function getHandovers() {
        const response = await axios.get("http://localhost:3001/handover");
        setHandovers(response.data);
    }

    useEffect(() => {
        setTimeout(() => {
            getHandovers();
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
                                    <h4>Data Table Handover</h4>
                                    <p>Data table with print, pdf, csv</p>
                                </div>
                                    <div className="card-body mt-3">
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button btn btn-success mb-3"
                                        table="table-to-handover"
                                        filename="Handover Form"
                                        sheet="tablexls"
                                        buttonText="Export Data to Excel Sheet"/>
                                        <table className="table table-bordered table-hover" id="table-to-handover">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Operator Name</th>
                                                    <th>Machine</th>
                                                    <th>Line</th>
                                                    <th>Date</th>
                                                    <th>Shift</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                handovers.map((handover, index) => (
                                                <tr key={handover._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{handover.operatorname}</td>
                                                    <td>{handover.machine}</td>
                                                    <td>{handover.lineproduction}</td>
                                                    <td>{handover.tanggal}</td>
                                                    <td>{handover.shift}</td>
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