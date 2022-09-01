import React, { useState, useEffect } from "react";
import "./Main.css";
// import hello from "../../../assets/hello.svg";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function Main() {
    const [initialShiftInspection, setInitialShiftInspection] = useState([]);


    async function getInitialShiftInspection() {
        const response = await axios.get("http://localhost:3001/initial-shift-inspection");
        setInitialShiftInspection(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        setTimeout(() => {
            getInitialShiftInspection();
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
                                    <h4>Data Table Initial Shift Inspection</h4>
                                    <p>Data table with print, pdf, csv</p>
                                </div>
                                    <div className="card-body mt-3">
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button btn btn-success mb-3"
                                        table="table-to-initial"
                                        filename="Initial Shift Inspection Form"
                                        sheet="tablexls"
                                        buttonText="Export Data to Excel Sheet"/>
                                        <table className="table table-bordered table-hover" id="table-to-initial">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Operator Name</th>
                                                    <th>Shift</th>
                                                    <th>Initial Shift Inspection</th>
                                                    <th>Status</th>
                                                    <th>Information</th>
                                                    <th>Temperature</th>
                                                    <th>DP</th>
                                                    <th>Reg</th>
                                                    <th>Blower</th>
                                                    <th>Motor</th>
                                                    <th>In temp</th>
                                                    <th>In press</th>
                                                </tr>
                                            </thead>
                                            
                                            {
                                                initialShiftInspection.map((initialShift, index) => (
                                                <tbody>
                                                <tr key={initialShift._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{initialShift.operatorname}</td>
                                                    <td>{initialShift.shift}</td>
                                                    <td>{initialShift.leveloilgbdropdown}</td>
                                                    <td>{initialShift.stateleveloilgbtext}</td>
                                                    <td>{initialShift.noteleveloilgbtext}</td>
                                                </tr>

                                                <tr key={initialShift._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{initialShift.operatorname}</td>
                                                    <td>{initialShift.shift}</td>
                                                    <td>{initialShift.leveloilhydraulicdropdown}</td>
                                                    <td>{initialShift.stateleveloilhydraulictext}</td>
                                                    <td>{initialShift.noteleveloilhydraulictext}</td>
                                                </tr>

                                                <tr key={initialShift._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{initialShift.operatorname}</td>
                                                    <td>{initialShift.shift}</td>
                                                    <td>{initialShift.dehumudifierdropdown}</td>
                                                    <td>{initialShift.statedehumudifiertext}</td>
                                                    <td>null</td>
                                                    <td>{initialShift.tempdehumudifiertext}</td>
                                                    <td>{initialShift.dpdehumudifiertext}</td>
                                                    <td>{initialShift.regdehumudifiertext}</td>
                                                </tr>

                                                <tr key={initialShift._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{initialShift.operatorname}</td>
                                                    <td>{initialShift.shift}</td>
                                                    <td>{initialShift.capcoolerdropdown}</td>
                                                    <td>{initialShift.statecapcoolertext}</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>{initialShift.valblowertext}</td>
                                                    <td>{initialShift.valmotorcapcoolertext}</td>
                                                </tr>

                                                <tr key={initialShift._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{initialShift.operatorname}</td>
                                                    <td>{initialShift.shift}</td>
                                                    <td>{initialShift.unscrambledropdown}</td>
                                                    <td>{initialShift.stateunscrambletext}</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                </tr>

                                                <tr key={initialShift._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{initialShift.operatorname}</td>
                                                    <td>{initialShift.shift}</td>
                                                    <td>{initialShift.imdcameradropdown}</td>
                                                    <td>{initialShift.stateimdcameratext}</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                </tr>

                                                <tr key={initialShift._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{initialShift.operatorname}</td>
                                                    <td>{initialShift.shift}</td>
                                                    <td>{initialShift.coolingchillerdropdown}</td>
                                                    <td>{initialShift.statecoolingchillertext}</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>{initialShift.intempcoolingchillertext}</td>
                                                    <td>{initialShift.inpresscoolingchillertext}</td>
                                                </tr>

                                                <tr key={initialShift._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{initialShift.operatorname}</td>
                                                    <td>{initialShift.shift}</td>
                                                    <td>{initialShift.coolingtowerdropdown}</td>
                                                    <td>{initialShift.statecoolingtowertext}</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>null</td>
                                                    <td>{initialShift.intempcoolingtowertext}</td>
                                                    <td>{initialShift.inpresscoolingtowertext}</td>
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