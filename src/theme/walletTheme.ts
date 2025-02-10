import { ThemeVars } from '@mysten/dapp-kit';

export const walletTheme: ThemeVars = {
  colors: {
    primaryButton: '#fff7ad',
    outlineButton: '#fff7ad',
    iconButton: '#fff7ad',
    body: '#fff7ad',
    bodyMuted: '#9ca3af',
    bodyDanger: '#FF0000',
  },
  backgroundColors: {
    primaryButton: 'rgba(255, 169, 249, 0.2)',
    primaryButtonHover: 'rgba(255, 169, 249, 0.3)',
    outlineButtonHover: 'rgba(255, 169, 249, 0.2)',
    modalOverlay: 'rgba(0, 0, 0, 0.5)',
    modalPrimary: '#000000',
    modalSecondary: '#171717',
    iconButton: 'transparent',
    iconButtonHover: 'rgba(255, 169, 249, 0.2)',
    dropdownMenu: 'rgba(0, 0, 0, 0.95)',
    dropdownMenuSeparator: '#333333',
    walletItemSelected: 'rgba(255, 169, 249, 0.2)',
    walletItemHover: 'rgba(255, 255, 255, 0.05)',
  },
  borderColors: {
    outlineButton: 'transparent',
  },
  shadows: {
    primaryButton: 'none',
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
    normal: '500',
    medium: '500',
    bold: '500',
  },
  fontSizes: {
    small: '14px',
    medium: '14px',
    large: '14px',
    xlarge: '14px',
  },
  typography: {
    fontFamily: 'var(--font-dm-sans)',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.02em',

  },
};
