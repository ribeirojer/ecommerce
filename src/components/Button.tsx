import styled from 'styled-components'

type Props = {}

type PropTypeBg = {
    background: string|null;
  };
  
const Banner = styled.button.attrs((props: PropTypeBg) => ({
background: props.background,
}))<PropTypeBg>`
    margin-top: 15px;
    border: none;
    text-transform: uppercase;
    display: inline-block;
    padding: 10px 55px;
    background-color: ${(props) => props.background || '#8e5572' };
    color: #ffffff;
    border-radius: 45px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: var(--cor-A);
    }
`;

const Button = ({ cor, texto }: { cor:string|null, texto:string|null}) => {

  return (
    <Banner background={cor}>{texto}</Banner>
  )
}

export default Button;