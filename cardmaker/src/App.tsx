import React from "react";
import css from "./App.module.css";
import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import Workspace from "./components/Workspace/Workspace";

const App = () => {
    return (
        <div className={css.app}>
            <Header />
            <Toolbar />
            <Workspace />
        </div>
    );
};
export default App;
