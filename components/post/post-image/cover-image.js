import Link from 'next/link'
import styled from 'styled-components';
import media from 'styled-media-query';
import config from "../../../lib/data/SiteConfig";
import Image from 'next/image'

const Caption = styled.p`
  text-transform: uppercase;
  color: var(--gray);
  font-size: 10px;
  text-align: right;
  margin-right: var(--space-sm);
`

const PostCoverImageWrapper = styled.div`
`

const PreviewCoverImageWrapper = styled.div`
  display: block;
`
const PreviewCoverImage = styled.img`
  border-top-left-radius: ${props =>
    props.hero ? "none" : "0.75rem" };
  border-top-right-radius: ${props =>
    props.hero ? "none" : "0.75rem" };
  width: ${props =>
    props.hero ? "100%" : "400px" };;
  height: ${props =>
    props.hero ? "400px" : '200px'};
  object-fit: cover;
  ${media.lessThan('large')`
    height: 200px !important;
    object-fit: cover;
  `}
`

const PostCoverImage = styled.img`
  height: 400px;
  object-fit: cover;
  ${media.lessThan('large')`
    height: 200px;
  `}
`

export default function CoverImage({ title, url, slug, caption, hero }) {
  
  const imageUrl = url ? `${url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''}${url}` : config.siteLogo

  return (
    <div className="">
      {slug ? (
        <PreviewCoverImageWrapper>
          <Link as={`/articles/${slug}`} href="/articles/[slug]">
              <a aria-label={title}>
                <PreviewCoverImage src={imageUrl} alt={title} title={title} hero={hero} width="370" height="200" />
              </a>
          </Link>
        </PreviewCoverImageWrapper>

      ) : (

        <PostCoverImageWrapper>
            <PostCoverImage src={imageUrl} alt={title} title={title} width="1920" height="400" />
            <Caption>Bildquelle: {caption} (modified)</Caption>
        </PostCoverImageWrapper>
        
      )}
    </div>
  )
}
