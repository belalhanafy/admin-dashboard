import React, { useEffect, useState } from 'react'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Card, CardMedia, Fade, styled, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import FormatIndentIncreaseOutlinedIcon from '@mui/icons-material/FormatIndentIncreaseOutlined';
import FormatIndentDecreaseOutlinedIcon from '@mui/icons-material/FormatIndentDecreaseOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from "../../assets/ko-high-resolution-logo-transparent.png";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);
const topArr = [
    { "text": "Dashboard", "icon": <DashboardIcon />, "path": "/" },
    { "text": "Manage Team", "icon": <Diversity3Icon />, "path": "/team" },
    { "text": "Contacts Information", "icon": <ContactsOutlinedIcon />, "path": "/contacts" },
    { "text": 'Invoicces Balances', "icon": <ReceiptOutlinedIcon />, "path": "/invoices" },
]
const midArr = [
    { "text": "Profile Form", "icon": <AccountBoxOutlinedIcon />, "path": "/profile" },
    { "text": "Calender", "icon": <CalendarMonthOutlinedIcon />, "path": "/calender" },
    { "text": "FAQ page", "icon": <HelpCenterOutlinedIcon />, "path": "/faq" },
]
const lastArr = [
    { "text": "Bar Chart", "icon": <BarChartOutlinedIcon />, "path": "/bar" },
    { "text": "Pie Charts", "icon": <DonutLargeOutlinedIcon />, "path": "/pie" },
    { "text": "Line Charts", "icon": <TimelineOutlinedIcon />, "path": "/line" },
    { "text": "Geography Chart", "icon": <MapOutlinedIcon />, "path": "/geography" },
]
export default function SideBar({ open, handleDrawerClose }) {


    const [currLocation, setCurrLocation] = useState('')
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        setCurrLocation(path);
    }, [location])

    const navigate = useNavigate();

    const theme = useTheme();

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
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
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <FormatIndentIncreaseOutlinedIcon /> : <FormatIndentDecreaseOutlinedIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List sx={{ padding: "10px" }}>
                {topArr.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block', py: "2px" }}>
                        {!open ? (
                            <Tooltip
                                title={item.text}
                                arrow
                                placement="right"
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                            >
                                <ListItemButton
                                    onClick={() => {
                                        navigate(item.path);
                                    }}
                                    sx={[
                                        {
                                            minHeight: 48,
                                            px: 1.2,
                                            borderRadius: "12px",
                                            backgroundColor: currLocation === item.path ? 'primary.main' : 'transparent',
                                            '&:hover': {
                                                backgroundColor: currLocation !== item.path ? 'grey.400' : 'primary.main', // Change background on hover
                                            },
                                        },
                                        open
                                            ? {
                                                justifyContent: 'initial',
                                            }
                                            : {
                                                justifyContent: 'center',
                                            },
                                    ]}
                                >
                                    <ListItemIcon
                                        sx={[
                                            {
                                                minWidth: 0,
                                                justifyContent: 'center',
                                            },
                                            open
                                                ? {
                                                    mr: 1.5,
                                                }
                                                : {
                                                    mr: 'auto',
                                                },
                                        ]}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        sx={[
                                            open
                                                ? {
                                                    opacity: 1,
                                                }
                                                : {
                                                    opacity: 0,
                                                },
                                        ]}
                                    />
                                </ListItemButton>
                            </Tooltip>
                        ) : (
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path);
                                }}
                                sx={[
                                    {
                                        minHeight: 48,
                                        px: 1.2,
                                        borderRadius: "12px",
                                        backgroundColor: currLocation === item.path ? 'primary.main' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: currLocation !== item.path ? 'grey.400' : 'primary.main', // Change background on hover
                                        },
                                    },
                                    open
                                        ? {
                                            justifyContent: 'initial',
                                        }
                                        : {
                                            justifyContent: 'center',
                                        },
                                ]}
                            >
                                <ListItemIcon
                                    sx={[
                                        {
                                            minWidth: 0,
                                            justifyContent: 'center',
                                        },
                                        open
                                            ? {
                                                mr: 1.5,
                                            }
                                            : {
                                                mr: 'auto',
                                            },
                                    ]}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={[
                                        open
                                            ? {
                                                opacity: 1,
                                            }
                                            : {
                                                opacity: 0,
                                            },
                                    ]}
                                />
                            </ListItemButton>
                        )}
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List sx={{ padding: "10px" }}>
                {midArr.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block', py: "2px" }}>
                        {!open ? (
                            <Tooltip
                                title={item.text}
                                arrow
                                placement="right"
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                            >
                                <ListItemButton
                                    onClick={() => {
                                        navigate(item.path);
                                    }}
                                    sx={[
                                        {
                                            minHeight: 48,
                                            px: 1.2,
                                            borderRadius: "12px",
                                            backgroundColor: currLocation === item.path ? 'primary.main' : 'transparent',
                                            '&:hover': {
                                                backgroundColor: currLocation !== item.path ? 'grey.400' : 'primary.main', // Change background on hover
                                            },
                                        },
                                        open
                                            ? {
                                                justifyContent: 'initial',
                                            }
                                            : {
                                                justifyContent: 'center',
                                            },
                                    ]}
                                >
                                    <ListItemIcon
                                        sx={[
                                            {
                                                minWidth: 0,
                                                justifyContent: 'center',
                                            },
                                            open
                                                ? {
                                                    mr: 1.5,
                                                }
                                                : {
                                                    mr: 'auto',
                                                },
                                        ]}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        sx={[
                                            open
                                                ? {
                                                    opacity: 1,
                                                }
                                                : {
                                                    opacity: 0,
                                                },
                                        ]}
                                    />
                                </ListItemButton>
                            </Tooltip>
                        ) : (
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path);
                                }}
                                sx={[
                                    {
                                        minHeight: 48,
                                        px: 1.2,
                                        borderRadius: "12px",
                                        backgroundColor: currLocation === item.path ? 'primary.main' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: currLocation !== item.path ? 'grey.400' : 'primary.main', // Change background on hover
                                        },
                                    },
                                    open
                                        ? {
                                            justifyContent: 'initial',
                                        }
                                        : {
                                            justifyContent: 'center',
                                        },
                                ]}
                            >
                                <ListItemIcon
                                    sx={[
                                        {
                                            minWidth: 0,
                                            justifyContent: 'center',
                                        },
                                        open
                                            ? {
                                                mr: 1.5,
                                            }
                                            : {
                                                mr: 'auto',
                                            },
                                    ]}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={[
                                        open
                                            ? {
                                                opacity: 1,
                                            }
                                            : {
                                                opacity: 0,
                                            },
                                    ]}
                                />
                            </ListItemButton>
                        )}
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List sx={{ padding: "10px" }}>
                {lastArr.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block', py: "2px" }}>
                        {!open ? (
                            <Tooltip
                                title={item.text}
                                arrow
                                placement="right"
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                            >
                                <ListItemButton
                                    onClick={() => {
                                        navigate(item.path);
                                    }}
                                    sx={[
                                        {
                                            minHeight: 48,
                                            px: 1.2,
                                            borderRadius: "12px",
                                            backgroundColor: currLocation === item.path ? 'primary.main' : 'transparent',
                                            '&:hover': {
                                                backgroundColor: currLocation !== item.path ? 'grey.400' : 'primary.main', // Change background on hover
                                            },
                                        },
                                        open
                                            ? {
                                                justifyContent: 'initial',
                                            }
                                            : {
                                                justifyContent: 'center',
                                            },
                                    ]}
                                >
                                    <ListItemIcon
                                        sx={[
                                            {
                                                minWidth: 0,
                                                justifyContent: 'center',
                                            },
                                            open
                                                ? {
                                                    mr: 1.5,
                                                }
                                                : {
                                                    mr: 'auto',
                                                },
                                        ]}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        sx={[
                                            open
                                                ? {
                                                    opacity: 1,
                                                }
                                                : {
                                                    opacity: 0,
                                                },
                                        ]}
                                    />
                                </ListItemButton>
                            </Tooltip>
                        ) : (
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path);
                                }}
                                sx={[
                                    {
                                        minHeight: 48,
                                        px: 1.2,
                                        borderRadius: "12px",
                                        backgroundColor: currLocation === item.path ? 'primary.main' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: currLocation !== item.path ? 'grey.400' : 'primary.main', // Change background on hover
                                        },
                                    },
                                    open
                                        ? {
                                            justifyContent: 'initial',
                                        }
                                        : {
                                            justifyContent: 'center',
                                        },
                                ]}
                            >
                                <ListItemIcon
                                    sx={[
                                        {
                                            minWidth: 0,
                                            justifyContent: 'center',
                                        },
                                        open
                                            ? {
                                                mr: 1.5,
                                            }
                                            : {
                                                mr: 'auto',
                                            },
                                    ]}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={[
                                        open
                                            ? {
                                                opacity: 1,
                                            }
                                            : {
                                                opacity: 0,
                                            },
                                    ]}
                                />
                            </ListItemButton>
                        )}
                    </ListItem>
                ))}
            </List>

        </Drawer>
    )
}
