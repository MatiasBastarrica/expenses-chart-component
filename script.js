const daysName = document.querySelectorAll(".day-name");
const bars = document.querySelectorAll(".bar");
const spendingTags = document.querySelectorAll(".spending-value-tag");
const promiseData = fetch("./data.json");

promiseData
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    populateChart(data);
    handleBarColor();
  });

function populateChart(dataArr) {
  for (let i = 0; i < dataArr.length; i++) {
    const dayInfoObj = dataArr[i];
    daysName[i].textContent = dayInfoObj.day;
    bars[i].style.height = `${dayInfoObj.amount * (160 / 60)}px`;
    spendingTags[i].textContent = `$${dayInfoObj.amount}`;
  }
}

function handleBarColor() {
  const currentDate = new Date();
  const currentDayOfTheWeek = currentDate.getDay();
  switch (currentDayOfTheWeek) {
    case 0:
      changeBarColor(bars[6]);
      break;
    case 1:
      changeBarColor(bars[0]);
      break;
    case 2:
      changeBarColor(bars[1]);
      break;
    case 3:
      changeBarColor(bars[2]);
      break;
    case 4:
      changeBarColor(bars[3]);
      break;
    case 5:
      changeBarColor(bars[4]);
      break;
    case 6:
      changeBarColor(bars[5]);
      break;
    default:
      break;
  }
}

function changeBarColor(bar) {
  bar.style.backgroundColor = "var(--blue-300)";
}
