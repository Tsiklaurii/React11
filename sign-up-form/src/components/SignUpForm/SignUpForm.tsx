import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup';

type SignUpFormTypes = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const SignUpForm = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required("First Name cannot be empty")
            .max(30, "No more than 30 chars"),
        lastName: Yup.string()
            .required("Last Name cannot be empty")
            .max(50, "No more than 50 chars"),
        email: Yup.string()
            .email("Looks like this is not an email")
            .required("Email is required"),
        password: Yup.string()
            .required("Password cannot be empty")
            .min(8, "Minimum 8 symbols")
    })

    const onSubmit = (values: SignUpFormTypes) => {
        console.log("Submited: ", values)
    }

    return (
        <div className="p-10 bg-[#FFFFFF] rounded-[10px] shadow-[0px_8px_#00000025] flex flex-col items-center justify-center">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className="flex flex-col gap-5">
                    <div>
                        <Field name='firstName' placeholder='First Name' type='text' className="border border-[#DEDEDE] p-[15px_0px_15px_32px] w-115 rounded-[5px] text-[14px] font-semibold leading-6.5 tracking-[0.25px] focus:border-[#5E54A4] outline-none" />
                        <ErrorMessage name="firstName" component="div" className="text-[#FF7979] text-[11px] text-right mt-1.5" />
                    </div>

                    <div>
                        <Field name='lastName' placeholder='Last Name' type='text' className="border border-[#DEDEDE] p-[15px_0px_15px_32px] w-115 rounded-[5px] text-[14px] font-semibold leading-6.5 tracking-[0.25px] focus:border-[#5E54A4] outline-none" />
                        <ErrorMessage name="lastName" component="div" className="text-[#FF7979] text-[11px] text-right mt-1.5" />
                    </div>

                    <div>
                        <Field name='email' placeholder='Email Address' className="border border-[#DEDEDE] p-[15px_0px_15px_32px] w-115 rounded-[5px] text-[14px] font-semibold leading-6.5 tracking-[0.25px] focus:border-[#5E54A4] outline-none" />
                        <ErrorMessage name="email" component="div" className="text-[#FF7979] text-[11px] text-right mt-1.5" />
                    </div>

                    <div>
                        <Field name='password' placeholder='Password' type='password' className="border border-[#DEDEDE] p-[15px_0px_15px_32px] w-115 rounded-[5px] text-[14px] font-semibold leading-6.5 tracking-[0.25px] focus:border-[#5E54A4] outline-none" />
                        <ErrorMessage name="password" component="div" className="text-[#FF7979] text-[11px] text-right mt-1.5" />
                    </div>

                    <button type="submit" className="w-115 h-14 bg-[#38CC8B] text-[#FFFFFF] font-semibold text-[15px] leading-6.5 tracking-[1px] rounded-[5px] cursor-pointer hover:bg-[#77E2B3] duration-300 ease-in-out mb-2">CLAIM YOUR FREE TRIAL</button>
                </Form>
            </Formik>

            <p className="text-[11px] text-[#BAB7D4] leading-6.5">By clicking the button, you are agreeing to our <span className="text-[#FF7979] font-bold cursor-pointer">Terms and Services</span></p>
        </div>
    )
}

export default SignUpForm