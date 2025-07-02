import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Navigate,
} from "react-router-dom";
import MovieFeedback from './components/MovieFeedback';
import ViewFeedback from './components/ViewFeedback';

function App() {
  return (
    
    <Router>
    <div className="App">
      <h1>Movie Feedbck </h1>

      <div className='tabs'>
        <Link to ="/movie"  className="tab-link">
        Movie Reviews
        </Link>
        <Link to = "/view" className="tab-link">
        View Reviews
        </Link>

      </div>

      {/*{Routes} */}
      <Routes>
        <Route path="/" element={<Navigate to = " /student"/>} />
        <Route path="/movie" element ={<MovieFeedback/>}/>
        <Route path="/view" element ={<ViewFeedback/>}/>
      </Routes>


    </div>
     </Router>
  );
}

export default App;