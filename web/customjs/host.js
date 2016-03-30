FusionCharts.ready(function () {

	// host chart
        var hostChart = new FusionCharts({
        	"type" : "column2d",
			"renderAt" : "hostContainer",
			"width" : "500",
			"height" : "300",
			"dataFormat" : "json",
			"dataSource" : {
				"chart" : {
					"caption" : "No of host per Data Center",
					"subcaption" : "Click on a Data Center to drill-down",
					"numberprefix" : "#",
					"showvalues" : "0",
					"bgcolor" : "FFFFFF",
					"xaxisname" : "Data Center",
					"plotgradientcolor" : "",
					"showalternatehgridcolor" : "0",
					"showplotborder" : "0",
					"divlinecolor" : "CCCCCC",
					"canvasborderalpha" : "0",
                    "exportEnabled" :"1"
				},
				"data" : [ {
					"label" : "EDC",
					"value" : "700",
					"link" : "newchart-xml-EDCHosts",
					"color" : "008ee4"
				}, {
					"label" : "NDC",
					"value" : "800",
					"link" : "newchart-xml-NDCHosts",
					"color" : "6baa01"
				}, {
					"label" : "DAL",
					"value" : "1000",
					"link" : "newchart-xml-DALHosts",
					"color" : "f8bd19"
				}, {
					"label" : "DFW",
					"value" : "900",
					"link" : "newchart-xml-DFWHosts",
					"color" : "e44a00"
				} ],
				"linkeddata" : [
						{
							"id" : "EDCHosts",
							"linkedchart" : {
								"chart" : {
									"caption" : "No of OS across All EDC host",
									"subcaption" : "Click on a Vendor to drill-down",
									"xaxisname" : "Host",
									"yaxisname" : "Number",
									"numberprefix" : "#",
									"showvalues" : "0",
									"bgcolor" : "FFFFFF",
									"plotgradientcolor" : "",
									"showalternatehgridcolor" : "0",
									"showplotborder" : "0",
									"divlinecolor" : "CCCCCC",
									"canvasborderalpha" : "0",
				                    "exportEnabled" :"1"
								},
								"data" : [
										{
											"label" : "Windows",
											"value" : "150",
											"link" : "newchart-xml-EDCWindows",
											"color" : "008ee4"
										},
										{
											"label" : "UNIX",
											"value" : "200",
											"link" : "newchart-xml-EDCUnix",
											"color" : "008ee4"
										},
										{
											"label" : "LINUX",
											"value" : "300",
											"link" : "newchart-xml-EDCLinux",
											"color" : "008ee4"
										},
										{
											"label" : "MacOS",
											"value" : "50",
											"link" : "newchart-xml-EDCMacos",
											"color" : "008ee4"
										} ],
								"linkeddata" : [
										{
											"id" : "EDCWindows",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for EDC Windows OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"showvalues" : "0",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"label" : "Window 7",
															"value" : "50",
															"color" : "008ee4"
														},
														{
															"label" : "Window XP",
															"value" : "25",
															"color" : "008ee4"
														},
														{
															"label" : "Windows 10",
															"value" : "75",
															"color" : "008ee4"
														} ]
											}
										},
										{
											"id" : "EDCUnix",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for EDC Unix OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"showvalues" : "0",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"label" : "AIX",
															"value" : "35",
															"color" : "008ee4"
														},
														{
															"label" : "Debian",
															"value" : "100",
															"color" : "008ee4"
														},
														{
															"label" : "FreeBSD",
															"value" : "65",
															"color" : "008ee4"
														} ]
											}
										},
										{
											"id" : "EDCLinux",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for EDC Linux OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"showvalues" : "0",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"label" : "Ubuntu",
															"value" : "150",
															"color" : "008ee4"
														},
														{
															"label" : "Redhat",
															"value" : "100",
															"color" : "008ee4"
														},
														{
															"label" : "Fedora",
															"value" : "50",
															"color" : "008ee4"
														} ]
											}
										},
										{
											"id" : "EDCMacos",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for EDC Mac OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"showvalues" : "0",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"label" : "Mac OS X 10.1",
															"value" : "15",
															"color" : "008ee4"
														},
														{
															"label" : "Mac OS X 10.2",
															"value" : "5",
															"color" : "008ee4"
														},
														{
															"label" : "Mac OS 9",
															"value" : "30",
															"color" : "008ee4"
														} ]
											}
										} ]
							}
						},
						{
							"id" : "NDCHosts",
							"linkedchart" : {
								"chart" : {
									"caption" : "No of OS across All NDC host",
									"subcaption" : "Click on a Vendor to drill-down",
									"xaxisname" : "Host",
									"yaxisname" : "Number",
									"numberprefix" : "#",
									"plotgradientcolor" : "",
									"showalternatehgridcolor" : "0",
									"showplotborder" : "0",
									"divlinecolor" : "CCCCCC",
									"canvasborderalpha" : "0",
				                    "exportEnabled" :"1"
								},
								"data" : [
										{
											"label" : "Windows",
											"value" : "150",
											"link" : "newchart-xml-NDCWindows",
											"color" : "008ee4"
										},
										{
											"label" : "UNIX",
											"value" : "200",
											"link" : "newchart-xml-NDCUnix",
											"color" : "008ee4"
										},
										{
											"label" : "LINUX",
											"value" : "400",
											"link" : "newchart-xml-NDCLinux",
											"color" : "008ee4"
										},
										{
											"label" : "MacOS",
											"value" : "50",
											"link" : "newchart-xml-NDCMacos",
											"color" : "008ee4"
										} ],
								"linkeddata" : [
										{
											"id" : "NDCWindows",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for NDC Windows OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"showvalues" : "0",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"label" : "Window 7",
															"value" : "50",
															"color" : "008ee4"
														},
														{
															"label" : "Window XP",
															"value" : "25",
															"color" : "008ee4"
														},
														{
															"label" : "Windows 10",
															"value" : "75",
															"color" : "008ee4"
														} ]
											}
										},
										{
											"id" : "NDCUnix",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for NDC Unix OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"value" : "35",
															"color" : "008ee4"
														},
														{
															"label" : "Debian",
															"value" : "100",
															"color" : "008ee4"
														},
														{
															"label" : "FreeBSD",
															"value" : "65",
															"color" : "008ee4"
														} ]
											}
										},
										{
											"id" : "NDCLinux",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for NDC Linux OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"label" : "Ubuntu",
															"value" : "150",
															"color" : "008ee4"
														},
														{
															"label" : "Redhat",
															"value" : "200",
															"color" : "008ee4"
														},
														{
															"label" : "Fedora",
															"value" : "50",
															"color" : "008ee4"
														} ]
											}
										},
										{
											"id" : "NDCMacos",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for NDC Mac OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"label" : "Mac OS X 10.1",
															"value" : "15",
															"color" : "008ee4"
														},
														{
															"label" : "Mac OS X 10.2",
															"value" : "5",
															"color" : "008ee4"
														},
														{
															"label" : "Mac OS 9",
															"value" : "30",
															"color" : "008ee4"
														} ]
											}
										} ]
							}
						},
						{
							"id" : "DALHosts",
							"linkedchart" : {
								"chart" : {
									"caption" : "No of OS across All DAL host",
									"subcaption" : "Click on a Vendor to drill-down",
									"xaxisname" : "Host",
									"yaxisname" : "Number",
									"showvalues" : "0",
									"bgcolor" : "FFFFFF",
									"numberprefix" : "#",
									"plotgradientcolor" : "",
									"showalternatehgridcolor" : "0",
									"showplotborder" : "0",
									"divlinecolor" : "CCCCCC",
									"canvasborderalpha" : "0",
				                    "exportEnabled" :"1"
								},
								"data" : [
										{
											"label" : "Windows",
											"value" : "150",
											"link" : "newchart-xml-DALWindows",
											"color" : "008ee4"
										},
										{
											"label" : "UNIX",
											"value" : "200",
											"link" : "newchart-xml-DALUnix",
											"color" : "008ee4"
										},
										{
											"label" : "LINUX",
											"value" : "600",
											"link" : "newchart-xml-DALLinux",
											"color" : "008ee4"
										},
										{
											"label" : "MacOS",
											"value" : "50",
											"link" : "newchart-xml-DALMacos",
											"color" : "008ee4"
										} ],
								"linkeddata" : [
										{
											"id" : "DALWindows",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for DAL Windows OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"showvalues" : "0",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"label" : "Window 7",
															"value" : "50",
															"color" : "008ee4"
														},
														{
															"label" : "Window XP",
															"value" : "25",
															"color" : "008ee4"
														},
														{
															"label" : "Windows 10",
															"value" : "75",
															"color" : "008ee4"
														} ]
											}
										},
										{
											"id" : "DALUnix",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for DAL Unix OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"showvalues" : "0",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"label" : "AIX",
															"value" : "35",
															"color" : "008ee4"
														},
														{
															"label" : "Debian",
															"value" : "100",
															"color" : "008ee4"
														},
														{
															"label" : "FreeBSD",
															"value" : "65",
															"color" : "008ee4"
														} ]
											}
										},
										{
											"id" : "DALLinux",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for DAL Linux OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"showvalues" : "0",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"label" : "Ubuntu",
															"value" : "200",
															"color" : "008ee4"
														},
														{
															"label" : "Redhat",
															"value" : "300",
															"color" : "008ee4"
														},
														{
															"label" : "Fedora",
															"value" : "100",
															"color" : "008ee4"
														} ]
											}
										},
										{
											"id" : "DALMacos",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for DAL Mac OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"showvalues" : "0",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"label" : "Mac OS X 10.1",
															"value" : "15",
															"color" : "008ee4"
														},
														{
															"label" : "Mac OS X 10.2",
															"value" : "5",
															"color" : "008ee4"
														},
														{
															"label" : "Mac OS 9",
															"value" : "30",
															"color" : "008ee4"
														} ]
											}
										} ]
							}
						},
						{
							"id" : "DFWHosts",
							"linkedchart" : {
								"chart" : {
									"caption" : "No of OS across All DFW host",
									"subcaption" : "Click on a Vendor to drill-down",
									"xaxisname" : "Host",
									"yaxisname" : "Number",
									"numberprefix" : "#",
									"showvalues" : "0",
									"bgcolor" : "FFFFFF",
									"xaxisname" : "Year",
									"plotgradientcolor" : "",
									"showalternatehgridcolor" : "0",
									"showplotborder" : "0",
									"divlinecolor" : "CCCCCC",
									"canvasborderalpha" : "0",
				                    "exportEnabled" :"1"
								},
								"data" : [
										{
											"label" : "Windows",
											"value" : "150",
											"link" : "newchart-xml-DFWWindows",
											"color" : "008ee4"
										},
										{
											"label" : "UNIX",
											"value" : "200",
											"link" : "newchart-xml-DFWUnix",
											"color" : "008ee4"
										},
										{
											"label" : "LINUX",
											"value" : "500",
											"link" : "newchart-xml-DFWLinux",
											"color" : "008ee4"
										},
										{
											"label" : "MacOS",
											"value" : "50",
											"link" : "newchart-xml-DFWMacos",
											"color" : "008ee4"
										} ],
								"linkeddata" : [
										{
											"id" : "DFWWindows",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for DFW Windows OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"showvalues" : "0",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"label" : "Window 7",
															"value" : "50",
															"color" : "008ee4"
														},
														{
															"label" : "Window XP",
															"value" : "25",
															"color" : "008ee4"
														},
														{
															"label" : "Windows 10",
															"value" : "75",
															"color" : "008ee4"
														} ]
											}
										},
										{
											"id" : "DFWUnix",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for DFW Unix OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"showvalues" : "0",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"label" : "AIX",
															"value" : "35",
															"color" : "008ee4"
														},
														{
															"label" : "Debian",
															"value" : "100",
															"color" : "008ee4"
														},
														{
															"label" : "FreeBSD",
															"value" : "65",
															"color" : "008ee4"
														} ]
											}
										},
										{
											"id" : "DFWLinux",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for DFW Linux OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"showvalues" : "0",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"label" : "Ubuntu",
															"value" : "200",
															"color" : "008ee4"
														},
														{
															"label" : "Redhat",
															"value" : "200",
															"color" : "008ee4"
														},
														{
															"label" : "Fedora",
															"value" : "100",
															"color" : "008ee4"
														} ]
											}
										},
										{
											"id" : "DFWMacos",
											"linkedchart" : {
												"chart" : {
													"caption" : "No of Vendors for DFW Mac OS",
													"subcaption" : "Vendors",
													"xaxisname" : "Vendor Name",
													"yaxisname" : "Number",
													"numberprefix" : "#",
													"showvalues" : "0",
													"bgcolor" : "FFFFFF",
													"plotgradientcolor" : "",
													"showalternatehgridcolor" : "0",
													"showplotborder" : "0",
													"divlinecolor" : "CCCCCC",
													"canvasborderalpha" : "0",
								                    "exportEnabled" :"1"
												},
												"data" : [
														{
															"label" : "Mac OS X 10.1",
															"value" : "15",
															"color" : "008ee4"
														},
														{
															"label" : "Mac OS X 10.2",
															"value" : "5",
															"color" : "008ee4"
														},
														{
															"label" : "Mac OS 9",
															"value" : "30",
															"color" : "008ee4"
														} ]
											}
										} ]
							}
						} ]
			}
		//datasource
        }).render();
        
        //No of Hosts up/down and no of Bare Metals vs VM's
        var noOfChart = new FusionCharts({
            type: 'doughnut2d',
            renderAt: 'HostUpDown-container',
            width: '500',
            height: '300',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Host Up/Down",
                    "subCaption": "Host ssh/no ssh",
                    "numberPrefix": "#",
                    "paletteColors": "#1aaf5d,#8e0000,#f2c500,#f45b00,#0075c2",
                    "bgColor": "#ffffff",
                    "showBorder": "0",
                    "use3DLighting": "0",
                    "showShadow": "0",
                    "enableSmartLabels": "0",
                    "startingAngle": "310",
                    "showLabels": "0",
                    "showPercentValues": "1",
                    "showLegend": "1",
                    "legendShadow": "0",
                    "legendBorderAlpha": "0",
                    /*"defaultCenterLabel": "Total revenue: $64.08K",*/
                    "centerLabel": "$value",
                    "centerLabelBold": "1",
                    "showTooltip": "0",
                    "decimals": "0",
                    "captionFontSize": "10",
                    "subcaptionFontSize": "10",
                    "subcaptionFontBold": "0",
                    "exportEnabled" :"1"
                },
                "data": [
                    {
                        "label": "Host Up",
                        "value": "3000"
                    }, 
                    {
                        "label": "Host Down",
                        "value": "1000"
                    }, 
                    {
                        "label": "SSH able",
                        "value": "1500"
                    }, 
                    {
                        "label": "No SSH",
                        "value": "2500"
                    }
                ]
            }
        }).render();
        
        // Cpu Alert
        var cpuAlert = new FusionCharts({
			"type" : "angulargauge",
			"renderAt" : "cpuSystem-container",
			"width" : "400",
			"height" : "250",
			"dataFormat" : "json",
			"dataSource" : {
				"chart" : {
					"caption" : "System/Cpu Heat Meter",
					"subcaption" : "Last week",
					"lowerLimit" : "0",
					"upperLimit" : "100",
					"theme" : "fint",
                    "exportEnabled" :"1"
				},
				"colorRange" : {
					"color" : [ {
						"minValue" : "0",
						"maxValue" : "50",
						"code" : "#6baa01"
					}, {
						"minValue" : "50",
						"maxValue" : "75",
						"code" : "#f8bd19"
					}, {
						"minValue" : "75",
						"maxValue" : "100",
						"code" : "#e44a00"
					} ]
				},
				"dials" : {
					"dial" : [ {
						"value" : "78"
					} ]
				}
			}
		}).render();
        
        // No of VM's vs BareMetals
        var vmBareChart = new FusionCharts({
            type: 'pie3d',
            renderAt: 'vmBare-container',
            width: '500',
            height: '300',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "No of VM's v/s Bare Metal",
                    "subCaption": "Last Year",
                    "startingAngle": "120",
                    "showLabels": "0",
                    "showLegend": "1",
                    "enableMultiSlicing": "0",
                    "slicingDistance": "15",
                    //To show the values in percentage
                    "showPercentValues": "1",
                    "showPercentInTooltip": "0",
                    "plotTooltext": "$label<br>Total : $datavalue",
                    "theme": "fint",
                    "exportEnabled" :"1"
                },
                "data": [{
                    "label": "VM's",
                    "value": "800"
                }, {
                    "label": "BareMetals",
                    "value": "1200"
                }]
            }
        }).render();
        
        // Host Configuration
        var hostChart = new FusionCharts({
            type: 'pie3d',
            renderAt: 'host-container',
            width: '500',
            height: '300',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Configuration Management Running",
                    "subCaption": "Last Year",
                    "startingAngle": "120",
                    "showLabels": "0",
                    "showLegend": "1",
                    "enableMultiSlicing": "0",
                    "slicingDistance": "15",
                    //To show the values in percentage
                    "showPercentValues": "1",
                    "showPercentInTooltip": "0",
                    "plotTooltext": "$label<br>Total : $datavalue",
                    "theme": "fint",
                    "exportEnabled" :"1"
                },
                "data": [{
                    "label": "Chef",
                    "value": "2500"
                }, {
                    "label": "Puppet",
                    "value": "1000"
                },{
                    "label": "Ansible",
                    "value": "1500"
                }, {
                    "label": "Salt",
                    "value": "500"
                }]
            }
        }).render();
        
        // Line Chart
        var hourlySalesChart = new FusionCharts({
            type: 'multiaxisline',
            renderAt: 'line-chart',
            width: '600',
            height: '350',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                	"caption": "CPU Usage",
                    "subcaption": "(Last 10 Hours)",
                    "baseFontColor" : "#333333",
                    "baseFont" : "Helvetica Neue,Arial",
                    "xaxisname": "Week of Year",
                    "showvalues": "0",
                    "numvdivlines": "2",
                    "paletteColors" : "#0075c2,#1aaf5d,#f2c500,#f45b00",
                    "bgColor" : "#ffffff",
                    "canvasBgColor" : "#ffffff",                                 
                    "captionFontSize" : "13",
                    "subcaptionFontSize" : "13",
                    "subcaptionFontBold" : "0",
                    "showBorder" : "0",
                    "showPlotBorder": "0",
                    "showXAxisLine" : "1",
                    "showShadow" : "0",
                    "showCanvasBorder" : "0",
                    "showAlternateHGridColor" : "0",
                    "showalternatevgridcolor": "1",
                    "usePlotGradientColor" :"0",
                    "divlineColor" : "#999999",
                    "divlineThickness" : "1",
                    "divLineIsDashed" : "1",
                    "divLineDashLen" : "1",
                    "divLineGapLen" : "1",
                    "xAxisLineThickness" : "1",
                    "xAxisLineColor" : "#999999",
                    "legendBorderAlpha": "0",
                    "legendShadow": "0",
                    "alignCaptionWithCanvas": "0",
                    "exportEnabled" :"1"
                },
                "categories": [
                    {
                        "category": [
                            { "label": "10:00" },
                            { "label": "11:00" }, 
                            { "label": "12:00" }, 
                            { "label": "13:00" }, 
                            { "label": "14:00" }, 
                            { "label": "15:00" }, 
                            { "label": "16:00" }, 
                            { "label": "17:00" }, 
                            { "label": "18:00" }, 
                            { "label": "19:00" }
                        ]
                    }
                ],
                "axis": [
                    {
                        "title": "CPU Usage",
                        "titlepos": "left",
                        "tickwidth": "10",
                        "numberPrefix": "%",
                        "divlineisdashed": "1",
                        "dataset": [
                            {
                                "seriesname": "CPU 1",
                                "linethickness": "3",
                                "color": "CC0000",
                                "data": [
                                    { "value": "16" }, 
                                    { "value": "19" }, 
                                    { "value": "16" }, 
                                    { "value": "17" },
                                    { "value": "23" }, 
                                    { "value": "23" }, 
                                    { "value": "15" }, 
                                    { "value": "14" },
                                    { "value": "19" }, 
                                    { "value": "21" }
                                ]
                            }
                        ]
                    }, {
                        "title": "PF Usage",
                        "axisonleft": "0",
                        "titlepos": "right",
                        "numdivlines": "4",
                        "tickwidth": "10",
                        "divlineisdashed": "1",
                        "formatnumberscale": "1",
                        "defaultnumberscale": " MB",
                        "numberscaleunit": "GB",
                        "numberscalevalue": "1024",
                        "dataset": [
                            {
                                "seriesname": "PF Usage",
                                "data": [
                                    { "value": "696" }, 
                                    { "value": "711" }, 
                                    { "value": "636" }, 
                                    { "value": "671" }, 
                                    { "value": "1293" }, 
                                    { "value": "789" }, 
                                    { "value": "793" }, 
                                    { "value": "993" },
                                    { "value": "657" }, 
                                    { "value": "693" }
                                ]
                            }
                        ]
                    }, 
                    {
                        "title": "Processes",
                        "titlepos": "RIGHT",
                        "axisonleft": "0",
                        "numdivlines": "5",
                        "tickwidth": "10",
                        "numberSuffix": "",
                        "divlineisdashed": "1",
                        "dataset": [
                            {
                                "seriesname": "Processes",
                                "data": [
                                    { "value": "543" }, 
                                    { "value": "511" }, 
                                    { "value": "536" }, 
                                    { "value": "449" }, 
                                    { "value": "668" }, 
                                    { "value": "588" }, 
                                    { "value": "511" }, 
                                    { "value": "536" }, 
                                    { "value": "449" }, 
                                    { "value": "668" }
                                ]
                            }
                        ]
                    }
                ]
            }
        }).render();
        
})