import React from "react";
import {createRoot} from "react-dom/client";

const Header = () => <h1>I am Header</h1>;
const Footer = () => <h1>I am Footer</h1>;

const Content = () => (
    <div>
        <Header />
        <h2>I am Content</h2>
        <Footer />
    </div>
    );          

const root = createRoot(document.getElementById("main"));
root.render(<Content/>);

