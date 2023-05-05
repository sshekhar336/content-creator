import React, { useState } from 'react';
import './FormWithTab.css';
import TextTranslate from '../TextTranslate/TextTranslate';
import VideoTranslate from '../VideoTranslate/VideoTranslate';
import AudioTranslate from '../AudioTranslate/AudioTranslate';

function FormWithTab() {
    const [currentTab, setCurrentTab] = useState('text');
    const getForm = () => {
        if (currentTab === 'text') {
            return <TextTranslate />
        }
        if (currentTab === 'audio') {
            return <AudioTranslate />
        }
        if (currentTab === 'video') {
            return <VideoTranslate />
        }
        return <></>;
    }
  return (
    <div className='FormWithTabContainer'>
        <div className='tabContainer'>
            <div className={currentTab === 'text' ? 'tab isActive': 'tab'}
                onClick={() => setCurrentTab('text')}
            >
                Text
            </div>
            <div className={currentTab === 'audio' ? 'tab isActive': 'tab'}
                onClick={() => setCurrentTab('audio')}
            >
                Audio
            </div>
            <div className={currentTab === 'video' ? 'tab isActive': 'tab'}
                onClick={() => setCurrentTab('video')}
            >
                Video
            </div>
        </div>
        <div className='contentContainer'>
            {getForm()}
        </div>
    </div>
  )
}

export default FormWithTab;