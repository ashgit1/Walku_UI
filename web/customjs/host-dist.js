FusionCharts.ready(function () {
	
	 // Host Distribution all in one.
    var hostDistribution = new FusionCharts({
        type: 'stackedcolumn2d',
        renderAt: 'host-distribution',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "No of Host per Data Center",
                "subCaption": "Click on a Data Center to Drill down",
                "xaxisname": "Data Center",
                "yAxisName": "",
                "numberPrefix": "#",
                "paletteColors": "#1aaf5d,#FD0000",
                "bgColor": "#ffffff",
                "borderAlpha": "20",
                "showCanvasBorder": "0",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "legendBorderAlpha": "0",
                "legendShadow": "0",
                "valueFontColor": "#ffffff",                
                "showXAxisLine": "1",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",               
                "divLineIsDashed": "1",
                "showAlternateHGridColor": "0",
                "subcaptionFontBold": "0",
                "subcaptionFontSize": "14",
                "showHoverEffect":"1",
                "exportEnabled" :"1"
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "EDC"
                        },
                        {
                            "label": "NDC"
                        },
                        {
                            "label": "DAL"
                        },
                        {
                            "label": "DFW"
                        }
                    ]
                }
            ],
            "dataset": [
                {
                    "seriesname": "Host-Up",
                    "data": [
                        {
                            "value": "400",
                            "link": "newchart-json-EDCHosts"
                        },
                        {
                            "value": "600",
                            "link": "newchart-json-NDCHosts"
                        },
                        {
                            "value": "850",
                            "link": "newchart-json-DALHosts"
                        },
                        {
                            "value": "800",
                            "link": "home.html"
                        }
                    ]
                },
                {
                    "seriesname": "Host-Down",
                    "data": [
                        {
                            "value": "300"
                        },
                        {
                            "value": "200"
                        },
                        {
                            "value": "150"
                        },
                        {
                            "value": "100"
                        }
                    ]
                }
            ],
            "linkeddata": [{
        		"id": "EDCHosts",
        		"linkedchart": {
        			"chart": {
        				"caption": "No of OS across All EDC host",
        				"subcaption": "Click on a Vendor to drill-down",
        				"xaxisname": "Host",
        				"yaxisname": "Number",
        				"numberprefix": "#",
        				"showvalues": "0",
        				"bgcolor": "FFFFFF",
        				"plotgradientcolor": "",
        				"showalternatehgridcolor": "0",
        				"showplotborder": "0",
        				"divlinecolor": "CCCCCC",
        				"canvasborderalpha": "0"
        			},
        			"data": [{
        				"label": "Windows",
        				"value": "150",
        				"link": "newchart-json-EDCWindows",
        				"color": "008ee4"
        			}, {
        				"label": "UNIX",
        				"value": "200",
        				"link": "newchart-json-EDCUnix",
        				"color": "008ee4"
        			}, {
        				"label": "LINUX",
        				"value": "600",
        				"link": "newchart-json-EDCLinux",
        				"color": "008ee4"
        			}, {
        				"label": "MacOS",
        				"value": "50",
        				"link": "newchart-json-EDCMacos",
        				"color": "008ee4"
        			}],
        			"linkeddata": [{
        				"id": "EDCWindows",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for EDC Windows OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"showvalues": "0",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"label": "Window 7",
        						"value": "50",
        						"color": "008ee4"
        					}, {
        						"label": "Window XP",
        						"value": "25",
        						"color": "008ee4"
        					}, {
        						"label": "Windows 10",
        						"value": "75",
        						"color": "008ee4"
        					}]
        				}
        			}, {
        				"id": "EDCUnix",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for EDC Unix OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"showvalues": "0",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"label": "AIX",
        						"value": "35",
        						"color": "008ee4"
        					}, {
        						"label": "Debian",
        						"value": "100",
        						"color": "008ee4"
        					}, {
        						"label": "FreeBSD",
        						"value": "65",
        						"color": "008ee4"
        					}]
        				}
        			}, {
        				"id": "EDCLinux",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for EDC Linux OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"showvalues": "0",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"label": "Ubuntu",
        						"value": "200",
        						"color": "008ee4"
        					}, {
        						"label": "Redhat",
        						"value": "300",
        						"color": "008ee4"
        					}, {
        						"label": "Fedora",
        						"value": "100",
        						"color": "008ee4"
        					}]
        				}
        			}, {
        				"id": "EDCMacos",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for EDC Mac OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"showvalues": "0",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"label": "Mac OS X 10.1",
        						"value": "15",
        						"color": "008ee4"
        					}, {
        						"label": "Mac OS X 10.2",
        						"value": "5",
        						"color": "008ee4"
        					}, {
        						"label": "Mac OS 9",
        						"value": "30",
        						"color": "008ee4"
        					}]
        				}
        			}]
        		}
        	}, {
        		"id": "NDCHosts",
        		"linkedchart": {
        			"chart": {
        				"caption": "No of OS across All NDC host",
        				"subcaption": "Click on a Vendor to drill-down",
        				"xaxisname": "Host",
        				"yaxisname": "Number",
        				"numberprefix": "#",
        				"plotgradientcolor": "",
        				"showalternatehgridcolor": "0",
        				"showplotborder": "0",
        				"divlinecolor": "CCCCCC",
        				"canvasborderalpha": "0"
        			},
        			"data": [{
        				"label": "Windows",
        				"value": "150",
        				"link": "newchart-json-NDCWindows",
        				"color": "008ee4"
        			}, {
        				"label": "UNIX",
        				"value": "200",
        				"link": "newchart-json-NDCUnix",
        				"color": "008ee4"
        			}, {
        				"label": "LINUX",
        				"value": "600",
        				"link": "newchart-json-NDCLinux",
        				"color": "008ee4"
        			}, {
        				"label": "MacOS",
        				"value": "50",
        				"link": "newchart-json-NDCMacos",
        				"color": "008ee4"
        			}],
        			"linkeddata": [{
        				"id": "NDCWindows",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for NDC Windows OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"showvalues": "0",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"label": "Window 7",
        						"value": "50",
        						"color": "008ee4"
        					}, {
        						"label": "Window XP",
        						"value": "25",
        						"color": "008ee4"
        					}, {
        						"label": "Windows 10",
        						"value": "75",
        						"color": "008ee4"
        					}]
        				}
        			}, {
        				"id": "NDCUnix",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for NDC Unix OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"value": "35",
        						"color": "008ee4"
        					}, {
        						"label": "Debian",
        						"value": "100",
        						"color": "008ee4"
        					}, {
        						"label": "FreeBSD",
        						"value": "65",
        						"color": "008ee4"
        					}]
        				}
        			}, {
        				"id": "NDCLinux",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for NDC Linux OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"label": "Ubuntu",
        						"value": "200",
        						"color": "008ee4"
        					}, {
        						"label": "Redhat",
        						"value": "300",
        						"color": "008ee4"
        					}, {
        						"label": "Fedora",
        						"value": "100",
        						"color": "008ee4"
        					}]
        				}
        			}, {
        				"id": "NDCMacos",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for NDC Mac OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"label": "Mac OS X 10.1",
        						"value": "15",
        						"color": "008ee4"
        					}, {
        						"label": "Mac OS X 10.2",
        						"value": "5",
        						"color": "008ee4"
        					}, {
        						"label": "Mac OS 9",
        						"value": "30",
        						"color": "008ee4"
        					}]
        				}
        			}]
        		}
        	}, {
        		"id": "DALHosts",
        		"linkedchart": {
        			"chart": {
        				"caption": "No of OS across All DAL host",
        				"subcaption": "Click on a Vendor to drill-down",
        				"xaxisname": "Host",
        				"yaxisname": "Number",
        				"showvalues": "0",
        				"bgcolor": "FFFFFF",
        				"numberprefix": "#",
        				"plotgradientcolor": "",
        				"showalternatehgridcolor": "0",
        				"showplotborder": "0",
        				"divlinecolor": "CCCCCC",
        				"canvasborderalpha": "0"
        			},
        			"data": [{
        				"label": "Windows",
        				"value": "150",
        				"link": "newchart-json-DALWindows",
        				"color": "008ee4"
        			}, {
        				"label": "UNIX",
        				"value": "200",
        				"link": "newchart-json-DALUnix",
        				"color": "008ee4"
        			}, {
        				"label": "LINUX",
        				"value": "600",
        				"link": "newchart-json-DALLinux",
        				"color": "008ee4"
        			}, {
        				"label": "MacOS",
        				"value": "50",
        				"link": "newchart-json-DALMacos",
        				"color": "008ee4"
        			}],
        			"linkeddata": [{
        				"id": "DALWindows",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for DAL Windows OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"showvalues": "0",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"label": "Window 7",
        						"value": "50",
        						"color": "008ee4"
        					}, {
        						"label": "Window XP",
        						"value": "25",
        						"color": "008ee4"
        					}, {
        						"label": "Windows 10",
        						"value": "75",
        						"color": "008ee4"
        					}]
        				}
        			}, {
        				"id": "DALUnix",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for DAL Unix OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"showvalues": "0",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"label": "AIX",
        						"value": "35",
        						"color": "008ee4"
        					}, {
        						"label": "Debian",
        						"value": "100",
        						"color": "008ee4"
        					}, {
        						"label": "FreeBSD",
        						"value": "65",
        						"color": "008ee4"
        					}]
        				}
        			}, {
        				"id": "DALLinux",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for DAL Linux OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"showvalues": "0",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"label": "Ubuntu",
        						"value": "200",
        						"color": "008ee4"
        					}, {
        						"label": "Redhat",
        						"value": "300",
        						"color": "008ee4"
        					}, {
        						"label": "Fedora",
        						"value": "100",
        						"color": "008ee4"
        					}]
        				}
        			}, {
        				"id": "DALMacos",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for DAL Mac OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"showvalues": "0",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"label": "Mac OS X 10.1",
        						"value": "15",
        						"color": "008ee4"
        					}, {
        						"label": "Mac OS X 10.2",
        						"value": "5",
        						"color": "008ee4"
        					}, {
        						"label": "Mac OS 9",
        						"value": "30",
        						"color": "008ee4"
        					}]
        				}
        			}]
        		}
        	}, {
        		"id": "DFWHosts",
        		"linkedchart": {
        			"chart": {
        				"caption": "No of OS across All DFW host",
        				"subcaption": "Click on a Vendor to drill-down",
        				"xaxisname": "Host",
        				"yaxisname": "Number",
        				"numberprefix": "#",
        				"showvalues": "0",
        				"bgcolor": "FFFFFF",
        				"xaxisname": "Year",
        				"plotgradientcolor": "",
        				"showalternatehgridcolor": "0",
        				"showplotborder": "0",
        				"divlinecolor": "CCCCCC",
        				"canvasborderalpha": "0"
        			},
        			"data": [{
        				"label": "Windows",
        				"value": "150",
        				"link": "newchart-json-DFWWindows",
        				"color": "008ee4"
        			}, {
        				"label": "UNIX",
        				"value": "200",
        				"link": "newchart-json-DFWUnix",
        				"color": "008ee4"
        			}, {
        				"label": "LINUX",
        				"value": "600",
        				"link": "newchart-json-DFWLinux",
        				"color": "008ee4"
        			}, {
        				"label": "MacOS",
        				"value": "50",
        				"link": "newchart-json-DFWMacos",
        				"color": "008ee4"
        			}],
        			"linkeddata": [{
        				"id": "DFWWindows",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for DFW Windows OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"showvalues": "0",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"label": "Window 7",
        						"value": "50",
        						"color": "008ee4"
        					}, {
        						"label": "Window XP",
        						"value": "25",
        						"color": "008ee4"
        					}, {
        						"label": "Windows 10",
        						"value": "75",
        						"color": "008ee4"
        					}]
        				}
        			}, {
        				"id": "DFWUnix",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for DFW Unix OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"showvalues": "0",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"label": "AIX",
        						"value": "35",
        						"color": "008ee4"
        					}, {
        						"label": "Debian",
        						"value": "100",
        						"color": "008ee4"
        					}, {
        						"label": "FreeBSD",
        						"value": "65",
        						"color": "008ee4"
        					}]
        				}
        			}, {
        				"id": "DFWLinux",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for DFW Linux OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"showvalues": "0",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"label": "Ubuntu",
        						"value": "200",
        						"color": "008ee4"
        					}, {
        						"label": "Redhat",
        						"value": "300",
        						"color": "008ee4"
        					}, {
        						"label": "Fedora",
        						"value": "100",
        						"color": "008ee4"
        					}]
        				}
        			}, {
        				"id": "DFWMacos",
        				"linkedchart": {
        					"chart": {
        						"caption": "No of Vendors for DFW Mac OS",
        						"subcaption": "Vendors",
        						"xaxisname": "Vendor Name",
        						"yaxisname": "Number",
        						"numberprefix": "#",
        						"showvalues": "0",
        						"bgcolor": "FFFFFF",
        						"plotgradientcolor": "",
        						"showalternatehgridcolor": "0",
        						"showplotborder": "0",
        						"divlinecolor": "CCCCCC",
        						"canvasborderalpha": "0"
        					},
        					"data": [{
        						"label": "Mac OS X 10.1",
        						"value": "15",
        						"color": "008ee4"
        					}, {
        						"label": "Mac OS X 10.2",
        						"value": "5",
        						"color": "008ee4"
        					}, {
        						"label": "Mac OS 9",
        						"value": "30",
        						"color": "008ee4"
        					}]
        				}
        			}]
        		}
        	}]
        }
    	
    }).render();
	
})