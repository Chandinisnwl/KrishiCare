import { cn } from "@/lib/utils";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PageContainer({ children, className, ...props }: PageContainerProps) {
  return (
    <div
      className={cn(
        "min-h-screen w-full max-w-screen-xl mx-auto px-4 py-6 md:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
