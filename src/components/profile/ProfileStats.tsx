interface ProfileStatsProps {
  stats: {
    builderScore: number;
    socialRank: string;
    reputation: string;
  };
}

export function ProfileStats({ stats }: ProfileStatsProps) {
  return (
    <div className="flex gap-3">
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className="text-center">
          <div className="text-lg font-bold text-white">{value}</div>
          <div className="text-xs text-gray-400">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </div>
        </div>
      ))}
    </div>
  );
} 