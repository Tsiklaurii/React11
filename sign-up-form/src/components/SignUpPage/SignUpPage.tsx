import bg from '../../assets/images/bg.svg'
import FreeTrialOffer from '../FreeTrialOffer/FreeTrialOffer'
import SignUpForm from '../SignUpForm/SignUpForm'
import Title from '../Title/Title'

const SignUpPage = () => {
    return (
        <div className="w-full h-screen bg-cover font-Poppins flex items-center justify-center gap-11.25" style={{ backgroundImage: `url(${bg})` }
        }>
            <Title />
            <div className='flex flex-col gap-6'>
                <FreeTrialOffer />
                <SignUpForm />
            </div>
        </div >
    )
}

export default SignUpPage