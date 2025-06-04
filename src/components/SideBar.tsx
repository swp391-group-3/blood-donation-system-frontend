import { Heart } from 'lucide-react';
import { sidebarItems } from '../../constants/sidebar-items';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function SideBar() {
    return (
        <div className="w-70 bg-white border-zinc-300 flex flex-col">
            <div className="p-6 border-b border-r border-zinc-300">
                <div className="flex items-center space-x-2">
                    <Heart className="h-6 w-6 text-red-600" />
                    <span className="text-xl font-bold text-zinc-950">
                        BloodBridge
                    </span>
                </div>
            </div>

            <div className="p-4 space-y-2 flex-1 border-r border-zinc-300">
                {sidebarItems.map((item, index) => (
                    <Button
                        key={index}
                        variant="ghost"
                        className={cn(
                            'w-full justify-start text-zinc-600 hover:text-zinc-900 hover:bg-gray-100',
                            item.active && 'bg-red-50 text-red-600',
                        )}
                    >
                        <item.icon className="mr-3 h-4 w-4" />
                        {item.label}
                    </Button>
                ))}
            </div>

            <div className="p-4 border-t border-r border-zinc-300">
                <div className="bg-red-50  border border-red-200 rounded-lg p-4">
                    <div className="flex items-center justify-between space-x-3">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                            <Heart className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-red-900 text-sm">
                                Help Save Lives
                            </h3>
                            <p className="text-xs text-red-700">
                                Your next donation can save up to 3 lives
                            </p>
                        </div>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700 w-full mt-3 text-sm">
                        Donate Now
                    </Button>
                </div>
            </div>
        </div>
    );
}
