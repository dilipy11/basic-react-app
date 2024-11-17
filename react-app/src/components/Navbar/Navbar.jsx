import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import LogoImg from "../../assets/images/logo.svg";
import HomeIcon from "../../assets/images/icon-home.svg";
// import ArrowDownIcon from'../../assets/images/arrow-down.svg'
import AddNewIcon from "../../assets/images/icon-add-new.svg";
import CalendarIcon from "../../assets/images/icon-calendar.svg";
import MapIcon from "../../assets/images/icon-map.svg";
import NotificationsIcon from "../../assets/images/icon-notifications.svg";
import SearchIcon from "../../assets/images/icon-search.svg";
import SettingsIcon from "../../assets/images/icon-settings.svg";
import UploadIcon from "../../assets/images/icon-upload.svg";
import JobCamLogo from "../../assets/images/logo-jobcam.png";
import QuickBooksLogo from "../../assets/images/quickBooks_logo.png";
import TwilioLogo from "../../assets/images/twilio_logo.png";
import UserDummyImg from "../../assets/images/user-dummy.png";

import './Navbar.scss'
import { Link } from "@mui/material";

function Navbar() {
  return (
    <React.Fragment>
        <header className="sticky-top bg-white flex-md-nowrap p-0 shadow-sm">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand col-md-3 col-lg-1" to="/">
              <img src={LogoImg} alt="Invoice Maker" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"><MenuIcon /></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <img src={HomeIcon} alt="Home" />
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sales
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="/">
                          Job
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Estimage
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Workorder
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a className="dropdown-item" href="/">
                          Invoices
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Analitics
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Lead Dashboard
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a className="dropdown-item" href="/">
                          Purchase Order
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Sales Proposals
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Marketing
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Expenses
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="/">
                          Vendors
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Outstandings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Open POs
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Paid POs
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Apps
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={JobCamLogo} alt="JobCam" />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={TwilioLogo} alt="Twilio" />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={QuickBooksLogo} alt="QuickBooks" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Reports
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="/">
                          Credit Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Product Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Lead Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Job Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Estimate Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Invoice Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <form className="d-flex position-relative" role="search">
                {/* <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search"> */}
                <input
                  className="form-control me-2 rounded-pill"
                  type="search"
                  placeholder=""
                  aria-label=""
                ></input>
                <button
                  className="btn btn-outline-secondary border-0 rounded-pill ms-n3 searchIcon"
                  type="button"
                >
                  <img src={SearchIcon} alt="Search" />
                </button>
              </form>
              <ul className="navbar-nav right-nav mt-3 mt-lg-0 align-items-start align-items-lg-center">
                <li className="nav-item dropdown profileMenu">
                  <a
                    className="nav-link dropdown-toggle py-0"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    <img
                      className="addNewButton"
                      src={AddNewIcon}
                      alt="Send"
                    />{" "}
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="/">
                          Send Estimate
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Send Invoice
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="vDivider"></li>
                
                <li>
                  <a href="/">
                    <img src={CalendarIcon} alt="Calender" title="Calender" />
                  </a>
                </li>
                
                <li>
                  <a href="/">
                    <img
                      src={NotificationsIcon}
                      title="Notification"
                      alt="Notification"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img
                      src={SettingsIcon}
                      alt="Settings"
                      title="All Settings"
                    />
                  </a>
                </li>
                <li className="vDivider"></li>
                <li className="nav-item dropdown profileMenu">
                  <a
                    className="nav-link dropdown-toggle py-0"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={UserDummyImg} alt="User" />
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="/">
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  )
}

export default Navbar
