import { useEffect, useRef } from "react";

const FADE = 0.5;

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {});

    const tick = () => {
      if (video.duration && !isNaN(video.duration)) {
        const t = video.currentTime;
        const d = video.duration;
        let opacity = 1;
        if (t < FADE) opacity = t / FADE;
        else if (t > d - FADE) opacity = Math.max(0, (d - t) / FADE);
        video.style.opacity = String(opacity);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
      }, 100);
    };
    video.addEventListener("ended", handleEnded);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div
      className="absolute z-0"
      style={{ top: "300px", inset: "auto 0 0 0" }}
    >
      <div className="relative">
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          muted
          playsInline
          autoPlay
          className="w-full h-auto object-cover transition-opacity"
          style={{ opacity: 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
    </div>
  );
}
