import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import CoursePage from "./pages/CoursePage/CoursePage";

function App() {
    return (
        <div className='App container'>
            <div className='linkToHome'>
                <Link  to='/'>Home</Link>
            </div>

            <Routes>
                <Route path='/' element={<CoursesPage/>}/>
                <Route path='/:courseId' element={<CoursePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
