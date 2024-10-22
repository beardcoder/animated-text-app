import { useRouter } from "next/router";
import { useRef } from "react";
import DecodeAnimation from "react-decode-animation";
import { GeistMono } from "geist/font/mono";

export default function Animate() {
  const router = useRouter();
  const { text } = router.query;
  const ref = useRef(null);

  if (!text) {
    return <div>No text provided</div>;
  }

  const customCharacters =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\",./<>?~`ΛΩΣΠΔΘΦΨΞ";

  return (
    <div
      className={`flex h-screen items-center justify-center ${GeistMono.className}`}
    >
      <div className="w-full max-w-4xl text-6xl font-bold bg-white/20 p-6">
        &gt;{" "}
        <DecodeAnimation
          ref={ref}
          text={text.toString()}
          autoplay
          customCharacters={customCharacters}
        />
      </div>
    </div>
  );
}
