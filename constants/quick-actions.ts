import { Calendar, Droplet, Activity } from 'lucide-react';

export const actions = [
    {
      icon: Calendar,
      title: "Schedule Donation",
      color: "bg-green-50 text-green-600",
      to: "/appointments/schedule",
    },
    {
      icon: Droplet,
      title: "View Requests",
      color: "bg-blue-50 text-blue-600",
      to: "/requests",
    },
    {
      icon: Activity,
      title: "Health Records",
      color: "bg-purple-50 text-purple-600",
      to: "/health-records",
    },
  ]