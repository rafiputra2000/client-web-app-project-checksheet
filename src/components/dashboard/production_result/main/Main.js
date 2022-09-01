import React, { useState, useEffect } from "react";
import "./Main.css";
// import hello from "../../../assets/hello.svg";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function Main() {
    const [productionResult, setProductionResult] = useState([]);

    async function getProductionResult() {
        const response = await axios.get("http://localhost:3001/production-results");
        setProductionResult(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        setTimeout(() => {
            getProductionResult();
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
                                    <h4>Data Table Production Result</h4>
                                    <p>Data table with print, pdf, csv</p>
                                </div>
                                    <div className="card-body mt-3">
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button btn btn-success mb-3"
                                        table="table-to-production-result"
                                        filename="Production Result Form"
                                        sheet="tablexls"
                                        buttonText="Export Data to Excel Sheet"/>
                                        <table className="table table-bordered table-hover" id="table-to-production-result">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Operator Name</th>
                                                    <th>Shift</th>
                                                    <th>Production Result</th>
                                                    <th>Qty</th>
                                                    <th>Weight</th>
                                                </tr>
                                            </thead>
                                            
                                            {
                                                productionResult.map((production, index) => (
                                                    <tbody>
                                                        <tr key={production._id}>
                                                            <td>{index + 1}</td>
                                                            <td>{production.operatorname}</td>
                                                            <td>{production.shift}</td>
                                                            <td>{production.prodresult}</td>
                                                            <td>{production.qtytotalcaptext}</td>
                                                            <td>{production.weighttotalcaptext}</td>
                                                        </tr>

                                                        <tr key={production._id}>
                                                            <td>{index + 1}</td>
                                                            <td>{production.operatorname}</td>
                                                            <td>{production.shift}</td>
                                                            <td>{production.prodresult2}</td>
                                                            <td>{production.qtygoodcaptext}</td>
                                                            <td>{production.weightgoodcaptext}</td>
                                                        </tr>

                                                        <tr key={production._id}>
                                                            <td>{index + 1}</td>
                                                            <td>{production.operatorname}</td>
                                                            <td>{production.shift}</td>
                                                            <td>{production.prodresult3}</td>
                                                            <td>{production.qtyrejectpurgingcaptext}</td>
                                                            <td>{production.weighrejectpurgingvaltext}</td>
                                                        </tr>

                                                        <tr key={production._id}>
                                                            <td>{index + 1}</td>
                                                            <td>{production.operatorname}</td>
                                                            <td>{production.shift}</td>
                                                            <td>{production.prodresult4}</td>
                                                            <td>{production.qtyrejectimdvaltext}</td>
                                                            <td>{production.weighrejectimdvaltext}</td>
                                                        </tr>

                                                        <tr key={production._id}>
                                                            <td>{index + 1}</td>
                                                            <td>{production.operatorname}</td>
                                                            <td>{production.shift}</td>
                                                            <td>{production.prodresult5}</td>
                                                            <td>null</td>
                                                            <td>{production.weightrejectpurgingextrudertex}</td>
                                                        </tr>

                                                        <tr key={production._id}>
                                                            <td>{index + 1}</td>
                                                            <td>{production.operatorname}</td>
                                                            <td>{production.shift}</td>
                                                            <td>{production.prodresult6}</td>
                                                            <td>null</td>
                                                            <td>{production.weighttotalrejectvaltext}</td>
                                                        </tr>
                                                    </tbody>
                                                ))
                                            }
                                            
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