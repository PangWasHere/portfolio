import React from 'react';
import styled from 'styled-components';

// TODO: https://blog.finiam.com/blog/infinite-looping-react-component

const role_names = ['Software Developer', 'Teacher', 'Artist', 'Writer', 'Game Developer', 'Hacking Enthusiast', 'Linguaphile', 'Bookworm'];

const Role = (props) => {
    return (
        <Item style={{'--position': `${props.position}`}}>
            {props.role_name}
        </Item>
    );
}

const Roles = () => {
    return (
        <Slider>
          <RoleList>
            {role_names.map((role_name, index) =>(
                <Role key={index} role_name={role_name} position={index + 1} />
            ))}
            {role_names.map((role_name, index) =>(
                <Role key={index} role_name={role_name} position={index + 1} />
            ))}
          </RoleList>
        </Slider>
    );
}

const Slider = styled.section`
  display: flex;
  gap: 75px;
  width: 100%;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 10% 90%,
    transparent
  );

  
`;

const RoleList = styled.ul`  
  list-style: none;
  flex-shrink: 0;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 75px;
  
  animation: scroll 50s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
  
`;

const Item = styled.li`
  display: flex;
  font-family: "Jomhuria", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 5rem;

  &:hover {
    color: grey;
  }
`;

export default Roles;