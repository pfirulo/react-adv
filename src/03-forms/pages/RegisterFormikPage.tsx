import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';


export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'El nombre debe de tener tres caracteres o más.')
                            .max(15, 'No debe de pasar de 15 caracteres')
                            .required('Requerido'),
                        email: Yup.string().email('Revise el formato del correo.').required('Requerido'),
                        password1: Yup.string()
                            .min(6, 'Mínimo 6 letras').required('Requerido'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales').required('Requerido')
                    })
                }
            >

                {({handleReset}) => (

                    <Form>
                        <MyTextInput
                            label='Nombre'
                            name='name'
                            placeholder='Pablo' />

                        <MyTextInput
                            label='Email'
                            name='email'
                            type='email'
                            placeholder='pfirulo@yahoo.com'
                        />

                        <MyTextInput
                            label='Password'
                            name='password1'
                            type='password'
                            placeholder='******'
                        />

                        <MyTextInput
                            label='Password Confirm'
                            name='password2'
                            type='password'
                            placeholder='******'
                        />
                        <button type='submit'>Create</button>
                        <button type='button' onClick={handleReset}>Reset form</button> 
                    </Form>

                )}

                
           
            </Formik>


        </div>
    )
}
