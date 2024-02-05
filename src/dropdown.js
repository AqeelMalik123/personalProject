// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// import TablePaginationDemo from './pagination';
// import { TablePagination } from '@mui/material';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   const data=[
//     {
//     name:"aqeel",
//     age:24,
//     id:1
//   },
//     {
//     name:"aqeel",
//     age:24,
//     id:2
//   },
//     {
//     name:"aqeel",
//     age:24,
//     id:3
//   },
//     {
//     name:"aqeel",
//     age:24,
//     id:4
//   },
//     {
//     name:"aqeel",
//     age:24,
//     id:5
//   },
//     {
//     name:"aqeel",
//     age:24,
//     id:6
//   },

// ]
// const [rowsPerPage,setPage]=React.useState()
//   const [selectItem,setSelectedItem]=React.useState([])
//   React.useEffect(()=>{

//     setSelectedItem(data)
//   },[])
//   const handleChangePage=()=>{

//   }
//   const handleChangeRowsPerPage=()=>{}
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//           {/* <TableCell padding="checkbox">
//           <Checkbox
//             // indeterminate={numSelected > 0 && numSelected < rowCount}
//             // checked={rowCount > 0 && numSelected === rowCount}
//             // onChange={onSelectAllClick}
//             inputProps={{ 'aria-label': 'select all desserts' }}
//           />
//         </TableCell> */}
//             <TableCell>id</TableCell>
//             <TableCell align="right">Name</TableCell>
//             <TableCell align="right">Age </TableCell>
           
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row) => {
//             console.log(row)

//            return (
//             <TableRow key={row.id}>
//               <TableCell>
//              {row.id}
//               </TableCell>
//               <TableCell>
//              {row.name}
//               </TableCell>
//               <TableCell>
//              {row.age}
//               </TableCell>
//             </TableRow>              

//                         );
//                               })}
//         </TableBody>
//       </Table>
//       <TablePaginationDemo/>
//     </TableContainer>
//   );
// }
