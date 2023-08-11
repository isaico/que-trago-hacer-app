import './App.css';
import Layout from './layout/Layout';
import HowToUse from './layout/HowToUse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ads from "../public/ads.txt"
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Layout />} />
                    <Route path="/how-to-use" element={<HowToUse />} />
                    <Route path="/ads.txt" element={ads} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
