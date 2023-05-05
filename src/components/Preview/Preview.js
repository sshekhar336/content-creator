import React from 'react';
import './Preview.css';

function Preview({content}) {
  return (
    <div className='previewContainer'>
      <p className='previewTitle'>Preview</p>
      <div className='deviceView'>
        <div className='mobileContainer'>
          {content && (
          <div className='previewContent'>
            {content}
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Preview;