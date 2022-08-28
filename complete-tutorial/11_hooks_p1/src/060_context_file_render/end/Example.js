// POINT 発展 Contextとレンダリングの関係
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeProvider } from "./context/ThemeContext";
import "./Example.css";

const Example = () => {
    return (
        <ThemeProvider>
            <Header />
            <Main />
            <Footer />
        </ThemeProvider>
    );
};

export default Example;
