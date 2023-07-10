import {
    BrowserRouter,
    NavLink,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';


import logo from '../../public/logo.svg'
import {
     DynamicForm,
     FormikAbstraction,
     FormikBasicPage, 
     FormikComponents, 
     FormikYupPage, 
     RegisterFormikPage, 
     RegisterPage } from '../03-forms/pages';




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
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/register-formik'>Register Formik Page</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/dynamic-form'>Dynamic Form</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='formik-basic' element={<FormikBasicPage/>} />
                    <Route path='formik-yup' element={<FormikYupPage/>} />
                    <Route path='formik-components' element={<FormikComponents/>} />
                    <Route path='formik-abstraction' element={<FormikAbstraction/>} />
                    <Route path='/register' element={<RegisterPage/>} />
                    <Route path='/register-formik' element={<RegisterFormikPage/>} />
                    <Route path='/dynamic-form' element={<DynamicForm/>} />

                    <Route path='/*' element={<Navigate to="/home" replace />} />



                </Routes>


            </div>
        </BrowserRouter>


    )
}
