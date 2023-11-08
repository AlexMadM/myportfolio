import React from 'react';
import {S} from '../skills/Styles_Skills'
import {Container} from "../../../components/Container";
import KartSkill from "./KartSkill";

const Skills = () => {
    return (
        <S.Skills>
            <Container>
                <S.TitleSkills>Skills</S.TitleSkills>
                <p>I work in such programs as</p>
                <KartSkill/>
            </Container>
        </S.Skills>
    );
};

export default Skills;