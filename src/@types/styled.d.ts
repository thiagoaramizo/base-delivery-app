import 'styled-components'
import { AppThemeType } from './AppThemeType'

declare module 'styled-components' {
  export interface DefaultTheme extends AppThemeType {}
}