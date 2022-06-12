import "./App.css";
import Home from "./pages/Homes";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchAppBar from "./components/Appbar";
import Tour from "./pages/Tour";

function App() {
    return (
        <div className="App">
            <SearchAppBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/:id" element={<Tour />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
