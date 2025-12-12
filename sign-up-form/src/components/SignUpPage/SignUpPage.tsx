import bg from '../../assets/images/bg.svg'
import FreeTrialOffer from '../FreeTrialOffer/FreeTrialOffer'
import SignUpForm from '../SignUpForm/SignUpForm'
import Title from '../Title/Title'

const SignUpPage = () => {
    return (
        <div className="w-full lg:h-screen bg-cover font-Poppins text-center lg:text-left flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-11.25 p-[88px_0px_68px_0px] lg:p-0" style={{ backgroundImage: `url(${bg})` }}>
            <Title />
            <div className='flex flex-col gap-6'>
                <FreeTrialOffer />
                <SignUpForm />
            </div>
        </div >
    )
}

export default SignUpPage