import React from 'react';
import {S} from '../info/Styles_Info'



const Info = () => {
    return (
        <S.Info>
       <S.AboutMe>
           About me
       </S.AboutMe>
            <S.TextAboutMe>
                <span>Hi, I'm Denis – UX/UI designer from Minsk.
                I'm interested in   design and everything connected with it.</span>

                <span> I'm studying at courses "Web and mobile design
                interfaces" in IT-Academy.</span>

               <span> Ready to implement excellent projects
                with wonderful people.</span></S.TextAboutMe>
        </S.Info>
    );
};

export default Info;