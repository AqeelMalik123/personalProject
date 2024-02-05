import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'

export default function CustomPagination() {
    const [userData,setUserData]=useState([]);
    console.log(userData)
    const [currentpage,setCurrentPage]=useState(1)
    const [totalpage,setTotalPage]=useState(0)
    const apiUrl='https://jsonplaceholder.typicode.com/posts'
    useEffect(()=>{
          fetch(apiUrl).then((res)=>res.json()).then((data)=>{
            setUserData(data)
            setTotalPage(Math.ceil(data.length/10))
          }).catch((error)=>{
            console.log(error)
          })
    },[])
    //current page 
    const handleChangePage=(newPage)=>{
      setCurrentPage(newPage)
    }
    const handleNextPage=()=>{
      if(currentpage < totalpage){
        setCurrentPage(currentpage +1)

      }
    }
    const handlePreviousPage=()=>{
      if(currentpage  > totalpage){
        setCurrentPage(currentpage -1)

      }
    }
    const preDisabled=currentpage==1;
    const nextDisabled=currentpage==totalpage;
    const itemperPage=10
    const startIndex=(currentpage-1)/itemperPage
    const endIndex=startIndex+currentpage
    const itemsToDisplay=userData.slice(startIndex,endIndex)

    
  return (
    <>
    <TableContainer component={Paper}>
   <Table sx={{ minWidth: 650 }} aria-label="simple table"> 
    <TableHead>
        <TableRow>
            <TableCell >id</TableCell >
            <TableCell >
                Name
            </TableCell >
            <TableCell >
                Title
            </TableCell >
            <TableCell >
                Body
            </TableCell >
        </TableRow>
    </TableHead>
    <TableBody>


      
{
     itemsToDisplay && itemsToDisplay.length >0 ? itemsToDisplay?.map((item,i)=>{
console.log(item)
    return(<>
    <TableRow key={i}>
      <TableCell >
        {item?.userId}
      </TableCell >
      <TableCell >
        {item?.id}
      </TableCell >
      <TableCell >
        {item?.title}
      </TableCell >
      <TableCell >
        {item?.body}
      </TableCell >
    </TableRow>
    
    
    </>)
  }) :"NUll"
}
{
  Array.from({length:totalpage},(_,i)=>{
    return(
      <>
      <button onClick={handleChangePage} key={i}>
        {i+1}
      </button>
      </>
    )
  })
}

       
    </TableBody>
   </Table>
   </TableContainer>
    </>
  )
}
