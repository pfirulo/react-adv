import {
    BrowserRouter,
    NavLink,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import logo from '../../public/logo.svg'
import { LazyPage1,LazyPage2,LazyPage3 } from   '../01-Lazyload/pages';




export const Navigation = () => {
    return (
        <BrowserRouter>

            <div className="main-layout">
                <nav>
                    <img src={logo} alt=" logo de react" />
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/lazy1'>Lazy1</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/lazy2'>Lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/lazy3'>Lazy3</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='lazy1' element={<LazyPage1 />} />
                    <Route path='lazy2' element={<LazyPage2 />} />
                    <Route path='lazy3' element={<LazyPage3 />} />

                    <Route path='/*' element={<Navigate to="/lazy1" replace />} />



                </Routes>


            </div>
        </BrowserRouter>


    )
}
