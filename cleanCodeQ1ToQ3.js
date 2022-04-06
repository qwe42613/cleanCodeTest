### JS Test

For any question of this document, we aren't waiting for a number or answer, but we are waiting for javascript functions.

Make a git public repo or add @loiu92 to your private repos.

#### Assuming we have an array of factories

const factories = [
  { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
  { name: "BR2", employees: ["Jessie", "Karen", "John"] },
  { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
  { name: "BR4", employees: [] },
];

//////////// Q1:Count Employees Number by Factory ////////////
function EmployeesNumberByFactory(target) {
  var output = [];
  for (var i = 0; i < target.length; i++) {
    var employeesNumberByFactory = {
      name: target[i].name,
      count: target[i].employees.length,
    };
    output.push(employeesNumberByFactory);
  }
  console.log(output);
}

//////////// Q2:Count Factories Number by Employee ////////////
function FactoriesNumberByEmployee(target) {
  var allEmployee = [];
  // 取得所有員工姓名
  for (var i = 0; i < target.length; i++) {
    for (var j = 0; j < target[i].employees.length; j++) {
      allEmployee.push(target[i].employees[j]);
    }
    // 去除員工姓名重複值
    var allEmployeeName = allEmployee.filter(function (item, index, array) {
      return array.indexOf(item) === index;
    });
  }
  // 透過員工姓名去陣列尋找資料
  var output = [];
  var count = 0;
  for (var i = 0; i < allEmployeeName.length; i++) {
    for (var j = 0; j < target.length; j++) {
      if (target[j].employees.includes(allEmployeeName[i])) {
        count++;
      }
    }
    output.push({ name: allEmployeeName[i], count: count });
    count = 0;
  }
  console.log(output);
}

//////////// Q3:Order employees list by alphabetical order ////////////
function OrderEmployeesListByAlphabeticalOrder(target) {
  for (var i = 0; i < target.length; i++) {
    factories[i].employees = target[i].employees.sort();
  }
  console.log(target);
}

//////////// output ////////////
//Q1
console.log("Q1:");
EmployeesNumberByFactory(factories);
//Q2
console.log("Q2:");
FactoriesNumberByEmployee(factories);
//Q3
console.log("Q3:");
OrderEmployeesListByAlphabeticalOrder(factories);
