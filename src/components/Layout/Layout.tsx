import Logo from "../../assets/logo.svg";
import {PrimaryButton} from "../Buttons/PrimaryButton";
import LogoutButton from "../LogoutButton";

interface LayouProps {
    children: React.ReactChild
}

export const Layout = ({children}:LayouProps) => {
    return (
        <div id="Layout">
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
                        <PrimaryButton label="Create Post +"/>
                        <LogoutButton/>
                    </div>
                </div>
            </nav>
            <div className="container">
                {children}
            </div>
        </div>
    )
}