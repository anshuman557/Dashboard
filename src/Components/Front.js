// import { useState } from "react";
// import Stack from "@mui/material/Stack";
// import Divider from "@mui/material/Divider";
// import Typography from "@mui/material/Typography";
// import Card from "@mui/material/Card";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import HomeTable from "./HomeTable";
// import XLSX from 'xlsx';

// const boxContent = [
//   {
//     title: "Total Number of Retailers",
//     body: "XXXX",
//   },
//   {
//     title: "Total no. of accepted for Retailer’s Rating",
//     body: "XXXX",
//   },
//   {
//     title: "Total no. of incomplete  Retailer’s Rating",
//     body: "XXXX",
//   },
//   {
//     title: "Total amount recommended",
//     body: "XXXX",
//   },
//   {
//     title: "Total no. of retailers accepted NACH",
//     body: "XXXX",
//   },
//   {
//     title: "Total amount collected using NACH (In Rs.)",
//     body: "XXXX",
//   },
//   {
//     title: "Total amount bounced on NACH (In Rs.)",
//     body: "XXXX",
//   },
//   {
//     title: "Total no. of retailers rejected NACH",
//     body: "XXXX",
//   },
// ];


// export default function Front() {
// const[colDefs,setColDefs]=useState()
// const[ data,setData]=useState()

// const importExcle=(e)=>{
//   const file= (e.target.files[0]);

//   const reader = new FileReader()
//   reader.onload=(event)=>{
//     //parse data 

//     const bstr= event.target.result
//     const workBook=XLSX.read(bstr,{type:"binary"})

//     //get first sheet 
//     const workSheetName= workBook.SheetNames[0]
//     const workSheet= workBook.Sheet[workSheetName]

//     //Convert to array
//     const fileData=XLSX.utils.sheet_to_json(workSheet,{header:1})
//     console.log(fileData)
//   }

//   reader.readAsBinaryString(file)
// }


//   return (
//     <>
   
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid
//           container
//           spacing={{ xs: 2, md: 2 }}
//           columns={{ xs: 4, sm: 8, md: 16 }}
//         >
//           {boxContent.map((content, index) => (
//             <Grid item xs={2} sm={4} md={4} key={index}>
//               <Card variant="outlined" sx={{ maxWidth: 900 }}>
//                 <Box sx={{ p: 2, height: 120 }}>
//                   <Stack
//                     direction="row"
//                     justifyContent="space-between"
//                     alignItems="center"
//                   >
//                     <Typography gutterBottom variant="h5" component="div">
//                       {content.title}
//                     </Typography>
//                   </Stack>
//                 </Box>
//                 <Divider />
//                 <Box sx={{ p: 2 }}>
//                   <Typography gutterBottom variant="body2">
//                     {content.body}
//                   </Typography>
//                 </Box>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//       <Box mt={4}>
//       <input type="file" onChange={importExcle}/>
//       </Box>
//       <Box mt={4}>
//         <HomeTable />
//       </Box>
//     </>
//   );
// }



import React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HomeTable from "./HomeTable";
// import MaterialTable


const boxContent = [
  {
    title: "Total Number of Retailers",
    body: "XXXX",
  },
  {
    title: "Total no. of accepted for Retailer’s Rating",
    body: "XXXX",
  },
  {
    title: "Total no. of incomplete  Retailer’s Rating",
    body: "XXXX",
  },
  {
    title: "Total amount recommended",
    body: "XXXX",
  },
  {
    title: "Total no. of retailers accepted NACH",
    body: "XXXX",
  },
  {
    title: "Total amount collected using NACH (In Rs.)",
    body: "XXXX",
  },
  {
    title: "Total amount bounced on NACH (In Rs.)",
    body: "XXXX",
  },
  {
    title: "Total no. of retailers rejected NACH",
    body: "XXXX",
  },
];

export default function Front() {
 

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 16 }}
        >
          {boxContent.map((content, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card variant="outlined" sx={{ maxWidth: 900 }}>
                <Box sx={{ p: 2, height: 120 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {content.title}
                    </Typography>
                  </Stack>
                </Box>
                <Divider />
                <Box sx={{ p: 2 }}>
                  <Typography gutterBottom variant="body2">
                    {content.body}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* <Box mt={4}>
        <input type="file" onChange={importExcel} />
      </Box> */}
      <Box mt={4}>
        <HomeTable />
      </Box>
    </>
  );
}
