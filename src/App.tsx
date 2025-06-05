import { Routes, Route } from "react-router-dom";
import MemberHomePage from './pages/MemberHomePage';
import BloodRequestPage from './pages/BloodRequestPage';
import AppointmentPage from "./pages/AppointmentPage";
import HealthProfilePage from "./pages/HealthProfilePage";
import ImpactTrackerPage from "./pages/ImpactTrackerPage";
import EmergencyAlert from "./pages/EmergencyAlertPage";
import SettingProfilePage from "./pages/SettingProfilePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MemberHomePage />} />
            <Route path="/blood-request" element={<BloodRequestPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/health-profile" element={<HealthProfilePage />} />
            <Route path="/impact" element={<ImpactTrackerPage />} />
            <Route path="/emergency" element={<EmergencyAlert />} />
            <Route path="/profile" element={<SettingProfilePage />} />
        </Routes>
    );
}

export default App;

