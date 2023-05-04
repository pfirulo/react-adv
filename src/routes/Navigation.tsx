import {
    BrowserRouter,
    NavLink,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';


import logo from '../../public/logo.svg'
import { FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from '../03-forms/pages';




export const Navigation = () => {
    return (
        <BrowserRouter>

            <div className="main-layout">
                <nav>
                    <img src={logo} alt=" logo de react" />
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/register'>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/formik-basic'>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/formik-yup'>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/formik-components'>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/formik-abstraction'>Formik Abstraction</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='formik-basic' element={<FormikBasicPage/>} />
                    <Route path='formik-yup' element={<FormikYupPage/>} />
                    <Route path='formik-components' element={<FormikComponents/>} />
                    <Route path='formik-abstraction' element={<FormikAbstraction/>} />
                    <Route path='/register' element={<RegisterPage/>} />

                    <Route path='/*' element={<Navigate to="/home" replace />} />



                </Routes>


            </div>
        </BrowserRouter>


    )
}
