export default function Navbar({ view }) {
    return (
        <>
            <nav>
                <div>
                    {/* TODO: ADD LOGO */}
                    <div id="logo"></div>
                    <ul id="links">
                        <li>
                            <a
                                href="/"
                                id={view === 'home' ? 'current-view' : ''}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/projects"
                                id={view === 'projects' ? 'current-view' : ''}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                id={view === 'about' ? 'current-view' : ''}
                            >
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                href="/resume"
                                id={view === 'resume' ? 'current-view' : ''}
                            >
                                Resume
                            </a>
                        </li>
                        <li>
                            <a
                                href="/pricing"
                                id={view === 'resume' ? 'current-view' : ''}
                            >
                                Pricing
                            </a>
                        </li>
                    </ul>
                    <ul id="cta">
                        <li id="login-button">
                            <a href="/login">Login</a>
                        </li>
                        <li id="contact-button">
                            <a href="/register">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
