import React, { Component } from "react";
import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookShareCount,
  RedditShareCount,
  FacebookIcon,
  EmailIcon,
  TwitterIcon,
  RedditIcon
} from "react-share";
import urljoin from "url-join";
import config from "../../../../data/SiteConfig";
import useTranslations from '../../useTranslations';
import * as S from './styled';

const SocialShare = ({
  postNode,
  postPath,
}) => {
    
const { sharePost } = useTranslations();
const post = postNode.frontmatter;

const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
const iconSize = 40;

const filter = count => (count > 0 ? count : "");
const renderShareCount = count => (
<S.ShareCount>{filter(count)}</S.ShareCount>
);

    return (
      <S.SocialShareWrapper>
        <S.SocialShareLinks>
          <S.SocialShareButttonWrapper>
            <RedditShareButton url={url} title={post.title}>
              <RedditIcon round size={iconSize} />
              <RedditShareCount url={url}>
                {count => renderShareCount(count)}
              </RedditShareCount>
            </RedditShareButton>
          </S.SocialShareButttonWrapper>
          
          <S.SocialShareButttonWrapper>
            <TwitterShareButton url={url} title={post.title}>
              <TwitterIcon round size={iconSize} />
            </TwitterShareButton>
          </S.SocialShareButttonWrapper>
          <S.SocialShareButttonWrapper>
            <FacebookShareButton url={url} quote={postNode.excerpt}>
              <FacebookIcon round size={iconSize} />
              <FacebookShareCount url={url}>
                {count => renderShareCount(count)}
              </FacebookShareCount>
            </FacebookShareButton>
          </S.SocialShareButttonWrapper>
          <S.SocialShareButttonWrapper>
            <EmailShareButton 
              url={url} 
              title={post.title}
              alt="Email"
            >
              <EmailIcon 
                round
                size={iconSize}
                alt="Email"
              />
            </EmailShareButton>
          </S.SocialShareButttonWrapper>
        </S.SocialShareLinks>
      </S.SocialShareWrapper>
    );
  
}

export default SocialShare;
