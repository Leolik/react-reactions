import React from 'react'
import SlackFontEOT from '../../assets/fonts/slack-icons-Regular.eot'
import SlackFontTTF from '../../assets/fonts/slack-icons-Regular.ttf'
import SlackFontWOFF from '../../assets/fonts/slack-icons-Regular.woff'

export const SlackFontsCSS = () => {
  return (
    <style
      dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: Slack;
          src: url(${ SlackFontEOT });
          src: url(${ SlackFontEOT }?#iefix) format('embedded-opentype'),
               url(${ SlackFontWOFF }) format('woff'),
               url(${ SlackFontTTF }) format('truetype')
        }
      ` }}
    />
  )
}

export default SlackFontsCSS
