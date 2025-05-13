//was thinking about whether I should add another folder for API fetching centrilization, maybe not work ATM.
const API_URL = "http://localhost:4000/";
const getList = async () => {
  try {
    const res = await fetch(`${API_URL}api/v1/list/getlist`);
    const data = await res.json();
    return  data;
} catch (e) {
    return console.log(`ERROR: ${e}`);
}
};

const addList = async (value) =>{
  try{
    await fetch(`${API_URL}api/v1/list/addlist`,{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({todo :value})
    })
    return console.log('GOOD')
  }catch(e){
    return console.log(`ERROR: ${e}`);
  }
}

const updateList = async (data) =>{
  try{
     await fetch(`${API_URL}api/v1/list/updatelist`,{
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({id: data.id, todo :data.todo})
    })
  }catch(e){

  }
}

const deleteList = async (data) =>{
   try{
     await fetch(`${API_URL}api/v1/list/deletelist`,{
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({id: data})
    })
  }catch(e){

  }
}

export {getList, addList, updateList, deleteList}