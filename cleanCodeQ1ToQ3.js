const factories = [
  { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
  { name: "BR2", employees: ["Jessie", "Karen", "John"] },
  { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
  { name: "BR4", employees: [] },
];

//////////// Q1:Count Employees Number by Factory ////////////
function EmployeesNumberByFactory() {
  var output = [];
  for (var i = 0; i < factories.length; i++) {
    var employeesNumberByFactory = {
      name: factories[i].name,
      count: factories[i].employees.length,
    };
    output.push(employeesNumberByFactory);
  }
  console.log(output);
}

//////////// Q2:Count Factories Number by Employee ////////////
function FactoriesNumberByEmployee() {
  var allEmployee = [];
  // 取得所有員工姓名
  for (var i = 0; i < factories.length; i++) {
    for (var j = 0; j < factories[i].employees.length; j++) {
      allEmployee.push(factories[i].employees[j]);
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
    for (var j = 0; j < factories.length; j++) {
      if (factories[j].employees.includes(allEmployeeName[i])) {
        count++;
      }
    }
    output.push({ name: allEmployeeName[i], count: count });
    count = 0;
  }
  console.log(output);
}

//////////// Q3:Order employees list by alphabetical order ////////////
function OrderEmployeesListByAlphabeticalOrder() {
  for (var i = 0; i < factories.length; i++) {
    factories[i].employees = factories[i].employees.sort();
  }
  console.log(factories);
}

//////////// output ////////////
//Q1
console.log("Q1:");
EmployeesNumberByFactory();
//Q2
console.log("Q2:");
FactoriesNumberByEmployee();
//Q3
console.log("Q3:");
OrderEmployeesListByAlphabeticalOrder();
