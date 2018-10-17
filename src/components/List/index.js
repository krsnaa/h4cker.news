// @flow
import * as React from 'react';
import ListItem from '../ListItem'; //components/ListItem';
import type Story from '../../flow-types/story';

// CSS
import styles from './list.module.css';
import { ListWrapper } from './styles';

type Props = { stories: Array<Story> };

const List = (props: Props) => {
  //console.log(props);
  const { stories } = props;
  
  return (
    <div className={styles.List}>
      <ListWrapper>
        { stories.map((story) => {
          return ( <ListItem {...story} key={story.id} /> );
        }) }
      </ListWrapper>
    </div>
  )
};

List.defaultProps = {};
export default List;
