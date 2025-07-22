const express = require('express');
const { body } = require('express-validator');
const { 
  saveMessage, 
  getChatHistory, 
  getConversations, 
  deleteConversation 
} = require('../controllers/chatController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Validation rules
const messageValidation = [
  body('conversation')
    .notEmpty()
    .withMessage('Conversation ID is required'),
  body('messages')
    .isArray({ min: 1 })
    .withMessage('Messages array is required and must not be empty'),
  body('messages.*.role')
    .isIn(['user', 'model'])
    .withMessage('Message role must be either user or model'),
  body('messages.*.text')
    .notEmpty()
    .withMessage('Message text is required')
];

// All routes require authentication
router.use(authMiddleware);

// Routes
router.post('/message', messageValidation, saveMessage);
router.get('/history/:conversation', getChatHistory);
router.get('/conversations', getConversations);
router.delete('/conversation/:conversation', deleteConversation);

module.exports = router;