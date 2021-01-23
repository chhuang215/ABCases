let jsonUrl = "https://abcase-serv.now.sh/";
let tries = 0;

//document.addEventListener("DOMContentLoaded", (e) => {

function generateChart(data) {
  let zones_accumulate = data['zones_accumulate'];
  // let labels = data['dates'].map(d => d.replace("2020-", "").replace('-','/'));
  let labels = data['dates'].map(d => d.substr(5, 10).replace('-', '/'));
  var chartTotal = new Chart(document.getElementById('chartTotal').getContext('2d'), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          type: 'line',
          label: 'Recovered',
          borderColor: 'rgba(230, 200, 200, 1)',
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


  var chartPerday = new Chart(document.getElementById('chartPerday').getContext('2d'), {
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

var app = new Vue({
  el: '#app',
  data: {
    zone_list: [],
    ztotal: {},
    svgmaphtml: "",
    html_daily_cases:"",
    loading: true,
  },
  methods: {
    fetchData: async function () {
      var self = this;

      axios.get(jsonUrl).then(function (resp) {
        let data = resp['data'];
        let zone_list = data['zone_list'];
        let zones_accumulate = data['zones_accumulate']

        let zAccumAll = zones_accumulate['all'];
        let totalCases = zAccumAll['confirmed_cases'][zAccumAll['confirmed_cases'].length - 1];
        let totalDeath = zAccumAll['death'][zAccumAll['death'].length - 1];
        let totalLastAdditional = zAccumAll['cases_per_day'][zAccumAll['cases_per_day'].length - 1];
        let totalLastDeath = zAccumAll['death_per_day'][zAccumAll['death_per_day'].length - 1];

        if (totalCases <= -2) {
          console.log("retry..." + tries);
          if (tries >= 4) {
            axios.get('https://abcase-serv.now.sh/update').then(function (resp) {
              if (resp.status != 200) {
                throw resp.status + resp.statusText
              }
              setTimeout(self.fetchData, 1200);
            }).catch(function (err) {
              alert("Failed to retrieve data " + err);
            })
          }
          else {
            setTimeout(self.fetchData, 1000);
          }
          tries += 1;
        }
        else {
          self.loading = false;
          tries = 0;
          self.svgmaphtml = data.svgmap;
          self.html_daily_cases = data['html_daily_cases'];

          self.zone_list = zone_list.map(function(aZone) {
            let caseData = zones_accumulate[aZone];
            return {
              zoneName: aZone.indexOf("Not ") == -1? aZone + " Zone" : aZone,
              caseNum : caseData['confirmed_cases'][caseData['confirmed_cases'].length - 1],
              caseDeath : caseData['death'][caseData['death'].length - 1],
              lastAdditionalConfirmed : caseData['cases_per_day'][caseData['cases_per_day'].length - 1],
              lastAdditionalDeath : caseData['death_per_day'][caseData['death_per_day'].length - 1],
            }
          });

          self.ztotal = {
            recovered_total: zAccumAll['recovered'][zAccumAll['recovered'].length - 1],
            recovered_day : zAccumAll['recovered_per_day'][zAccumAll['recovered_per_day'].length - 1],
            totalActiveCases : zAccumAll['active'][zAccumAll['active'].length - 1],
            totalLastActiveCount : zAccumAll['active'][zAccumAll['active'].length - 2] ?? 0,
            totalCases : totalCases,
            totalLastAdditional : totalLastAdditional,
            totalDeath : totalDeath,
            totalLastDeath: totalLastDeath
          }
          
          generateChart(data);
        }

      }).catch(function (resp) { console.log(resp) }).then();
    }
  },
  mounted: function () {
    console.log("run")
    this.fetchData();
  }
})

//});