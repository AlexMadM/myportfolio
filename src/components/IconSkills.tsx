import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper";
import Icons from "./Icon";

type SkillIconPropsType = {
    iconId:string
    title:string
}


const IconSkills = (props:SkillIconPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                 <Icons iconId={props.iconId}/>
                <SkillTitle>{props.title}</SkillTitle>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  margin-top: 28px;
`

const SkillTitle = styled.p`
  align-self: start;
  color: var(--text, #1F2626);
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.166px;
  text-transform: uppercase;
`

export default IconSkills;