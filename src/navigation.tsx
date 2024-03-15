import React from 'react';
import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="navigation borBottomGray">
            <Link className='borRightGray' to="/"><code>Tay Moore</code></Link>
            <Link to="/resume"><code>Resume</code></Link>
            <Link to="/projects"><code>Projects</code></Link>
            <Link to="/problems"><code>Computer Problems</code></Link>
        </nav>
    )
}