import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { HomePage } from "./pages/HomePage"
import { DetailedMilkshakePage } from "./pages/DetailedMilkshakePage"
import { ReviewsPage } from "./pages/ReviewsPage"
import { FaqPage } from "./pages/FaqPage"


export const App = () => (
    <BrowserRouter>
        <div className="w-screen max-w-[475px] h-screen max-h-[475px] mx-auto flex flex-col font-poppins bg-orange-300 overflow-hidden">
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/milkshake/:id' element={<DetailedMilkshakePage />} />
                <Route path='/milkshake/:id/reviews' element={<ReviewsPage />} />
                <Route path='/faq/' element={<FaqPage />} />
            </Routes>
        </div>
    </BrowserRouter>
)
