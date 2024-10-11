import { Box, useTheme } from '@mui/material'
import React from 'react'
import { ResponsivePie } from '@nivo/pie'
const data = [
    {
        id: "React",
        label: "React",
        value: 272,
        color: "hsl(107, 70%, 50%)",
    },
    {
        id: "stylus",
        label: "stylus",
        value: 543,
        color: "hsl(64, 70%, 50%)",
    },
    {
        id: "sass",
        label: "sass",
        value: 401,
        color: "hsl(41, 70%, 50%)",
    },
    {
        id: "haskell",
        label: "haskell",
        value: 434,
        color: "hsl(172, 70%, 50%)",
    },
    {
        id: "nue",
        label: "nue",
        value: 333,
        color: "hsl(219, 70%, 50%)",
    },
];
export default function PieChart({ isDahboard = false }) {
    const theme = useTheme()
    return (
        <Box sx={{ height: isDahboard ? "200px" : "80vh" }}>
            <ResponsivePie
                theme={{
                    textColor: theme.palette.text.primary,
                    fontSize: 11,
                    axis: {
                        domain: {
                            line: {
                                stroke: theme.palette.divider,
                                strokeWidth: 1,
                            },
                        },
                        legend: {
                            text: {
                                fontSize: 12,
                                fill: theme.palette.text.primary,
                            },
                        },
                        ticks: {
                            line: {
                                stroke: theme.palette.info.main,
                                strokeWidth: 2
                            },
                            text: {
                                fontSize: 11,
                                fill: theme.palette.text.secondary,
                            },
                        },
                    },
                    grid: {
                        line: {
                            stroke: theme.palette.text.secondary,
                            strokeWidth: isDahboard?0:1,
                        },
                    },
                    legends: {
                        title: {
                            text: {
                                fontSize: 11,
                                fill: theme.palette.text.primary,
                            },
                        },
                        text: {
                            fontSize: 11,
                            fill: theme.palette.text.primary,
                        },
                        ticks: {
                            line: {},
                            text: {
                                fontSize: 10,
                                fill: theme.palette.text.primary,
                            },
                        },
                    },
                    annotations: {
                        text: {
                            fontSize: 13,
                            fill: theme.palette.text.primary,
                            outlineWidth: 2,
                            outlineColor: "#ffffff",
                            outlineOpacity: 1,
                        },
                        link: {
                            stroke: "#000000",
                            strokeWidth: 1,
                            outlineWidth: 2,
                            outlineColor: "#ffffff",
                            outlineOpacity: 1,
                        },
                        outline: {
                            stroke: "#000000",
                            strokeWidth: 2,
                            outlineWidth: 2,
                            outlineColor: "#ffffff",
                            outlineOpacity: 1,
                        },
                        symbol: {
                            fill: "#000000",
                            outlineWidth: 2,
                            outlineColor: "#ffffff",
                            outlineOpacity: 1,
                        },
                    },
                    tooltip: {
                        container: {
                            background: theme.palette.background.default,
                            color: theme.palette.text.primary,
                            fontSize: 12,
                        },
                        basic: {},
                        chip: {},
                        table: {},
                        tableCell: {},
                        tableCellValue: {},
                    },
                }}
                data={data}
                margin={
                    isDahboard
                        ? { top: 10, right: 0, bottom: 10, left: 0 }
                        : { top: 40, right: 80, bottom: 80, left: 80 }
                }
                innerRadius={isDahboard ? 0.8 : 0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: 'yellow_green_blue' }}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={theme.palette.text.primary}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                enableArcLabels={isDahboard ? false : true}
                enableArcLinkLabels={isDahboard ? false : true}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={isDahboard
                    ? []
                    :[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: theme.palette.text.primary,
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#3788d8',
                                }
                            }
                        ]
                    }
                ]}
            />
        </Box>
    )
}
