const genericCrud = require('../service/crud/index');
const Category = require('../model/Category');


module.exports = {
    ...genericCrud(Category)
};