import "./App.css";
import Home from "./pages/Homes";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchAppBar from "./components/Appbar";

function App() {
    return (
        <div className="App">
            <SearchAppBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
