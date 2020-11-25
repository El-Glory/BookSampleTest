import express from 'express';
import author from './author';

const router = express.Router();

router.use('/', author);

module.exports = router;