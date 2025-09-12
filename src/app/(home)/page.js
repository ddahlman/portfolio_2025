import { NeonIcon } from "@/app/shared/NeonIcon";
import { Braces, Brackets, Code } from "lucide-react";

export default function Home() {
  return (
    <section className="flex justify-between">
      <div>
        <h1 className="font-display text-9xl font-bold mb-6">
          Hi, I&apos;m a Swedish Frontend developer
        </h1>
        <p className="text-3xl">
          I build fast, accessible, and visually polished web apps with clean
          code, using React, Vue, and modern frontend tools.
        </p>
      </div>
      <div>
        <NeonIcon Icon={Braces} size={200} strokeWidth={1} />
        <NeonIcon Icon={Brackets} size={200} strokeWidth={1} />
        <NeonIcon Icon={Code} size={200} strokeWidth={1} />
      </div>
    </section>
  );
}
