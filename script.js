document.addEventListener("DOMContentLoaded", (e) => { 
    console.log("The data is at <this site>/data.json if you want them");
    $.getJSON("data.json", (json) => {
        var data = json;
        
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
                    <th scope="row"><h4>` + z +` Zone : </h4></th>
                    <td><h4>` + caseNum + `</h4></td>
                    
                </tr>`
                // zoneHtml += "<div><h3>"+z+ " Zone: " +caseNum+"</h3></div>"
                // $('#stat').prepend("<div>"+z+ " Zone: " +caseNum+"</div>");
            }
            
        }
        $('#stat > .table >tbody').append(zoneHtml).append("<tr> <th><h4 style='font-weight: bold'>ALBERTA Total:</h3></th> <td><h3 style='font-weight: bold'>" + totalCases + "</h4></td></tr>");

        var report_date = data['report_date'];
        var caseInfo = data['description_per_case'];
        for (let d of Object.keys(report_date)) {
            $('#list_cases').prepend(
                `<div class='card' id="`+ d +`" ></div>`
            );
            
            let cs = report_date[d];
            
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