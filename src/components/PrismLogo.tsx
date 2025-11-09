interface PrismLogoProps {
  className?: string;
}

export default function PrismLogo({ className = "w-6 h-6" }: PrismLogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Pyramid 3D shape */}
      {/* Front face */}
      <path
        d="M12 3L20 20H4L12 3Z"
        fill="url(#pyramid-gradient-front)"
      />
      
      {/* Left face */}
      <path
        d="M12 3L4 20L2 19L12 3Z"
        fill="url(#pyramid-gradient-left)"
        opacity="0.8"
      />
      
      {/* Right face */}
      <path
        d="M12 3L20 20L22 19L12 3Z"
        fill="url(#pyramid-gradient-right)"
        opacity="0.85"
      />
      
      {/* Highlight at apex */}
      <circle
        cx="12"
        cy="3"
        r="1.5"
        fill="white"
        opacity="0.6"
      />
      
      {/* Subtle edge highlights */}
      <path
        d="M12 3L12 8"
        stroke="white"
        strokeWidth="0.5"
        opacity="0.4"
      />
      
      <defs>
        <linearGradient
          id="pyramid-gradient-front"
          x1="12"
          y1="3"
          x2="12"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#60A5FA" />
          <stop offset="0.5" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
        <linearGradient
          id="pyramid-gradient-left"
          x1="2"
          y1="19"
          x2="12"
          y2="3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient
          id="pyramid-gradient-right"
          x1="22"
          y1="19"
          x2="12"
          y2="3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC4899" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
    </svg>
  );
}
