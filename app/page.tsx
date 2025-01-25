import Image from "next/image";
import { APP_NAME } from "./constants";

export default function Home() {
  return (
    <section>
        <nav  className="flex justify-between items-center">
          <div className="flex">
            <Image
            src="/logo.svg"
            alt="Positivus logo"
            width={36}
            height={36}
          />
          <p className="font-space-grotesk font-bold text-4xl pl-3" >{APP_NAME}</p>

          </div>
        </nav>

    </section>
  );
}
