export const thunderFlash = {
  hidden: { 
    opacity: 0,
    scale: 0.9,
  },
  visible: { 
    opacity: [0, 1, 0.5, 1],
    scale: [0.9, 1.02, 0.99, 1],
    transition: {
      duration: 0.7,
      times: [0, 0.1, 0.2, 0.3],
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

export const textFlash = {
  hidden: { 
    opacity: 0,
    y: 20,
    filter: 'brightness(1)',
  },
  visible: { 
    opacity: 1,
    y: 0,
    filter: ['brightness(1)', 'brightness(2)', 'brightness(1)', 'brightness(1.5)', 'brightness(1)'],
    transition: {
      duration: 0.8,
      times: [0, 0.1, 0.2, 0.3, 1],
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
};

export const cardFlash = {
  hidden: { 
    opacity: 0,
    x: -20,
    filter: 'brightness(1)',
  },
  visible: { 
    opacity: 1,
    x: 0,
    filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'],
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
};

export const buttonFlash = {
  hidden: { 
    scale: 0.8, 
    opacity: 0 
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    }
  },
  hover: {
    scale: 1.05,
    filter: 'brightness(1.2)',
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95,
    filter: 'brightness(0.9)'
  }
};

export const glowAnimation = {
  initial: { opacity: 0 },
  animate: { 
    opacity: [0, 0.7, 0.3, 0.5, 0.2],
    scale: [0.8, 1.1, 0.9, 1, 1]
  },
  transition: { 
    duration: 2,
    times: [0, 0.1, 0.2, 0.3, 1]
  }
}; 