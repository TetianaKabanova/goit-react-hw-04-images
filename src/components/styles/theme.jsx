export const theme = {
  colors: {
    primary: '#057AF0',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#045CB4',
    mainBackground: ['linear-gradient(to bottom, #f2f2f2, #9e9e9e)'],
    tagBackground: ['linear-gradient(to bottom, #3f51b5, #3f51b5)'],
    white: '#ffffff',
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  spacing: value => `${4 * value}px`,

  fontSize: {
    s: '14px',
    m: '16px',
    l: '24px',
    xl: '36px',
  },

  lineHeight: {
    body: '1.5',
    heading: '1.125',
  },
  border: {
    none: 'none',
  },
  borderRadius: {
    none: '0',
  },
  boxShadow: {
    textShadow: '0 1px 1px rgba(236, 230, 230, 0.05)',
    boxShadow: ' inset 0 -5px 45px rgba(100, 100, 100, 0.2)',
  },
};
