import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Navigate,
} from "react-router-dom";
import ViewFeedback from './components/ViewFeedback';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Movie Feedback </h1>

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
        <Route path="/" element={<Navigate to = " /"/>} />
        <Route path="/movie" element ={<FeedbackForm/>}/>
        <Route path="/view" element ={<ViewFeedback/>}/>
      </Routes>


    </div>
     </Router>
  );
}

export default App;