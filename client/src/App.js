import './stylesheet/styles.css';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Wall from './components/Wall';

function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <Wall />
      <RightSidebar />
    </div>
  );
}

export default App;

