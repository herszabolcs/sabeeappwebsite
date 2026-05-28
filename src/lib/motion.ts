/** Shared motion tokens for homepage sections */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const smoothTransition = {
  duration: 0.45,
  ease: easeOut,
};

export const panelSpring = {
  type: "spring" as const,
  stiffness: 220,
  damping: 32,
  mass: 0.8,
};

export const scrollSpring = {
  stiffness: 85,
  damping: 28,
  restDelta: 0.001,
};
