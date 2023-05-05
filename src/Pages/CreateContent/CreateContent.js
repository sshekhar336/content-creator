import React from 'react'
import Header from '../../components/Header/Header';
import './CreateContent.css';
import FormWithTab from '../../components/FormWithTab/FormWithTab';
import Preview from '../../components/Preview/Preview';

function CreateContent() {
  return (
    <div className='createContentContainer'>
        <Header title="Create Content" />
        <div className='contentWithPreview'>
            <div className='section-1'>
                <FormWithTab />
            </div>
            <div className='section-2'>
                <Preview />
            </div>
        </div>
    </div>
  )
}

export default CreateContent;