import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomChar() {
    return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function ScrambleText({
    text,
    className = "",
    duration = 900,
    delay = 0,
}: {
    text: string;
    className?: string;
    duration?: number;
    delay?: number;
}) {
    const [display, setDisplay] = useState(text);
    const frameRef = useRef<number>(undefined);
    const startedRef = useRef(false);

    useEffect(() => {
        if (startedRef.current) return;
        startedRef.current = true;

        const chars = text.split("");
        const startTime = performance.now() + delay;

        function tick(now: number) {
            const elapsed = now - startTime;
            if (elapsed < 0) {
                frameRef.current = requestAnimationFrame(tick);
                return;
            }

            const progress = Math.min(elapsed / duration, 1);
            const lockedCount = Math.floor(progress * chars.length);

            const next = chars
                .map((c, i) => {
                    if (c === " ") return " ";
                    return i < lockedCount ? c : randomChar();
                })
                .join("");

            setDisplay(next);

            if (progress < 1) {
                frameRef.current = requestAnimationFrame(tick);
            } else {
                setDisplay(text);
            }
        }

        frameRef.current = requestAnimationFrame(tick);
        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, [text, duration, delay]);

    return <span className={className}>{display}</span>;
}
