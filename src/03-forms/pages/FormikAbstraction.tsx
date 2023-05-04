import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyCheckbox, MySelect, MyTextInput } from '../components';


interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}
export const FormikAbstraction = () => {


    return (
        <div>
            <h1>Formik Abstraction</h1>

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

                        <MyTextInput label="First Name" name="firstName" placeholder='Nombre' type='text' />
                        <MyTextInput label="Last Name" name="lastName" placeholder='Apellido' type='text' />
                        <MyTextInput label="Email" name="email" placeholder='Email' type='email' />

                        <MySelect label="Job Type" name="jobType" >
                            <option value="">Seleccione uno</option>
                            <option value="programador">Programador</option>
                            <option value="analista">Analista</option>
                            <option value="ingeniero">Ingeniero</option>
                        </MySelect>

                        <MyCheckbox label="Terms & Conditions" name="terms" />

                        <button type="submit" >Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
