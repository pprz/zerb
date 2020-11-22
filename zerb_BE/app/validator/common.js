import {
  LinValidator,
  Rule,
  config
} from 'lin-mizar';

class PositiveIdValidator extends LinValidator {
  constructor() {
    super();
    this.id = new Rule('isInt', 'id必须为整数', {
      min: 0
    });
  }
}

class CreateOrUpdateValidator extends LinValidator {
  constructor() {
    super();
    this.name = new Rule('isNotEmpty', '必须传入姓名');
    this.sex = new Rule('isNotEmpty', '必须传入性别');
    this.position = new Rule('isNotEmpty', '必须传入职位');
    this.age = new Rule('isNotEmpty', '必须传入年龄');
    this.year = new Rule('isNotEmpty', '必须传入工作年限');
    this.salary = new Rule('isNotEmpty', '必须传入工资');
  }
}

class PaginateValidator extends LinValidator {
  constructor() {
    super();
    this.count = [
      new Rule('isOptional', '', config.getItem('countDefault')),
      new Rule('isInt', 'count必须为正整数', {
        min: 1
      })
    ];
    this.page = [
      new Rule('isOptional', '', config.getItem('pageDefault')),
      new Rule('isInt', 'page必须为整数，且大于等于0', {
        min: 0
      })
    ];
  }
}

export {
  PaginateValidator,
  PositiveIdValidator,
  CreateOrUpdateValidator
};
