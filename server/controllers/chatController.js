const Message = require('../models/Message');

// @desc    Save chat message
// @route   POST /api/chat/message
// @access  Private
const saveMessage = async (req, res) => {
  try {
    const { conversation, messages } = req.body;
    const userId = req.user.id;

    // Find existing conversation or create new one
    let messageDoc = await Message.findOne({
      user: userId,
      conversation: conversation
    });

    if (messageDoc) {
      // Add new messages to existing conversation
      messageDoc.messages.push(...messages);
      await messageDoc.save();
    } else {
      // Create new message document
      messageDoc = await Message.create({
        user: userId,
        conversation: conversation,
        messages: messages
      });
    }

    res.status(201).json({
      success: true,
      message: 'Messages saved successfully',
      data: messageDoc
    });
  } catch (error) {
    console.error('Save message error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while saving message'
    });
  }
};

// @desc    Get chat history
// @route   GET /api/chat/history/:conversation
// @access  Private
const getChatHistory = async (req, res) => {
  try {
    const { conversation } = req.params;
    const userId = req.user.id;

    const messageDoc = await Message.findOne({
      user: userId,
      conversation: conversation,
      isActive: true
    }).sort({ createdAt: -1 });

    if (!messageDoc) {
      return res.json({
        success: true,
        data: { messages: [] }
      });
    }

    res.json({
      success: true,
      data: messageDoc
    });
  } catch (error) {
    console.error('Get chat history error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching chat history'
    });
  }
};

// @desc    Get all conversations for user
// @route   GET /api/chat/conversations
// @access  Private
const getConversations = async (req, res) => {
  try {
    const userId = req.user.id;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const conversations = await Message.find({
      user: userId,
      isActive: true
    })
    .select('conversation createdAt updatedAt messages')
    .sort({ updatedAt: -1 })
    .skip(skip)
    .limit(limit);

    const total = await Message.countDocuments({
      user: userId,
      isActive: true
    });

    res.json({
      success: true,
      data: {
        conversations,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total
        }
      }
    });
  } catch (error) {
    console.error('Get conversations error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching conversations'
    });
  }
};

// @desc    Delete conversation
// @route   DELETE /api/chat/conversation/:conversation
// @access  Private
const deleteConversation = async (req, res) => {
  try {
    const { conversation } = req.params;
    const userId = req.user.id;

    const messageDoc = await Message.findOneAndUpdate(
      {
        user: userId,
        conversation: conversation
      },
      { isActive: false },
      { new: true }
    );

    if (!messageDoc) {
      return res.status(404).json({
        success: false,
        message: 'Conversation not found'
      });
    }

    res.json({
      success: true,
      message: 'Conversation deleted successfully'
    });
  } catch (error) {
    console.error('Delete conversation error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting conversation'
    });
  }
};

module.exports = {
  saveMessage,
  getChatHistory,
  getConversations,
  deleteConversation
};