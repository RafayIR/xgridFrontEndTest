import React, { useEffect, useState } from "react"
import axios from 'axios'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';



function App() {
  const [data, setData] = useState()
  const [modaldata, setModalData] = useState()

  // Fectching Data
  useEffect(() => {
    try {
      const resp = axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        // SetState
        setData(res.data)

      })
    } catch (error) {
      console.log(error)
    }
  }, [])


  let rows = data

  // Columns for Data that is coming
  const columns = [
    { field: 'id', headerName: 'ID', width: 100, editable: true },
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    { field: 'username', headerName: 'User Name', width: 150, editable: true },
    { field: 'email', headerName: 'Email', width: 190, editable: true },
    {
      field: 'address', headerName: 'Address', sortable: false, width: 200,
      renderCell: (params) => {
        return params.value.street + ', ' + params.value.city
      }
    },
    { field: 'phone', headerName: 'Phone', width: 170, editable: true },
    { field: 'website', headerName: 'WebSite', width: 110, editable: true, },
    {
      field: 'company', headerName: 'Company', width: 110, editable: true,
      renderCell: (params) => {
        return params.value.name + ' ' + params.value.catchPhrase
      }
    },
  ];



  return (
    <>
      <div className="table--wrapper" style={{
        width: '100%'
      }}>
        <h1 style={{ textAlign: 'center' }}>
          XGRID WEB PAGE
        </h1>
        {data && (


          <Box sx={{ width: '90%', margin: '0 auto' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}

            />
          </Box>
        )}

      </div>
    </>
  )
}

export default App
