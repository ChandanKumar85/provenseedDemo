import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AgronomicInsights from './pages/agronomic-insights'
import PerformanceTrials from './pages/performance-trials'
import SeedSelector from './pages/seed-selector'
import AboutUs from './pages/about'
import Location from './pages/location'
import ContactUs from './pages/contact'

const AppRoute = () => {
    return (
        <Routes>
            <Route path="seed-selector" element={<SeedSelector />} />
            <Route path="performance-trials" element={<PerformanceTrials />} />
            <Route path="agronomic-insights" element={<AgronomicInsights />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="find-a-location" element={<Location />} />
            <Route path="contact-us" element={<ContactUs />} />
        </Routes>
    )
}

export default AppRoute
