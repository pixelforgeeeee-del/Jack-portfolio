import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Splits `text` into characters and fades each one from opacity 0.2 to 1
 * as the paragraph scrolls through the viewport. An invisible copy of the
 * text reserves layout space; the animated characters are absolutely
 * positioned on top of it.
 */
export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p ref={ref} className={className} style={{ position: 'relative', ...style }}>
      <span style={{ visibility: 'hidden' }}>{text}</span>
      <span style={{ position: 'absolute', inset: 0 }}>
        {characters.map((char, i) => {
          const start = i / characters.length;
          const end = start + 1 / characters.length;
          return (
            <Character
              key={i}
              char={char}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        })}
      </span>
    </p>
  );
}

function Character({
  char,
  progress,
  range,
}: {
  char: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
}
