import React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  {
    field: "id",
    headerName: "S.No.",
    width: 60,
    sortable: false,
    filterabl: false,
  },
  { field: "Name", headerName: "Name", width: 130 },
  { field: "Retailer-Rating", headerName: "Retailer Rating", width: 100 },
  { field: "Suggested-Amount", headerName: "Suggested Amount", width: 100 },
  {
    field: "NACH-registration-date",
    headerName: "NACH registration date",
    width: 190,
  },
  {
    field: "NACH-registration-amount",
    headerName: "NACH registration amount",
    width: 190,
  },
  {
    field: "NACH-collection-Date",
    headerName: "NACH collection Date",
    width: 190,
  },
  {
    field: "NACH-collection-amount",
    headerName: "NACH collection amount",
    width: 190,
  },
  {
    field: "Total-Amount-Collected-Till-Date",
    headerName: "Total Amount collected till date",
    width: 190,
  },
  { field: "NACH-Bounced-Date", headerName: "NACH bounced Date", width: 90 },
  {
    field: "NACH-Bounced-Amount",
    headerName: "NACH bounced amount",
    width: 90,
  },
  {
    field: "Total-Amount-Bounced-Till-Date",
    headerName: "Total Amount bounced till date",
    width: 90,
  },
  {
    field: "Balance-Amount(Collection-bounced)",
    headerName: "Balance Amount(Collection - bounced",
    width: 90,
  },
];

const rows = [
  {
    id: 1,
    Name: "ABC",
    Address: "Chandigarh",
    Mobile: 3846294749,
    DOB: null,
    Email: "abc@gmail.com",
    GST: "345",
    BankName: "ABC Bank",
    IFSC: 12345,
    Status: "Active",
    AccountType: "XYZ",
    AcctOpendate: null,
  },
];

export default function NACH() {
  return (
    <Box>
      <Typography variant="h4">NACH</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
      />
    </Box>
  );
}
