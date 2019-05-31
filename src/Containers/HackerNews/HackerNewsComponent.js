import React, {Component} from 'react';

//import { Provider } from 'react-redux';
import HackerNewsAppComponents from './App';

import store from '../../store';

//import { STORY_ARCHIVE } from '../../constants/actionTypes';
import { getReadableStories } from '../../selectors/story';
import { doArchiveStory } from '../../actions/archive';

class HackerNewsComponents extends Component{

    render(){
      let renderHtml = () =>{
        return <HackerNewsAppComponents 
                  //stories={store.getState().storyState} 
                  stories={getReadableStories(store.getState())}
                  onArchive={id=>{ store.dispatch(doArchiveStory(id))}} 
                />
      }
      store.subscribe(renderHtml);
        return(
            <div>
                {renderHtml()}
            </div>
        )
    }
}

export default HackerNewsComponents;