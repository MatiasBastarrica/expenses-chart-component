const daysName = document.querySelectorAll(".day-name");
const bars = document.querySelectorAll(".bar");
const promiseData = fetch("./data.json");

promiseData
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    populateChart(data);
    // console.log(data);
    // return data;
  });

function populateChart(dataArr) {
  for (let i = 0; i < dataArr.length; i++) {
    const dayInfoObj = dataArr[i];
    daysName[i].textContent = dayInfoObj.day;
    bars[i].style.height = `${dayInfoObj.amount * (160 / 60)}px`;
  }
}
