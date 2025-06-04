import { actions } from '../../constants/quick-actions';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
export function QuickActions() {
    return (
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
    );
}
