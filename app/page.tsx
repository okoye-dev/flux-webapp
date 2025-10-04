import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-[20px] border border-border bg-blue/5 p-10 text-2xl font-semibold">
      Welcome to Flux Dashboard!
      <p className="text-center text-lg font-normal">
        Manage farmers, monitor activities, and provide AI-powered agricultural
        advice
      </p>
      <Link href={"/farmer-management"}>
        <Button>Manage Farmers</Button>
      </Link>
    </div>
  );
}
