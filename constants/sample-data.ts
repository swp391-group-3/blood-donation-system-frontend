import {
    House,
    Droplet,
    Calendar,
    Activity,
    Award,
    Heart,
    CircleAlert,
    Settings,
} from 'lucide-react';

export const requests = [
    {
        id: 'req-001',
        title: 'Emergency Surgery Blood Needed',
        blood_group: 'O+',
        time: '08:00 - 18:00',
        compatible: true,
        staff_name: 'Dr. Smith',
    },
    {
        id: 'req-003',
        title: 'Accident Victim Needs Blood',
        blood_group: 'O+',
        time: '10:00 - 16:00',
        compatible: true,
        staff_name: 'Dr. Wilson',
    },
];

export const sidebarItems = [
    { icon: House, label: 'Dashboard', active: true, path: '/' },
    {
        icon: Droplet,
        label: 'Blood Requests',
        active: false,
        path: '/blood-request',
    },
    {
        icon: Calendar,
        label: 'Appointments',
        active: false,
        path: '/appointment',
    },
    {
        icon: Activity,
        label: 'Health Profile',
        active: false,
        path: '/health-profile',
    },
    { icon: Award, label: 'Achievements', active: false, path: '/' },
    { icon: Heart, label: 'Impact Tracker', active: false, path: '/impact' },
    {
        icon: CircleAlert,
        label: 'Emergency Alerts',
        active: false,
        path: '/emergency',
    },
    { icon: Settings, label: 'Settings', active: false, path: '/profile' },
];

export const actions = [
    {
        icon: Calendar,
        title: 'Schedule Donation',
        color: 'bg-green-50 text-green-600',
        path: '/appointment',
    },
    {
        icon: Droplet,
        title: 'View Requests',
        color: 'bg-red-50 text-red-500',
        path: '/blood-request',
    },
    {
        icon: Activity,
        title: 'Health Records',
        color: 'bg-purple-50 text-purple-600',
        path: '/health-profile',
    },
];

export const donations = [
    {
        type: 'Whole Blood',
        amount: '450ml',
        date: '4/15/2023',
    },
    {
        type: 'Plasma',
        amount: '600ml',
        date: '4/15/2023',
    },
    {
        type: 'Platelets',
        amount: '200ml',
        date: '4/15/2023',
    },
];

export const appointments = [
    {
        type: 'Blood Donation',
        date: '7/10/2025',
        time: '10:00 AM',
        status: 'Confirm',
        statusColor: 'bg-green-100 text-green-800',
    },
    {
        type: 'Health Check',
        date: '7/10/2025',
        time: '10:00 AM',
        status: 'Pending',
        statusColor: 'bg-yellow-100 text-yellow-800',
    },
];
