const daysName = document.querySelectorAll(".day-name");
const bars = document.querySelectorAll(".bar");
const promiseData = fetch("./data.json");

promiseData
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    populateDayName(data);
    // console.log(data);
    // return data;
  });

function populateDayName(dataArr) {
  for (let i = 0; i < dataArr.length; i++) {
    const dayInfoObj = dataArr[i];
    daysName[i].textContent = dayInfoObj.day;
  }
}
