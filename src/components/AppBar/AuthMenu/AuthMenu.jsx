import Navigation from '../Navigation';


export default function AuthMenu() {
    return <>
        <Navigation link={'/register'} title={'Register'} />
        <Navigation link={'/login'} title={'Login'} />
    </>
}
