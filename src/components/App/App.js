// @flow
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

import { AppMain, Wrapper, Title } from './styles';
import { colorsDark } from '../../styles/palette'; //styles/palette';
import List from '../List'; //'components/List';
import Loader from '../Loader';

import type Story from '../../flow-types/story'; //"flow-types/story";

// CSS
import styles from './app.module.css';

type Props = {
  theme: "dark" | "light",
  layout: "grid" | "list",
  page: number,
  storyIds: Array<number>,
  stories: Array<Story>,
  isFetching: boolean,
  hasMoreStories: boolean,
  fetchStories: ({storyIds:Array<number>, page:number}) => {},
  fetchStoriesFirstPage: () => {},
};
type State = {};

export class App extends React.Component<Props, State> {
  static defaultProps = { stories: [], };
  state = {};

  componentDidMount = () => {
    //console.log('App CDM Props:', this.props);
    
    this.props.fetchStoriesFirstPage();
  }

  grabStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };

  render() {
    const { stories, hasMoreStories } = this.props;
    //console.log(stories, layout, theme);
    

    return (
      <ThemeProvider theme={colorsDark}>
        <AppMain className={styles.App}>
          <Wrapper>
            <Title>Hacker News Reader</Title>
            <InfiniteScroll 
              dataLength={stories.length}
              next={this.grabStories}
              hasMore={hasMoreStories}
              loader={<Loader />}
              style={{
                height: '100%',
                overflow: 'visible',
              }}
            >
              <List stories={stories} />
            </InfiniteScroll>
          </Wrapper>
        </AppMain>
      </ThemeProvider>
    )
  }
}

export default App
