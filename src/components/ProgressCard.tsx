import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
interface ProgressCardProps {
  total: number;
  completed: number;
  label: string;
  description: string;
}
export const ProgressCard = ({
  total,
  completed,
  label,
  description
}: ProgressCardProps) => {
  const percentage = Math.round(completed / total * 100);
  return <Card className="p-6 animate-fadeIn">
      <div className="space-y-4">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-semibold text-secondary">{label}</h3>
          <span className="text-2xl font-bold text-[#1d70b8]">{completed}/{total}</span>
        </div>
        <Progress value={percentage} className="h-2" />
        <p className="text-sm text-muted mt-2">{description}</p>
      </div>
    </Card>;
};