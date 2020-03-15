

document.addEventListener("DOMContentLoaded", (e) => { 
    

    let jsonUrl = "https://abcase-serv.now.sh/api"

    console.log("The data is at " + jsonUrl);


    var map = null;

    // $("#mapobj")[0].onload = (ev)=>{
    //     // console.log($(this.contentDocument).find('#mapNorth'));
    //     // $(e.target.contentDocument).find('#map'+z).attr({'fill': 'rgba(129, 104, 170,1)'});
    //     map = ev.target.contentDocument;
    //     start();
    // }

    // function start(){
        $.getJSON(jsonUrl, (data) => {
            // var data = json;
            
    
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
    
                let region = $(map).find('#map'+z);
    
                // $(map).find('#map'+z).attr({'fill': 'rgba(129, 104, 170,1)'})
                
                
            }
            // let msvg = $(map).find('#svgmap')
            // var lbl = document.createElementNS("http://www.w3.org/2000/svg","text");
            // lbl.setAttributeNS(null,"x",236);     
            // lbl.setAttributeNS(null,"y",300); 
            // lbl.setAttributeNS(null,"fill",'black'); 
            // lbl.setAttributeNS(null,"font-size","30px");
        
            // var textNode = document.createTextNode(123);
            // lbl.appendChild(textNode);
            // map.getElementById("svgmap").appendChild(lbl);
    
            // $(map).find('#svgmap').prepend(`<text x="0" y="15" fill="red">very label heh</text>`)
    
            $('#stat > .table >tbody').append(zoneHtml).append("<tr> <th><h4 style='font-weight: bold'>ALBERTA Total:</h3></th> <td><h4 style='font-weight: bold'>" + totalCases + "</h4></td></tr>");
    
            var report_date = data['report_date'];
            var caseInfo = data['description_per_case'];
            for (let d of Object.keys(report_date)) {
                $('#list_cases').prepend(
                    `<div class='card' id="`+ d +`" ></div>`
                );
                
                let cinfos = report_date[d];
                let cases = cinfos['cases']
                let summ = cinfos['summary'];
                let summElem = "";
                if(summ){
                    summElem = 
                        `   <div class='case card-body'> 
                                <p class="card-text">`+summ+`</p>
                            </div>
                        `
                }
                for (let c of cases){
                    // let c = ci['cases'];
                    // let summ = ci['summary'];
                    // let summElem = ""
                    // if(summ){
                    //     summElem = `<p class="card-text">`+summ+`</p>`
                    // }

                    $('#'+d).prepend(
                        `<div class='case card-body' id='case`+c+`info'> 
                             <h5 class="card-title">Case  ` + c + ` </h5>
                             <p class="card-text">`+caseInfo[(parseInt(c)-1)]+`</p>
                         </div>`
                    );
                    // $('#case'+c+'info p').prepend()
                }
                $('#'+d)
                    .prepend(summElem)
                    .prepend(`<h4 class='card-header'>`+d+`</h4>`);
                
            }
            
        });
    // }
});