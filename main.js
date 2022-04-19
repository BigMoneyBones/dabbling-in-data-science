const ctx = document.getElementById("myChart").getContext("2d");

async function setup() {
  let jsonFetch = await fetch("dunkinDonuts.json");
  jsonFetch = await jsonFetch.json();
  let dunkinData = jsonFetch.data;
  console.log(dunkinData);

  let state = data.map((x) => x.state);
  let drivein = data.filter((x) => x.drivein == "Y");
  drivein = drivein.map((x) => x.state);

  let storeCount = state.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});

  let driveInCount = drivein.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});

  let driveInData = [];

  for (let store in storeCount) {
    let y = driveInCount[store] ? driveInCount[store] : 0;
    driveInData.push(y);
  }

  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
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
