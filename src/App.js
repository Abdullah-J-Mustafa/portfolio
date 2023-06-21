import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';

function App() {
    return (
        <div>
            <Router basename= '/'>
                <Navigation />
                    <p>This is start of my portfolio</p>
                {/* <Navigation/> */}
                <Footer/>
            </Router>
        </div>    
    )
}

export default App;