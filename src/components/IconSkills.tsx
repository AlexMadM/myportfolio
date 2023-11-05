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
    
`

const SkillTitle = styled.p`
  align-self: start;
`

export default IconSkills;