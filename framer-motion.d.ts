declare module "framer-motion" {
  import * as React from "react";

  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    variants?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    whileFocus?: any;
    whileDrag?: any;
    drag?: boolean | "x" | "y";
    dragConstraints?: any;
    dragElastic?: number | boolean;
    dragMomentum?: boolean;
    onDragStart?: any;
    onDragEnd?: any;
    onDrag?: any;
    layout?: boolean | "position" | "size";
    layoutId?: string;
    style?: React.CSSProperties;
    onAnimationStart?: any;
    onAnimationComplete?: any;
    viewport?: any;
    onViewportEnter?: any;
    onViewportLeave?: any;
    [key: string]: any;
  }

  type MotionComponent<T> = React.ForwardRefExoticComponent<
    MotionProps & T & { children?: React.ReactNode }
  >;

  export const motion: {
    div: MotionComponent<React.HTMLAttributes<HTMLDivElement>>;
    h1: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>>;
    h2: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>>;
    h3: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>>;
    h4: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>>;
    h5: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>>;
    h6: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>>;
    p: MotionComponent<React.HTMLAttributes<HTMLParagraphElement>>;
    span: MotionComponent<React.HTMLAttributes<HTMLSpanElement>>;
    a: MotionComponent<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
    button: MotionComponent<React.ButtonHTMLAttributes<HTMLButtonElement>>;
    form: MotionComponent<React.FormHTMLAttributes<HTMLFormElement>>;
    input: MotionComponent<React.InputHTMLAttributes<HTMLInputElement>>;
    textarea: MotionComponent<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>
    >;
    img: MotionComponent<React.ImgHTMLAttributes<HTMLImageElement>>;
    section: MotionComponent<React.HTMLAttributes<HTMLElement>>;
    article: MotionComponent<React.HTMLAttributes<HTMLElement>>;
    nav: MotionComponent<React.HTMLAttributes<HTMLElement>>;
    ul: MotionComponent<React.HTMLAttributes<HTMLUListElement>>;
    ol: MotionComponent<React.HTMLAttributes<HTMLOListElement>>;
    li: MotionComponent<React.LiHTMLAttributes<HTMLLIElement>>;
    [key: string]: any;
  };

  export const AnimatePresence: React.FC<{
    children?: React.ReactNode;
    mode?: "wait" | "sync" | "popLayout";
    initial?: boolean;
    custom?: any;
    onExitComplete?: () => void;
  }>;
}
