import { list } from "../model/list.js";

const getList = async (req, res) => {
  try {
    const data = await list.find();
    res.status(201).json({ data });
  } catch (e) {
    console.log(e);
  }
};

const addList = async (req, res) => {
  try {
    await list.create({
      todo: req.body.todo,
    });
    res.status(201).json({ msg: "Entry Added" });
  } catch (e) {
    console.log(e);
  }
};

const updateList = async (req, res) => {
  try {
    await list.findOneAndUpdate({_id : req.body.id},{todo: req.body.todo},{new:true});
    res.status(201).json({ msg: "Entry Updated" });
  } catch (e) {
    console.log(e);
  }
};

const deleteList = async (req,res) =>{
   try {
    await list.findOneAndDelete({_id : req.body.id});
    res.status(201).json({ msg: "Entry Deleted" });
  } catch (e) {
    console.log(e);
  }
}
export { getList, addList ,updateList, deleteList};
