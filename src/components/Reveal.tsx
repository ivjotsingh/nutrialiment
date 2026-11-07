import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  testid,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  testid?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      data-testid={testid}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.72, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function MaskedLines({
  lines,
  className,
  lineClassName,
  baseDelay = 0,
  stagger = 0.12,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  baseDelay?: number;
  stagger?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span className="mask-line" key={i}>
          <motion.span
            className={lineClassName}
            initial={shouldReduceMotion ? false : { y: "104%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.9,
              delay: baseDelay + i * stagger,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
