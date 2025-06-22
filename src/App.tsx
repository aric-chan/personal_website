import {BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderTab from '@/components/headerTab.tsx';
import FilterTag from '@/components/filterTag';


export default function App() {
    return (
        <BrowserRouter>
            <HeaderTab/>
            <Routes>
                <Route path="/" element={<p> Real home </p>}/>
                <Route path="projects" element={<FilterTag />} />
                <Route path="equipments" element={<p> many equipmentssss </p>} />
                <Route path="more" element={<p> this is more </p>} />
            </Routes>
        </BrowserRouter>


    );
}