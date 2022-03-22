import Link from 'next/link'
import {useThemeContext} from "../../contexts/ThemeContext";
import {links} from "./styles";
import {useRouter} from "next/router";

const NavBar = () => {

    const {dark} = useThemeContext();
    const darkTheme = dark ? 'dark' : 'light';
    const router = useRouter();


    return (
        <nav className={`flex flex-direction-column ${darkTheme} max-height`}>
            <Link href="/" passHref={true}>
                <p className={`${router.route == '/' ? 'selectedPageNavBar': ''}`}>
                    Home
                </p>
            </Link>
            <Link href="/play" passHref={true}>
                <p className={`${router.route == '/play' ? 'selectedPageNavBar': ''}`}>
                    Play
                </p>
            </Link>
            <Link href="/learn" passHref={true}>
                <p className={`${router.route == '/learn' ? 'selectedPageNavBar': ''}`}>
                    Learn
                </p>
            </Link>
            <Link href="/account" passHref={true}>
                <p className={`${router.route == '/account' ? 'selectedPageNavBar': ''}`}>
                    Account
                </p>
            </Link>
            <style>{links(dark)}</style>
        </nav>
    )
}

export default NavBar;
