import React from 'react';

import * as S from './styles';

const MobileHeader: React.FC = () => {
  return (
    <S.Container>
      <S.ProfileCircle src="https://github.com/morpa.png" />
      <S.SearchInput placeholder="Pesquisar" />
      <S.MessageIcon />
    </S.Container>
  );
};

export default MobileHeader;
