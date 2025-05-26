import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function CardWithForm() {
    return (
        <Card className="w-[350px] bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
            <CardHeader>
                <CardTitle className="text-blue-700 dark:text-blue-300">Create project</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                    Deploy your new project in one-click.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                                Name
                            </Label>
                            <Input
                                id="name"
                                placeholder="Name of your project"
                                className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework" className="text-gray-700 dark:text-gray-300">
                                Framework
                            </Label>
                            <Select>
                                <SelectTrigger
                                    id="framework"
                                    className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper" className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600">
                                    <SelectItem value="next" className="text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-800">
                                        Next.js
                                    </SelectItem>
                                    <SelectItem value="sveltekit" className="text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-800">
                                        SvelteKit
                                    </SelectItem>
                                    <SelectItem value="astro" className="text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-800">
                                        Astro
                                    </SelectItem>
                                    <SelectItem value="nuxt" className="text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-800">
                                        Nuxt.js
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button
                    variant="outline"
                    className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    Cancel
                </Button>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                    Deploy
                </Button>
            </CardFooter>
        </Card>
    );
}