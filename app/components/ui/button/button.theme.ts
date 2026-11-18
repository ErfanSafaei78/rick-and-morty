import { tv } from 'tailwind-variants'

export const buttonTheme = tv(
  {
    base: 'inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 motion-reduce:transition-none',
    variants: {
      variant: {
        solid: '',
        ghost: '',
      },
      color: {
        accent: '',
        neutral: '',
      },
      radius: {
        sm: 'rounded',
        full: 'rounded-full',
      },
      size: {
        sm: 'size-6 p-0 text-base leading-6',
        md: '',
      },
      iconOnly: {
        true: '',
        false: '',
      },
      state: {
        enabled: 'cursor-pointer',
        disabled: 'pointer-events-none cursor-not-allowed opacity-50',
        loading: 'pointer-events-none cursor-wait opacity-70',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        color: 'accent',
        class:
          'bg-lime-400 text-cyan-950 hover:bg-lime-400/90 active:bg-lime-400/80',
      },
      {
        variant: 'solid',
        color: 'neutral',
        class:
          'bg-neutral-700 text-neutral-100 hover:bg-neutral-700/90 active:bg-neutral-700/80',
      },
      {
        variant: 'ghost',
        color: 'accent',
        class:
          'bg-transparent text-lime-400 hover:bg-neutral-700 active:bg-neutral-700/80',
      },
      {
        variant: 'ghost',
        color: 'neutral',
        class:
          'bg-transparent text-neutral-100 hover:bg-neutral-700 active:bg-neutral-700/80',
      },
      {
        size: 'md',
        iconOnly: true,
        class: 'size-12 p-0 text-sm',
      },
      {
        size: 'md',
        iconOnly: false,
        class: 'h-12 px-4 py-3 text-sm',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'accent',
      radius: 'sm',
      size: 'md',
      iconOnly: false,
      state: 'enabled',
    },
  },
  {
    twMerge: true,
  },
)
