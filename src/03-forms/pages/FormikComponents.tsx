import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}
export const FormikComponents = () => {


    return (
        <div>
            <h1>Formik Components</h1>

            <Formik initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Debe de contener 15 caracteres o menos')
                        .required('Requerido'),
                    lastName: Yup.string()
                        .max(15, 'Debe de contener 15 caracteres o menos')
                        .required('Requerido'),
                    email: Yup.string().email('Email no tiene un formato válido').required('Requerido'),
                    terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string().required('Requerido')

                })}
            >

                {formik => (
                    <Form>
                        <label htmlFor='firstName' >First Name</label>
                        <Field name='firstName' type='text' />
                        <ErrorMessage name='firstName' component='span' />

                        <label htmlFor='lastName' >Last Name</label>
                        <Field name='lastName' type='text' />
                        <ErrorMessage name='lastName' component='span' />

                        <label htmlFor='email' >Email</label>
                        <Field name='email' type='email' />
                        <ErrorMessage name='email' component='span' />

                        <label htmlFor='jobType' >Job type</label>
                        <Field name='jobType' as='select' >
                            <option value="">Seleccione uno</option>
                            <option value="programador">Programador</option>
                            <option value="analista">Analista</option>
                            <option value="ingeniero">Ingeniero</option>

                        </Field>
                        <ErrorMessage name='jobType' component='span' />

                        <label htmlFor='terms' >
                            <Field name='terms' type='checkbox' />
                            Terms and conditions
                        </label>

                        <ErrorMessage name='terms' component='span' />

                        <button type="submit" >Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
