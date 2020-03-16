const data = {
  "zone_list":["Calgary", "Edmonton", "Central", "South", "North"],
  "zone": [
           "Calgary", "Edmonton", "Edmonton",
           "Calgary", "Edmonton", "Calgary", 
           "Calgary", "Edmonton", "Edmonton",
           "Edmonton", "Calgary", "Calgary", 
           "Calgary", "Calgary", "Edmonton",
           "Calgary", "Calgary", "Calgary",
           "Central", "Calgary", "Calgary",
           "Calgary", "Calgary", "Edmonton",
           "Calgary", "Calgary", "Calgary",
           "Calgary", "Calgary", "Calgary", 
           "Calgary", "Calgary", "Calgary", 
           "Calgary", "Calgary", "Edmonton",
           "Edmonton","Edmonton","Edmonton",
           "Edmonton","Edmonton","Edmonton",
           "Calgary", "Calgary", "Calgary",
           "Calgary", "Calgary", "Calgary", 
           "Calgary", "Calgary", "Calgary", 
           "Calgary","Calgary", "Calgary",
           "Calgary", "Calgary",
          ],
  
  "report_date" : {
      "2020-03-05": {cases:[1]},
      "2020-03-06": {cases:[2]},
      "2020-03-08": {cases:[3,4]},
      "2020-03-09": {cases:[5,6,7]},
      "2020-03-10": {cases:[8,9,10,11,12,13,14]},
      "2020-03-11": {cases:[15,16,17,18,19]},
      "2020-03-12": {cases:[20,21,22,23]},
      "2020-03-13": {cases:[24,25,"26~29"]},
      "2020-03-14": {
          cases:["30~35","36~39"], 
          summary: "Two of the new cases, one in Edmonton Zone and the other in Calgary Zone, have been admitted into intensive care.\nEight new cases confirmed to be related to international travel or to a previously confirmed case. Investigations are ongoing on the remaining two cases."
      },
      "2020-03-15":{
        cases:["40~42","43~56"], 
        summary: "17 additional cases confirmed in Alberta, total of 56 cases in province.\nThree of the new cases are in Edmonton zone and 14 are in Calgary zone."
      }
  },
  
  
  "description_per_case":[
      "Female in her fifties. Calgary zone. Travel on Grand Princess in California. Officials detected case on March 5.",
      "Male in his forties. Edmonton zone. Visited Michigan, Illinois, and Ohio, before returning to Alberta on Feb 28",
      "Male in his sixties. Edmonton zone. On Grand Princess before returning to Alberta on Feb. 21.",
      "Female in her thirties. Calgary zone. Travelled in Europe, including visits to Ukraine, Turkey and the Netherlands.",
      "Female in her seventies. Edmonton zone. Close contact of an Edmonton zone man with COVID-19 (Case 3). On Grand Princess before returning on Feb. 21. Symptoms started after returning to Alberta.",
      "Male in his thirties. Calgary zone. Close contact of the Calgary zone woman case of COVID-19 on March 8 (Case 4). Travelled to Ukraine, Netherlands and Turkey and returned to Alberta on March 2. Symptoms started after his return.",
      "Female in her fifties. Calgary zone. On-board the MS Braemar cruise ship from Feb. 11 to March 4. Developed symptoms after return and was tested at an assessment centre on March 8.",
      "Male in his seventies. Edmonton zone. Travel-related", 
      "Female in her sixties. Edmonton zone. Travelled together with Case 8", 
      "Female in her thirties. Edmonton zone. Recently travelled outside Canada.",
      "Male in his fifties. Calgary zone. Travel-related", 
      "Female in their thirties. Calgary zone. Travel-related",
      "Female in their thirties. Calgary zone. Travel-related",
      "Female in her forties. Calgary zone. Travel-related",
      "Male in his thirties. Edmonton. Recently returned from international travel and started experiencing symptoms a number of days after returning. Received previously scheduled, unrelated treatment at Misericordia Hospital on March 6 and 7, before testing positive for COVID-19 on March 9.",
      "Male in his twenties. Calgary zone. Travel-related. Iran, Egypt, Spain, Mexico and the United States.",
      "Female in their thirties. Calgary zone. Travel-related: Iran, Egypt, Spain, Mexico, US.",
      "Female in their thirties. Calgary zone. Travel-related: Iran, Egypt, Spain, Mexico, US.",
      "Female in her thirties. Central zone. Travel-related: Iran, Egypt, Spain, Mexico, US.",
      "Child. Two-year-old. Calgary zone. Vacation in Florida with family and developed mild symptoms once in Alberta. Attended a local daycare from March 2-6 and tested positive on March 11.",
      "Female in her thirties. Calgary zone. Travel: Jordan, Egypt, France, Germany, US.", 
      "Male in his fifties. Calgary zone. Travel: Jordan, Egypt, France, Germany, US.", 
      "Female in her seventies. Calgary zone. Travel: Jordan, Egypt, France, Germany, US. ",
      "Man. Edmonton zone. Recently attended a conference in Vancouver and was notified that a positive case had attended the same conference. After returning, the individual visited a number of dental offices.",
      "Calgary zone. Returning traveller from Florida",
      "Calgary zone. Household contacts of a previously confirmed case.",
      "Calgary zone. Household contacts of a previously confirmed case.",
      "Calgary zone. Household contacts of a previously confirmed case.",
      "Calgary zone. Household contacts of a previously confirmed case.",
      "Calgary zone. ",
      "Calgary zone. ",
      "Calgary zone. ",
      "Calgary zone. ",
      "Calgary zone. ",
      "Calgary zone. ",
      "Edmonton zone. ",
      "Edmonton zone. ",
      "Edmonton zone. ",
      "Edmonton zone. ",
      "Edmonton zone.","","",
      "Calgary zone. ","","","","","","","","","","","","",
  ]
}


module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  // res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  // res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Methods","POST, GET");
  res.status(200).json(data);
}