import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";

import "./AppBreadcrumbs.scss";

function AppBreadcrumbs() {
  return (
    <React.Fragment>
    <Breadcrumbs aria-label="breadcrumb" className="p-3">
      <Link underline="hover" color="inherit" href="/">
        Sales
      </Link>
      <Typography sx={{ color: "text.primary" }}>Sales Proposal</Typography>
    </Breadcrumbs>
  </React.Fragment>
  )
}

export default AppBreadcrumbs
