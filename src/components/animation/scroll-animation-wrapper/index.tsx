import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

interface ScrollAnimationWrapperProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    delay?: number;
}

const ScrollAnimationWrapper = ({
    children,
    className,
    style,
    delay = 0,
    ...props
}: ScrollAnimationWrapperProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            className={className}
            style={style}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimationWrapper;
