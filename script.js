

document.addEventListener("DOMContentLoaded", (e) => { 
    
    let jsonUrl = "https://abcase-serv.now.sh/"

    console.log("The data is at " + jsonUrl);

    let zone_list;
    let zone_cases;
    let totalCases;

    async function updateMapData(zcases){
        let tries = 10;
        while(!$("#mapobj")[0]){
            tries --;
            console.log('notloaded');
            await sleep(500);
            if(tries < 0){ return };
        }

        let map = $("#mapobj")[0].contentDocument
        for (let zone of Object.keys(zcases)) {
            let txtlbl = `#lbl${zone}`
            $(map).find(txtlbl).text(zcases[zone]);
        }

    }
    
    $.getJSON(jsonUrl, (data) => {
        zone_list = data['zone_list'];
        zone_cases = [];
        totalCases = 0;

        let zoneHtml = ""
        let allzonecases ={};
        for (let z of zone_list ) {
            caseNum = data.zone.filter(zc => zc === z).length;
            totalCases += caseNum;
            zone_cases.push(caseNum);

            if(caseNum > 0){
                zoneHtml += 
                `<tr>
                    <th scope="row"><h4>${z} Zone : </h4></th>
                    <td><h4>${caseNum}</h4></td>                        
                </tr>`

            }

            
            allzonecases[z] = caseNum;            
        }
        updateMapData(allzonecases);
        

        $('#tblstat tbody').append(zoneHtml).append(
            `<tr> 
                <th>
                    <h4 style='font-weight: bold'>ALBERTA Total:</h4>
                </th> 
                <td>
                    <h4 style='font-weight: bold'>${totalCases}</h4>
                </td>
            </tr>`
        );

        var report_date = data['report_date'];
        var caseInfo = data['description_per_case'];
        for (let d of Object.keys(report_date)) {
            $('#list_cases').prepend(
                `<div class='card' id="${d}" ></div>`
            );
            
            let cinfos = report_date[d];
            let cases = cinfos['cases']
            for (let c of cases){
                $('#'+d).prepend(
                    `<div class='case card-body' id='case${c}info'> 
                        <h5 class="card-title">Case  ${c}</h5>
                        <p class="card-text">${caseInfo[(parseInt(c)-1)]}</p>
                    </div>`
                );
            }

            let summary = cinfos['summary'];
            if(summary){
                let summs = summary.split("\n");
                let summblock = $('#'+d).prepend(`<div class='card-body summary'></div>`).find(".summary");
                for(let s of summs){
                    summblock.append(`<p class="card-text">${s}</p>`);
                }
                

            }
            $('#'+d).prepend(`<h4 class='card-header'>${d}</h4>`);
        }
    });
});