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
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
  title: "Contact",
};

const Page = () => {
  return (
    <main>
      <div className="max-w-2xl mx-auto px-4">
        <Card className=" mt-20">
          <form action="/success">
            <CardHeader>
              <CardTitle className="text-3xl">Contact Christopher</CardTitle>
              <CardDescription className="text-lg">
                For speaking engagments, consulting interest or general
                inquires, please reach out.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Type your name here..."
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Type your email here..."
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    required
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Send</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  );
};

export default Page;
