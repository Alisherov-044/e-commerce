import { Route, Routes } from "react-router-dom";
import { Button, Icons } from "./components";
import { Home } from "./pages";

function App() {
    return (
        <div className="wrapper">
            <header>
                <Icons.burger stroke="red" />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <footer></footer>
        </div>
    );
}

export default App;
