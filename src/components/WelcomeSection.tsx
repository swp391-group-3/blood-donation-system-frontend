import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function WelcomeSection() {
    return(
        <Card className="p-6">
            <CardContent className="flex justify-between items-center p-0">
                <div>
                    <div className="text-2xl font-bold mb-1">Welcome back, Nam Dang</div>
                    <div className="text-muted-foreground">Here's your donation dashboard</div>
                </div>

            </CardContent>
        </Card>
    )
}