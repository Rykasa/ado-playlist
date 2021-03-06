import { BiLoaderCircle } from "react-icons/bi";
import styled from "styled-components";

export const Loader = styled.div`
  width: 100%;
  height: calc(100vh - 4.5rem);
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
`;

export const LoaderIcon = styled(BiLoaderCircle)`
  animation: spin 2s infinite linear;
  font-size: 3rem;
  color: #fff;

  @keyframes spin{
    0%{
      transform: rotate(0);
    }
    50%{
      transform: rotate(180deg);

    }
    100%{
      transform: rotate(360deg);
    }
  }
`; 

export const LoaderText = styled.h1`
  color: #fff;
`;

export const Container = styled.div`
  background-color: #6E3730;  
  flex: 1;
  height: 100%;
`;

export const VideoContainer = styled.div`
  max-height: 60vh;
  width: 100%;
  /* overflow: hidden; */
  flex: 1;
  background-color: #111;
`;

export const Video = styled.div`
  aspect-ratio: 16 / 9;
  flex: 1;
  max-height: 60vh;
  margin: auto;
  max-width: 1100px;
`;

export const InfoWrapper = styled.div`
  padding: 2rem;
  padding-bottom: 4rem;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));

  @media (max-width: 900px){
    padding: 1rem;
    padding-bottom: 4rem;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1050px){
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export const MusicVideoInfo = styled.div`
  height: 100%;
`;

export const MusicVideoTitle = styled.strong`
  display: block;
  color: #F9ABBB;
  letter-spacing: .1rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 1180px){
    font-size: 1.125rem;
  }
`;

export const MusicVideoDescription = styled.span`
  font-size: 1rem;
  color: #fff;
  line-height: 1.625rem;
  margin-bottom: 1.5rem;
  display: block;
  letter-spacing: .1rem;

  @media (max-width: 1180px){
    font-size: 0.875rem;
  }
`;

export const ButtonsWrap =styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: .5rem;
`;

export const Button = styled.a`
  display: flex;
  padding: 1rem .875rem;
  background-color: var(--primary-color-dark);
  color: white;
  font-size: .875rem;
  font-weight: bold;
  border-radius: .25rem;
  line-height: 1.375rem;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: .625rem;
  transition: all .3s ease-in-out;

  &:nth-of-type(2){
    background-color: transparent;
    border: .0625rem solid var(--primary-color);
    color: var(--primary-color-dark);

    &:hover{
      background-color: var(--primary-color);
      color: #000;
    }
  }

  &:hover{
    background-color: var(--primary-color);
  }
`;

export const SingerInfo = styled.div`
  display: flex;
  margin-bottom: .5rem;
`;

export const SingerImage = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: .125rem solid #B75C4F;
  margin-right: 1.125rem;
`;

export const SingerSocial = styled.div``;

export const SingerName = styled.strong`
  color: #fff;
  font-size: 1.5rem;

  @media (max-width: 1180px){
    font-size: 1.125rem;
  }
`;

export const SingerSocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`;

export const SocialLink = styled.a`
  font-size: 1rem;
  color: #fff;
  transition: all .3s linear;

  &:hover{
    color: #F9ABBB;
  }
`;

export const FeatDiv = styled.div`
  margin-bottom: 1rem;
`;

export const FeatName = styled.span`
  color: #fff;
  font-size: .875rem;
  font-style: italic;

  strong{
    text-transform: capitalize;
  }
`;

export const FeatSocial = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`;
