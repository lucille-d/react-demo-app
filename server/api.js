"use strict";

var _ = require('lodash'),
<<<<<<< HEAD
    CATS = require('./data/cats.json');
=======
    CATS = require('./data/cats')
    .cats;
>>>>>>> 8587de61fe88b697fc5b0b1b189a0e538f109e63

/**
 * Fetch all cats
 * If category query is provided, fetch cats filtered by category
 */
exports.fetchCats = function (req, res) {
    var cats = [];
    if (req.query.category) {
        cats = CATS.filter(function (cat) {
            return cat.category === req.query.category;
        });
    } else {
        cats = CATS;
    }

    setTimeout(function () {
        res.status(200)
            .json(cats);
    }, 1000);
};


/**
 * Fetch a cat by id
 */
exports.fetchCat = function (req, res) {
    var id = req.params.id,

        cat = _.find(CATS, function (cat) {
            return cat.id == id;
        });

    if (cat) {
        return res.status(200)
            .json(cat);
    } else {
        return res.status(404)
            .end();
    }
};

/**
 * Create a cat
 */
exports.addCat = function (req, res) {
    var catToAdd = req.body;

    var maxID = _(CATS)
        .map('id')
        .max() || 0;
    catToAdd.id = maxID + 1;

    console.log(catToAdd);

    CATS.push(catToAdd);

    return res.status(201)
        .json(catToAdd);
};


/**
 * Update a cat
 */
exports.updateCat = function (req, res) {
    var cattoUpdate = req.body,
        id = req.params.id;

    _.forEach(CATS, function (cat, index) {
        if (cat.id == id) {
            CATS[index] = cattoUpdate;
            return res.status(200)
                .json({});
        }
    });

    return res.status(304)
        .end();
};


/**
 * Delete a cat
 */
exports.deleteCat = function (req, res) {
    var id = req.params.id,
        removedCats = _.remove(CATS, function (cat) {
            return cat.id == id;
        });

    if (_.isEmpty(removedCats)) {
        return res.status(304)
            .end();
    } else {
        return res.status(200)
            .json({});
    }
};
