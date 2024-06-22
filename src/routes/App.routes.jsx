import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import NavBar from '../components/navbar e footer/NavBar'
import MainContent from './MainContent';

const RouteApp = () => {

    return (
        <Router>
            <NavBar />
            <MainContent />
        </Router>
    )
}

export default RouteApp;