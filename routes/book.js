const express = require('express')
const book = require('../models/book')
const bookRouter = express.Router()

bookRouter.route("/")
    .get((req, res) => {
        book.find((err, book) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(book)
        })
    })
    .post((req, res) => {
        const newBook = new book(req.body)

        newBook.save((err, book) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(book)
        })
    })
bookRouter.route("/:_id")
    .get((req, res) => {
        book.findById((err, book) => {
            if(err) return res.status(500).send(err)
            if(!book) return res.status(404).send(err)
            return res.status(200).send(book)
        })
    })
    .put((req, res) => {
        book.findOneAndUpdate(
            {_id: req.params._id},
            req.body,
            {new: true},
            (err, book) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(book)
            }
        )
    })
    .delete((req, res) => {
        book.findOneAndRemove(
            {_id: req.params.id},
            (err, concert) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(book)
            }
        )
    })
module.exports = bookRouter