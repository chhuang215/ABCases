

let tries = 0;

document.addEventListener("DOMContentLoaded", (e) => { 
    
    let jsonUrl = "https://abcase-serv.now.sh/";

    
    fetchData();

    async function fetchData(){
        $.getJSON(jsonUrl, (data) => {

            let zoneHtml = ""

            let zone_list = data['zone_list'];
            let zones_accumulate = data['zones_accumulate']

            let zAccumAll = zones_accumulate['all'];
            let totalCases = zAccumAll['confirmed_cases'][zAccumAll['confirmed_cases'].length-1];
            let totalDeath = zAccumAll['death'][zAccumAll['death'].length-1];
            let totalLastAdditional = zAccumAll['cases_per_day'][zAccumAll['cases_per_day'].length-1];
            let totalLastDeath = zAccumAll['death_per_day'][zAccumAll['death_per_day'].length-1];

            if (totalCases <= -2){
                console.log("retry..." + tries);
                if (tries >= 4){    
                    let request = new XMLHttpRequest();
                    request.open('GET', "https://abcase-serv.now.sh/update")
                    request.send();
                    request.onload = () =>{
                        if (request.status != 200){
                            alert("Failed to retrieve data");
                        }
                    }
                }
                else{
                    setTimeout(fetchData, 1000);     
                }
                tries += 1;
            }
            else{
                $("#loading").remove();

                tries = 0;

                $('#svgmap').html(data.svgmap);

                for (let aZone of zone_list) {

                    let caseData = zones_accumulate[aZone];
                    let caseNum = caseData['confirmed_cases'][caseData['confirmed_cases'].length - 1];
                    let caseDeath = caseData['death'][caseData['death'].length - 1];

                    let lastAdditionalConfirmed = caseData['cases_per_day'][caseData['cases_per_day'].length - 1];
                    let lastAdditionalDeath = caseData['death_per_day'][caseData['death_per_day'].length - 1];

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

                let recov = zAccumAll['recovered_per_day'][zAccumAll['recovered_per_day'].length-1]
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
                    </tr>
                    <tr> 
                        <th>
                            <h4 style='font-weight: bold'>Recovered:</h4>
                        </th> 
                        <td>
                            <h4 style='font-weight: bold'>${zAccumAll['recovered'][zAccumAll['recovered'].length-1]}
                            <span class="diffnum" >(${(recov > 0 ? '+' : "") + recov})</span>
                            </h4>
                        </td>
                    </tr>
                    
                    `
                );

                $('#list_cases').append( data['html_daily_cases']);
                generateChart(data);

            }

            console.log("fetch done");
        });
    }


    function generateChart(data){
        let zones_accumulate = data['zones_accumulate'];
        // let labels = data['dates'].map(d => d.replace("2020-", "").replace('-','/'));
        let labels = data['dates'].map(d => d.substr(5,10).replace('-','/'));
        var chartTotal = new Chart(document.getElementById('chartTotal').getContext('2d') , {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        type:'line',
                        label: 'Recovered',
                        borderColor:'rgba(230, 200, 200, 1)',
                        data: zones_accumulate['all']['recovered'].map(v => v == 0 ? 'NaN' : v),
                        fill: false
                        
                    },
                    {
                        label: 'Calgary',
                        backgroundColor: 'rgb(240, 13, 13)',
                        data: zones_accumulate['Calgary']['confirmed_cases']
                    },
                    {
                        label: 'Edmonton',
                        backgroundColor: 'rgb(13, 180, 13)',
                        data: zones_accumulate['Edmonton']['confirmed_cases']
                    }
                    ,
                    {
                        label: 'North',
                        backgroundColor: 'rgb(13, 180, 180)',
                        data: zones_accumulate['North']['confirmed_cases']
                    }
                    ,
                    {
                        label: 'Central',
                        backgroundColor: 'rgb(180, 180, 13)',
                        data: zones_accumulate['Central']['confirmed_cases']
                    }
                    ,
                    {
                        label: 'South',
                        backgroundColor: 'rgb(180, 180, 180)',
                        data: zones_accumulate['South']['confirmed_cases']
                    }
                    ,
                    {
                        label: 'Unidentified',
                        backgroundColor: 'rgb(255, 180, 13)',
                        data: zones_accumulate['Not yet identified']['confirmed_cases']
                    }
                    
                ]
            },
            // Configuration options go here
            options: {
                title: {
                    display: true,
                    text: 'Total Confirmed Cases',
                    fontColor: 'white',
                    fontSize: 20
                },
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                      //stacked: true,
                      stacked: true,
                      ticks: {
                        // beginAtZero: true,
                        fontColor: "white",
                        maxRotation: 90,
                        minRotation: 90 
                      }
                    }],
                    yAxes: [{
                      stacked: true,
                      ticks: {
                        beginAtZero: false,
                        fontColor: "white",
                        maxTicksLimit: 100
                      }
                    }]
                },
                legend: {
                    labels: {
                        fontColor: "white",
                          // fontSize: 18
                    }
                },
            }
        });


        var chartPerday = new Chart(document.getElementById('chartPerday').getContext('2d') , {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Calgary',
                        backgroundColor: 'rgb(240, 13, 13)',
                        data: zones_accumulate['Calgary']['cases_per_day']
                    },
                    {
                        label: 'Edmonton',
                        backgroundColor: 'rgb(13, 180, 13)',
                        data: zones_accumulate['Edmonton']['cases_per_day']
                    }
                    ,
                    {
                        label: 'North',
                        backgroundColor: 'rgb(13, 180, 180)',
                        data: zones_accumulate['North']['cases_per_day']
                    }
                    ,
                    {
                        label: 'Central',
                        backgroundColor: 'rgb(180, 180, 13)',
                        data: zones_accumulate['Central']['cases_per_day']
                    }
                    ,
                    {
                        label: 'South',
                        backgroundColor: 'rgb(180, 180, 180)',
                        data: zones_accumulate['South']['cases_per_day']
                    }
                    ,
                    {
                        label: 'Unidentified',
                        backgroundColor: 'rgb(255, 180, 13)',
                        data: zones_accumulate['Not yet identified']['cases_per_day']
                    }
                ]
            },
            // Configuration options go here
            options: {
                title: {
                    display: true,
                    text: 'New Cases per day',
                    fontColor: 'white',
                    fontSize: '20'
                },
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                      //stacked: true,
                      stacked: true,
                      ticks: {
                        // beginAtZero: true,
                        fontColor: "white",
                        maxRotation: 90,
                        minRotation: 90 
                      }
                    }],
                    yAxes: [{
                      stacked: true,
                      ticks: {
                        fontColor: "white",
                        // suggestedMin:0,
                        // min:-20
                        // stepSize: 5
                      }
                    }]
                },
                legend: {
                    labels: {
                        fontColor: "white",
                          // fontSize: 18
                    }
                },
            }
        });

    }



});