const NeonIcon = ({ Icon, size, strokeWidth }) => {
  return (
    <Icon
      size={size}
      strokeWidth={strokeWidth}
      stroke="url(#braceGradient)"
      className="drop-shadow-[0_0_3px_rgba(56,189,248,0.9),0_0_6px_rgba(56,189,248,0.5)]"
    >
      <defs>
        <linearGradient
          id="braceGradient"
          x1="0"
          y1="0"
          x2="0"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>
      </defs>
    </Icon>
  );
};

export { NeonIcon };
