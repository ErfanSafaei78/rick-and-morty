import { tv } from 'tailwind-variants'

export const inputTheme = tv({
  slots: {
    root: 'relative flex min-w-0 items-center',
    field:
      'h-12 w-full appearance-none rounded bg-neutral-800 py-3 pl-4 pr-12 font-sans text-sm leading-normal text-neutral-100 outline-none placeholder:text-neutral-100 [&::-webkit-search-cancel-button]:appearance-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900',
    clear:
      'absolute right-2 inline-flex size-8 cursor-pointer items-center justify-center rounded text-xl leading-none text-neutral-300 transition-colors duration-150 outline-none hover:text-neutral-100 focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-800 motion-reduce:transition-none',
  },
})
