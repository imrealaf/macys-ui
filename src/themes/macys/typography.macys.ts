export enum LineHeights {
  h1 = 70,
  h2 = 55,
  h3 = 42,
  h4 = 30,
  h5 = 26,
  h6 = 21,
  body = 14,
  bodySm = 12,
  bodyLg = 18
}

export enum MobileLineHeights {
  h1 = 42,
  h2 = 37,
  h3 = 31,
  h4 = 26,
  h5 = 21,
  h6 = 19
}

export enum FontSizes {
  h1 = 60,
  h2 = 45,
  h3 = 35,
  h4 = 25,
  h5 = 20,
  h6 = 16,
  body = 14,
  bodySm = 12,
  bodyLg = 18
}

export enum MobileFontSizes {
  h1 = 36,
  h2 = 30,
  h3 = 24,
  h4 = 20,
  h5 = 16,
  h6 = 14
}

export enum FontWeights {
  h1 = 700,
  h2 = 700,
  h3 = 700,
  h4 = 700,
  h5 = 700,
  h6 = 700,
  body = 400,
  bodySm = 400,
  bodyLg = 500
}

export enum LetterSpacings {
  h1 = '-0.01em',
  h2 = '-0.015em',
  h3 = '-0.01em',
  h4 = '-0.01em',
  h5 = '-0.01em',
  h6 = '-0.01em',
  body = '0',
  bodySm = '0',
  bodyLg = '0'
}

export const fontFamily = [
  '"Helvetica Neue"',
  'Arial',
  'Helvetica',
  'sans-serif'
].join(',')

export default {
  fontSize: FontSizes.body,
  fontFamily,
  h1: {
    fontWeight: FontWeights.h1,
    fontSize: FontSizes.h1,
    letterSpacing: LetterSpacings.h1,
    '@media (max-width:600px)': {
      fontSize: MobileFontSizes.h1
    }
  },
  h2: {
    fontWeight: FontWeights.h2,
    fontSize: FontSizes.h2,
    letterSpacing: LetterSpacings.h2,
    '@media (max-width:600px)': {
      fontSize: MobileFontSizes.h2
    }
  },
  h3: {
    fontWeight: FontWeights.h3,
    fontSize: FontSizes.h3,
    letterSpacing: LetterSpacings.h3,
    '@media (max-width:600px)': {
      fontSize: MobileFontSizes.h3
    }
  },
  h4: {
    fontWeight: FontWeights.h4,
    fontSize: FontSizes.h4,
    letterSpacing: LetterSpacings.h4,
    '@media (max-width:600px)': {
      fontSize: MobileFontSizes.h4
    }
  },
  h5: {
    fontWeight: FontWeights.h5,
    fontSize: FontSizes.h5,
    letterSpacing: LetterSpacings.h5,
    '@media (max-width:600px)': {
      fontSize: MobileFontSizes.h5
    }
  },
  h6: {
    fontWeight: FontWeights.h6,
    fontSize: FontSizes.h6,
    letterSpacing: LetterSpacings.h6,
    '@media (max-width:600px)': {
      fontSize: MobileFontSizes.h6
    }
  },
  body1: {
    fontWeight: FontWeights.body,
    fontSize: FontSizes.body,
    letterSpacing: LetterSpacings.body
  },
  body2: {
    fontWeight: FontWeights.bodySm,
    fontSize: FontSizes.bodySm,
    letterSpacing: LetterSpacings.bodySm
  }
}
