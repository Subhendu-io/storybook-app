import React from 'react';
import Card from '@mui/material/Card';

// import './style.css';
import { Button, CardActions, CardContent } from '@mui/material';

interface CardProps {
  cardStyle: any,
  cardContent: any,
  cardActions: Array<any>,
}

export const AppCard = ({
  cardStyle,
  cardContent,
  cardActions,
}: CardProps) => {
  return (
    <Card style={cardStyle} >
      <CardContent style={{padding: 0}}>
        {cardContent()}
      </CardContent>
      <CardActions style={{justifyContent: 'end', borderTop: '1px solid #e5e5e5'}}>
        {cardActions.map((cardActions: any) => (
          <Button key={cardActions.title} onClick={cardActions.action} size="small">{cardActions.title}</Button>
        ))}
      </CardActions>
    </Card>
  );
};
