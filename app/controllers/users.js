module.exports = function (app) {
  let bcrypt = require('bcrypt');
  let model = app.models.users;
  let repo = require('../repositories/crud')(model);

  return {
    index: (req, res) => {
      repo.list()
        .then((result) => {
          return res.json(result);
        });
    },
    create: (req, res) => {
      req.body.senha = bcrypt.hashSync(req.body.senha, 10);
      console.log(req.body);
      repo.insert(req.body)
        .then((result) => {
          console.log(result);
          return res.json(result);
        })
        .catch((err) => {
          return res.status(404);
        });
    },
    view: (req, res) => {
      repo.get(req.params.id)
        .then((result) => {
          return res.json(result);
        })
        .catch((err) => {
          return res.status(404);
        });
    },
    edit: (req, res) => {
      if (req.body.senha) req.body.senha = bcrypt.hashSync(req.body.senha, 10);
      repo.update(req.params.id, req.body)
        .then((result) => {
          return res.json(result);
        })
        .catch((err) => {
          return res.status(404);
        });
    },
    delete: (req, res) => {
      repo.delete(req.params.id)
        .then((result) => {
          return res.json(result);
        })
        .catch((err) => {
          return res.status(404);
        });
    },

    login: (req, res) => {
      repo.findOne({email: req.body.login})
      .then((result) => {
            let response = {'data': null}
            if (result.data){
              let confirm = bcrypt.compareSync(req.body.senha, result.data.senha);
              if (confirm){
                response.data = result.data;
              }
            }
            return res.json(response);
        })
        .catch((err) => {
          return res.status(404);
        });
    }
  }
}