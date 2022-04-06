const employeeType = [
  { id: 1, name: "FullTime", work_begin: "09:00:00", work_end: "17:00:00" },
  { id: 2, name: "MidTime", work_begin: "12:00:00", work_end: "21:00:00" },
  { id: 3, name: "HalfTime", work_begin: "20:00:00", work_end: "00:00:00" },
];

const employees = [
  { id: 1, name: "Alice", type: 2 },
  { id: 2, name: "Bob", type: 3 },
  { id: 3, name: "John", type: 2 },
  { id: 4, name: "Karen", type: 1 },
  { id: 5, name: "Miles", type: 3 },
  { id: 6, name: "Henry", type: 1 },
];

const tasks = [
  { id: 1, title: "task01", duration: 60 }, //min
  { id: 2, title: "task02", duration: 120 },
  { id: 3, title: "task03", duration: 180 },
  { id: 4, title: "task04", duration: 360 },
  { id: 5, title: "task05", duration: 30 },
  { id: 6, title: "task06", duration: 220 },
  { id: 7, title: "task07", duration: 640 },
  { id: 8, title: "task08", duration: 250 },
  { id: 9, title: "task09", duration: 119 },
  { id: 10, title: "task10", duration: 560 },
  { id: 11, title: "task11", duration: 340 },
  { id: 12, title: "task12", duration: 45 },
  { id: 13, title: "task13", duration: 86 },
  { id: 14, title: "task14", duration: 480 },
  { id: 15, title: "task15", duration: 900 },
];

//////////// Q4:Count total hours worked in 1 day ////////////
function totalHoursWorked() {
  var totalHour = 0;
  for (var i = 0; i < employees.length; i++) {
    totalHour =
      employees[i].type == 1
        ? (totalHour += 7.5)
        : employees[i].type == 2
        ? (totalHour += 8)
        : employees[i].type == 3
        ? (totalHour += 4)
        : false;
  }
  console.log(totalHour);
}

//////////// Q5:Make a function that take as parameters dayTime and return number of employee working // howManyEmployeeByTime(time) => int ////////////
function howManyEmployeeByTime(time) {
  // 先判斷輸入的時間符合哪些時段
  var type = [];
  if (9 < time && time < 17) type.push(1);
  if (12 < time && time < 21) type.push(2);
  if (21 < time && time < 24) type.push(3);
  // 依照符合的時段去篩選員工
  count = 0;
  for (var i = 0; i < employees.length; i++) {
    if (type.includes(employees[i].type)) {
      count++;
    }
  }
  console.log(count + "位");
}

//////////// Q6:How many days of work needed to done all tasks ? ////////////
function daysOfWorkToDone() {
  //算出全部工作需要總時數
  var totalWorkTime = 0;
  for (var i = 0; i < tasks.length; i++) {
    totalWorkTime = totalWorkTime + tasks[i].duration;
  }
  var workNeedTimeDay = parseInt(totalWorkTime / 39); // 39為 totalHoursWorked function 得出公司一天總工作時數
  var workNeedTimeHour = totalWorkTime % 39;
  console.log("需要" + workNeedTimeDay + "天" + workNeedTimeHour + "小時");
}

//////////// output ////////////
//Q4
totalHoursWorked();
//Q5
howManyEmployeeByTime(16);
//Q6
daysOfWorkToDone();
