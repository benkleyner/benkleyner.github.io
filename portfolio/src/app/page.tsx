import { SocialLinks } from "@/components/social-links";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 flex items-center justify-center">
      <main className="flex flex-row w-full max-w-6xl h-[500px] bg-transparent rounded-2xl shadow-none">
        <div className="flex flex-col items-center justify-center w-1/2 h-full gap-8">
          <div className="relative w-100 h-120 rounded-xl overflow-hidden flex items-center justify-center shadow-lg">
            <Image
              src="/profilepic.jpeg"
              alt="Profile"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <SocialLinks />
        </div>
        <div className="flex flex-col justify-center w-1/2 h-full pl-12 gap-8">
          <h1 className="text-5xl font-bold">Benjamin Kleyner</h1>
          <p className="text-xl max-w-xl">
            I am a Computer Science student and software engineering intern
            passionate about building innovative solutions. I have experience in
            full-stack development, cloud technologies, and data processing,
            with a focus on creating efficient and impactful systems, including
            building automations with intelligent agents.
          </p>
        </div>
      </main>
    </div>
  );
}
