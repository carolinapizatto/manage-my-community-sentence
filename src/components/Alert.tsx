
import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AlertProps {
  title?: string;
  children: React.ReactNode;
  variant?: "success" | "warning" | "error" | "info";
  className?: string;
}

export function Alert({
  title,
  children,
  variant = "info",
  className,
}: AlertProps) {
  const variantStyles = {
    success: {
      border: "border-l-4 border-green-600",
      bg: "bg-green-50",
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      titleColor: "text-green-800",
    },
    warning: {
      border: "border-l-4 border-amber-500",
      bg: "bg-amber-50",
      icon: <AlertTriangle className="h-5 w-5 text-amber-600" />,
      titleColor: "text-amber-800",
    },
    error: {
      border: "border-l-4 border-red-600",
      bg: "bg-red-50",
      icon: <XCircle className="h-5 w-5 text-red-600" />,
      titleColor: "text-red-800",
    },
    info: {
      border: "border-l-4 border-blue-600",
      bg: "bg-blue-50",
      icon: <Info className="h-5 w-5 text-blue-600" />,
      titleColor: "text-blue-800",
    },
  };

  const style = variantStyles[variant];

  return (
    <div className={cn("p-4 rounded", style.border, style.bg, className)} role="alert">
      <div className="flex items-start gap-3">
        {style.icon}
        <div>
          {title && <p className={cn("font-medium", style.titleColor)}>{title}</p>}
          <div className={title ? "mt-2" : ""}>{children}</div>
        </div>
      </div>
    </div>
  );
}
