import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  background-color: #f0f2f5;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const DescriptionBox = styled.div`
  background: white;
  padding: 20px 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #333;
`;

const ProfileComponent = () => {
  const profilePictureUrl = 'profile.jpg'; // Replace with your profile picture URL

  return (
    <Container>
      <ProfileImage src={profilePictureUrl} alt="Profile Picture" />
      <DescriptionBox>
        <Description>
          Je propose des services freelance de développement d'applications 3D interactives adaptés à vos besoins 😊 Que ce soit sur iOS, Android, PC, macOS ou des applications web, je m'assure de fournir des solutions parfaitement adaptées à vos exigences 📱💻
        </Description>
      </DescriptionBox>
    </Container>
  );
};

export default ProfileComponent;
