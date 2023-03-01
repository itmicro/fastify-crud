const CrudWithImage = require('../service/crud/withimage');
const Product = require('../model/Product');


const relations = {
    getAll:'category',
    get:'category'
}

module.exports = {
    ...CrudWithImage(Product)
};