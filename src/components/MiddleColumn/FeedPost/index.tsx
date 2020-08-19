import React from 'react';

import Panel from '../../Panel';

import * as S from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <S.Container>
        <S.Row className="heading">
          <S.Avatar src="https://i.imgur.com/81RtXfT.jpg" alt="Rocketseat" />
          <S.Column>
            <h3>Rocketseat</h3>
            <h4>Instituição de ensino</h4>
            <time>1 sem</time>
          </S.Column>
        </S.Row>

        <S.PostImage
          src="https://blog.rocketseat.com.br/content/images/2019/05/Painel.png"
          alt="Rocketseat Blog"
        />

        <S.Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </S.Row>

        <S.Row>
          <S.Separator />
        </S.Row>

        <S.Row className="actions">
          <button>
            <S.LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <S.CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <S.ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <S.SendIcon />
            <span>Enviar</span>
          </button>
        </S.Row>
      </S.Container>
    </Panel>
  );
};

export default FeedPost;
