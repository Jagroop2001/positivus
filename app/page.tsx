import Image from "next/image";

export default function Home() {
  return (
    <section>
        <nav  className="flex justify-between items-center">
          <div className="">
            <Image
            src="/logo.svg"
            alt="Positivus logo"
            width={36}
            height={36}
          />
          
          </div>
        </nav>

    </section>
  );
}
