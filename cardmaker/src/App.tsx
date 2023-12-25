import React from "react";
import css from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
    return (
        <div className={css.app}>
            <Header />
            <Main />
        </div>
    );
};
export default App;
