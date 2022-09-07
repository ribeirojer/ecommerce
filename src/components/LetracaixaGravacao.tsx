import { Link } from 'react-router-dom';
import styled from 'styled-components'
import image1 from '../assets/6248ae73cf0ddd13b383a5cb829f99ba.jpg'
import image2 from '../assets/corte-e-gravacao-laser-mdf-e-acrilico-01.jpg'

type Props = {}

const Wrapper = styled.section`
    background-color: var(--cor-C);
    color: var(--cor-A);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 5%;
    gap: 3rem;
`;
const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;
const CardA = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--cor-D);
  color: var(--cor-C);
  padding: 1rem;
  border-radius: 0.5rem;
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  gap: 1rem;

  h1 {
    font-family: 'Dancing Script';
    font-size: 2rem;
    font-weight: 700;
  }
  button {
    background-color: var(--cor-E);
    color: var(--cor-A);
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    font-weight: 700;
    cursor: pointer;
  }
`;

const LetracaixaGravacao = (props: Props) => {
  return (
    <Wrapper>
      <CardA>
        <Img src={image1} alt="imagem_letra_caixa" />
        <CardInfo>
          <h1>Corte</h1>
          <p>Laboratório de corte, escolha o texto e a fonte da letra caixa do seu próprio jeito.</p>
          <Link to={"/corte"}><button>Experimentar</button></Link>
        </CardInfo>
      </CardA>
      <CardA>
        <Img src={image2} alt="imagem_letra_caixa" />
        <CardInfo>
          <h1>Impressão</h1>
          <p>Laboratório de impressão, envie suas imagens e altere o tamanho deixando do seu próprio jeito.</p>
          <Link to={"/impressao"}><button>Experimentar</button></Link>
        </CardInfo>
      </CardA>
    </Wrapper>
  )
}

export default LetracaixaGravacao;