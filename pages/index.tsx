import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    router.push(`/animate?text=${encodeURIComponent(text)}`);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-96">
        <h1 className="text-3xl font-bold mb-4 text-center">Animierter Text</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Schreib hier deinen Text rein"
            required
            className="p-4 w-full text-black"
          />
          <br />
          <button
            type="submit"
            className="bg-blue-500 w-full mt-4 p-4 uppercase font-bold"
          >
            Absenden
          </button>
        </form>
      </div>
    </div>
  );
}
