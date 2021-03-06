import styled from 'styled-components';
import Link from 'next/link'
const _ = require("lodash");

const TagsWrapper = styled.div`
  display: block;
  padding-bottom: var(--space-sm);
`

const TagItem = styled.a`
  border-radius: var(--border-radius);
  display: inline-block;
  font-size: .75rem;  
  margin: .25rem .5rem .25rem 0;
  padding: 3px calc(var(--space-sm)*0.5);
  background-color: var(--secondary-color);
  color: var(--primary-color);
  font-family: var(--secondary-font);
  :hover {
    color: ${props => props.color ? props.color : 'var(--primary-color'};
    background-color: ${props => props.bgColor ? props.bgColor : '#798ad0'};
  }
`

export default function PostTags( tags ) {
  const postTags = tags.tags

  return (
    <>
        <TagsWrapper>
          {postTags.map((tag, i) => (
            <Link key={i} href={`/topics/${tag.slug}`} passHref>
              <TagItem rel="tag" className="p-category" color={tag.color} bgColor={tag.backgroundColor} title={tag.name}>{tag.name}</TagItem>
            </Link>
          ))}
        </TagsWrapper>
    </>
  )
}
