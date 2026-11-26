export default function HeroArt({ alt }: { alt: string }) {
  return (
    <svg viewBox="0 0 640 420" role="img" aria-label={alt} className="h-auto w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="640" height="420" fill="#FFFFFF" />
      <g stroke="#E3E0D8" stroke-width="1"><path d="M0 60 H640 M0 120 H640 M0 180 H640 M0 240 H640 M0 300 H640 M0 360 H640 M60 0 V420 M120 0 V420 M180 0 V420 M240 0 V420 M300 0 V420 M360 0 V420 M420 0 V420 M480 0 V420 M540 0 V420 M600 0 V420" /></g>
      <g fill="none" stroke="#181818" stroke-width="3"><path d="M120 360 V140 L320 60 L520 140 V360" /><path d="M120 360 H520" /><path d="M200 360 V220 H440 V360" /><path d="M280 360 V280 H360 V360" /></g>
      <g fill="none" stroke="#9A3B26" stroke-width="2"><path d="M200 220 H440 M320 60 V140 M120 280 H200 M440 280 H520" /></g>
      <g fill="#9A3B26"><rect x="150" y="180" width="28" height="28" /><rect x="462" y="180" width="28" height="28" /><rect x="306" y="100" width="28" height="28" /></g>
      <path d="M560 360 L560 80 L600 80" fill="none" stroke="#181818" stroke-width="2" />
      <circle cx="560" cy="80" r="6" fill="#181818" />
      <rect x="40" y="380" width="180" height="10" fill="#181818" />
    </svg>
  )
}
