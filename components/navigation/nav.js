import styled from 'styled-components'
import media from 'styled-media-query';
import ActiveLink from "@/components/navigation/active-link"


const NavItems = styled.li`
  grid-column: span 1 / span 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${media.lessThan('medium')`
    margin-top: var(--space-sm);
  `}
`


const NavItem = styled.ul`
  transition: none;
  color: ${props => (props.color ? `${props.color}`  : "color: var(--gray);")};
  padding-left: 0;
  :hover { 
    text-decoration: none;
    background-image: linear-gradient(var(--secondary-color),var(--secondary-color));
    background-size: 100% 1px;
    background-position: 0 100%;
    background-repeat: no-repeat;
  }
  .active {
    font-weight: 600;
    color: var(--primary-color);;
  }
  ${media.lessThan('medium')`
    margin-left: 0;
  `}
  
  ${media.lessThan('small')`
    font-size: 1rem;
  `}
`


export default function Nav({ color }) {


  const headerItems = [
    { "name": "Now", "link":  "/now" },
    { "name": "Articles", "link":  "/articles" },
    { "name": "Notes", "link":  "/notes" },
    { "name": "Activities", "link":  "/activities" },
    { "name": "Links", "link":  "/links" },
  ]


  return (
    <NavItems>
        {headerItems.map((item, i) => (
            <NavItem key={i} color={color}>
                <ActiveLink activeClassName={`active`} href={item.link} passHref>
                    <a title={item.name}>{item.name}</a>
                </ActiveLink> 
            </NavItem>
        ))}
    </NavItems>
  )
}
