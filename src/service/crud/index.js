const boom = require("boom");

// /123  - params ?id=123  - query

const genericCrud = (model, { get = "", getAll = "" } = {}) => ({
  async get({ params: { id } }, res) {
    try {
      const item = await model.findById(id).populate(get);
      return res.status(200).send(item);
    } catch (e) {
      return res.status(400).send(boom.boomify(e));
    }
  },
  async getAll(req, res) {
    try {
      const items = await model.find().populate(getAll);
      return res.status(200).send(items);
    } catch (e) {
      console.log("req");
      return res.status(400).send(boom.boomify(e));
    }
  },
  async create({ body }, res) {
    try {
      const item = new model({ ...body });
      const newItem = await item.save();
      return res.status(200).send(newItem);
    } catch (e) {
      return res.status(400).send(boom.boomify(e));
    }
  },
  async update({ params: { id }, body }, res) {
    try {
      const item = await model.findByIdAndUpdate(id, body, { new: true });
      return res.status(200).send(item);
    } catch (e) {
      return res.status(400).send(boom.boomify(e));
    }
  },
  async delete({ params: { id } }, res) {
    console.log('id ' + id )
    try {
      console.log('id ' + id )
      await model.findByIdAndDelete(id);
      return res.status(200).send({
        status: "OK",
        message: "Продукт удален",
      });
    } catch (e) {
      return res.status(400).send(boom.boomify(e));
    }
  },
});

module.exports = genericCrud;
