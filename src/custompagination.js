import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'

export default function CustomPagination() {
    const [userData,setUserData]=useState([]);
   
    const [currentpage,setCurrentPage]=useState(1)
    console.log(currentpage,"currentpage")
    const [totalpage,setTotalPage]=useState(0)
    const apiUrl='https://jsonplaceholder.typicode.com/posts'
    useEffect(()=>{
          fetch(apiUrl).then((res)=>res.json()).then((data)=>{
            setUserData(data)
            const totalpage=Math.ceil(data?.length/10)
            setTotalPage(totalpage)
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
     console.log(currentpage,"currentpage",totalpage,"totalpage")
      if(currentpage  < totalpage){
        setCurrentPage(currentpage -1)
        
      }
    }
    const preDisabled=currentpage==1;
    const nextDisabled=currentpage==totalpage;
    const itemperPage=10
    const startIndex = (currentpage - 1) * itemperPage;
    console.log(startIndex,"startIndex")
    const endIndex=startIndex+itemperPage
    
    const itemsToDisplay=userData.slice(startIndex,endIndex)
console.log(itemsToDisplay,"itemsToDisplay")

    
  return (
    <>
    <TableContainer component={Paper}>
   <Table sx={{ width:"100%" }} aria-label="simple table"> 
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

    return(<>
    <TableRow key={item?.id}>
   
      <TableCell >
        {item?.userId}
      </TableCell >
      <TableCell >
        {item?.id}
      </TableCell >
      <TableCell  >
        {item?.title}
      </TableCell >
      <TableCell  >
        {item?.body}
      </TableCell >
    </TableRow>
    
    
    </>)
  }) :"Kuch NHI Hai"
}
{
  Array.from({length:totalpage},(_,i)=>{
    return(
       <>
       
      <button onClick={()=>{handleChangePage(i+1)}} key={i}
      disabled={currentpage==i+1}
      >
        {i+1}
      </button> 
      </>
    )
  })
}

  
    </TableBody>
   </Table>
   </TableContainer>
   <button disabled={
    currentpage==1
   }  onClick={handlePreviousPage}>Previous</button>  
    </>
  )
}
