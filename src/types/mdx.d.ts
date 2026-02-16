declare module '*.mdx' {
  import type { ComponentType } from 'react'
  const component: ComponentType
  export default component
}

declare module '@mdx-js/react' {
  import type { ComponentType, ReactNode } from 'react'

  interface MDXProviderProps {
    children: ReactNode
    components?: Record<string, ComponentType<Record<string, unknown>>>
  }

  export const MDXProvider: ComponentType<MDXProviderProps>
  export function useMDXComponents(
    components?: Record<string, ComponentType<Record<string, unknown>>>
  ): Record<string, ComponentType<Record<string, unknown>>>
}
