
// const columns = [
//   {
//     field: "id",
//     headerName: "S.No.",
//     width: 60,
//     sortable: false,
//     filterabl: false,
//   },
//   { field: "Name", headerName: "Name", width: 120 },
//   { field: "Mobile", headerName: "Mobile", width: 150 },
//   { field: "RetailerRating", headerName: "Retailer rating", width: 130 },
//   { field: "BankName", headerName: "Bank Name", width: 190 },
//   { field: "RecommendedAmt", headerName: "Recommended Amt", width: 150 },
//   { field: "ENachAmt", headerName: "E-nach Amt", width: 100 },
// ];

// const rows = [
//   {
//     id: 1,
//     Name: "ABC",
//     Mobile: 3846294749,
//     RetailerRating: "Good",
//     BankName: "ABC Bank",
//     RecommendedAmt: 12345,
//     ENachAmt: "Active",
//   },
//   {
//     id: 2,
//     Name: "ABC",
//     Mobile: 3846294749,
//     RetailerRating: "Good",
//     BankName: "ABC Bank",
//     RecommendedAmt: 12345,
//     ENachAmt: "Active",
//   },
//   {
//     id: 3,
//     Name: "ABC",
//     Mobile: 3846294749,
//     RetailerRating: "Good",
//     BankName: "ABC Bank",
//     RecommendedAmt: 12345,
//     ENachAmt: "Active",
//   },
//   {
//     id: 4,
//     Name: "ABC",
//     Mobile: 3846294749,
//     RetailerRating: "Good",
//     BankName: "ABC Bank",
//     RecommendedAmt: 12345,
//     ENachAmt: "Active",
//   },
//   {
//     id: 5,
//     Name: "ABC",
//     Mobile: 3846294749,
//     RetailerRating: "Good",
//     BankName: "ABC Bank",
//     RecommendedAmt: 12345,
//     ENachAmt: "Active",
//   },
//   {
//     id: 6,
//     Name: "ABC",
//     Mobile: 3846294749,
//     RetailerRating: "Good",
//     BankName: "ABC Bank",
//     RecommendedAmt: 12345,
//     ENachAmt: "Active",
//   },
//   {
//     id: 7,
//     Name: "ABC",
//     Mobile: 3846294749,
//     RetailerRating: "Good",
//     BankName: "ABC Bank",
//     RecommendedAmt: 12345,
//     ENachAmt: "Active",
//   },
//   {
//     id: 8,
//     Name: "ABC",
//     Mobile: 3846294749,
//     RetailerRating: "Good",
//     BankName: "ABC Bank",
//     RecommendedAmt: 12345,
//     ENachAmt: "Active",
//   },
//   {
//     id: 9,
//     Name: "ABC",
//     Mobile: 3846294749,
//     RetailerRating: "Good",
//     BankName: "ABC Bank",
//     RecommendedAmt: 12345,
//     ENachAmt: "Active",
//   },
// ];



// import React, { useState } from "react";
// import { Box, Typography } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import * as XLSX from 'xlsx';
// export default function HomeTable() {
//   const [colDefs, setColDefs] = useState([]);
//   const [data, setData] = useState([]);

//   const importExcel = (e) => {
//     const file = e.target.files[0];

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const binaryString = event.target.result;
//       const workBook = XLSX.read(binaryString, { type: 'binary' });

//       // Get the first sheet name
//       const workSheetName = workBook.SheetNames[0];
//       const workSheet = workBook.Sheets[workSheetName];

//       // Convert sheet data to array of objects (assuming first row is header)
//       const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });

//       const headers =fileData[0]
//       const heads=headers.map(head=>({title:head,field:head}))
//      setColDefs(heads)



//       fileData.splice(0,1)
//       console.log(fileData);

//     };

//     reader.readAsBinaryString(file);
//   };
//   return (
//     <Box>
//       <Typography variant="h4">Overview</Typography>
//       <Box mt={4}>
//         <input type="file" onChange={importExcel} />
//       </Box>
//       <DataGrid
//         // rows={rows}
//         // columns={columns}
//         rows={colDefs} columns={data}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 10 },
//           },
//         }}
//         pageSizeOptions={[10, 20]}
//       />
//     </Box>
//   );
// }



import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import * as XLSX from 'xlsx';

const EXTENSIONS=['xlxs','xls','csv']

export default function HomeTable() {
  const [colDefs, setColDefs] = useState([]);
  const [dataRows, setDataRows] = useState([]);

  const getExtention=(file)=>{
    const parts=file.name.split('.')
    const extension=parts[parts.length-1]
    return EXTENSIONS.includes(extension)
  }

  const convertToJson = (headers, data) => {
    const rows = data.map(row => {
      let rowData = {};
      row.forEach((element, index) => {
        rowData[headers[index]] = element;
      });
      return rowData;
    });
    return rows;
  }

  const importExcel = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryString = event.target.result;
      const workBook = XLSX.read(binaryString, { type: 'binary' });

      // Get the first sheet name
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];

      // Convert sheet data to array of objects (assuming first row is header)
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });

      // Extract column headers and set them as column definitions
      const headers = fileData[0];
      const columnDefs = headers.map((header) => ({ field: header, headerName: header }));

      // Remove headers from data rows
      fileData.splice(0, 1);

      // Convert rows to JSON and set unique ids
      const dataRowsWithIds = convertToJson(headers, fileData).map((rowData, index) => ({
        id: index + 1, // Generate a unique id (e.g., index + 1)
        ...rowData,    // Spread the rest of the row data
      }));

      setColDefs(columnDefs);
      setDataRows(dataRowsWithIds);
    };

    if(file){
      if(getExtention(file)){
        reader.readAsBinaryString(file);
        }else{
          alert("Invalid File Type")
        }
    }else{
      setDataRows([])
      setColDefs([])
    }

  };

  return (
    <Box>
      <Typography variant="h4">Uploaded Data</Typography>
      <Box mt={4}>
        <input type="file" onChange={importExcel} />
      </Box>
      {colDefs.length > 0 && dataRows.length > 0 ? (
        <DataGrid
          rows={dataRows}
          columns={colDefs}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          autoHeight
          pagination
        />
      ) : (
        <Typography variant="body1">Upload an Excel file to view data</Typography>
      )}
    </Box>
  );
}
