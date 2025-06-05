import { Heart } from 'lucide-react';
import { sidebarItems } from '../../constants/sidebar-items';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
            <div className="flex items-center space-x-4">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="/avatars/sample-avatar.png" />
                            <AvatarFallback>ND</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            My Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            View Health Record
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
