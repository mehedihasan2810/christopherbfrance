import { RocketIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const metadata = {
  title: "Success",
};

const Page = () => {
  return (
    <main>
      <Alert className="max-w-2xl mx-auto mt-20">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle className="text-2xl">Your message was sent!</AlertTitle>
        <AlertDescription className="text-lg">
          I'll answer your request as quickly as possible.
        </AlertDescription>
      </Alert>
    </main>
  );
};

export default Page;
