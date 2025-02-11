interface BadgeProps {
  children: React.ReactNode;
  variant: 'founder' | 'builder';
}

export function Badge({ children, variant }: BadgeProps) {
  const variantStyles = {
    founder: 'bg-gradient-to-r from-[#42dcff]/10 to-[#ffa9f9]/10 border-[#42dcff]/30 text-[#42dcff]',
    builder: 'bg-gradient-to-r from-[#42dcff]/10 to-[#42dcff]/5 border-[#42dcff]/30 text-[#42dcff]'
  };

  return (
    <span className={`px-2 py-1 rounded-md border ${variantStyles[variant]} text-xs font-medium`}>
      {children}
    </span>
  );
} 