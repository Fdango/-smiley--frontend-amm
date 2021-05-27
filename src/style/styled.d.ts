// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@xdcx/uikit-v1/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}
