import { ThemeVars } from '@mysten/dapp-kit';

export const walletTheme: ThemeVars = {
  colors: {
    primaryButton: '#42dcff',
    outlineButton: '#42dcff',
    iconButton: '#42dcff',
    body: '#ffffff',
    bodyMuted: '#94a3b8',
    bodyDanger: '#ef4444',
  },
  backgroundColors: {
    primaryButton: 'rgba(66, 220, 255, 0.1)',
    primaryButtonHover: 'rgba(66, 220, 255, 0.2)',
    outlineButtonHover: 'rgba(66, 220, 255, 0.1)',
    modalOverlay: 'rgba(0, 0, 0, 0.7)',
    modalPrimary: '#0a0f1a',
    modalSecondary: '#141e30',
    iconButton: 'transparent',
    iconButtonHover: 'rgba(66, 220, 255, 0.1)',
    dropdownMenu: '#0a0f1a',
    dropdownMenuSeparator: '#1e293b',
    walletItemSelected: 'rgba(66, 220, 255, 0.1)',
    walletItemHover: 'rgba(255, 255, 255, 0.05)',
  },
  borderColors: {
    outlineButton: 'rgba(66, 220, 255, 0.2)',
  },
  shadows: {
    primaryButton: '0 0 10px rgba(66, 220, 255, 0.2)',
    walletItemSelected: 'none',
  },
  blurs: {
    modalOverlay: '8px',
  },

  radii: {
    small: '8px',
    medium: '8px',
    large: '8px',
    xlarge: '8px',
  },
  fontWeights: {
    normal: '400',
    medium: '500',
    bold: '600',
  },
  fontSizes: {
    small: '14px',
    medium: '14px',
    large: '16px',
    xlarge: '18px',
  },
  typography: {
    fontFamily: 'var(--font-dm-sans)',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.02em',

  },
};
