FusionCharts.ready(function () {

        var cpuChart = new FusionCharts({
        "type": "heatmap",
        "renderAt": "cpu-container",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource": {
        	"chart": {
                "caption": "CPU Utilization % by time over the week",
                "bgcolor": "FFFFFF",
                "canvasborderthickness": "0",
                "labeldisplay": "WRAP",
                "plotbordercolor": "FFFFFF",
                "basefontcolor": "FFFFFF",
                "outcnvbasefontcolor": "333333",
                "showvalues": "0",
                "captionpadding": "5",
                "legendpadding": "0",
                "tooltipcolor": "333333",
                "canvasborderalpha": "0",
                "legendshadow": "0",
                "legendborderalpha": "0",
                "xaxisname": "Time of the day (hrs)",
                "showborder": "0"
            },
            "rows": {
                "row": [
                    {
                        "id": "Mon"
                    },
                    {
                        "id": "Tue"
                    },
                    {
                        "id": "Wed"
                    },
                    {
                        "id": "Thu"
                    },
                    {
                        "id": "Fri"
                    }
                ]
            },
            "columns": {
                "column": [
                    {
                        "id": "0"
                    },
                    {
                        "id": "1"
                    },
                    {
                        "id": "2"
                    },
                    {
                        "id": "3"
                    },
                    {
                        "id": "4"
                    },
                    {
                        "id": "5"
                    },
                    {
                        "id": "6"
                    },
                    {
                        "id": "7"
                    },
                    {
                        "id": "8"
                    },
                    {
                        "id": "9"
                    },
                    {
                        "id": "10"
                    },
                    {
                        "id": "11"
                    },
                    {
                        "id": "12"
                    },
                    {
                        "id": "13"
                    },
                    {
                        "id": "14"
                    },
                    {
                        "id": "15"
                    },
                    {
                        "id": "16"
                    },
                    {
                        "id": "17"
                    },
                    {
                        "id": "18"
                    },
                    {
                        "id": "19"
                    },
                    {
                        "id": "20"
                    },
                    {
                        "id": "21"
                    },
                    {
                        "id": "22"
                    },
                    {
                        "id": "23"
                    }
                ]
            },
            "dataset": [
                {
                    "data": [
                        {
                            "rowid": "Mon",
                            "columnid": "0",
                            "value": "2"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "1",
                            "value": "4"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "2",
                            "value": "5"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "3",
                            "value": "5"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "4",
                            "value": "3"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "5",
                            "value": "3"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "6",
                            "value": "4"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "7",
                            "value": "5"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "8",
                            "value": "5"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "9",
                            "value": "6"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "10",
                            "value": "8"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "11",
                            "value": "12"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "12",
                            "value": "14"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "13",
                            "value": "23"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "14",
                            "value": "27"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "15",
                            "value": "32"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "16",
                            "value": "46"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "17",
                            "value": "19"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "18",
                            "value": "23"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "19",
                            "value": "25"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "20",
                            "value": "19"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "21",
                            "value": "16"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "22",
                            "value": "8"
                        },
                        {
                            "rowid": "Mon",
                            "columnid": "23",
                            "value": "7"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "0",
                            "value": "5"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "1",
                            "value": "7"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "2",
                            "value": "11"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "3",
                            "value": "3"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "4",
                            "value": "4"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "5",
                            "value": "2"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "6",
                            "value": "1"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "7",
                            "value": "9"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "8",
                            "value": "11"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "9",
                            "value": "16"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "10",
                            "value": "23"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "11",
                            "value": "34"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "12",
                            "value": "45"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "13",
                            "value": "68"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "14",
                            "value": "47"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "15",
                            "value": "52"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "16",
                            "value": "26"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "17",
                            "value": "49"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "18",
                            "value": "33"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "19",
                            "value": "28"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "20",
                            "value": "12"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "21",
                            "value": "10"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "22",
                            "value": "3"
                        },
                        {
                            "rowid": "Tue",
                            "columnid": "23",
                            "value": "2"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "0",
                            "value": "4"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "1",
                            "value": "6"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "2",
                            "value": "8"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "3",
                            "value": "12"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "4",
                            "value": "7"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "5",
                            "value": "10"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "6",
                            "value": "12"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "7",
                            "value": "14"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "8",
                            "value": "18"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "9",
                            "value": "20"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "10",
                            "value": "27"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "11",
                            "value": "33"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "12",
                            "value": "37"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "13",
                            "value": "43"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "14",
                            "value": "49"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "15",
                            "value": "54"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "16",
                            "value": "67"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "17",
                            "value": "75"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "18",
                            "value": "87"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "19",
                            "value": "72"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "20",
                            "value": "52"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "21",
                            "value": "23"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "22",
                            "value": "12"
                        },
                        {
                            "rowid": "Wed",
                            "columnid": "23",
                            "value": "4"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "0",
                            "value": "2"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "1",
                            "value": "3"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "2",
                            "value": "3"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "3",
                            "value": "5"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "4",
                            "value": "5"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "5",
                            "value": "7"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "6",
                            "value": "10"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "7",
                            "value": "9"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "8",
                            "value": "11"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "9",
                            "value": "12"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "10",
                            "value": "15"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "11",
                            "value": "23"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "12",
                            "value": "25"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "13",
                            "value": "28"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "14",
                            "value": "17"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "15",
                            "value": "22"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "16",
                            "value": "20"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "17",
                            "value": "33"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "18",
                            "value": "35"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "19",
                            "value": "20"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "20",
                            "value": "14"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "21",
                            "value": "6"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "22",
                            "value": "3"
                        },
                        {
                            "rowid": "Thu",
                            "columnid": "23",
                            "value": "1"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "0",
                            "value": "2"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "1",
                            "value": "4"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "2",
                            "value": "7"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "3",
                            "value": "11"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "4",
                            "value": "14"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "5",
                            "value": "12"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "6",
                            "value": "8"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "7",
                            "value": "12"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "8",
                            "value": "14"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "9",
                            "value": "16"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "10",
                            "value": "18"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "11",
                            "value": "20"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "12",
                            "value": "25"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "13",
                            "value": "27"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "14",
                            "value": "17"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "15",
                            "value": "16"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "16",
                            "value": "14"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "17",
                            "value": "12"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "18",
                            "value": "14"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "19",
                            "value": "14"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "20",
                            "value": "12"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "21",
                            "value": "10"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "22",
                            "value": "3"
                        },
                        {
                            "rowid": "Fri",
                            "columnid": "23",
                            "value": "2"
                        }
                    ]
                }
            ],
            "colorrange": {
                "gradient": "1",
                "minvalue": "0",
                "code": "a4c93f",
                "startlabel": "",
                "endlabel": "Very High",
                "color": [
                    {
                        "minvalue": "0",
                        "maxvalue": "20",
                        "code": "a4c93f",
                        "label": "Average",
                        "alpha": "40"
                    },
                    {
                        "code": "e44a00",
                        "minvalue": "20",
                        "maxvalue": "100",
                        "alpha": "40"
                    }
                ]
            } 
        }
    }).render();
})