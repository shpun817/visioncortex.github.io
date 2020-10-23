/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link, useConfig } from 'docz'

import * as styles from './styles'

export const Logo = () => {
  const config = useConfig()
  return (
    <Flex alignItems="center" sx={styles.logo} data-testid="logo">
      <Link style={{ height: '48px'}} to="/" sx={styles.link}>
        <img style={{ height: '100%'}} src="public/images/visioncortex-logo-light.svg" />
      </Link>
    </Flex>
  )
}
