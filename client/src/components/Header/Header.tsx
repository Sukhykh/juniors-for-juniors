import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            HEADER
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' end>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog'>
                            BLOG
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/chat'>
                            CHAT
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}