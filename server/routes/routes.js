import express from 'express'
import list from './list.js'

const router = express.Router();

router.use('/api/v1/list', list)

export default router