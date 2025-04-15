// UserCard.tsx
import React from 'react';
import { Card, CardContent, Avatar, Typography, Button } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  max-width: 320px;
  margin: 20px auto;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const StyledButton = styled(Button)`
  text-transform: none;
  border-radius: 8px;
`;

const UserCard: React.FC = () => {
  return (
    <StyledCard>
      <CardContent>
        <Centered>
          <Avatar
            src="https://i.pravatar.cc/150?img=3"
            sx={{ width: 80, height: 80 }}
          />
          <Typography variant="h6">Кирилл Нагулин</Typography>
          <Typography variant="body2" color="text.secondary">
            Разработчик, Москва
          </Typography>
          <StyledButton variant="contained" color="primary">
            Написать
          </StyledButton>
        </Centered>
      </CardContent>
    </StyledCard>
  );
};

export default UserCard;
