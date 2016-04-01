$(document).ready(function() {
	
	var url = document.URL;
	var id = url.substring(url.lastIndexOf('=') + 1);
	//alert(id); // 234234234
	//document.write(id);
	//  var server=document.getElementById("show");
	//  server.innerHTML=id;
	
	// Disk Usuage
	
	var diskUsuage = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'serverDetails',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Disk Usuage",
                "subCaption": "Current Day",
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
                "defaultCenterLabel": "Usage",
                "centerLabel": "$label: $value GB",
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
                    "label": "Size",
                    "value": "40G"
                }, 
                {
                    "label": "Used",
                    "value": "25G"
                }, 
                {
                    "label": "Avail",
                    "value": "15G"
                }
            ]
        }
    }).render();
	
	
});