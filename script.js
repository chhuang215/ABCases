

document.addEventListener("DOMContentLoaded", (e) => { 
    
    let jsonUrl = "https://abcase-serv.now.sh/"

    console.log("The data is at " + jsonUrl);
    
    $.getJSON(jsonUrl, (data) => {

        $('#svgmap').html(data.svgmap);

        let totalCases = 0;
        let totalDeath = 0;
        let totalLastAdditional = 0;
        let totalLastDeath = 0;
        let zoneHtml = ""

        let zones_total = data['zones_total'];
        let zones_accumulate = data['zones_accumulate']
        let reports = data['reports'];

        let lastUpdatedZones = reports[reports.length - 1].zones;

        for (let aZone of Object.keys(zones_total)) {

            let caseData = zones_total[aZone];
            let caseNum = caseData['confirmed'];
            let caseDeath = caseData['death'];
            totalCases += caseNum;
            totalDeath += caseDeath;

            let lastAdditionalConfirmed = lastUpdatedZones[aZone]['confirmed_cases'] ? lastUpdatedZones[aZone]['confirmed_cases'] : 0;
            let lastAdditionalDeath = lastUpdatedZones[aZone]['death'] ? lastUpdatedZones[aZone]['death'] : 0;

            totalLastAdditional += lastAdditionalConfirmed;
            totalLastDeath += lastAdditionalDeath;

            // if(caseNum > 0 || caseDeath > 0){

            let th = aZone;

            if (aZone.indexOf("Not ") == -1) { th += " Zone "};

            zoneHtml += 
            `<tr>
                <th scope="row"><h4>${th} : </h4></th>
                <td>
                    <h4>
                        ${caseNum} 
                        <span class="diffnum ${(lastAdditionalConfirmed != 0 ? 'hasdiff' : "")}" >(${(lastAdditionalConfirmed > 0 ? '+' : "") + lastAdditionalConfirmed})</span>
                    </h4>
                    
                </td>
                <td>
                    <h4>
                        ${caseDeath}
                        <span class="diffnum ${(lastAdditionalDeath != 0 ? 'hasdiff' : "")}" >(${(lastAdditionalDeath > 0 ? '+' : "") + lastAdditionalDeath})</span>
                    </h4>
                    
                </td>
                <td class="percentage"> (${(caseDeath/caseNum * 100).toFixed(1)}%)</td>
            </tr>`

            // }
   
        }

        $('#tblstat thead').append(
            `
            <tr>
                <th scope="col"></th>
                <th scope="col">Cases</th>
                <th scope="col">Death</th>
            </tr>
            `
        );

        $('#tblstat tbody').append(zoneHtml).append(
            `<tr> 
                <th>
                    <h4 style='font-weight: bold'>ALBERTA Total:</h4>
                </th> 
                <td>
                    <h4 style='font-weight: bold'>${totalCases}
                    <span class="diffnum ${(totalLastAdditional != 0 ? 'hasdiff' : "")}" >(${(totalLastAdditional > 0 ? '+' : "") + totalLastAdditional})</span>
                    </h4>
                </td>
               
                <td>
                    <h4 style='font-weight: bold'>${totalDeath}
                    <span class="diffnum ${(totalLastDeath != 0 ? 'hasdiff' : "")}">(${(totalLastDeath > 0 ? '+' : "") + totalLastDeath})</span>
                    </h4>
                </td>
               
                <td class="percentage">
                    (${(totalDeath/totalCases * 100).toFixed(1)}%)
                </td>
            </tr>`
        );

        let totalRecov = zones_accumulate['all']['recovered'][zones_accumulate['all']['recovered'].length-1];
        let recov = zones_accumulate['all']['recovered_per_day'][zones_accumulate['all']['recovered_per_day'].length-1]
        $('#tblstat tbody').append(
            `<tr> 
                <th>
                    <h4 style='font-weight: bold'>Recovered:</h4>
                </th> 
                <td>
                    <h4 style='font-weight: bold'>${totalRecov}
                    <span class="diffnum" >(${(recov > 0 ? '+' : "") + recov})</span>
                    </h4>
                </td>
            </tr>`
        );

        let prevCases = 0;
        for (const [i, aReport] of reports.entries()) {
            
            let d = aReport['date'];

            $('#list_cases').prepend(
                `<div class='card' id="${d}" ></div>`
            );
            
            let cases = aReport['cases'];

            for (let c of cases){
                let cnum = c['case'];
                $('#'+d).prepend(
                    `<div class='case card-body' id='case${cnum}info'> 
                        <h5 class="card-title">Case  ${cnum}</h5>
                        <p class="card-text">${c['description']}</p>
                    </div>`
                );
            }

            let summary = aReport['summary']
            if(summary){
                let summs = summary.split("\n");
                let summblock = $('#'+d).prepend(`<div class='card-body summary'></div>`).find(".summary");
                for(let s of summs){
                    
                   
                    summblock.append(`<p class="card-text">${s}</p>`);
                }
            }
  
            $('#'+d).prepend(`<h4 class='card-header'>${d}</h4>
                              <h5 class='card-header'>
                                Case ${prevCases+1} ~ ${zones_accumulate['all']['confirmed_cases'][i]}
                              </h5>
                            `);

            prevCases = data['zones_accumulate']['all']['confirmed_cases'][i];
        }

        

    });
});