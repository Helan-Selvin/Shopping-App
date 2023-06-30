import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import HomeScreen from "./screens/HomeScreen";
import ReactGA from 'react-ga'

const TRACKING_ID = '#'
ReactGA.initialize(TRACKING_ID)

function App() {
  return (
    <div className='App'>
      <Nav />
      <Cart />
      <HomeScreen />
    </div>
  );
}

export default App;