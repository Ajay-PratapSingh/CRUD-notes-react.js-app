
import { useState } from 'react';
import './App.css';
import LoginForm from './pages/Login';
import StartScreen from './pages/StartScreen';
import Entries from './pages/Entries';
import Register from './pages/Register';


function App() {
  const [page, setPage] = useState('startscreen');
  const [itemsarr, setItemsarr] = useState([]);

  async function SaveItemHandler(data){
    setItemsarr((previtems) => {
      return [...previtems,data]
    });
     const response=await fetch('https://crud-app-f74d7-default-rtdb.firebaseio.com/items.json',{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data_res=response.json();
    console.log(data_res);
  };

  async function DeleteItemHandler(datatodelete){
    const newitemsarr=itemsarr.filter(items => items.Title!==datatodelete.Title && items.Description!==datatodelete.Description)
    setItemsarr(newitemsarr)

    const response=await fetch('https://crud-app-f74d7-default-rtdb.firebaseio.com/items.json',{
      method: 'DELETE',
      body: JSON.stringify(datatodelete),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data_res=response.json();
    console.log(data_res);
  }

  const showLoginForm = () => {
    setPage('loginform');
  }
  const showEntries = () => {
    setPage('entries');
  }


  return (
    <div className="main">
      {page === 'startscreen' && <StartScreen onLogin={showLoginForm}></StartScreen>}
      {page === 'loginform' && <LoginForm onLogin={showEntries}></LoginForm>}
      {page === 'entries' && <Entries items={itemsarr} onNewSave={SaveItemHandler} onDelete={DeleteItemHandler}></Entries>}
      {page==='register' && <Register></Register>}
    </div>
  );
}

export default App;
