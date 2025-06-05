import { HomepageLayout } from '@/components/HomepageLayout';
import { WelcomeSection } from '@/components/WelcomeSection';
import { actions, requests, appointments, donations } from '../../constants/sample-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
    Droplet,
    Heart,
    MapPin,
    Clock,
    Hospital,
    Dot,
    Calendar,
} from 'lucide-react';

export default function MemberHomePage() {
    return (
        <HomepageLayout>
            <div className="flex-1 space-y-6 p-6">
                <WelcomeSection />
                <div>
                    <h2 className="text-lg font-semibold text-zinc-950 mb-4">
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {actions.map((action, index) => (
                            <Button
                                asChild
                                variant="ghost"
                                className="p-0 h-auto bg-transparent shadow-none hover:shadow-md transition-shadow text-left"
                                key={index}
                            >
                                <Card className="h-full">
                                    <CardContent className="p-6 text-center flex flex-col items-center">
                                        <div
                                            className={`inline-flex p-5 rounded-full ${action.color} mb-3`}
                                        >
                                            <action.icon
                                                style={{
                                                    width: '30px',
                                                    height: '30px',
                                                }}
                                            />
                                        </div>
                                        <h2 className="font-medium text-xl text-zinc-950">
                                            {action.title}
                                        </h2>
                                    </CardContent>
                                </Card>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Droplet className="w-6 h-6 stroke-red-600"></Droplet>
                                <p className="text-2xl">Donation Status</p>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <div className="text-zinc-500">
                                        Last Donation
                                    </div>
                                    <div className="font-medium text-zinc-950">
                                        1/1/2023
                                    </div>
                                </div>
                                <div>
                                    <div className="text-zinc-500">
                                        Next Eligible Date
                                    </div>
                                    <div className="font-medium text-zinc-950">
                                        30/12/2024
                                    </div>
                                </div>
                                <div>
                                    <div className="text-zinc-500">
                                        Days Until Eligible
                                    </div>
                                    <div className="font-medium text-zinc-950">
                                        5 days
                                    </div>
                                </div>
                                <div>
                                    <div className="text-zinc-500">
                                        Eligibility Progress
                                    </div>
                                    <div className="font-medium text-zinc-950">
                                        Ready to donate!
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Progress value={85} className="h-2" />
                            </div>
                            <Button className="w-full bg-red-600 hover:bg-red-700">
                                Schedule Donation
                            </Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Heart className="w-6 h-6 stroke-red-600" />
                                <p className="text-2xl">Your Impact</p>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-red-600">
                                        8
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Donations
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Blood Donated</span>
                                    <span className="font-medium">3600ml</span>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span>Next Achievement</span>
                                    <span className="text-gray-500">
                                        2 donations to go
                                    </span>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full">
                                View Full Impact
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <Hospital className="w-6 h-6 stroke-red-600" />
                            <p className="text-2xl">Urgent Blood Request</p>
                        </CardTitle>
                        <CardContent className="space-y-4">
                            {requests.map((request, index) => (
                                <Card
                                    key={index}
                                    className={`border ${request.compatible ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}
                                >
                                    <CardContent className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                                    <span className="text-red-600 text-sm font-medium">
                                                        {request.bloodType}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium">
                                                        {request.hospital}
                                                    </h4>
                                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                        <span className="flex items-center">
                                                            <MapPin className="w-3 h-3 mr-1" />
                                                            {request.distance}{' '}
                                                            <Dot />{' '}
                                                            {request.type}
                                                        </span>
                                                        <span className="flex items-center">
                                                            <Clock className="w-3 h-3 mr-1" />
                                                            Posted{' '}
                                                            {request.postedDate}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                {request.compatible && (
                                                    <Badge
                                                        variant="secondary"
                                                        className="bg-green-100 text-green-800"
                                                    >
                                                        Compatible
                                                    </Badge>
                                                )}
                                                <Button
                                                    size="sm"
                                                    className={
                                                        request.compatible
                                                            ? 'bg-red-600 hover:bg-red-700'
                                                            : 'bg-gray-600 hover:bg-gray-700'
                                                    }
                                                >
                                                    {request.compatible
                                                        ? 'Response'
                                                        : 'Not Compatible'}
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                            <Button variant="outline" className="w-full">
                                View All Requests
                            </Button>
                        </CardContent>
                    </CardHeader>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Calendar className="w-6 h-6 stroke-blue-500" />
                                <p className="text-2xl ">
                                    Upcoming Appointments
                                </p>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {appointments.map((appointment, index) => (
                                <Card key={index} className="border">
                                    <CardContent className="p-4">
                                        <header className="flex items-center justify-between mb-2">
                                            <h4 className="font-medium">
                                                {appointment.type}
                                            </h4>
                                            <Badge
                                                className={
                                                    appointment.statusColor
                                                }
                                            >
                                                {appointment.status}
                                            </Badge>
                                        </header>
                                        <p className="text-sm text-gray-600 mb-2">
                                            {appointment.location}
                                        </p>
                                        <footer className="flex items-center space-x-4 text-sm text-gray-500">
                                            <span className="flex items-center">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {appointment.date}
                                            </span>
                                            <span className="flex items-center">
                                                <Clock className="w-3 h-3 mr-1" />
                                                {appointment.time}
                                            </span>
                                        </footer>
                                    </CardContent>
                                </Card>
                            ))}
                            <Button variant="outline" className="w-full">
                                Schedule Appointment
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Heart className="w-6 h-6 stroke-red-600" />
                                <p className="text-2xl">Recent Appointment</p>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {donations.map((donation, index) => (
                                <Card key={index} className="bg-zinc-50">
                                    <CardContent className="p-3">
                                        <section className="flex items-center justify-between">
                                            <article>
                                                <h4 className="font-medium">
                                                    {donation.type}
                                                </h4>
                                                <p className="text-sm text-zinc-600">
                                                    {donation.location}
                                                </p>
                                            </article>
                                            <aside className="text-right">
                                                <span className="font-medium block">
                                                    {donation.amount}
                                                </span>
                                                <span className="text-sm text-gray-500 block">
                                                    {donation.date}
                                                </span>
                                            </aside>
                                        </section>
                                    </CardContent>
                                </Card>
                            ))}
                            <Button variant="outline" className="w-full">
                                Schedule Appointment
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </HomepageLayout>
    );
}
