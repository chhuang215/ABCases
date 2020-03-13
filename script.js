




document.addEventListener("DOMContentLoaded", (e) => { 
    $.getJSON("data.json", (json) => {
        var data = json;
        console.log(data);
        var zone_list = data['zone_list'];
        var zone_cases = [];
        var totalCases = 0;

        var zoneHtml = ""

        for (let z of zone_list ) {
            caseNum = data.zone.filter(zc => zc === z).length;
            totalCases += caseNum;
            zone_cases.push(caseNum);

            if(caseNum > 0){
                zoneHtml += 
                `<tr>
                    <th scope="row"><h3>` + z +` Zone : </h3></th>
                    <td><h3>` + caseNum + `</h3></td>
                    
                </tr>`
                // zoneHtml += "<div><h3>"+z+ " Zone: " +caseNum+"</h3></div>"
                // $('#stat').prepend("<div>"+z+ " Zone: " +caseNum+"</div>");
            }
            
        }
        $('#stat > .table >tbody').append("<tr> <th><h3>AB Total:</h3></th> <td><h3>" + totalCases + "</h3></td></tr>").append(zoneHtml);
    
        

        console.log(totalCases);
        console.log(zone_list);
        console.log(zone_cases);

        var report_date = data['report_date'];
        var caseInfo = data['description_per_case'];
        console.log(report_date);
        for (let d of Object.keys(report_date)) {
            $('#list_cases').prepend(
                `<div class='card' id="`+ d +`" ></div>`
            );
            
            let cs = report_date[d];
            console.log(cs);
            
            for (let c of cs){
                $('#'+d).prepend(
                    `<div class='case card-body' id='case`+c+`info'> 
                         <h5 class="card-title">Case  ` + c + ` </h5>
                         <p class="card-text">`+caseInfo[(parseInt(c)-1)]+`</p>
                     </div>`
                );
                // $('#case'+c+'info p').prepend()
            }
            $('#'+d).prepend(
                ` <h4 class='card-header'>`+d+`</h4>`
            );
            
        }
        
    });

});