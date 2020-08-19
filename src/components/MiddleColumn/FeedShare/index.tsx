import React from 'react';

import Panel from '../../Panel';

import * as S from './styles';

const FeedShare: React.FC = () => {
  return (
    <Panel>
      <S.Container>
        <div className="write">
          <S.WriteIcon />
          <span>Começar uma publicação</span>
        </div>
        <div className="attachment">
          <button>
            <S.CameraIcon />
            Foto
          </button>
          <button>
            <S.VideoCameraIcon />
            Video
          </button>
          <button>
            <S.DocumentIcon />
            Documento
          </button>
          <button>
            <S.ArticleIcon />
            Escrever artigo
          </button>
        </div>
      </S.Container>
    </Panel>
  );
};

export default FeedShare;
