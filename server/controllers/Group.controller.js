const Group = require('../models/Group.model');

module.exports.fetchAll = (_req, res) => {
    Group.find()
        .then(allGroups => res.json(allGroups))
        .catch(err => res.status(400).json(err));
}

module.exports.createGroup = (req, res) => {
    const group = req.body;
    Group.create(group)
        .then(group => res.json(group))
        .catch(err => res.status(400).json(err));
}

module.exports.delete = (req, res) => {
    const {id} = req.params;
    Group.findByIdAndDelete(id)
        .then(() => res.json({success: true}))
        .catch(err => res.json(err));
}

module.exports.findOne = (req, res) => {
    const {id} = req.params;
    Group.findById(id)
        .then(group => res.json(group))
        .catch(err => res.json(err));
}