const GroupController = require('../controllers/Group.controller');

module.exports = app => {
    app.get('/api/groups', GroupController.fetchAll);
    app.post('/api/groups/create', GroupController.createGroup);
    app.delete('/api/pirates/delete/:id', GroupController.delete);
    app.get('/api/pirates/show/:id', GroupController.findOne);
}