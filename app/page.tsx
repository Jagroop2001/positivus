import Image from "next/image";
import { APP_NAME } from "./constants";

export default function Home() {
  return (
    <section className="container mx-auto mt-10">
        <nav  className="flex justify-evenly items-center">
          <div className="flex items-center">
            <Image
            src="/logo.svg"
            alt="Positivus logo"
            width={36}
            height={36}
          />
          <p className="font-space-grotesk font-bold text-4xl pl-3 drop-shadow-md" >{APP_NAME}</p>

          </div>
          <div>
            <ul className="flex space-x-8">
              <li><a href="" className="text-lg font-space-gtotesk font-400">About us</a></li>
              <li><a href="" className="text-lg font-space-gtotesk font-400">Services</a></li>
              <li><a href="" className="text-lg font-space-gtotesk font-400">Use cases</a></li>
              <li><a href="" className="text-lg font-space-gtotesk font-400">Pricing</a></li>
              <li><a href="" className="text-lg font-space-gtotesk font-400">Blog</a></li>
              <li><a href="" className="text-lg font-space-gtotesk font-400 border border-solid border-black px-6 py-4 rounded-md">Request a quote</a></li>
            </ul>
          </div>
        </nav>

    </section>
  );
}
