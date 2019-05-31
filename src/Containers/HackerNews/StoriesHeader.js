
import React, {Component} from 'react';




class StoriesHeader extends  Component{
    render(){
        const COLUMNS = this.props.columns;
        console.log('header data',COLUMNS);
          
        return(
            <div className="stories">
                <div className="stories-header">
                    {Object.keys(COLUMNS).map(key =>
                        <span
                            key={key}
                            style={{ width: COLUMNS[key].width }}
                        >
                            {COLUMNS[key].label}
                        </span>
                    )}
                </div>
            </div>
        )
    }
}




export default StoriesHeader;

