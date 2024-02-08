import React from 'react';

import { AppCard } from './../../components/Cards';

export const FeedBack: React.FC = () => {

  const cardStyle = {
    with: '100%',
  }

  const cardContent = () => {
    return (
      <div>
        <div style={{borderBottom: '1px solid #e5e5e5', padding: 10}}>
          <h5 style={{margin: 0}}>FeedBack Component</h5>
        </div>
        <div style={{padding: '10px 20px'}}>
          <p className="m-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged.
            <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    )
  };

  const handleSave = (event: any) => {
    console.log('Handle Save ===> ', event);
  }

  const handleCancel = (event: any) => {
    console.log('Handle Cancel ===> ', event);
  }

  const cardActions = [
    {
      title: 'Save',
      action: handleSave
    },
    {
      title: 'Cancel',
      action: handleCancel
    }
  ]

  return (
    <div style={{padding: 30}}>
      <AppCard cardStyle={cardStyle} cardActions={cardActions} cardContent={cardContent} />
    </div>
  );
};
