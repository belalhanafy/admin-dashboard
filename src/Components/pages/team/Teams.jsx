import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from '../../shared/Header';
export default function Teams() {
  const theme = useTheme();
  const rows = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "(665)121-5454",
      access: "Admin",
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: 42,
      phone: "(421)314-2288",
      access: "Admin",
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      age: 45,
      phone: "(422)982-6739",
      access: "Admin",
    },
    {
      id: 4,
      name: "Anya Stark",
      email: "anyastark@gmail.com",
      age: 16,
      phone: "(921)425-6742",
      access: "Manager",
    },
    {
      id: 5,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      age: 31,
      phone: "(421)445-1189",
      access: "Manager",
    },
    {
      id: 6,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      age: 150,
      phone: "(232)545-6483",
      access: "User",
    },
    {
      id: 7,
      name: "Ferrara Clifford",
      email: "ferraraclifford@gmail.com",
      age: 44,
      phone: "(543)124-0123",
      access: "User",
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      age: 36,
      phone: "(222)444-5555",
      access: "User",
    },
    {
      id: 9,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      age: 65,
      phone: "(444)555-6239",
      access: "User",
    },
  ];
  
  // field required (its value the same in rows array)
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'age', headerName: 'Age', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    {
      field: 'access', headerName: 'Access', flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box sx={{display:"flex", alignItems:"center", height:"100%"}}>
            <Box
              sx={{
                p: "5px",
                width: "99px",
                borderRadius: "3px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
    
                backgroundColor:
                  access === "Admin"
                    ? theme.palette.primary.dark
                    : access === "Manager"
                      ? theme.palette.secondary.dark
                      : "#3da58a",
              }}>
              {access === "Admin" && (
                <AdminPanelSettingsOutlined
                  sx={{ color: "#fff" }}
                  fontSize="small"
                />
              )}
    
              {access === "Manager" && (
                <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
              )}
    
              {access === "User" && (
                <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
              )}
    
              <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                {access}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
  ];
  return (
    <>
      <Box>
        <Header title={"TEAM"} subTitle={"Managing the Team Members"} />

        <Box sx={{ height: 600, mx: "auto", width:"100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
          />
        </Box>
      </Box>
    </>
  )
}
