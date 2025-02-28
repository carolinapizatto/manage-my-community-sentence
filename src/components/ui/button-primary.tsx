
import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
ButtonPrimary.displayName = "ButtonPrimary"

export { ButtonPrimary }
