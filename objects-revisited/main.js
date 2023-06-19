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

    const positionArray = [
      'Customer Service',
      'Salesman',
      'Accountant',
      'Technician',
    ]

    for (let index = 0; index < 4; index++) {
      let split = xhr.response[index].name.split(' ');
      let firstName = split[0].toLowerCase();
      business.employees[firstName] = {};
      business.employees[firstName]['position'] = positionArray[index]
      business.employees[firstName]['daysOfWeekWorking'] = [];
      let day;
      for (let i = 0; i < 5; i++) {
        day = business.daysOpen[Math.floor(Math.random() * 5)];
        if (business.employees[firstName]['daysOfWeekWorking'].length < 5 || business.employees[firstName]['daysOfWeekWorking'].length < 1) {
          if(!business.employees[firstName]['daysOfWeekWorking'].includes(day)) {
            business.employees[firstName]['daysOfWeekWorking'].push(day);
          }
        }
      }
      business.employees[firstName]['daysOfWeekWorking'].push('S');
      business.employees[firstName]['daysOfWeekWorking'].push('Su');
    }

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

console.log(business.employees['jack'])
