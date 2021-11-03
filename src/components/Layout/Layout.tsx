import Logo from "../../assets/logo.svg";
import {PrimaryButton} from "../Buttons/PrimaryButton";
import LogoutButton from "../LogoutButton";
import {useHistory} from "react-router-dom";

interface LayouProps {
    children: React.ReactChild
}

export const Layout = ({children}:LayouProps) => {
    const history = useHistory()
    return (
        <div id="Layout" data-testid="Layout">
            {/*Navigation + */}
            <nav className="flex items-center justify-between flex-wrap bg-primaryDark p-6">
                {/*Logo + */}
                <div className="logo" data-testid="logo">
                    <img src={Logo} alt="rivoltafilippo-logo"/>
                </div>
                {/*Right Side*/}
                <div className="flex gap-8">
                    {/*Action Button +*/}
                    <div className="action-button">
                        <PrimaryButton label="Create Post +" data-testid="create-post-button" onClick={()=>history.push('/posts/create')}/>
                        <LogoutButton/>
                    </div>
                </div>
            </nav>
            <div className="container mx-auto mt-16">
                {children}
            </div>
        </div>
    )
}