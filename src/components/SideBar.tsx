import { Heart } from "lucide-react";
import { sidebarItems } from "../../constants/sidebar-items";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"

export function SideBar() {
    return (
        <div className="w-70 bg-white border-zinc-300 flex flex-col">
            <div className="p-6 border-b border-zinc-300">
                <div className="flex items-center space-x-2">
                    <Heart className="h-6 w-6 text-red-600"/>
                    <span className="text-xl font-bold text-zinc-950">BloodBridge</span>
                </div>
            </div>

            <div className="p-4 space-y-2 flex-1">
                {sidebarItems.map((item, index) => (
                    <Button
                        key={index}
                        variant="ghost"
                        className={cn(
                            "w-full justify-start text-zinc-600 hover:text-zinc-900 hover:bg-gray-100",
                            item.active && "bg-red-50 text-red-600"
                        )}
                    >
                        <item.icon className="mr-3 h-4 w-4" />
                        {item.label}
                    </Button>
                ))}
            </div>
        </div>
    );
}