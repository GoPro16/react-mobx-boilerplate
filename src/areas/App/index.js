import React from 'react';
import './style.scss';
import { inject,observer } from 'mobx-react';


@inject("defaultStore")
@observer
export default class App extends React.Component{
    testButton = () => {
        console.log(this.props.defaultStore.toggleVariable());
    }

    render(){
        return(
            <div className='app-container'>
                <p>{this.props.defaultStore.helloVariable}</p>
                <button onClick={this.testButton}>Test</button>    
            </div>
        );
    }
}
