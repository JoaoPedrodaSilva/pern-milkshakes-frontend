import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { HomePage } from "./pages/HomePage"
import { DetailedMilkshakePage } from "./pages/DetailedMilkshakePage"


export const App = () => (
    <BrowserRouter>
        <div className="w-screen max-w-[475px] h-screen max-h-[475px] mx-auto flex flex-col justify-center items-center bg-orange-300">
            <Navbar />
            <div className="w-full">
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/milkshake/:id' element={<DetailedMilkshakePage />} />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
)
