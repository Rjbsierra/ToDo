import express from 'express'
import {getList, addList, updateList, deleteList} from '../controller/list.js'
const router = express.Router();

router.route('/getlist').get(getList)
router.route('/addlist').post(addList)
router.route('/updatelist').patch(updateList)
router.route('/deletelist').delete(deleteList)


export default router