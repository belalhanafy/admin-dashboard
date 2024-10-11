import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha, Typography, Box, Avatar } from "@mui/material";
import { Card, CardMedia } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useTheme } from '@mui/material';
import logo from "../../assets/ko-high-resolution-logo-transparent.png";
import avatar from '../../assets/images/default-profile.png'

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(["width", "margin"], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export default function NavBar({ open, handleDrawerOpen,toggleMode }) {
    const theme = useTheme();
    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={[
                        {
                            marginRight: 5,
                        },
                        open && { display: "none" },
                    ]}
                >
                    <MenuIcon />
                </IconButton>
                {!open && <>
                    <Card sx={{ maxWidth: 345, mr: "10px" }}>
                        <CardMedia
                            component="img"
                            height="40"
                            image={logo}
                            alt="Example Image"
                            />
                    </Card>
                    <Typography variant="h6" noWrap component="div">
                        KoDashboard
                    </Typography>
                </>
                }

                <Search >
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Search>
                <Box sx={{ flexGrow: 1 }} />

                <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <IconButton color="inherit" size="medium" onClick={() => {toggleMode()}}>
                    {theme.palette.mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                    <IconButton color="inherit" size="medium">
                        <NotificationsActiveOutlinedIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton color="inherit" size="medium">
                        <SettingsOutlinedIcon fontSize="inherit" />
                    </IconButton>
                    <Avatar sx={{border: '2px solid #000'}} alt="Remy Sharp" src={avatar} />

                </Stack>
            </Toolbar>
        </AppBar>
    );
}
