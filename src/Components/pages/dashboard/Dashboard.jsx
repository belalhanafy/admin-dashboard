import React from "react";
import Header from "../../shared/Header";
import { Box, Button, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StateCard from "./StateCard";
import LineChart from "../line/LineChart";
import { DownloadOutlined } from "@mui/icons-material";
import PieChart from "../pie/PieChart";
import BarChart from "../bar/BarChart";
import GeoChart from "../geography/GeoChart";
const data1 = [
    {
        id: "javascript",
        label: "javascript",
        value: 40,
        color: "hsl(111, 90%, 90%)",
    },
    {
        id: "sass",
        label: "sass",
        value: 60,
        color: "hsl(22, 90%, 90%)",
    },
];

const data2 = [
    {
        id: "javascript",
        label: "javascript",
        value: 70,
        color: "hsl(111, 90%, 90%)",
    },
    {
        id: "sass",
        label: "sass",
        value: 30,
        color: "hsl(22, 90%, 90%)",
    },
];

const data3 = [
    {
        id: "javascript",
        label: "javascript",
        value: 44,
        color: "hsl(111, 90%, 90%)",
    },
    {
        id: "sass",
        label: "sass",
        value: 66,
        color: "hsl(22, 90%, 90%)",
    },
];

const data4 = [
    {
        id: "javascript",
        label: "javascript",
        value: 77,
        color: "hsl(111, 90%, 90%)",
    },
    {
        id: "sass",
        label: "sass",
        value: 33,
        color: "hsl(22, 90%, 90%)",
    },
];



const Transactions = [
    {
        txId: "01e4dsaewf",
        user: "johndoe",
        date: "2021-09-01",
        cost: "43.91",
    },
    {
        txId: "0315dsaaef",
        user: "jackdower",
        date: "2022-04-01",
        cost: "133.45",
    },
    {
        txId: "01e4dsaef",
        user: "aberdohnny",
        date: "2021-09-01",
        cost: "43.95",
    },
    {
        txId: "51034szvfew",
        user: "goodmanave",
        date: "2022-11-05",
        cost: "200.95",
    },
    {
        txId: "0a123sb",
        user: "stevebower",
        date: "2022-11-02",
        cost: "13.55",
    },
    {
        txId: "01e4dsa",
        user: "aberdohnny",
        date: "2021-09-01",
        cost: "43.95",
    },
    {
        txId: "120s51a",
        user: "wootzifer",
        date: "2019-04-15",
        cost: "24.20",
    },
    {
        txId: "0315dsaa",
        user: "jackdower",
        date: "2022-04-01",
        cost: "133.49",
    },
];
export default function Dashboard() {
    const theme = useTheme();
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Box>
                <Header isDashboard={true} title="DASHBOARD" subTitle="Welcome to your dashboard" />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button sx={{ display: "flex", gap: "5px", alignItems: "center", mb: "20px" }} variant="contained">
                    <DownloadRoundedIcon />
                    Download Reports
                </Button>
            </Box>
            
            <Box sx={{flexWrap: "wrap", display: "flex", gap: "10px" }}>
                <StateCard
                    icon={<EmailIcon
                        sx={{ fontSize: "23px", color: theme.palette.primary.main }} />}
                    number={"12,361"}
                    title={"Emails Sent"}
                    increase={"+14%"}
                    data={data1} scheme={"nivo"} />

                <StateCard
                    icon={
                        <PointOfSaleIcon
                            sx={{ fontSize: "23px", color: theme.palette.primary.main }}
                        />
                    }
                    number={"431,225"}
                    title={"Sales obtained"}
                    increase={"+21%"}
                    data={data2}
                    scheme={"category10"}
                />

                <StateCard
                    icon={
                        <PersonAddIcon
                            sx={{ fontSize: "23px", color: theme.palette.primary.main }}
                        />
                    }
                    number={"32,441"}
                    title={"New Clients"}
                    increase={"+5%"}
                    data={data3}
                    scheme={"accent"}
                />
                <StateCard
                    icon={
                        <TrafficIcon
                            sx={{ fontSize: "23px", color: theme.palette.primary.main }}
                        />
                    }
                    number={"1,325,134"}
                    title={"Traffic Received"}
                    increase={"+43%"}
                    data={data4}
                    scheme={"dark2"}
                />
            </Box>

            <Box sx={{ width: "100%", flexWrap: "wrap", display: "flex", gap: "10px", }}>
                <Paper sx={{ width: 800, flexGrow: 1, minWidth: "400px", padding: "10px 12px" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <Box>
                            <Typography
                                color={theme.palette.secondary.main}
                                mb={1}
                                variant="h5"
                                fontWeight={"bold"}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography variant="h6" mb={1}>
                                $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{ mr: 3 }}>
                                <DownloadOutlined />
                            </IconButton>
                        </Box>
                    </Box>
                    <LineChart isDahboard={true} />
                </Paper>
                <Box
                    sx={{
                        overflow: "auto",
                        borderRadius: "4px",
                        minWidth: "280px",
                        maxHeight: 415,
                        flexGrow: 1,
                        pr: "5px"
                    }}
                >
                    <Paper>
                        <Typography
                            color={theme.palette.secondary.main}
                            fontWeight={"bold"}
                            p={1.2}
                            variant="h5"
                        >
                            Recent Transactions
                        </Typography>
                    </Paper>

                    {Transactions.map((item) => {
                        return (
                            <Paper
                                sx={{
                                    mt: 0.4,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Box p={1.2}>
                                    <Typography variant="body1">{item.txId}</Typography>
                                    <Typography variant="body2">{item.user} </Typography>
                                </Box>
                                <Typography variant="body1">{item.date} </Typography>

                                <Typography
                                    borderRadius={1.4}
                                    p={1}
                                    mr={1.2}
                                    bgcolor={theme.palette.error.main}
                                    color={theme.palette.getContrastText(theme.palette.error.main)}
                                    variant="body2"
                                >
                                    ${item.cost}
                                </Typography>
                            </Paper>
                        );
                    })}
                </Box>
            </Box>

            <Box sx={{ width: "100%", flexWrap: "wrap", display: "flex", gap: "10px", }}>
                <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%", padding: "10px 12px" }}>
                    <Typography
                        color={theme.palette.secondary.main}
                        mb={5}
                        variant="h5"
                        fontWeight={"bold"}
                    >
                        Campaign
                    </Typography>

                    <PieChart isDahboard={true} />
                    <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
                        $48,352 revenue generated
                    </Typography>
                    <Typography variant="body2" px={0.7} pb={3} align="center">
                        Includes extra misc expenditures and costs
                    </Typography>
                </Paper>

                <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%", padding: "10px 12px" }}>
                    <Typography
                        color={theme.palette.secondary.main}
                        mb={5}
                        variant="h5"
                        fontWeight={"bold"}
                    >
                        Sales Quantity
                    </Typography>
                    <BarChart isDahboard={true} />
                </Paper>

                <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%", padding: "10px 12px" }}>
                    <GeoChart isDahboard={true} />
                </Paper>
            </Box>
        </Box>
    );
}