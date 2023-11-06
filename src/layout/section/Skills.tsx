import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import IconSkills from "../../components/IconSkills";
import {FlexWrapper} from "../../components/FlexWrapper";


const skillData = [{
    iconId: 'js',
    title: 'JAVACRIPT',

},

    {
        iconId: 'ts',
        title: 'typescript',

    },
    {
        iconId: 'react',
        title: 'react js',

    },
    {
        iconId: 'redux',
        title: 'Redux',

    },
    {
        iconId: 'sc',
        title: 'Styled Components',

    },



]



const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <h3>Skills</h3>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {skillData.map((s,i) =>
                    {
                        return <IconSkills  iconId={s.iconId} title={s.title}
                                     key={i}/>

                    })}

                </FlexWrapper>

            </Container>


        </StyledSkills>
    );
};


const StyledSkills = styled.div`
  margin-top: 140px;
  margin-bottom: 180px;
  
  h3{
    color: #151717;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px; /* 108.333% */
    letter-spacing: 0.96px;
  }
`

export default Skills;