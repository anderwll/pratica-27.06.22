import styled from 'styled-components'

const SmartphoneTela = styled.div`
  width: 350px;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  h3 {
    margin: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  button {
    border-radius: 20px;
    color: #ffff;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 12px 45px;
    letter-spacing: 1px;
    transition: transform 80ms ease-in;
    background: linear-gradient(
      to right,
      #5d2938,
      #7b3c4c,
      #aa5a63,
      #f1848c,
      #f6b4ac
    );
    background-size: 300% 300%;
    animation: backgroundOverlay 12s ease infinite;
    border: 1px solid transparent;
  }

  button:active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }

  input {
    background-color: #eee;
    border: none;
    font-size: 15px;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }

  @keyframes backgroundOverlay {
    0% {
      background-position: 0% 50%;
    }
    25% {
      background-position: 50% 100%;
    }
    50% {
      background-position: 100% 50%;
    }
    75% {
      background-position: 50% 0%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export default SmartphoneTela
