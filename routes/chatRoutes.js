const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/greet', chatController.getGreetingMessage);
router.post('/language', chatController.getLanguageOptions);
router.post('/level', chatController.getLevelOptions);
router.get('/learning-content/:language/:level', chatController.getLearningContent);


// router.get('/options', chatController.getLanguageOptions);
// router.get('/options/:language', chatController.getLevelOptions);
// router.get('/learn/:language/:level', chatController.getLearningContent);
// router.get('/quiz/:level', chatController.getQuiz);
// router.post('/score', chatController.calculateScore);
// router.get('/intermediate', chatController.getIntermediateContent);

module.exports = router;
