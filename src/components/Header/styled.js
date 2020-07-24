import styled from 'styled-components';
import media from 'styled-media-query';
import LocalizedLink from '../LocalizedLink';

export const HeaderWrapper = styled.div`
  background-color: white;
  z-index: 20100;
  position: fixed;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;    
  max-width: 100%;
  margin: 0 auto;
  align-items: center;
  padding: calc(var(--space) * 0.3) var(--space);
  position: relative;
  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`;

export const LogoLink = styled(LocalizedLink)`
  display: inline-block;
  margin-right: auto;
  width: 170px;
`;

export const NavMenu = styled.div`
  width: auto;
  ${media.greaterThan('medium')`
    margin: 0 10px 0 auto;
    width: auto;
  `}
`;