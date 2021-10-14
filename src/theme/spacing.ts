export type SpacingSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export enum SpacingSizes {
  xxs = 8,
  xs = 16,
  sm = 32,
  md = 40,
  lg = 48,
  xl = 64,
  xxl = 80
}

export default [
  0,
  SpacingSizes.xxs,
  SpacingSizes.xs,
  SpacingSizes.sm,
  SpacingSizes.md,
  SpacingSizes.lg,
  SpacingSizes.xl,
  SpacingSizes.xxl
] as number[]
