const business = {
  opens: '9am',
  closes: '5pm',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    john: {
      position: 'Cashier',
      daysOfWeekWorking: ['M', 'W', 'Th', 'F']
    },
    ted: {
      position: 'Stocking',
      daysOfWeekWorking: ['M', 'T', 'F']
    },
    jack: {
      position: 'Manager',
      daysOfWeekWorking: ['M', 'T', 'W', 'Th', 'F']
    },
    jasmine: {
      position: 'Barista',
      daysOfWeekWorking: ['M', 'W', 'Th']
    },
  }
}

function addWeekends() {
  business.daysOpen.push('S');
  business.daysOpen.push('Su');
  for (const property in business.employees) {
    business.employees[property].daysOfWeekWorking.push('S');
    business.employees[property].daysOfWeekWorking.push('Su');
  }
}

function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    for (let index = 0; index < 4; index++) {
      business.employees[xhr.response[index].name] = xhr.response[index];
      business.employees[xhr.response[index].name]['daysOfWeekWorking'] = [];
      let day;
      for (let i = 0; i < 5; i++) {
        day = business.daysOpen[Math.floor(Math.random() * 5)];
        if (business.employees[xhr.response[index].name]['daysOfWeekWorking'].length < 5 || business.employees[xhr.response[index].name]['daysOfWeekWorking'].length < 1) {
          if(!business.employees[xhr.response[index].name]['daysOfWeekWorking'].includes(day)) {
            business.employees[xhr.response[index].name]['daysOfWeekWorking'].push(day);
          }
        }
      }
      business.employees[xhr.response[index].name]['daysOfWeekWorking'].push('S');
      business.employees[xhr.response[index].name]['daysOfWeekWorking'].push('Su');
    }
    business.employees['Clementine Bauch']['title'] = 'Customer Service';
    business.employees['Ervin Howell']['title'] = 'Salesman';
    business.employees['Leanne Graham']['title'] = 'Accountant';
    business.employees['Patricia Lebsack']['title'] = 'Technician';

    for (const key in business.employees) {
      if (business.employees[key].daysOfWeekWorking.length > 5) {
        business.employees[key]['fullTime'] = true;
      } else {
        business.employees[key]['fullTime'] = false;
      }
    }

    business.totalEmployees = Object.keys(business.employees).length;

    console.log(business);
  })
  xhr.send();
}

function deleteEmployees(employeeName) {
  delete business.employees[employeeName];
  business.totalEmployees = Object.keys(business.employees).length;
}

document.addEventListener('DOMContentLoaded', () => {
  addWeekends();
  addEmployees();
  deleteEmployees('ted');
})
