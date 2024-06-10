import Vant from 'vant'
import 'vant/lib/index.css'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(Vant)
}
