import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import NACH from "./NACH";
const columns = [
  {
    field: "id",
    headerName: "S.No.",
    width: 60,
    sortable: false,
    filterable: false,
  },
  { field: "Name", headerName: "Name", width: 130 },
  { field: "Address", headerName: "Address", width: 140 },
  { field: "Mobile", headerName: "Mobile", width: 130 },
  { field: "DOB", headerName: "DOB", width: 90 },
  { field: "Email", headerName: "Email", type: "email", width: 200 },
  { field: "GST", headerName: "GST", width: 90 },
  { field: "BankName", headerName: "BankName", width: 130 },
  { field: "IFSC", headerName: "IFSC", width: 100 },
  { field: "Status", headerName: "Status", width: 100 },
  { field: "AccountType", headerName: "Account Type", width: 100 },
  { field: "AcctOpendate", headerName: "Acct open date", width: 100 },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    filterable: false,
    renderCell: (params) => <ViewButton {...params} />,
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
  {
    id: 2,
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
  {
    id: 3,
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
  {
    id: 4,
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
  {
    id: 5,
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
  {
    id: 6,
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
  {
    id: 7,
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
  {
    id: 8,
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
  {
    id: 9,
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
  {
    id: 10,
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
  {
    id: 11,
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

function ViewButton({ row }) {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`${NACH}`);
  };

  return <Button onClick={handleViewClick}>View</Button>;
}

export default function RetailersDetails() {
  return (
    <Box>
      <Typography variant="h4">Retailers Details</Typography>
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
