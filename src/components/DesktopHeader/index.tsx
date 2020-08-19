import React from 'react';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <div className="left">
          <S.LinkedInIcon />
          <S.SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <S.HomeIcon />
              <span>Início</span>
            </button>
            <button>
              <S.NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button>
              <S.ProfileCircle src="https://github.com/morpa.png" />
              <span>
                Eu <S.CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
