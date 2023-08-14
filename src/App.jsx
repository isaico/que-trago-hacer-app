import Layout from './layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HowToUse from './layout/HowToUse';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Layout />} />
                    <Route path="/how-to-use" element={<HowToUse />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
