import React from 'react';
import { Container, Header, Left, Body, Title } from 'native-base';


export default function TopHeader({title}){
    return(
        <Container>
        <Header>
          <Body>
            <Title>{title}</Title>
          </Body>
        </Header>
      </Container>
    )
}