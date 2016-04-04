var express = require('express');
var router = express.Router();
var query = require('../../../data/comments_queries.js');

router.get('/', function(req,res,next) {
    query.getPostComments()
    .then(function(data) {
        res.json(data);
    });
});

router.post('/', function(req,res, next) {
    query.addComment(req.body)
    .then(function(data) {
        res.json({
            message: 'success'
        });
    })
    .catch(function(err) {
        if(err) {
            res.json({
                message: 'error at the plant'
            });
        }
    });
});

router.put('/:id/edit', function(req,res,next) {
    query.updateComment(req.params.id, req.body)
    .then(function(data) {
        res.status(200);
    })
    .catch(function(err) {
        if(err) {
            res.status(500);
        }
    });
});

router.delete('/:id/delete', function(req,res,next) {
    query.deleteComment(req.params.id)
    .then(function(data) {
        res.json({
            message: 'success'
        })
    })
    .catch(function(err) {
        if(err) {
            res.status(500)
        }
    });
});

module.exports = router;
