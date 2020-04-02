const reports = [
  {
    date:"2020-03-05",
    cases:[
      {
        case:1, 
        description:"Female in her fifties. Calgary zone. Travel on Grand Princess in California. Officials detected case on March 5.",
      }
    ],
    zones:{
      Calgary:{
        confirmed_cases:1
      }
    }
  },
  {
    date:"2020-03-06",
    cases:[
      {
        case:2, 
        description:"Male in his forties. Edmonton zone. Visited Michigan, Illinois, and Ohio, before returning to Alberta on Feb 28",
      }
    ],
    zones:{
      Edmonton:{
        confirmed_cases:1
      }
    }
  },
  {
    date:"2020-03-08",
    cases:[
      {case:3, description:"Male in his sixties. Edmonton zone. On Grand Princess before returning to Alberta on Feb. 21.",},
      {case:4, description:"Female in her thirties. Calgary zone. Travelled in Europe, including visits to Ukraine, Turkey and the Netherlands.",}
    ],
    zones:{
      Calgary:{
        confirmed_cases:1
      },
      Edmonton:{
        confirmed_cases:1
      }
    }
  },
  {
    date:"2020-03-09",
    cases:[
      {case:5, description:"Female in her seventies. Edmonton zone. Close contact of an Edmonton zone man with COVID-19 (Case 3). On Grand Princess before returning on Feb. 21. Symptoms started after returning to Alberta.",},
      {case:6, description:"Male in his thirties. Calgary zone. Close contact of the Calgary zone woman case of COVID-19 on March 8 (Case 4). Travelled to Ukraine, Netherlands and Turkey and returned to Alberta on March 2. Symptoms started after his return.",},
      {case:7, description:"Female in her fifties. Calgary zone. On-board the MS Braemar cruise ship from Feb. 11 to March 4. Developed symptoms after return and was tested at an assessment centre on March 8.",}
    ],
    zones:{
      Calgary:{
        confirmed_cases:2
      },
      Edmonton:{
        confirmed_cases:1
      }
    }
  },
  {
    date:"2020-03-10",
    cases:[
      {case:8, description:"Male in his seventies. Edmonton zone.", },
      {case:9, description: "Female in her sixties. Edmonton zone. Travelled together with Case 8", },
      {case:10, description:"Female in her thirties. Edmonton zone. Recently travelled outside Canada.",},
      {case:11, description:"Male in his fifties. Calgary zone.", },
      {case:12, description:"Female in their thirties. Calgary zone.",},
      {case:13, description:"Female in their thirties. Calgary zone.",},
      {case:14, description:"Female in her forties. Calgary zone.",},
    ],
    zones:{
      Calgary:{
        confirmed_cases:4
      },
      Edmonton:{
        confirmed_cases:3
      }
    },
    summary:"14 confirmed cases in Alberta. All travel-related. Returned from visiting a range of countries, including France, the Netherlands, Egypt, Iran, Taiwan, Germany, Malaysia, Trinidad and Tobago, Panama, the Philippines and the United States.\nSeveral cases visited more than one country.\nOne individual was also on the same MS Braemar cruise ship in the Caribbean as a case announced March 9."
  },
  {
    date:"2020-03-11",
    cases:[
      {case:15, description:"Male in his thirties. Edmonton. Recently returned from international travel and started experiencing symptoms a number of days after returning. Received previously scheduled, unrelated treatment at Misericordia Hospital on March 6 and 7, before testing positive for COVID-19 on March 9.",},
      {case:16, description: "Male in his twenties. Calgary zone. ",},
      {case:17, description:"Female in their thirties. Calgary zone. ",},
      {case:18, description:"Female in their thirties. Calgary zone. ",},
      {case:19, description:"Female in her thirties. Central zone. ",},
    ],
    zones:{
      Calgary:{
        confirmed_cases:3
      },
      Edmonton:{
        confirmed_cases:1
      },
      Central:{
        confirmed_cases:1
      }
    },
    summary:"19 confirmed cases in Alberta. Travel-related. One patient continues to recover in hospital, while others are in isolation at home.\nThe five newly confirmed cases had returned from visiting a range of countries: Iran, Egypt, Spain, Mexico, United States."

  },
  {
    date:"2020-03-12",
    cases:[
      {case:20, description:"Child. Two-year-old. Calgary zone. Vacation in Florida with family and developed mild symptoms once in Alberta. Attended a local daycare from March 2-6 and tested positive on March 11.",},
      {case:21, description:"Female in her thirties. Calgary zone. ", },
      {case:22, description:"Male in his fifties. Calgary zone. ", },
      {case:23, description:"Female in her seventies. Calgary zone.",},
    ],
    zones:{
      Calgary:{
        confirmed_cases:4
      },
    },
    summary:"Four new cases have now been confirmed.\nThe travellers returned from travelling in Jordan, Egypt, France, Germany, United States, specifically Florida."
  },
  {
    date:"2020-03-13",
    cases:[
      {case:24, description:"Man. Edmonton zone. Recently attended a conference in Vancouver and was notified that a positive case had attended the same conference. After returnin individual visited a number of dental offices.",},
      {case:25, description:"Calgary zone. Returning traveller from Florida",},
      {case:"26~29", description:"Calgary zone. Household contacts of a previously confirmed case.",},
    ],
    zones:{
      Calgary:{
        confirmed_cases:5
      },
      Edmonton:{
        confirmed_cases:1
      },
    },
    summary:"Six additional cases. All travel-related."
  },
  {
    date:"2020-03-14",
    cases:[
      {case:"30~39", description:"+6 Calgary zone. +4 Edmonton zone."},
    ],
    zones:{
      Calgary:{
        confirmed_cases:6
      },
      Edmonton:{
        confirmed_cases:4
      },
    },
    summary: "Two of the new cases, one in Edmonton Zone and the other in Calgary Zone, have been admitted into intensive care.\nEight new cases confirmed to be related to international travel or to a previously confirmed case. Investigations are ongoing on the remaining two cases."
  },
  {
    date:"2020-03-15",
    cases:[
      {case:"40~56", description:"+14 Calgary zone. +3 Edmonton zone."},
    ],
    zones:{
      Calgary:{
        confirmed_cases:14
      },
      Edmonton:{
        confirmed_cases:3
      },
    },
    summary: "17 additional cases confirmed in Alberta, total of 56 cases in province.\nThree of the new cases are in Edmonton zone and 14 are in Calgary zone."
  },
  {
    date:"2020-03-16",
    cases:[
      {case:"57~74", description:"+12 Calgary zone, +3 Edmonton zone, +1 Central zone, +1 South zone, +1 North zone"},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases:12
      },
      Edmonton:{
        confirmed_cases:3
      },
      Central:{
        confirmed_cases:1
      },
      North:{
        confirmed_cases:1
      },
      South:{
        confirmed_cases:1
      },
    },
    summary: "18 additional cases of COVID-19 have been confirmed in Alberta.\n"+
    "One Edmonton zone and one Calgary zone case have been confirmed to be the result of community transmission."
  },
  {
    date:"2020-03-17",
    cases:[
      {case:"75~97", description:"+18 Calgary zone, +2 Edmonton zone, +1 Central zone, +2 North zone"},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases:18
      },
      Edmonton:{
        confirmed_cases:2
      },
      Central:{
        confirmed_cases:1
      },
      North:{
        confirmed_cases:2
      },
    },
    summary: "23 cases of COVID-19 have been confirmed in Alberta. Total number of cases in the province: 97. Cases have now been identified in all zones across the province."
  },
  {
    date:"2020-03-18",
    cases:[
      {case:"98~119", description:"+13 Calgary zone, +7 Edmonton zone, +1 South zone, +2 North zone"},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases:13
      },
      Edmonton:{
        confirmed_cases:7
      },
      South:{
        confirmed_cases:1
      },
      North:{
        confirmed_cases:1
      },
    },
    summary: "22 additional cases have been confirmed, bringing the total number of cases in the province to 119.\nsix are currently hospitalized, with three admitted to intensive care units (ICU).\nMultiple cases of COVID-19 have been reported from attendees at the Pacific Dental Conference held in Vancouver March 5 to 7."
  },
  {
    date:"2020-03-19",
    cases:[
      {case:"120~146", description:"+18 Calgary zone, +2 Edmonton zone, +1 South zone, +6 North zone."},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases:18
      },
      Edmonton:{
        confirmed_cases:2,
        death:1,
      },
      South:{
        confirmed_cases:1
      },
      North:{
        confirmed_cases:6
      },
    },
    summary: "One Albertan has died as a result of the virus, the first COVID-19 related death in the province.\nMale in his 60’s who had been admitted to ICU in the Edmonton zone on March 12 and had pre-existing conditions. This is the first confirmed COVID-19 related death in the province."
  },
  {
    date:"2020-03-20",
    cases:[
      {case:"147~195", description:"+25 Calgary zone, +14 Edmonton zone, +2 South zone, +7 North zone. +1 Central zone."},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases:25
      },
      Edmonton:{
        confirmed_cases:14,
      },
      South:{
        confirmed_cases:2
      },
      North:{
        confirmed_cases:7
      },
      Central:{
        confirmed_cases:1
      },
    },
    summary: "49 additional cases of COVID-19 have been confirmed.\nAt this time, 3 have recovered.\n10 are currently hospitalized, five have been admitted to ICU."
  },
  {
    date:"2020-03-21",
    cases:[
      {case:"196~226", description:"+13 Calgary. +14 Edmonton, +1 South, +3 Central, +1 Unidentified"},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases:13
      },
      Edmonton:{
        confirmed_cases:14,
      },
      South:{
        confirmed_cases:1
      },
      North:{
        confirmed_cases:-1
      },
      Central:{
        confirmed_cases:3
      },
      "Not yet identified":{
        confirmed_cases:1
      },
    },
    summary: "31 additional cases of COVID-19 have been confirmed, bringing the total number of cases in the province to 226."
  },
  {
    date:"2020-03-22",
    cases:[
      {case:"227~259", description:"+25 Calgary zone, +3 Edmonton zone, +1 South zone, +2 North zone, +3 Central zone."},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases:25
      },
      Edmonton:{
        confirmed_cases:3,
      },
      North:{
        confirmed_cases:2
      },
      Central:{
        confirmed_cases:3
      },
      South:{
        confirmed_cases:1
      },
      "Not yet identified":{
        confirmed_cases:-1
      },
    },
    summary: "33 additional cases of COVID-19 have been confirmed, bringing the total number of cases in the province to 259."
  },
  {
    date:"2020-03-23",
    cases:[
      {case:"260~301", description:""},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases:24
      },
      Edmonton:{
        confirmed_cases:8,
      },
      North:{
        confirmed_cases:1
      },
      Central:{
        confirmed_cases:7
      },
      South:{
        confirmed_cases:1
      },
      "Not yet identified":{
        confirmed_cases:1
      },
    },
    summary: "Forty-two additional cases of COVID-19 have been confirmed, bringing the total number of cases in the province to 301."
  },
  {
    date:"2020-03-24",
    cases:[
      {case:"302~358", description:""},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases: 26,
        death:1,
      },
      Edmonton:{
        confirmed_cases:18,
      },
      North:{
        confirmed_cases:1
      },
      Central:{
        confirmed_cases:11
      },
      South:{
        confirmed_cases:0
      },
      "Not yet identified":{
        confirmed_cases:1
      },
    },
    summary: "A second Albertan has died and 57 additional cases of COVID-19 have been confirmed, bringing the total number of cases in the province to 358."
  }
  ,
  {
    date:"2020-03-25",
    cases:[
      {case:"359~419", description:"Up to 33 of the 419 cases may be due to community transmission."},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases: 36,
      },
      Edmonton:{
        confirmed_cases:14,
      },
      North:{
        confirmed_cases:3
      },
      Central:{
        confirmed_cases:7
      },
      South:{
        confirmed_cases:2
      },
      "Not yet identified":{
        confirmed_cases:-1
      },
    },
    summary: "Sixty-one additional cases of COVID-19 have been confirmed, bringing the total number of cases in the province to 419."
  },
  {
    date:"2020-03-26",
    cases:[
      {case:"420~486", description:""},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases: 50,
      },
      Edmonton:{
        confirmed_cases:11,
      },
      North:{
        confirmed_cases:3
      },
      Central:{
        confirmed_cases:2
      },
      South:{
        confirmed_cases:2
      },
      "Not yet identified":{
        confirmed_cases:-1
      },
    },
    summary: "67 additional cases of COVID-19 have been confirmed, bringing the total number of cases in the province to 486.\n+24 new recovered cases, total to 27 recovered."
  },
  {
    date:"2020-03-27",
    cases:[
      {case:"487~542", description:""},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases: 37,
      },
      Edmonton:{
        confirmed_cases:9,
      },
      North:{
        confirmed_cases:4
      },
      Central:{
        confirmed_cases:6
      },
      South:{
        confirmed_cases:0
      },
      "Not yet identified":{
        confirmed_cases:0
      },
    },
    summary: "56 additional cases of COVID-19 have been confirmed, bringing the total number of cases in the province to 542.\n+6 new recovered cases, total 33 recovered."
  },
  {
    date:"2020-03-28",
    cases:[
      {case:"543~621", description:""},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases: 41,
      },
      Edmonton:{
        confirmed_cases:19,
      },
      North:{
        confirmed_cases:13
      },
      Central:{
        confirmed_cases:5
      },
      South:{
        confirmed_cases:0
      },
      "Not yet identified":{
        confirmed_cases:1
      },
    },
    summary: "79 additional cases of COVID-19 have been confirmed, bringing the total number of cases in the province to 621.\nTotal 53 confirmed recovered cases."
  },
  {
    date:"2020-03-29",
    cases:[
      {case:"622~661", description:""},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases: 30,
        death:1
      },
      Edmonton:{
        confirmed_cases:10,
      },
      North:{
        confirmed_cases:2
      },
      Central:{
        confirmed_cases:-2
      },
      South:{
        confirmed_cases:0
      },
      "Not yet identified":{
        confirmed_cases:0
      },
    },
    summary: "40 additional cases of COVID-19 have been confirmed, bringing the total number of cases in the province to 661.\nA third Albertan has died\nTotal 73 confirmed recovered cases."
  },
  {
    date:"2020-03-30",
    cases:[
      {case:"662~690", description:""},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases: 14,
        death:2
      },
      Edmonton:{
        confirmed_cases:15,
        death:2
      },
      North:{
        confirmed_cases:0,
        death:1
      },
      Central:{
        confirmed_cases:0
      },
      South:{
        confirmed_cases:0
      },
      "Not yet identified":{
        confirmed_cases:0
      },
    },
    summary: "+29 cases of COVID-19 have been confirmed, bringing the total number of cases in the province to 690.\nFive more Albertans have died from COVID-19 since March 29, bringing the total to 8 deaths in the province.\nTotal 94 confirmed recovered cases."
  }
  ,
  {
    date:"2020-03-31",
    cases:[
      {case:"691~754", description:""},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases: 31,
        death:1
      },
      Edmonton:{
        confirmed_cases:23,
      },
      North:{
        confirmed_cases:5,
      },
      Central:{
        confirmed_cases:5
      },
      South:{
        confirmed_cases:0
      },
      "Not yet identified":{
        confirmed_cases:0
      },
    },
    summary: "64 additional cases of COVID-19 have been confirmed, bringing the total number of cases in the province to 754.\nThere is one additional death in the Calgary zone.\nThere are now a total of 120 confirmed recovered cases."
  }
  ,
  {
    date:"2020-04-01",
    cases:[
      {case:"755~871", description:""},
      
    ],
    zones:{
      Calgary:{
        confirmed_cases: 74,
        death:1
      },
      Edmonton:{
        confirmed_cases:32,
      },
      North:{
        confirmed_cases:1,
        death:1
      },
      Central:{
        confirmed_cases:6
      },
      South:{
        confirmed_cases:0
      },
      "Not yet identified":{
        confirmed_cases:4
      },
    },
    summary: "Since March 31, an additional 117 cases of COVID-19 have been confirmed in Alberta, bringing the total number of cases in the province to 871.\nThere are a total of 11 deaths in Alberta – six in the Calgary zone, three in the Edmonton zone, and two in the North zone.\nThere are now a total of 142 confirmed recovered cases."
  }
]

const zone_list=["Calgary", "Edmonton", "North", "Central","South",  "Not yet identified"];
let zones_total = {};
for (let z of zone_list){
  let zone_cases = reports.map(report => report.zones[z]).filter(zcase=>zcase);

  let ccases = zone_cases.map(cases_report=>cases_report.confirmed_cases).filter(ccase=>ccase).reduce((x,y)=>x+y,0);
  let dcases = zone_cases.map(cases_report=>cases_report.death).filter(deathcase=>deathcase).reduce((x,y)=>x+y,0);
  zones_total[z] = {
    confirmed: ccases,
    death: dcases
  }
}

//SVG generate
let svgmap = 
`
<svg id="svgmap" xmlns="http://www.w3.org/2000/svg"
     width="14rem" 
     stroke-width="4"
     stroke="black"
     viewBox="0 0 600 1030">
    <style>
      text{
        font-family:"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size:3.54rem;
        paint-order: stroke;
        stroke: #000000;
        stroke-width: 3px;
        fill:yellow;
        stroke-linecap: butt;
        stroke-linejoin: miter;
      }
      path{
        fill:rgba(255,255,255,0.1);
      }
    </style>
  <path id="mapNorth"
        fill="none"
        d="M 472.00,28.00
           C 472.00,28.00 437.00,30.00 437.00,30.00
             437.00,30.00 428.00,30.00 428.00,30.00
             428.00,30.00 416.00,31.00 416.00,31.00
             416.00,31.00 394.00,31.00 394.00,31.00
             394.00,31.00 382.00,31.96 382.00,31.96
             382.00,31.96 366.00,31.96 366.00,31.96
             366.00,31.96 349.00,33.00 349.00,33.00
             349.00,33.00 317.00,33.00 317.00,33.00
             317.00,33.00 300.00,34.00 300.00,34.00
             300.00,34.00 272.00,34.00 272.00,34.00
             272.00,34.00 257.00,33.00 257.00,33.00
             257.00,33.00 222.00,33.00 222.00,33.00
             222.00,33.00 205.00,31.96 205.00,31.96
             205.00,31.96 189.00,31.96 189.00,31.96
             189.00,31.96 177.00,31.00 177.00,31.00
             177.00,31.00 155.00,31.00 155.00,31.00
             155.00,31.00 143.00,30.00 143.00,30.00
             143.00,30.00 134.00,30.00 134.00,30.00
             134.00,30.00 99.00,28.00 99.00,28.00
             99.00,28.00 65.00,25.00 65.00,25.00
             65.00,25.00 64.00,43.00 64.00,43.00
             64.00,43.00 60.16,97.28 60.16,97.28
             60.16,97.28 57.00,143.00 57.00,143.00
             57.00,143.00 54.04,173.00 54.04,173.00
             54.04,173.00 54.04,182.00 54.04,182.00
             54.04,182.00 53.00,192.00 53.00,192.00
             53.00,192.00 50.17,225.00 50.17,225.00
             50.17,225.00 47.91,262.00 47.91,262.00
             47.91,262.00 46.08,276.00 46.08,276.00
             46.08,276.00 46.08,287.00 46.08,287.00
             46.08,287.00 45.09,297.00 45.09,297.00
             45.09,297.00 42.00,342.00 42.00,342.00
             42.00,342.00 39.09,375.00 39.09,375.00
             39.09,375.00 37.83,401.00 37.83,401.00
             37.83,401.00 35.91,424.00 35.91,424.00
             35.91,424.00 35.00,434.00 35.00,434.00
             35.00,434.00 31.00,496.00 31.00,496.00
             31.00,496.00 30.09,506.00 30.09,506.00
             30.09,506.00 28.00,539.00 28.00,539.00
             28.00,539.00 26.72,559.00 26.72,559.00
             26.44,561.27 25.20,567.81 25.65,569.67
             26.21,571.95 28.16,572.77 29.51,574.48
             29.51,574.48 31.95,578.63 31.95,578.63
             33.63,581.06 36.86,583.10 38.07,586.17
             40.28,591.75 35.67,593.86 31.00,594.00
             31.90,597.22 36.36,608.04 39.21,609.44
             42.09,610.85 51.71,611.43 54.69,613.89
             57.73,616.41 56.16,619.11 59.89,624.87
             61.71,627.68 64.68,628.64 67.00,631.00
             67.00,631.00 71.00,630.00 71.00,630.00
             71.00,630.00 69.00,626.00 69.00,626.00
             70.84,625.43 73.01,624.55 74.96,624.91
             78.52,625.56 85.87,633.08 87.59,636.44
             87.59,636.44 89.23,640.85 89.23,640.85
             89.23,640.85 92.41,646.09 92.41,646.09
             93.31,648.50 92.72,651.51 94.17,653.44
             95.43,655.12 97.64,655.15 99.87,656.72
             104.84,660.21 105.58,663.56 104.00,669.00
             108.26,671.39 108.61,674.71 111.00,679.00
             105.04,683.46 113.02,688.72 113.53,694.17
             113.71,696.04 112.77,697.41 112.00,699.00
             112.00,699.00 119.00,699.00 119.00,699.00
             121.96,687.12 126.94,694.92 130.42,697.02
             133.92,699.13 138.21,698.57 139.77,704.02
             140.97,708.22 136.77,710.13 134.00,716.00
             134.00,716.00 138.00,719.00 138.00,719.00
             138.00,719.00 146.00,722.33 146.00,722.33
             146.00,722.33 157.00,724.00 157.00,724.00
             159.55,719.59 161.37,720.81 166.00,720.00
             166.00,720.00 165.00,713.00 165.00,713.00
             167.32,713.28 170.50,714.09 172.41,712.36
             172.41,712.36 176.43,704.00 176.43,704.00
             178.16,701.04 180.66,698.38 181.45,695.00
             181.45,695.00 182.23,690.00 182.23,690.00
             184.14,683.88 187.43,683.02 185.00,673.00
             185.00,673.00 197.00,672.00 197.00,672.00
             197.50,665.85 198.98,665.12 205.00,665.00
             205.00,665.00 251.96,665.00 251.96,665.00
             251.96,665.00 251.96,655.00 251.96,655.00
             251.96,655.00 251.18,648.00 251.18,648.00
             251.18,648.00 251.95,641.00 251.95,641.00
             251.95,641.00 251.95,628.00 251.95,628.00
             251.95,628.00 250.99,618.00 250.99,618.00
             250.99,618.00 250.99,597.00 250.99,597.00
             250.95,592.95 249.03,584.33 250.99,581.23
             253.57,577.27 261.11,579.65 265.00,579.91
             265.00,579.91 286.95,581.74 286.95,581.74
             289.77,582.89 290.41,584.65 292.45,586.47
             296.54,590.13 297.46,588.44 298.00,595.00
             298.00,595.00 307.00,596.08 307.00,596.08
             307.00,596.08 324.00,596.08 324.00,596.08
             324.00,596.08 331.00,598.00 331.00,598.00
             331.63,594.24 331.65,593.89 334.91,592.00
             334.91,592.00 334.91,580.00 334.91,580.00
             334.41,577.41 333.45,573.66 334.91,571.32
             337.42,567.74 341.47,570.71 344.66,568.94
             346.95,567.67 347.70,564.78 350.26,563.16
             353.24,561.27 367.62,558.36 370.86,559.74
             372.83,560.58 373.01,561.36 374.00,563.00
             380.02,563.21 381.49,563.73 382.00,570.00
             386.15,570.00 392.61,570.74 395.23,566.77
             397.03,564.06 395.25,558.11 400.11,556.35
             403.91,554.97 408.13,559.83 415.96,560.51
             421.58,561.00 423.20,556.23 428.00,555.64
             432.73,555.06 433.76,559.76 436.47,561.93
             439.25,564.16 440.32,563.36 444.00,567.06
             452.74,565.40 449.76,565.55 458.00,567.06
             462.49,567.97 463.41,566.46 466.00,571.00
             470.18,572.33 473.10,575.78 476.00,579.00
             476.00,579.00 487.79,577.27 487.79,577.27
             487.79,577.27 496.00,573.00 496.00,573.00
             496.00,573.00 496.00,576.00 496.00,576.00
             496.00,576.00 518.00,574.35 518.00,574.35
             518.00,574.35 527.00,577.00 527.00,577.00
             527.00,577.00 527.00,570.00 527.00,570.00
             527.00,570.00 532.00,570.00 532.00,570.00
             533.84,564.23 539.50,563.37 545.00,563.00
             545.00,563.00 543.08,544.00 543.08,544.00
             543.08,544.00 543.08,532.00 543.08,532.00
             543.08,532.00 540.00,493.00 540.00,493.00
             540.00,493.00 537.91,458.00 537.91,458.00
             537.91,458.00 536.00,436.00 536.00,436.00
             536.00,436.00 533.83,401.00 533.83,401.00
             533.83,401.00 532.00,381.00 532.00,381.00
             532.00,381.00 529.91,343.00 529.91,343.00
             529.91,343.00 529.00,333.00 529.00,333.00
             529.00,333.00 529.00,326.00 529.00,326.00
             529.00,326.00 527.00,309.00 527.00,309.00
             527.00,309.00 527.00,299.00 527.00,299.00
             527.00,299.00 525.08,287.00 525.08,287.00
             525.08,287.00 525.08,274.00 525.08,274.00
             525.08,274.00 522.17,243.00 522.17,243.00
             522.17,243.00 521.00,225.00 521.00,225.00
             521.00,225.00 518.08,195.00 518.08,195.00
             518.08,195.00 518.08,183.00 518.08,183.00
             518.08,183.00 515.96,163.00 515.96,163.00
             515.96,163.00 515.96,154.00 515.96,154.00
             515.96,154.00 514.00,132.00 514.00,132.00
             514.00,132.00 510.00,77.00 510.00,77.00
             510.00,77.00 507.00,42.00 507.00,42.00
             507.00,42.00 506.00,25.00 506.00,25.00
             506.00,25.00 472.00,28.00 472.00,28.00 Z" 
  />  
  
  <path id="mapEdmonton"
      fill="none" 
      d="M 351.29,568.86
        C 350.19,570.22 350.23,571.40 350.00,573.00
          350.00,573.00 338.00,574.00 338.00,574.00
          338.00,574.00 339.00,596.00 339.00,596.00
          339.00,596.00 335.00,596.00 335.00,596.00
          334.42,599.43 333.92,601.35 329.98,601.84
          325.82,602.36 324.94,600.11 318.00,600.00
          318.00,600.00 294.00,600.00 294.00,600.00
          294.00,600.00 294.00,592.00 294.00,592.00
          294.00,592.00 289.00,592.00 289.00,592.00
          289.00,592.00 285.53,585.98 285.53,585.98
          285.53,585.98 277.00,584.83 277.00,584.83
          277.00,584.83 254.00,583.00 254.00,583.00
          254.00,583.00 255.00,618.00 255.00,618.00
          255.00,618.00 287.00,619.00 287.00,619.00
          287.00,619.00 299.00,622.32 299.00,622.32
          299.00,622.32 309.69,623.99 309.69,623.99
          309.69,623.99 312.85,629.83 312.85,629.83
          312.85,629.83 318.00,639.00 318.00,639.00
          321.71,641.09 321.66,641.86 322.00,646.00
          322.00,646.00 335.00,647.00 335.00,647.00
          335.00,647.00 338.00,639.00 338.00,639.00
          338.00,639.00 351.00,641.26 351.00,641.26
          351.00,641.26 364.00,639.14 364.00,639.14
          364.00,639.14 380.00,639.14 380.00,639.14
          380.06,632.56 379.95,629.54 387.00,628.00
          388.18,622.78 388.43,622.88 386.00,618.00
          386.00,618.00 396.00,617.00 396.00,617.00
          396.00,617.00 397.00,611.00 397.00,611.00
          386.97,607.67 394.42,592.11 394.32,590.12
          394.15,586.94 391.04,585.68 391.00,574.00
          391.00,574.00 378.00,574.00 378.00,574.00
          378.00,574.00 378.00,568.00 378.00,568.00
          373.17,567.83 371.57,567.92 370.00,563.00
          365.83,563.20 353.96,565.54 351.29,568.86 Z
        M 383.00,617.00
        C 383.00,617.00 382.00,618.00 382.00,618.00
          382.00,618.00 382.00,617.00 382.00,617.00
          382.00,617.00 383.00,617.00 383.00,617.00 Z" 
  />
  <path id="mapCalgary"
        fill="none"
        d=" M 194.01,741.98
           C 190.57,736.06 183.97,732.68 179.13,728.10
             176.86,725.96 175.48,722.59 171.98,722.12
             169.51,721.80 164.71,724.91 162.00,726.00
             163.34,730.83 165.15,735.48 168.50,739.34
             171.30,742.55 175.61,745.25 177.50,749.17
             179.98,754.31 178.80,760.62 184.00,764.00
             185.56,760.26 190.16,750.97 195.42,755.74
             197.17,757.33 199.18,764.43 200.18,766.91
             201.77,770.82 203.67,770.94 206.12,774.14
             213.18,783.36 209.66,785.42 217.00,786.00
             217.00,786.00 218.00,801.00 218.00,801.00
             222.51,801.06 229.78,805.91 231.58,810.26
             232.56,812.63 231.87,814.87 234.04,817.14
             236.37,819.58 242.72,820.54 246.00,821.00
             246.00,821.00 246.00,825.00 246.00,825.00
             251.46,827.53 257.49,835.93 255.00,842.00
             265.03,855.85 273.58,849.27 272.00,864.00
             273.94,864.82 275.65,865.72 277.83,865.63
             280.47,865.53 282.53,863.30 285.79,865.63
             290.96,869.29 293.03,881.92 302.00,886.00
             302.00,886.00 303.00,900.00 303.00,900.00
             303.00,900.00 316.00,900.00 316.00,900.00
             320.47,895.06 321.95,895.68 321.00,890.00
             321.00,890.00 341.00,889.00 341.00,889.00
             341.00,889.00 341.00,899.00 341.00,899.00
             341.00,899.00 345.00,899.00 345.00,899.00
             345.00,899.00 345.96,912.00 345.96,912.00
             345.96,912.00 345.96,927.00 345.96,927.00
             345.96,927.00 382.00,927.00 382.00,927.00
             382.00,923.94 381.51,915.61 383.02,913.31
             385.79,909.09 395.52,910.39 399.91,909.89
             399.91,909.89 408.00,908.00 408.00,908.00
             409.84,902.25 412.65,903.02 418.00,903.00
             418.95,897.31 419.79,899.02 423.13,895.48
             426.26,892.15 424.85,891.86 430.00,891.00
             433.45,880.20 442.54,892.20 444.00,880.00
             433.75,879.64 430.99,872.15 431.00,863.00
             423.60,860.72 421.06,854.20 422.00,847.00
             415.13,843.55 412.85,835.02 422.00,833.00
             422.09,830.30 421.88,827.80 424.31,826.00
             425.67,825.00 427.82,824.92 428.98,823.41
             430.16,821.86 429.98,818.87 430.00,817.00
             430.00,817.00 437.00,817.00 437.00,817.00
             436.96,806.95 433.46,802.11 423.00,801.00
             418.82,788.04 403.40,811.40 400.00,796.00
             400.00,796.00 383.00,796.91 383.00,796.91
             383.00,796.91 375.43,795.98 375.43,795.98
             375.43,795.98 373.00,791.00 373.00,791.00
             369.56,791.84 361.47,793.20 358.74,790.40
             353.65,785.20 361.44,769.49 353.87,767.16
             352.70,766.98 350.28,767.01 349.00,767.16
             349.00,767.16 313.00,766.00 313.00,766.00
             313.00,766.00 313.00,776.00 313.00,776.00
             305.79,776.00 298.96,777.10 296.00,769.00
             291.48,771.07 289.58,771.05 288.00,776.00
             288.00,776.00 261.00,776.00 261.00,776.00
             250.27,775.93 251.07,771.28 242.58,766.53
             242.58,766.53 235.23,763.83 235.23,763.83
             231.13,761.26 232.56,755.19 228.41,753.01
             225.84,751.67 223.78,754.12 221.87,755.51
             215.33,760.25 213.70,762.13 209.00,757.00
             196.36,760.03 197.29,747.65 194.01,741.98 Z" 
  />
  <path id="mapCentral"
      fill="none"
      d="M 419.00,564.69
        C 412.18,566.22 407.04,561.62 401.00,560.00
          400.63,562.14 400.55,566.12 399.78,567.74
          398.51,570.41 395.13,571.36 395.11,577.00
          395.08,582.69 399.15,585.78 398.81,591.00
          398.52,595.33 395.39,597.51 396.15,602.99
          396.72,607.09 398.99,607.78 400.57,611.09
          401.90,613.87 401.93,616.99 402.00,620.00
          402.00,620.00 394.00,621.00 394.00,621.00
          394.00,621.00 391.00,632.00 391.00,632.00
          382.81,632.26 384.82,634.26 385.00,643.00
          385.00,643.00 358.00,644.18 358.00,644.18
          358.00,644.18 351.00,645.51 351.00,645.51
          344.99,645.91 339.69,642.32 339.00,651.00
          335.45,651.00 321.92,650.63 319.74,648.40
          318.27,646.91 318.23,644.93 318.00,643.00
          311.76,639.59 309.53,632.04 305.00,627.00
          297.54,630.70 295.73,624.59 289.00,623.27
          289.00,623.27 256.00,622.00 256.00,622.00
          256.00,622.00 255.32,649.00 255.32,649.00
          255.32,649.00 256.00,669.00 256.00,669.00
          256.00,669.00 201.00,669.00 201.00,669.00
          201.00,669.00 201.00,676.00 201.00,676.00
          201.00,676.00 190.00,676.00 190.00,676.00
          190.00,676.00 192.00,682.00 192.00,682.00
          186.13,686.87 186.97,694.05 186.13,696.71
          185.28,699.35 182.16,702.28 180.56,705.09
          180.56,705.09 176.00,716.00 176.00,716.00
          176.00,716.00 183.11,725.75 183.11,725.75
          183.11,725.75 194.97,735.09 194.97,735.09
          194.97,735.09 204.00,752.96 204.00,752.96
          204.00,752.96 217.79,752.96 217.79,752.96
          217.79,752.96 227.07,746.73 227.07,746.73
          227.07,746.73 236.00,751.00 236.00,751.00
          236.00,751.00 237.00,760.00 237.00,760.00
          246.77,760.79 250.67,769.10 256.17,771.28
          259.11,772.44 272.05,772.01 276.00,772.00
          278.02,772.00 281.05,772.12 282.91,771.40
          286.42,770.05 285.64,768.24 292.00,766.07
          297.22,764.29 299.00,764.06 300.00,770.00
          300.00,770.00 309.00,772.00 309.00,772.00
          309.01,769.47 308.65,765.64 310.60,763.74
          312.97,761.42 319.76,761.99 323.00,762.00
          323.00,762.00 335.00,762.96 335.00,762.96
          335.00,762.96 348.00,762.96 348.00,762.96
          353.66,763.01 357.94,762.43 361.02,768.05
          361.85,769.55 362.52,771.17 362.52,772.91
          362.51,775.48 360.58,777.29 361.06,782.98
          362.04,794.54 374.94,780.70 377.00,793.00
          377.00,793.00 396.00,792.00 396.00,792.00
          396.00,792.00 402.69,793.02 402.69,793.02
          402.69,793.02 405.00,797.00 405.00,797.00
          411.35,795.67 414.99,791.54 419.00,791.81
          422.23,792.02 425.22,795.32 428.00,797.01
          432.63,799.82 437.65,800.93 443.00,801.00
          443.00,801.00 469.96,800.15 469.96,800.15
          474.60,800.87 474.36,803.82 478.10,804.65
          478.10,804.65 492.00,804.00 492.00,804.00
          492.00,804.00 489.83,780.00 489.83,780.00
          489.83,780.00 488.17,768.00 488.17,768.00
          487.40,758.06 494.08,760.38 501.00,759.91
          501.00,759.91 510.00,759.01 510.00,759.01
          510.00,759.01 540.00,757.00 540.00,757.00
          543.56,756.96 554.84,757.95 557.01,755.26
          558.52,753.40 558.03,743.77 558.00,741.00
          558.00,741.00 556.17,720.00 556.17,720.00
          556.17,720.00 554.00,683.00 554.00,683.00
          554.00,683.00 552.09,663.00 552.09,663.00
          552.09,663.00 549.83,624.00 549.83,624.00
          549.83,624.00 547.00,592.00 547.00,592.00
          547.00,592.00 545.99,575.00 545.99,575.00
          545.90,572.98 545.95,569.59 543.66,568.69
          542.51,568.24 537.78,569.76 536.00,570.00
          536.00,570.00 531.00,574.00 531.00,574.00
          531.00,574.00 531.00,583.00 531.00,583.00
          531.00,583.00 513.00,579.04 513.00,579.04
          513.00,579.04 494.00,580.26 494.00,580.26
          494.00,580.26 488.00,582.21 488.00,582.21
          488.00,582.21 476.09,582.21 476.09,582.21
          476.09,582.21 462.00,575.00 462.00,575.00
          462.00,575.00 462.00,571.00 462.00,571.00
          462.00,571.00 452.00,570.09 452.00,570.09
          443.90,569.53 431.70,569.26 430.00,559.00
          430.00,559.00 419.00,564.69 419.00,564.69 Z" 
  />
  <path id="mapSouth"
        fill="none"
        d="M 540.00,761.00
           C 540.00,761.00 511.00,763.00 511.00,763.00
             511.00,763.00 498.00,764.02 498.00,764.02
             498.00,764.02 493.34,765.60 493.34,765.60
             493.34,765.60 493.34,779.00 493.34,779.00
             493.34,779.00 494.17,789.00 494.17,789.00
             494.17,789.00 496.00,808.00 496.00,808.00
             491.85,808.20 478.90,809.41 476.04,808.69
             470.91,807.38 471.72,803.58 464.00,804.17
             464.00,804.17 441.00,805.00 441.00,805.00
             441.42,814.13 445.26,820.33 434.00,821.00
             434.00,821.00 434.00,828.00 434.00,828.00
             434.00,828.00 426.00,829.00 426.00,829.00
             426.00,829.00 427.00,836.00 427.00,836.00
             427.00,836.00 420.00,837.00 420.00,837.00
             421.30,844.96 424.53,842.23 426.96,846.30
             428.29,848.52 427.36,850.86 427.58,852.91
             427.81,855.08 429.12,857.04 430.00,859.00
             439.30,860.56 434.36,867.22 438.01,872.76
             440.36,876.33 443.89,874.49 446.40,877.35
             447.58,878.69 447.79,880.31 448.03,882.00
             449.01,889.19 447.38,889.44 441.00,890.16
             441.00,890.16 434.00,891.00 434.00,891.00
             432.11,894.35 431.76,894.37 428.00,895.00
             427.22,899.56 426.46,900.02 422.00,901.00
             422.00,901.00 422.00,907.00 422.00,907.00
             422.00,907.00 412.00,907.00 412.00,907.00
             412.00,907.00 412.00,912.00 412.00,912.00
             412.00,912.00 401.96,913.98 401.96,913.98
             401.96,913.98 394.00,913.98 394.00,913.98
             394.00,913.98 386.00,915.00 386.00,915.00
             386.00,915.00 389.00,931.00 389.00,931.00
             389.00,931.00 361.00,931.00 361.00,931.00
             361.00,931.00 342.00,932.00 342.00,932.00
             342.00,932.00 341.00,903.00 341.00,903.00
             336.28,900.34 337.02,897.99 337.00,893.00
             337.00,893.00 327.00,893.00 327.00,893.00
             323.91,899.48 319.81,902.23 313.42,904.80
             311.88,905.42 310.93,906.17 309.14,905.79
             307.93,905.54 306.98,904.68 306.00,904.00
             306.00,904.00 305.00,910.00 305.00,910.00
             310.95,916.37 306.52,920.50 306.44,925.17
             306.40,927.49 313.70,946.79 304.00,953.00
             304.00,953.00 304.00,956.13 304.00,956.13
             304.00,956.13 309.85,956.13 309.85,956.13
             312.96,956.87 312.79,959.46 312.36,962.00
             312.38,963.99 311.88,965.93 312.36,967.96
             312.83,972.92 322.79,980.75 324.00,988.00
             329.01,988.37 333.97,988.59 337.00,993.30
             337.00,993.30 338.96,997.72 338.96,997.72
             340.84,1001.11 341.49,1000.63 343.00,1005.00
             343.00,1005.00 378.00,1005.00 378.00,1005.00
             378.00,1005.00 393.00,1004.00 393.00,1004.00
             393.00,1004.00 408.00,1004.00 408.00,1004.00
             408.00,1004.00 435.00,1002.17 435.00,1002.17
             435.00,1002.17 442.00,1002.17 442.00,1002.17
             442.00,1002.17 463.00,1002.17 463.00,1002.17
             463.00,1002.17 483.00,1001.00 483.00,1001.00
             483.00,1001.00 502.00,1000.00 502.00,1000.00
             502.00,1000.00 515.00,999.00 515.00,999.00
             515.00,999.00 529.00,999.00 529.00,999.00
             529.00,999.00 575.00,996.00 575.00,996.00
             575.00,996.00 572.78,969.00 572.78,969.00
             572.78,969.00 572.78,959.00 572.78,959.00
             572.78,959.00 571.17,943.00 571.17,943.00
             571.17,943.00 569.00,905.00 569.00,905.00
             569.00,905.00 567.00,887.00 567.00,887.00
             567.00,887.00 567.00,877.00 567.00,877.00
             567.00,877.00 565.00,854.00 565.00,854.00
             565.00,854.00 563.09,825.00 563.09,825.00
             563.09,825.00 561.55,792.00 561.55,792.00
             561.55,792.00 559.00,760.00 559.00,760.00
             559.00,760.00 540.00,761.00 540.00,761.00 Z" 
  />
  <text id="lblNorth" x="290" y="325" alignment-baseline="middle" text-anchor="middle" >
    <tspan alignment-baseline="middle" text-anchor="middle" > ${zones_total.North.confirmed} \n</tspan>
    <tspan alignment-baseline="middle" text-anchor="middle" style="fill:red"> ${zones_total.North.death}</tspan>
  </text>

  <text id="lblEdmonton" x="327" y="620" alignment-baseline="middle" text-anchor="middle" >
    <tspan alignment-baseline="middle" text-anchor="middle" > ${zones_total.Edmonton.confirmed} \n</tspan>
   
    <tspan alignment-baseline="middle" text-anchor="middle" style="fill:red"> ${zones_total.Edmonton.death}</tspan>
  </text>
  
  <text id="lblCentral" x="390" y="715" alignment-baseline="middle" text-anchor="middle" >${zones_total.Central.confirmed}</text>

  <text id="lblCalgary" x="335" y="840" alignment-baseline="middle" text-anchor="middle" >
    
    <tspan alignment-baseline="middle" text-anchor="middle" > ${zones_total.Calgary.confirmed} \n</tspan>
   
    <tspan alignment-baseline="middle" text-anchor="middle" style="fill:red"> ${zones_total.Calgary.death}</tspan>
  </text>

  <text id="lblSouth" x="490" y="930" alignment-baseline="middle" text-anchor="middle" >${zones_total.South.confirmed}</text>
  
</svg>


`
//~~~~~~~~~~~~~~~~~~~
let data = {}
data['reports'] = reports;
data['zones_total'] = zones_total;
data['svgmap'] = svgmap;
data['zone_list'] = zone_list;
module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  // res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  // res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Methods","POST, GET");
  res.status(200).json(data);
}