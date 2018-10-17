// @flow
import React from 'react';
import Timeago from 'timeago.js'
import { Item, Title, Host, ExternalLink, Description, CommentLink } from './styles';
import getSiteHostname from './utils/getSiteHostname';
import getArticleLink, { HN_USER, HN_ITEM } from './utils/getArticleLink';

import type Story from "../../flow-types/story";

// CSS
import styles from './list-item.module.css';

const timeago = Timeago();

const LINK_REL = 'noopener noreferrer nofollow';

const ListItem = (props: Story) => {
  const { by, kids=[], score, url, title, id, type, time } = props;

  const site = getSiteHostname(url) || 'news.ycombinator.com';
  const articleLink = getArticleLink({ url, id });
  const commentUrl = `${HN_ITEM}${id}`;
  const userUrl = `${HN_USER}${by}`;

  return (
    <Item className={styles.ListItem}>
      <ExternalLink href={articleLink} rel={LINK_REL} target="_blank">
        <Title>
          { title } {' '}
          <Host>({type} {id} - { site })</Host> 
        </Title>
      </ExternalLink>
      <Description>
        { score } points by {' '}
        <CommentLink href={userUrl} rel={LINK_REL} target="_blank">
          { by } {' |  '}
        </CommentLink>
        { timeago.format(new Date(time * 1000).toISOString()) } {' | '}
        <CommentLink href={commentUrl} rel={LINK_REL} target="_blank">
          { kids.length } Comments
        </CommentLink>
      </Description>
    </Item>
  )
};

ListItem.defaultProps = {};
export default ListItem;
