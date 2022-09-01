import React, { useState, useEffect } from "react";
import "./Main.css";
// import hello from "../../../assets/hello.svg";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function Main() {
    const [productionParameters, setProductionParameters] = useState([]);


    async function getProductionParameters() {
        const response = await axios.get("http://localhost:3001/production-parameters");
        setProductionParameters(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        setTimeout(() => {
            getProductionParameters();
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
                                    <h4>Data Table Production Parameters</h4>
                                    <p>Data table with print, pdf, csv</p>
                                </div>
                                    <div className="card-body mt-3">
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button btn btn-success mb-3"
                                        table="table-to-production"
                                        filename="Production Parameters Form"
                                        sheet="tablexls"
                                        buttonText="Export Data to Excel Sheet"/>
                                        <table className="table table-bordered table-hover" id="table-to-production">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Operator Name</th>
                                                    <th>Shift</th>
                                                    <th>Production Parameters</th>
                                                    <th>Actual 1 Hours</th>
                                                    <th>Actual 2 Hours</th>
                                                    <th>Actual 3 Hours</th>
                                                    <th>Actual 4 Hours</th>
                                                    <th>Actual 5 Hours</th>
                                                    <th>Actual 6 Hours</th>
                                                    <th>Actual 7 Hours</th>
                                                    <th>Actual 8 Hours</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                productionParameters.map((production, index) => (
                                                <tr key={production._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{production.operatorname}</td>
                                                    <td>{production.shift}</td>
                                                    <td>{production.parameterproduksichoice}</td>
                                                    <td>{production.valactual1hours}</td>
                                                    <td>{production.valactual2hours}</td>
                                                    <td>{production.valactual3hours}</td>
                                                    <td>{production.valactual4hours}</td>
                                                    <td>{production.valactual5hours}</td>
                                                    <td>{production.valactual6hours}</td>
                                                    <td>{production.valactual7hours}</td>
                                                    <td>{production.valactual8hours}</td>
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