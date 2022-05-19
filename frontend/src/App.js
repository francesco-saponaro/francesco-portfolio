import React from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'

// Styles imports
import './App.scss';
import { AnimatePresence } from 'framer-motion';

// Component imports
import { HomePage, Project, NotFound } from './routeComponents';

// Utils imports
import { Cursor } from './utils/Cursor'

function App() {

    const location = useLocation();

    // Custom cursor wrapper
    const CursorHOC = () => (
        <>
        <Outlet /> 
        <Cursor />
        </>
    );

    return (
        <div className="app">
            {/* Framer motion component for exit animation */}
            <AnimatePresence exitBeforeEnter initial={false}>
                {/* Detect location changes for AnimatePresence to act */}
                <Routes location={location} key={location.pathname}>
                    {/* Custom cursor wrapper */}
                    <Route element={<CursorHOC />}>
                        {/* Routes */}
                        <Route path='/' element={<HomePage />} />
                        <Route path='/project/:id' element={<Project />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>                
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
