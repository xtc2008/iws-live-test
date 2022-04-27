import "./App.scss";
import ReposList from "./ReposList";
import SearchForm from "./SearchForm";
import { useState} from 'react';

function App() {
  // const arrOfNum = [5,-3,2,0,8]
  // result [[5,-3],[2,0],[8]]
  // result of arr = [4,-4,1,-1,7];
  // result 8
  const [getValue, setValue] = useState("");
  const [currList, setList] = useState([]);

  return (
    <main className="App">
      <div>
        <h1>Repo Search</h1>
      </div>
      <SearchForm setValue={setValue} setList={setList} getValue={getValue} />
      <ReposList currList={currList}/>
      <button>Load More</button>
    </main>
  );
}

export default App;
