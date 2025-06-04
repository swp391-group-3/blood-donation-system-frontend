import { HomepageLayout } from '@/components/HomepageLayout';
import { WelcomeSection } from '@/components/WelcomeSection';
import { QuickActions } from '@/components/QuickActions';

export default function MemberHomePage() {
    return (
        <HomepageLayout>
            <div className="flex-1 space-y-6 p-6">
                <WelcomeSection />
                <QuickActions />
            </div>
        </HomepageLayout>
    );
}
