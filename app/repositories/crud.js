module.exports = function(model) {
  let promiseResolve = function(resolve, reject, err, result) {
    if (err) {
      return reject({err: err})
    }
    return resolve({data: result});
  }

  return {
    list: function() {
      return new Promise((resolve, reject) => {
        model.find(null, (err, result) => {
          return promiseResolve(resolve, reject, err, result)
        })
      });
    },
    insert: function(data) {
      console.log(data);
      return new Promise((resolve, reject) => {
        model.create(data, (err, result) => {
          return promiseResolve(resolve, reject, err, result)
        });
      });
    },
    get: function(id) {
      return new Promise((resolve, reject) => {
        model.findById(id, (err, result) => {
          return promiseResolve(resolve, reject, err, result)
        })
      });
    },
    update: function(id, data) {
      return new Promise((resolve, reject) => {
        model.findByIdAndUpdate(id, {$set: data}, (err, result) => {
          return promiseResolve(resolve, reject, err, result)
        })
      });
    },
    delete: function(id) {
      return new Promise((resolve, reject) => {
        model.findByIdAndRemove(id, (err, result) => {
          return promiseResolve(resolve, reject, err, result)
        });
      })
    },
    findOne: function(data) {
      return new Promise((resolve, reject) => {
        model.findOne(data, (err, result) => {
          return promiseResolve(resolve, reject, err, result)
        })
      });
    },
  }
}