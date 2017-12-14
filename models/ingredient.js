const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: String,
  basic: Boolean
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  });

// --- Get ids from names --- //
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

module.exports = mongoose.model('Ingredient', ingredientSchema);
