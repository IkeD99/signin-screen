import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

import RentalSvg from "@/assets/rental.svg"
import DriverSvg from "@/assets/driver.svg"


export function SignIn() {
    return (
        <main className="h-screen w-full flex">
            <div className="bg-primary-foreground w-full h-full flex items-center justify-center p-16">
                <Carousel className="w-full max-w-xl h-full" >
                    <CarouselContent>
                        <CarouselItem>
                            <div className="flex aspec-square bg-background rounded p-8">
                                <img src={RentalSvg} alt="Rental Car" />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="flex aspec-square bg-background rounded p-8">
                                <img src={DriverSvg} alt="Car Driver" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </div>
            <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold tracking-tighter">
                            Login with your account!
                        </CardTitle>
                        <CardDescription>
                            Use your email or GitHub to login.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <Label htmlFor="email">E-mail</Label>
                            <Input className="mt-1" id="email" placeholder="name@example.com" type="email" />
                        </div>
                        <div className="mt-4">
                            <Label htmlFor="password">Password</Label>
                            <Input className="mt-1" id="password" placeholder="******" type="password" />
                        </div>
                        <Button className="mt-4 w-full">Login</Button>
                        <div className="flex items-center gap-2 mt-2">
                            <Separator />
                            <span className="text-xs text-muted-foreground">OR</span>
                            <Separator />
                        </div>
                        <Button variant="outline" className="mt-4 w-full"><GitHubLogoIcon />Login with GitHub</Button>
                    </CardContent>
                    <CardFooter>
                        <p className="text-muted-foreground text-center text-sm">By logging in our platform, you agree to our Terms of Use and Privacy Policies</p>
                    </CardFooter>
                </Card>
            </section>
        </main >
    )
}