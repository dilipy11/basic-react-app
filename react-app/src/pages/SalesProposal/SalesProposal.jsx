import React from "react";
import { Button, TextField, Checkbox } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EastIcon from "@mui/icons-material/East";
import "./SalesProposal.scss";

function SalesProposal() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className=" white-container">
          <div className="row">
            <div className="col-12">
              <h1 className="pageHead">
                Search and select customer with address first.
              </h1>
            </div>
            <div className="col-12 col-lg-8 d-flex align-items-end">
              <p className="m-0 pe-3">Search Customer to send sales proposal</p>
              <div className="customerSearchBox">
                <SearchIcon className="position-absolute " />
                <TextField
                  id="input-with-sx"
                  label="Search customer here"
                  variant="standard"
                />
                <EastIcon />
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex align-items-center justify-content-end pt-2 ">
              <p className="m-0 pe-3">If not found</p>
              <Button variant="outlined">Add Custoner</Button>
            </div>
            <div className="col-12">
              <div class="mt-4">
                <table class="table table-hover ">
                  <thead>
                    <tr>
                      <th>
                        <Checkbox className="p-0" />
                      </th>

                      <th>
                        Customer<a href="#"></a> Name
                      </th>
                      <th>
                        Email<a href="#"></a> No.
                      </th>
                      <th>
                        Phone<a href="#"></a>
                      </th>
                      <th>
                        Address<a href="#"></a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Checkbox className="p-0" />
                      </td>
                      <td>D Y OneStop Solution</td>
                      <td>dyonestop@mailinator.com</td>
                      <td>(234) 567-8900</td>
                      <td>Select Address</td>
                    </tr>
                    <tr>
                      <td>
                        <Checkbox className="p-0" />
                      </td>
                      <td>D Y Solution</td>
                      <td>dyonestop@mailinator.com</td>
                      <td>(234) 567-8900</td>
                      <td>317a West 33rd Street New York New York 10001</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SalesProposal;
