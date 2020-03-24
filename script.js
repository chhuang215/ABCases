

document.addEventListener("DOMContentLoaded", (e) => { 
    
    let jsonUrl = "https://abcase-serv.now.sh/"


    console.log("The data is at " + jsonUrl);
    
    $.getJSON(jsonUrl, (data) => {

        $('#svgmap').html(data.svgmap);

        let totalCases = 0;
        let zoneHtml = ""
        let zones_total = data['zones_total']
        for (let aZone of Object.keys(zones_total)) {
            
            let caseData = zones_total[aZone];
            let caseNum = caseData['confirmed'];
            let caseDeath = caseData['death'];
            totalCases += caseNum;

            if(caseNum > 0){

                let th = aZone;

                if (aZone.indexOf("Not ") == -1) { th += " Zone "};

                zoneHtml += 
                `<tr>
                    <th scope="row"><h4>${th} : </h4></th>
                    <td><h4>${caseNum}</h4></td>
                    <td><h4>${caseDeath}</h4></td>           
                </tr>`

            }
   
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
                    <h4 style='font-weight: bold'>${totalCases}</h4>
                </td>
            </tr>`
        );

        var reports = data['reports'];
        
        for (let aReport of reports) {
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
            $('#'+d).prepend(`<h4 class='card-header'>${d}</h4>`);
        }

        generateChart();
    });


    function generateChart(){
        var chartTotal = new Chart(document.getElementById('chartTotal').getContext('2d') , {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Cases',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            // Configuration options go here
            options: {
                aspectRatio:1.2,
            }
        });

        var chartZoneTotal = new Chart(document.getElementById('chartZoneTotal').getContext('2d') , {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Cases',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            options: {
                aspectRatio:1.2,
            }
        });

        var chartZoneCount = new Chart(document.getElementById('chartZoneCount').getContext('2d') , {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Cases',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },

            // Configuration options go here
            options: {
                aspectRatio:1.2,
            }
        });

    }

    
});