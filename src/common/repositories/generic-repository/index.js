const GenericRepository = Model => ({
  create(data) {
    return Model.create(data);
  },
  createMany(data) {
    return Model.bulkCreate(data);
  },
  getAll(options) {
    return options ? Model.findAll({ where: options }) : Model.findAll();
  },
  getById(id, options = {}) {
    return Model.findOne({ where: { id, ...options } });
  },
  async updateById(id, data, options = {}, config = {}) {
    return Model.update(data, { where: { id, ...options }, ...config, returning: true, plain:true });
  },
  deleteById(id, options = {}) {
    return Model.destroy({ where: { id, ...options } });
  },
});

export default GenericRepository;
