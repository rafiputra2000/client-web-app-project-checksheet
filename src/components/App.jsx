import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./authentication/login/Login";
import Register from "./authentication/register/Register";
import ForgotPassword from "./authentication/forgotpassword/ForgotPassword";
import ResetPassword from "./authentication/resetpassword/ResetPassword";
import Dashboard from "./dashboard/Dashboard";
import WholeTableDashboard from "./dashboard/WholeTableDashboard";
import ChartsDashboard from "./dashboard/ChartsDashboard";
import HandoverDashboard from "./dashboard/HandoverDashboard";
import InitialShiftDashboard from "./dashboard/InitialShiftDashboard";
import ProductionParameters from "./dashboard/ProductionParameters";
import Materials from "./dashboard/Materials";
import ProductionResult from "./dashboard/ProductionResult";
import ImdReject from "./dashboard/ImdReject";
import TotalResinUsage from "./dashboard/TotalResinUsage";
import Report from "./dashboard/Report";
import CritismandSuggestion from "./dashboard/CritismandSuggestion";

function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      <Route path="/resetpassword/:token" element={<ResetPassword />}></Route>
      <Route path="/Dashboard/whole-table-dashboard" element={<WholeTableDashboard />}></Route>
      <Route path="/Dashboard/charts-dashboard" element={<ChartsDashboard />}></Route>
      <Route path="/Dashboard/handover-dashboard" element={<HandoverDashboard />}></Route>
      <Route path="/Dashboard/initial-shift-dashboard" element={<InitialShiftDashboard />}></Route>
      <Route path="/Dashboard/production-paramaters" element={<ProductionParameters />}></Route>
      <Route path="/Dashboard/materials" element={<Materials />}></Route>
      <Route path="/Dashboard/production-result" element={<ProductionResult />}></Route>
      <Route path="/Dashboard/imd-reject" element={<ImdReject />}></Route>
      <Route path="/Dashboard/report" element={<Report />}></Route>
      <Route path="/Dashboard/total-resin-usage" element={<TotalResinUsage />}></Route>
      <Route path="/Dashboard/critism-and-suggestion" element={<CritismandSuggestion />}></Route>
    </Routes>
    </div>
  );
}

export default App;
