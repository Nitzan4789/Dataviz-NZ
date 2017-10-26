/*
//map using d3+ (color the countries)
var sample_data = [
    {"year": "1992 - 2014", "country": "aschn", "name": "China", "tags": "birth country; undergraduate", "color": "#ABDDA4"},
    {"year": "2014", "country": "eudeu", "name": "Germany", "tags": "conference", "color": "#ABDDA4"},
    {"year": "2014 - 2017", "country": "nausa", "name": "United States", "tags": "graduate", "color": "#ABDDA4"},
    {"year": "2016", "country": "nabhs", "name": "Bahamas", "tags": "travel", "color": "#ABDDA4"},
    {"year": "2017", "country": "sachl", "name": "Chile", "tags": "research", "color": "#ABDDA4"}
];

var visualization = d3plus.viz()
    .container("#svg_map")        // container DIV to hold the visualization
    .data(sample_data)            // data to use with the visualization
    .coords({
        "mute": ["anata"],
        "value": "http://d3plus.org/topojson/countries.json"
    }) // pass topojson coordinates
    .type("geo_map")              // visualization type
    .id("country")                // key for which our data is unique on
    .text("name")                 // key to use for display text
    .color("color")               // key for coloring countries
    .tooltip(["year", "tags"])              // keys to place in tooltip
    .draw();                      // finally, draw the visualization!
*/

//using datamaps (d3) http://datamaps.github.io
var basic_choropleth = new Datamap({
  element: document.getElementById("svg_map"),
  projection: 'mercator',
  fills: {
    defaultFill: "#ffffff",
    between0and20: "#E1E5E5",
    between20and40: "#C8D4D7",
    between40and60: "#65808B",
    between60and80: "#06435A",
    between80and100: "#021325",
  },
  data: {
    AUS: { fillKey: "between80and100", NumberOfTimes: "100" },
    AUT: { fillKey: "between0and20", NumberOfTimes: "5" },
    AZE: { fillKey: "between0and20", NumberOfTimes: "5" },
    RUS: { fillKey: "between80and100", NumberOfTimes: "81" },
    ISR: { fillKey: "between0and20", NumberOfTimes: "0" },
    JPN: { fillKey: "between60and80", NumberOfTimes: "61" },
    CHN: { fillKey: "between80and100", NumberOfTimes: "98" },
    DEU: { fillKey: "between80and100", NumberOfTimes: "100" },
    USA: { fillKey: "between40and60", NumberOfTimes: "56" },
    BHS: { fillKey: "between20and40", NumberOfTimes: "5" },
    CHL: { fillKey: "between20and40", NumberOfTimes: "20" },
    GRL: { fillKey: "between0and20", NumberOfTimes: "0" },
    CAN: { fillKey: "between60and80", NumberOfTimes: "70" },
    BRA: { fillKey: "between40and60", NumberOfTimes: "55" },
    MEX: { fillKey: "between40and60", NumberOfTimes: "59" },
    ISL: { fillKey: "between0and20", NumberOfTimes: "13" },
    NOR: { fillKey: "between0and20", NumberOfTimes: "16" },
    ARG: { fillKey: "between0and20", NumberOfTimes: "10" },
    BOL: { fillKey: "between0and20", NumberOfTimes: "4" },
    PER: { fillKey: "between0and20", NumberOfTimes: "4" },
    URY: { fillKey: "between0and20", NumberOfTimes: "4" },
    PRY: { fillKey: "between0and20", NumberOfTimes: "4" },
    ECU: { fillKey: "between0and20", NumberOfTimes: "3" },
    COL: { fillKey: "between0and20", NumberOfTimes: "4" },
    VEN: { fillKey: "between0and20", NumberOfTimes: "4" },
    CUB: { fillKey: "between0and20", NumberOfTimes: "12" },
    DOM: { fillKey: "between0and20", NumberOfTimes: "3" },
    GCA: { fillKey: "between40and60", NumberOfTimes: "43" },
    HND: { fillKey: "between0and20", NumberOfTimes: "15" },
    DOM: { fillKey: "between0and20", NumberOfTimes: "3" },
    NIC: { fillKey: "between0and20", NumberOfTimes: "5" },
    KAZ: { fillKey: "between0and20", NumberOfTimes: "6" },
    MNG: { fillKey: "between0and20", NumberOfTimes: "4" },
    FIN: { fillKey: "between0and20", NumberOfTimes: "19" },
    IND: { fillKey: "between60and80", NumberOfTimes: "70" },
    SWE: { fillKey: "between40and60", NumberOfTimes: "46" },
    NZL: { fillKey: "between40and60", NumberOfTimes: "29" },
    GBR: { fillKey: "between0and20", NumberOfTimes: "11" },
    IRL: { fillKey: "between40and60", NumberOfTimes: "59" },
    ZAF: { fillKey: "between20and40", NumberOfTimes: "36" },
    NAM: { fillKey: "between0and20", NumberOfTimes: "3" },
    BWA: { fillKey: "between0and20", NumberOfTimes: "9" },
    MOZ: { fillKey: "between0and20", NumberOfTimes: "11" },
    AGO: { fillKey: "between0and20", NumberOfTimes: "2" },
    ZMB: { fillKey: "between0and20", NumberOfTimes: "2" },
    ZWE: { fillKey: "between0and20", NumberOfTimes: "14" },
    DZA: { fillKey: "between0and20", NumberOfTimes: "3" },
    TZA: { fillKey: "between0and20", NumberOfTimes: "6" },
    COD: { fillKey: "between0and20", NumberOfTimes: "6" },
    LBY: { fillKey: "between0and20", NumberOfTimes: "6" },
    EGY: { fillKey: "between20and40", NumberOfTimes: "21" },
    SDN: { fillKey: "between0and20", NumberOfTimes: "6" },
    ETH: { fillKey: "between0and20", NumberOfTimes: "3" },
    KEN: { fillKey: "between0and20", NumberOfTimes: "2" },
    SUD: { fillKey: "between0and20", NumberOfTimes: "4" },
    SSD: { fillKey: "between0and20", NumberOfTimes: "6" },
    UGA: { fillKey: "between0and20", NumberOfTimes: "9" },
    MRT: { fillKey: "between0and20", NumberOfTimes: "6" },
    MLI: { fillKey: "between0and20", NumberOfTimes: "11" },
    TCD: { fillKey: "between0and20", NumberOfTimes: "6" },
    NER: { fillKey: "between20and40", NumberOfTimes: "21" },
    RFA: { fillKey: "between0and20", NumberOfTimes: "12" },
    WAN: { fillKey: "between0and20", NumberOfTimes: "6" },
    CAF: { fillKey: "between0and20", NumberOfTimes: "6" },
    NGA: { fillKey: "between0and20", NumberOfTimes: "13" },
    CMR: { fillKey: "between0and20", NumberOfTimes: "3" },
    COG: { fillKey: "between0and20", NumberOfTimes: "3" },
    MAR: { fillKey: "between0and20", NumberOfTimes: "5" },
    MDG: { fillKey: "between0and20", NumberOfTimes: "9" },
    FRA: { fillKey: "between80and100", NumberOfTimes: "135" },
    ITA: { fillKey: "between80and100", NumberOfTimes: "100" },
    SAU: { fillKey: "between0and20", NumberOfTimes: "16" },
    ESP: { fillKey: "between60and80", NumberOfTimes: "78" },
    PRT: { fillKey: "between0and20", NumberOfTimes: "16" },
    UKR: { fillKey: "between0and20", NumberOfTimes: "17" },
    BLR: { fillKey: "between0and20", NumberOfTimes: "17" },
    POL: { fillKey: "between20and40", NumberOfTimes: "33" },
    ROU: { fillKey: "between0and20", NumberOfTimes: "13" },
    UZB: { fillKey: "between0and20", NumberOfTimes: "5" },
    PAK: { fillKey: "between20and40", NumberOfTimes: "23" },
    IRN: { fillKey: "between20and40", NumberOfTimes: "31" },
    AFG: { fillKey: "between20and40", NumberOfTimes: "31" },
    TKM: { fillKey: "between0and20", NumberOfTimes: "6" },
    TUR: { fillKey: "between40and60", NumberOfTimes: "48" },
    IRQ: { fillKey: "between40and60", NumberOfTimes: "50" },
  },
  geographyConfig: {
    popupTemplate: function(geo, data) {
        return ['<div class="hoverinfo"><strong>',
                'Country: ' + geo.properties.name,
                '<br> Number Of Times: ' + "data.year",
                '</strong></div>'].join('');
    }
  }
});
var legend = d3.select("#svg_map").append("svg").attr("id", "legend");
legend.append("rect").attr("x", "150").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", "#E1E5E5");
legend.append("text").attr("x", "175").attr("y", "24").attr("font-size", "12px").text("0-20");
legend.append("rect").attr("x", "225").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", "#C8D4D7");
legend.append("text").attr("x", "250").attr("y", "24").attr("font-size", "12px").text("20-40");
legend.append("rect").attr("x", "300").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", "#65808B");
legend.append("text").attr("x", "325").attr("y", "24").attr("font-size", "12px").text("40-60");
legend.append("rect").attr("x", "375").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", "#06435A");
legend.append("text").attr("x", "400").attr("y", "24").attr("font-size", "12px").text("60-80");
legend.append("rect").attr("x", "450").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", "#021325");
legend.append("text").attr("x", "475").attr("y", "24").attr("font-size", "12px").text("80-100");
