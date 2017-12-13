const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: String,
  basic: Boolean
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  });

// --- Get Id from Name --- //
ingredientSchema.statics.getIdFromName = function (name) {
  return this.findOne({ name: new RegExp('^' + name + '$', 'i') })
    .then(ingredient => {
      if (!ingredient) {
        return null;
      }
      return ingredient._id;
    });
};

ingredientSchema.statics.getIdsFromNames = function (names) {
  const promises = names.map((name) => {
    return this.getIdFromName(name);
  });
  return Promise.all(promises)
    .then((ids) => ids.filter(id => id));
};

// --- Get Name from Id --- //
ingredientSchema.statics.getNameFromId = function (id) {
  console.log('id');
  console.log(id);
  return this.findById({ id })
    .then(ingredient => {
      if (!ingredient) {
        return null;
      }
      return ingredient.name;
    });
};

ingredientSchema.statics.getNamesFromIds = function (ids) {
  console.log('ids');
  console.log(ids);
  const promises = ids.map((id) => {
    return this.getIdFromName(id);
  });
  return Promise.all(promises)
    .then((names) => names.filter(name => name));
};

module.exports = mongoose.model('Ingredient', ingredientSchema);
