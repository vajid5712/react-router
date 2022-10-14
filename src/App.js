import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Usage from "./pages/Usage";
import Settings from "./pages/Settings";
// import Users from "./pages/Users";
import Header from "./components/Header";
import Details from "./pages/Details";
import Marks from "./pages/Marks";
import Sports from "./pages/Sports";
import Remarks from "./pages/Remarks";
import NotFound from "./pages/NotFound";

const Users = React.lazy(() => {
    return import("./pages/Users");
});

function App() {
    return (
        <BrowserRouter basename="react-router">
            <div>
                <Header />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="usage" element={<Usage />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="users">
                        <Route index element={<Users />} />
                        <Route path=":userId" element={<Details />}>
                            <Route index element={<Marks />} />
                            <Route path="sports" element={<Sports />} />
                            <Route path="remarks" element={<Remarks />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
