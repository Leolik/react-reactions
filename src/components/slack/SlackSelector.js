import React from 'react'
import reactCSS from 'reactcss'

import SlackFontsCSS from './SlackFontsCSS'
import SlackSelectorCSS from './SlackSelectorCSS'
import SlackSelectorHeader from './SlackSelectorHeader'
import SlackSelectorItems from './SlackSelectorItems'
import SlackSelectorFooter from './SlackSelectorFooter'

export const SlackSelector = ({ active, scrollHeight, frequent, removeEmojis, onSelect, useFonts }) => {
  const styles = reactCSS({
    'default': {
      menu: {
        fontFamily: '"Helvetica Neue",Helvetica,"Segoe UI",Tahoma,Arial,sans-serif',
        width: '358px',
        color: '#555459',
        fontSize: '.95rem',
        background: '#f7f7f7',
        lineHeight: '1rem',
        boxShadow: '0 5px 10px rgba(0,0,0,.12)',
        borderRadius: '6px',
        border: '1px solid rgba(0,0,0,.15)',
      },
    },
  })

  return (
    <div style={ styles.menu } className="sci-selector">
      { useFonts && <SlackFontsCSS /> }
      <SlackSelectorCSS />
      <SlackSelectorHeader active={ active } />
      <SlackSelectorItems
        scrollHeight={ scrollHeight }
        removeEmojis={ removeEmojis }
        frequent={ frequent }
        onSelect={ onSelect }
      />
      <SlackSelectorFooter onSelect={ onSelect } />
    </div>
  )
}

SlackSelector.defaultProps = {
  useFonts: true,
  active: 'mine',
  scrollHeight: '270px',
  removeEmojis: ['🙂', '🙃', '☺️', '🤑', '🤓', '🤗', '🙄', '🤔', '🙁', '☹️', '🤐', '🤒',
                 '🤕', '🤖'],
  frequent: ['👍', '🐉', '🙌', '🗿', '😊', '🐬', '😹', '👻', '🚀', '🚁', '🏇', '🇨🇦'],
}

export default SlackSelector
