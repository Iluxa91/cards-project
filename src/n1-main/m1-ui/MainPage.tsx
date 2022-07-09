import React from 'react';
import {Header} from "./header/Header";
import {HashRouter} from "react-router-dom";
import {RoutesPage} from "./routes/RoutesPage";

export const MainPage = () => {
    return (
        <div>
            <HashRouter>
                <Header/>
                <RoutesPage/>
                {/*<Cards/>*/}
            </HashRouter>

        </div>
    );
};
