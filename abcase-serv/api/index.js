let data = {
  "zone_list":["Calgary", "Edmonton", "North", "Central","South"]
}

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
      {case:8, description:"Male in his seventies. Edmonton zone. Travel-related", },
      {case:9, description: "Female in her sixties. Edmonton zone. Travelled together with Case 8", },
      {case:10, description:"Female in her thirties. Edmonton zone. Recently travelled outside Canada.",},
      {case:11, description:"Male in his fifties. Calgary zone. Travel-related", },
      {case:12, description:"Female in their thirties. Calgary zone. Travel-related",},
      {case:13, description:"Female in their thirties. Calgary zone. Travel-related",},
      {case:14, description:"Female in her forties. Calgary zone. Travel-related",},
    ],
    zones:{
      Calgary:{
        confirmed_cases:4
      },
      Edmonton:{
        confirmed_cases:3
      }
    }
  },
  {
    date:"2020-03-11",
    cases:[
      {case:15, description:"Male in his thirties. Edmonton. Recently returned from international travel and started experiencing symptoms a number of days after returning. Received previously scheduled, unrelated treatment at Misericordia Hospital on March 6 and 7, before testing positive for COVID-19 on March 9.",},
      {case:16, description: "Male in his twenties. Calgary zone. Travel-related. Iran, Egypt, Spain, Mexico and the United States.",},
      {case:17, description:"Female in their thirties. Calgary zone. Travel-related: Iran, Egypt, Spain, Mexico, US.",},
      {case:18, description:"Female in their thirties. Calgary zone. Travel-related: Iran, Egypt, Spain, Mexico, US.",},
      {case:19, description:"Female in her thirties. Central zone. Travel-related: Iran, Egypt, Spain, Mexico, US.",},
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
    }
  },
  {
    date:"2020-03-12",
    cases:[
      {case:20, description:"Child. Two-year-old. Calgary zone. Vacation in Florida with family and developed mild symptoms once in Alberta. Attended a local daycare from March 2-6 and tested positive on March 11.",},
      {case:21, description:"Female in her thirties. Calgary zone. Travel: Jordan, Egypt, France, Germany, US.", },
      {case:22, description:"Male in his fifties. Calgary zone. Travel: Jordan, Egypt, France, Germany, US.", },
      {case:23, description:"Female in her seventies. Calgary zone. Travel: Jordan, Egypt, France, Germany, US. ",},
    ],
    zones:{
      Calgary:{
        confirmed_cases:4
      },
    }
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
    }
  },
  {
    date:"2020-03-14",
    cases:[
      {case:"30~35", description:"Calgary zone."},
      {case:"36~39", description:"Edmonton zone."},
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
      {case:"40~42", description:"Edmonton zone."},
      {case:"43~56", description:"Calgary zone."},
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
  }
]

let zones_total = {};

for (let z of data.zone_list){
  zones_total[z] = reports.map(i => i.zones[z]).filter(i=>i).map(i=>i.confirmed_cases).reduce((x,y)=>x+y,0);;
}

data['reports'] = reports;
data['zones_total'] = zones_total;
module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  // res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  // res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Methods","POST, GET");
  res.status(200).json(data);
}