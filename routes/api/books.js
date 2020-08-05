const router = require("express").Router();
const booksController = require("../../controllers/booksController");


router.route("/")
//get
  .get(booksController.findAll)
//post
  .post(booksController.create);

  //delete
router.route("/:id")
  .delete(booksController.remove);

module.exports = router;
