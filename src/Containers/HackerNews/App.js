import React from 'react';
import './App.css';
import Stories from './Stories';



// class HackerNewsAppComponents extends Component{
//     render(){
//         console.log(this.props);
//         return(
//             <div>
//                 <h2>Hacker News Components</h2>
//             </div>
//         )
//     }
// }

const HackerNewsAppComponents = ({ stories, onArchive }) =>
  <div className="app">
    <h2>https://www.robinwieruch.de/react-redux-tutorial/</h2>
    <Stories 
        stories={stories}
        onArchive={onArchive} />
  </div>

export default HackerNewsAppComponents;