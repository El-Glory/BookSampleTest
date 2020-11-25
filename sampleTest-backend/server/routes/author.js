import express from 'express';
import Authors from '../controllers/author';

const USER_URL = '/api/authors';

const author = express.Router();

author.post(`${USER_URL}/add`, Authors.create);
author.get(`${USER_URL}/:pageLimit`, Authors.pageLess);
author.get(`${USER_URL}/great/:pageGreat`, Authors.pageGreat);
author.get(`${USER_URL}/search/:searchName`, Authors.searchName)
author.get(`${USER_URL}/search/:searchBook`, Authors.searchBook)

export default author;