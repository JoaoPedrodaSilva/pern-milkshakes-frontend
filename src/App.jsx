import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { DetailedMilkshakePage } from "./pages/DetailedMilkshakePage"

export const App = () => (
    <BrowserRouter>
        <div className="w-screen max-w-[475px] h-screen max-h-[475px] m-auto flex justify-center items-center bg-orange-300">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/:id' element={<DetailedMilkshakePage />} />
            </Routes>
        </div>
    </BrowserRouter>
)
