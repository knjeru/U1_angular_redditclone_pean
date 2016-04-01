var express = require('express');
var router = express.Router();
var query = require('../../../data/posts_queries.js');

router.get('/', function(req,res,next) {
    query.getAllPosts()
    .then(function(data) {
        res.json(data);
    });
});

router.get('/:id', function(req,res,next) {
    query.getAPost(req.params.id)
    .then(function(data) {
        res.json(data);
    });
});

router.post('/new', function(req,res, next) {
    query.addPost(req.body)
    .then(function(data) {
        res.status(200);
    })
    .catch(function(err) {
        if(err) {
            res.status(500);
        }
    });
});

router.put('/:id/edit', function(req,res,next) {
    query.updatePost(req.params.id, req.body)
    .then(function(data) {
        res.status(200)
    })
    .catch(function(err) {
        if(err) {
            res.status(500);
        }
    });
});

router.delete('/:id/delete', function(req,res,next) {
    query.deletePost(req.params.id)
    .then(function(data) {
        res.status(200)
    })
    .catch(function(err) {
        if(err) {
            res.status(500);
        }
    });
});

module.exports = router;

