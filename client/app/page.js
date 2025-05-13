"use client";
import styles from "./page.module.css";
import Button from "./_components/button/button";
import TodoItem from "./_components/todoItem/todoItem.jsx";
import TodoForm from "./_components/todoForm/todoForm.jsx";
import { getList ,addList, updateList , deleteList} from "@/api/list/list";

import { Fragment, useEffect, useState } from "react";
export default function Home() {
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [isContentOpened, setIsontentOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState([])

  const buttonClicked = () => {
    setIsFormOpened((value) => !value);
  };
  
   const contentClicked = () =>{
    setIsontentOpened((value) => !value)
  }

  const contentOpen = (data) =>{
        setIsontentOpened((value) => !value)
    setSelectedValue(data)
  }

 


const List = ({onItemClick}) => {
    const [listData, setListData] = useState([])

 const handleDelete=  async (id)=>{
    await deleteList(id)
    setListData((prev) => prev.filter((item) => item._id !== id))
  };

    useEffect(() => {
    const fetchData = async () => {
      const res = await getList();
      console.log(res)
      setListData(res.data)
    };
    fetchData();
  }, []);
 return (<>
  {listData.map((item) =>(
      <Fragment key={item._id}>
        <TodoItem content={{todo :item.todo, id: item._id}} onContentClick={()=>onItemClick({id:item._id, todo:item.todo})} onDelete={handleDelete} />
      </Fragment>
      
  ))}
    </>
    )
  }
  


  return (
    <>
      <div className={styles.home}>
        <section className={styles.options}>
          <p className={styles.optionsTitle}>TO-DO WEB APP</p>
          <p className={styles.optionsText}>A simple to-do list</p>
          <Button text="Create ToDo" onBtnClick={buttonClicked} />
        </section>
        <section className={styles.content}><List onItemClick={contentOpen}/></section>
      </div>
      {isFormOpened && <TodoForm onClose={buttonClicked} onFormSubmit={addList} type={"add"}/>}
      {isContentOpened && <TodoForm onClose={contentClicked} onFormSubmit={updateList} type={"rename"} value={selectedValue}/>}
    </>
  );
}
