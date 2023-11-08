import React from 'react';
import {Container} from "../../components/Container";
import Contacts from "./Contacts";
import {S} from './Styles_Footer'
import sprite from './../../assets/sprite_footer.svg'

const Footer = () => {
    return (
        <Container>
            <Contacts/>
          <S.Footer>
              <S.Icons>
                  <svg ><use xlinkHref={`${sprite}#be`}/>

                  </svg>
                  <svg ><use xlinkHref={`${sprite}#link`}/>

                  </svg>
                  <svg ><use xlinkHref={`${sprite}#instagram`}/>

                  </svg>
                  <svg ><use xlinkHref={`${sprite}#earth`}/>

                  </svg>


              </S.Icons>
              <span>Like me on <br/>
LinkedIn, Instagram, Behance, Dribble</span>
          </S.Footer>
        </Container>
    );
};

export default Footer;