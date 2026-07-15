import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

export default function FadeUp({
    children,
    delay = 0,
    className = "",
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) {
    const { ref, inView } = useInView<HTMLDivElement>();

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out will-change-transform ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            } ${className}`}
        >
            {children}
        </div>
    );
}
