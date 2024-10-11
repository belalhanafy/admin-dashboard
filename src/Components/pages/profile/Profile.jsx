import { Alert, Box, Button, Snackbar, TextField } from '@mui/material'
import React from 'react'
import Header from '../../shared/Header'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm } from "react-hook-form"

const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
export default function Profile() {
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleClick = () => {
        setOpen(true);
      };
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        handleClick()
        console.log(data);
        
    }

    const [role, setRole] = React.useState('user');

    const handleChange = (event) => {
        setRole(event.target.value);
    };
    return (
        <Box>
            <Header title={"CREATE USER"} subTitle={"Create a New User Profile"} />

            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                noValidate
                autoComplete="off"
            >

                <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                    <TextField sx={{ flex: 1 }} id="outlined-basic" label="First Name" variant="outlined" helperText={errors.firstName && "This field is reqired and minimum 3 character."} {...register("firstName", { required: true, minLength: 3 })} error={errors.firstName} />
                    <TextField sx={{ flex: 1 }} id="outlined-basic" label="Last Name" variant="outlined" helperText={errors.lastName && "This field is reqired and minimum 3 character."} {...register("lastName", { required: true, minLength: 3 })} error={errors.lastName} />
                </Box>


                <TextField id="outlined-basic" label="Email" variant="outlined" helperText={errors.email && "This field is reqired and write a valid email contain @"} {...register("email", { required: true, pattern: regEmail })} error={errors.email} />
                <TextField id="outlined-basic" label="Contact Number" variant="outlined" helperText={errors.phone && "enter a valid phone number"} {...register("phone", { required: true, pattern: phoneRegExp })} error={errors.phone} />
                <TextField id="outlined-basic" label="Address" variant="outlined" {...register("address 1")} />


                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={role}
                        label="Role"
                        onChange={handleChange}
                    >
                        <MenuItem value={"admin"}>Admin</MenuItem>
                        <MenuItem value={"manager"}>Manager</MenuItem>
                        <MenuItem value={"user"}>User</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{ textAlign: "right" }}>
                    <Button type='submit' variant="contained">Create New User</Button>
                </Box>
            </Box>
            <Snackbar anchorOrigin={{ vertical:'top', horizontal:'right' }} open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Account Created Successfully !
                </Alert>
            </Snackbar>
        </Box>
    )
}
