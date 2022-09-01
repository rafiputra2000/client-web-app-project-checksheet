import React from "react";
import "./Main.css";
import hello from "../../../assets/hello.svg";
// import Chart from "../charts/Chart";
import { Link } from "react-router-dom";

function Main() {
    return(
        <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello Everyone</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
        <div className="card__box">
            <i className="fa fa-table fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">
              <Link to="/Dashboard/handover-dashboard">Handover</Link>
              </p>
              <span className="font-bold text-title"></span>
            </div>
          </div>

          <div className="card__box">
            <i className="fa fa-table fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">
              <Link to="/Dashboard/initial-shift-dashboard">Initial Shift Inspection</Link>
              </p>
              <span className="font-bold text-title"></span>
            </div>
          </div>

          <div className="card__box">
            <i
              className="fa fa-table fa-2x text-red fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">
              <Link to="/Dashboard/production-paramaters">Production Parameters</Link>
              </p>
              <span className="font-bold text-title"></span>
            </div>
          </div>

          <div className="card__box">
            <i
              className="fa fa-table fa-2x text-red fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">
              <Link to="/Dashboard/materials">Materials</Link>
              </p>
              <span className="font-bold text-title"></span>
            </div>
          </div>

          <div className="card__box">
            <i
              className="fa fa-table fa-2x text-red fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">
              <Link to="/Dashboard/production-result">Production Result</Link>
              </p>
              <span className="font-bold text-title"></span>
            </div>
          </div>

          <div className="card__box">
            <i
              className="fa fa-table fa-2x text-red fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">
              <Link to="/Dashboard/imd-reject">IMD Reject</Link>
              </p>
              <span className="font-bold text-title"></span>
            </div>
          </div>

          <div className="card__box">
            <i
              className="fa fa-table fa-2x text-red fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">
              <Link to="/Dashboard/total-resin-usage">Total Resin Usage</Link>
              </p>
              <span className="font-bold text-title"></span>
            </div>
          </div>

          <div className="card__box">
            <i
              className="fa fa-table fa-2x text-red fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">
              <Link to="/Dashboard/report">Report</Link>
              </p>
              <span className="font-bold text-title"></span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        {/* <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
    )

}

export default Main;