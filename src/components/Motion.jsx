import { motion } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1];

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

/** Animates children in with a stagger when they scroll into view. */
export function Reveal({ children, className, as = "div", once = true, amount = 0.15, ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag className={className} variants={stagger} initial="hidden" whileInView="show" viewport={{ once, amount }} {...rest}>
      {children}
    </Tag>
  );
}

export function Item({ children, className, as = "div", ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag className={className} variants={rise} {...rest}>
      {children}
    </Tag>
  );
}
