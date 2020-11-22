/* eslint-disable indent */
import generateEmplyeeService from '../../app/service/emplyeeReService';

const emplyeeService = generateEmplyeeService();

const mockData = [{
    name: '员工1',
    sex: '男',
    age: '34',
    position: '开发',
    year: '3',
    salary: '8600'
  },
  {
    name: '员工2',
    sex: '男',
    age: '34',
    position: '开发',
    year: '3',
    salary: '8600'
  },
  {
    name: '员工3',
    sex: '男',
    age: '34',
    position: '开发',
    year: '3',
    salary: '8600'
  },
  {
    name: '员工4',
    sex: '男',
    age: '34',
    position: '开发',
    year: '3',
    salary: '8600'
  },
  {
    name: '员工5',
    sex: '男',
    age: '34',
    position: '开发',
    year: '3',
    salary: '8600'
  },
  {
    name: '员工6',
    sex: '男',
    age: '34',
    position: '开发',
    year: '3',
    salary: '8600'
  },
  {
    name: '员工7',
    sex: '女',
    age: '23',
    position: '开发',
    year: '3',
    salary: '6600'
  },
  {
    name: '员工8',
    sex: '女',
    age: '23',
    position: '开发',
    year: '3',
    salary: '6600'
  },
  {
    name: '员工9',
    sex: '女',
    age: '23',
    position: '开发',
    year: '3',
    salary: '6600'
  },
  {
    name: '员工10',
    sex: '女',
    age: '23',
    position: '开发',
    year: '3',
    salary: '6600'
  },
  {
    name: '员工11',
    sex: '女',
    age: '23',
    position: '开发',
    year: '3',
    salary: '6600'
  },
  {
    name: '员工12',
    sex: '女',
    age: '23',
    position: '开发',
    year: '3',
    salary: '6600'
  },
  {
    name: '员工13',
    sex: '女',
    age: '23',
    position: '开发',
    year: '3',
    salary: '6600'
  },
  {
    name: '员工14',
    sex: '女',
    age: '23',
    position: '开发',
    year: '3',
    salary: '6600'
  }
];

const run = async () => {
  let emplyee;
  for (let i = 0; i <= 100; i++) {
    let randNum = parseInt(Math.random() * 14, 10);
    emplyee = mockData[randNum];
    emplyee.name = `员工-${i}`;
    await emplyeeService.add(emplyee);
  }
};

run();