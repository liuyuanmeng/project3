import express from 'express'
import { showBooks, showSingleBook } from '../controllers/books.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { addReview, deleteReview, updateReview } from '../controllers/booksReviews.js'
import { secureRoute } from './secureRoute.js'
import { getProfile } from '../controllers/users.js'

const router = express.Router()

// get all book
router.route('/books')
  .get(showBooks)

// get single book
router.route('/books/:id')
  .get(showSingleBook)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/books/:id/reviews')
  .post(secureRoute, addReview)

router.route('/books/:id/reviews/:reviewId')
  .delete(secureRoute, deleteReview)
  .put(secureRoute, updateReview)

router.route('/profile')
  .get(secureRoute, getProfile)

export default router