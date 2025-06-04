import { House, Droplet, Calendar, Activity, Award, Heart, CircleAlert, Settings } from 'lucide-react';


export const sidebarItems = [
    { icon: House, label: 'Dashboard', active: true },
    { icon: Droplet, label: 'Blood Requests', active: false },
    { icon: Calendar, label: 'Appointments', active: false },
    { icon: Activity, label: 'Health Profile', active: false },
    { icon: Award, label: 'Achievements', active: false },
    { icon: Heart, label: 'Impact Tracker', active: false },
    { icon: CircleAlert, label: 'Emergency Alerts', active: false },
    { icon: Settings, label: 'Settings', active: false }
];