export function LotusMandala({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <g className="ring-outer" style={{ transformOrigin: "110px 110px" }}>
        <circle cx="110" cy="110" r="100" stroke="#2E4A77" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="110" cy="10" r="2.5" fill="#059669" />
        <circle cx="210" cy="110" r="2.5" fill="#059669" />
        <circle cx="110" cy="210" r="2.5" fill="#059669" />
        <circle cx="10" cy="110" r="2.5" fill="#059669" />
      </g>
      <g className="ring-inner" style={{ transformOrigin: "110px 110px" }}>
        <circle cx="110" cy="110" r="86" stroke="#16315C" strokeWidth="1" />
        <circle cx="110" cy="24" r="1.8" fill="#7FD6B8" />
        <circle cx="196" cy="110" r="1.8" fill="#7FD6B8" />
        <circle cx="110" cy="196" r="1.8" fill="#7FD6B8" />
        <circle cx="24" cy="110" r="1.8" fill="#7FD6B8" />
      </g>
      <g stroke="#5DCAA5" strokeWidth="2" strokeLinecap="round">
        <path d="M110 160 C 70 130, 70 80, 110 50 C 150 80, 150 130, 110 160 Z" />
        <path d="M110 160 C 60 145, 45 100, 60 65 C 100 75, 115 120, 110 160 Z" />
        <path d="M110 160 C 160 145, 175 100, 160 65 C 120 75, 105 120, 110 160 Z" />
        <path d="M110 160 C 55 160, 30 125, 30 95 C 70 95, 100 125, 110 160 Z" />
        <path d="M110 160 C 165 160, 190 125, 190 95 C 150 95, 120 125, 110 160 Z" />
      </g>
      <circle cx="110" cy="160" r="4" fill="#059669" />
    </svg>
  );
}
