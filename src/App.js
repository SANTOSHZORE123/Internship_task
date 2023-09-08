//importing libraries
import React, { useState } from 'react';
import Header from './Components/Header';
import SearchTab from './Components/SearchTab';
import Cards from './Components/Cards';

//Main Component
function App() {
  const [search,setSearch]=useState("");
  return (
    <>
       <Header/>
       <div>
        <SearchTab inputsearchFunction={(value)=>setSearch(value)}/>
        <Cards ImageSearch={search}/>
       </div>
    </>
  );
}

export default App;
