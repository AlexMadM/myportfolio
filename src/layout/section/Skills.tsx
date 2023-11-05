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

`

export default Skills;