import { Heart } from "lucide-react";
import { sidebarItems } from "./sidebar-items";



export function SideBar() {
    return (
        <div className="w-70 bg-white border-zinc-300 flex flex-col">
            <div className="p-6 border-b border-zinc-300">
                <div className="flex items-center space-x-2">
                    <Heart className="h-6 w-6 text-red-600"/>
                    <span className="text-xl font-bold text-zinc-950">BloodBridge</span>
                </div>
            </div>
        </div>
    );
}