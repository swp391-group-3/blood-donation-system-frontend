import { HomepageLayout } from '@/components/HomepageLayout';

export default function MemberHomePage() {
    return (
        <HomepageLayout>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    Member Home Page
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Welcome to the member area!
                </p>
                {/* Add more content or components as needed */}
            </div>
        </HomepageLayout>
    );
}