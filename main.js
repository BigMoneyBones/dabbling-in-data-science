const ctx = document.getElementById("myChart").getContext("2d");

async function setup() {
  let jsonFetch = await fetch("dunkinDonuts.json");
  let dunkinData = await jsonFetch.json();
  console.log(dunkinData);

  let labels = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  let stateData = [];

  let ALCount = 0;
  let AKCount = 0;
  let AZCount = 0;
  let ARCount = 0;
  let CACount = 0;
  let COCount = 0;
  let CTCount = 0;
  let DECount = 0;
  let FLCount = 0;
  let GACount = 0;
  let HICount = 0;
  let IDCount = 0;
  let ILCount = 0;
  let INCount = 0;
  let IACount = 0;
  let KSCount = 0;
  let KYCount = 0;
  let LACount = 0;
  let MECount = 0;
  let MDCount = 0;
  let MACount = 0;
  let MICount = 0;
  let MNCount = 0;
  let MSCount = 0;
  let MOCount = 0;
  let MTCount = 0;
  let NECount = 0;
  let NVCount = 0;
  let NHCount = 0;
  let NJCount = 0;
  let NMCount = 0;
  let NYCount = 0;
  let NCCount = 0;
  let NDCount = 0;
  let OHCount = 0;
  let OKCount = 0;
  let ORCount = 0;
  let PACount = 0;
  let RICount = 0;
  let SCCount = 0;
  let SDCount = 0;
  let TNCount = 0;
  let TXCount = 0;
  let UTCount = 0;
  let VTCount = 0;
  let VACount = 0;
  let WACount = 0;
  let WVCount = 0;
  let WICount = 0;
  let WYCount = 0;

  for (let i = 0; i < dunkinData.length; i++) {
    if (dunkinData[i].state === "AL") {
      ALCount++;
    } else if (dunkinData[i].state === "AK") {
      AKCount++;
    } else if (dunkinData[i].state === "AZ") {
      AZCount++;
    } else if (dunkinData[i].state === "AR") {
      ARCount++;
    } else if (dunkinData[i].state === "CA") {
      CACount++;
    } else if (dunkinData[i].state === "CO") {
      COCount++;
    } else if (dunkinData[i].state === "CT") {
      CTCount++;
    } else if (dunkinData[i].state === "DE") {
      DECount++;
    } else if (dunkinData[i].state === "FL") {
      FLCount++;
    } else if (dunkinData[i].state === "GA") {
      GACount++;
    } else if (dunkinData[i].state === "HI") {
      HICount++;
    } else if (dunkinData[i].state === "ID") {
      IDCount++;
    } else if (dunkinData[i].state === "IL") {
      ILCount++;
    } else if (dunkinData[i].state === "IN") {
      INCount++;
    } else if (dunkinData[i].state === "IA") {
      IACount++;
    } else if (dunkinData[i].state === "KS") {
      KSCount++;
    } else if (dunkinData[i].state === "KY") {
      KYCount++;
    } else if (dunkinData[i].state === "LA") {
      LACount++;
    } else if (dunkinData[i].state === "ME") {
      MECount++;
    } else if (dunkinData[i].state === "MD") {
      MDCount++;
    } else if (dunkinData[i].state === "MA") {
      MACount++;
    } else if (dunkinData[i].state === "MI") {
      MICount++;
    } else if (dunkinData[i].state === "MN") {
      MNCount++;
    } else if (dunkinData[i].state === "MS") {
      MSCount++;
    } else if (dunkinData[i].state === "MO") {
      MOCount++;
    } else if (dunkinData[i].state === "MT") {
      MTCount++;
    } else if (dunkinData[i].state === "NE") {
      NECount++;
    } else if (dunkinData[i].state === "NV") {
      NVCount++;
    } else if (dunkinData[i].state === "NH") {
      NHCount++;
    } else if (dunkinData[i].state === "NJ") {
      NJCount++;
    } else if (dunkinData[i].state === "NM") {
      NMCount++;
    } else if (dunkinData[i].state === "NY") {
      NYCount++;
    } else if (dunkinData[i].state === "NC") {
      NCCount++;
    } else if (dunkinData[i].state === "ND") {
      NDCount++;
    } else if (dunkinData[i].state === "OH") {
      OHCount++;
    } else if (dunkinData[i].state === "OK") {
      OKCount++;
    } else if (dunkinData[i].state === "OR") {
      ORCount++;
    } else if (dunkinData[i].state === "PA") {
      PACount++;
    } else if (dunkinData[i].state === "RI") {
      RICount++;
    } else if (dunkinData[i].state === "SC") {
      SCCount++;
    } else if (dunkinData[i].state === "SD") {
      SDCount++;
    } else if (dunkinData[i].state === "TN") {
      TNCount++;
    } else if (dunkinData[i].state === "TX") {
      TXCount++;
    } else if (dunkinData[i].state === "UT") {
      UTCount++;
    } else if (dunkinData[i].state === "VT") {
      VTCount++;
    } else if (dunkinData[i].state === "VA") {
      VACount++;
    } else if (dunkinData[i].state === "WA") {
      WACount++;
    } else if (dunkinData[i].state === "WV") {
      WVCount++;
    } else if (dunkinData[i].state === "WI") {
      WICount++;
    } else if (dunkinData[i].state === "WY") {
      WYCount++;
    }
  }
  stateData.push(
    ALCount,
    AKCount,
    AZCount,
    ARCount,
    CACount,
    COCount,
    CTCount,
    DECount,
    FLCount,
    GACount,
    HICount,
    IDCount,
    ILCount,
    INCount,
    IACount,
    KSCount,
    KYCount,
    LACount,
    MECount,
    MDCount,
    MACount,
    MICount,
    MNCount,
    MSCount,
    MOCount,
    MTCount,
    NECount,
    NVCount,
    NHCount,
    NJCount,
    NMCount,
    NYCount,
    NCCount,
    NDCount,
    OHCount,
    OKCount,
    ORCount,
    PACount,
    RICount,
    SCCount,
    SDCount,
    TNCount,
    TXCount,
    UTCount,
    VTCount,
    VACount,
    WACount,
    WVCount,
    WICount,
    WYCount
  );
  console.log(stateData);

  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of Votes",
          data: stateData,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
setup();
