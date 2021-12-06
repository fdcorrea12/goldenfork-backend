const ordens = require('../models/orden');

const ordenCtrl = {};

ordenCtrl.getOrdens = async(req, res, next) => {
    const orden = await ordens.find();
    res.json(orden);
};

ordenCtrl.createOrden = async(req, res, next) => {
    const orden = new ordens({
        name: req.body.name,
        lastName: req.body.lastName,
        telephone: req.body.telephone,
        email: req.body.email,
        entry: req.body.entry,
        canEntry: req.body.canEntry,
        mainCourse: req.body.mainCourse,
        canMainCourse: req.body.canMainCourse,
        drink: req.body.drink,
        canDrink: req.body.canDrink,
        dessert: req.body.dessert,
        canDessert: req.body.canDessert
    });
    await orden.save();
    res.json({ 'status': 'Orden guardada' });
};

ordenCtrl.getOrden = async(req, res) => {
    const orden = await ordens.findById(req.params.id);
    res.json(orden);
};

ordenCtrl.editOrden = async(req, res) => {
    const { id } = req.params;
    const orden = {
        name: req.body.name,
        lastName: req.body.lastName,
        telephone: req.body.telephone,
        email: req.body.email,
        entry: req.body.entry,
        canEntry: req.body.canEntry,
        mainCourse: req.body.mainCourse,
        canMainCourse: req.body.canMainCourse,
        drink: req.body.drink,
        canDrink: req.body.canDrink,
        dessert: req.body.dessert,
        canDessert: req.body.canDessert
    };
    await ordens.findByIdAndUpdate(id, { $set: orden }, { new: true });
    res.json({ status: 'Orden Update' });
};

ordenCtrl.deleteOrden = async(req, res, next) => {
    await ordens.findByIdAndRemove(req.params.id);
    res.json({ status: 'orden Deleted' });
};

module.exports = ordenCtrl;