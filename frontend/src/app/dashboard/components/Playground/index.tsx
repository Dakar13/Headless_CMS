// Dependencies
import React, { FC, ReactElement, useEffect, useState, memo } from 'react'

// Shared components
import MainLayout from '@layouts/main/MainLayout'

// Styles
import styles from './Playground.scss'

const Playground: FC = (): ReactElement => {
  const [showIframe, setShowIframe] = useState(false)

  useEffect(() => {
    if (!showIframe) {
      setShowIframe(true)
    }
  }, [showIframe])

  return (
    <div className={styles.playground}>
      <MainLayout title="Playground" header sidebar content footer>
        <>
          <h2>Playground</h2>

          <iframe
            title="Playground Iframe"
            src="http://localhost:4000"
            style={{ visibility: showIframe ? 'visible' : 'hidden' }}
          />
        </>
      </MainLayout>
    </div>
  )
}

export default memo(Playground)
