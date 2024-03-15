import React from 'react';

import { Outlet } from "react-router-dom";

import { Navigation } from './navigation';

export const Root = () => {
    return (
        <div className="bgWhite">
            <Navigation />
            <div className="contentWrapper">
            <Outlet/>
            </div>
        </div>
    );
}