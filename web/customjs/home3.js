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
									"subcaption" : "Click on a Vendor to list servers",
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
											"color" : "008ee4",
											"link": "serverList.html?list=EDCWindows"
										},
										{
											"label" : "UNIX",
											"value" : "200",
											"color" : "008ee4",
											"link": "serverList.html?list=EDCUnix"
										},
										{
											"label" : "LINUX",
											"value" : "300",
											"color" : "008ee4",
											"link": "serverList.html?list=EDCLinux"
										},
										{
											"label" : "MacOS",
											"value" : "50",
											"color" : "008ee4",
											"link": "serverList.html?list=EDCMacOS"
										} ]
							}
						},
						{
							"id" : "NDCHosts",
							"linkedchart" : {
								"chart" : {
									"caption" : "No of OS across All NDC host",
									"subcaption" : "Click on a Vendor to list servers",
									"xaxisname" : "Host",
									"yaxisname" : "Number",
									"numberprefix" : "#",
									"plotgradientcolor" : "",
									"bgcolor" : "FFFFFF",
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
											"color" : "008ee4"
										},
										{
											"label" : "UNIX",
											"value" : "200",
											"color" : "008ee4"
										},
										{
											"label" : "LINUX",
											"value" : "400",
											"color" : "008ee4"
										},
										{
											"label" : "MacOS",
											"value" : "50",
											"color" : "008ee4"
										} ]
							}
						},
						{
							"id" : "DALHosts",
							"linkedchart" : {
								"chart" : {
									"caption" : "No of OS across All DAL host",
									"subcaption" : "Click on a Vendor to list servers",
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
											"color" : "008ee4"
										},
										{
											"label" : "UNIX",
											"value" : "200",
											"color" : "008ee4"
										},
										{
											"label" : "LINUX",
											"value" : "600",
											"color" : "008ee4"
										},
										{
											"label" : "MacOS",
											"value" : "50",
											"color" : "008ee4"
										} ]
							}
						},
						{
							"id" : "DFWHosts",
							"linkedchart" : {
								"chart" : {
									"caption" : "No of OS across All DFW host",
									"subcaption" : "Click on a Vendor to list servers",
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
											"color" : "008ee4"
										},
										{
											"label" : "UNIX",
											"value" : "200",
											"color" : "008ee4"
										},
										{
											"label" : "LINUX",
											"value" : "500",
											"color" : "008ee4"
										},
										{
											"label" : "MacOS",
											"value" : "50",
											"color" : "008ee4"
										} ]
							}
						} ]
			}
		//datasource
        }).render();
        
        var noOfChart = new FusionCharts({
            type: 'doughnut2d',
            renderAt: 'HostUpDown',
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
                    "enableSmartLabels": "1",
                    "smartLineColor": "#d11b2d",
                    "smartLineThickness": "2",
                    "smartLineAlpha": "75",
                    "isSmartLineSlanted": "0",
                    "startingAngle": "310",
                    "showLabels": "0",
                    "showPercentValues": "1",
                    "showLegend": "1",
                    "legendShadow": "0",
                    "legendBorderAlpha": "0",
                    "defaultCenterLabel": "Total Host: 8000",
                    "centerLabel": "$label: $value",
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
                    }
                ]
            }
        }).render();
         
})