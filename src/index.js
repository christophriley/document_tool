import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ========================================
// Navigation
// ========================================
class Navigator extends React.Component {
    render() {
        return (
            <button className="navigator" onClick={() => this.props.handleClick(this.props.value)}>
                {this.props.text}
            </button>
        );
    }
}

class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <Navigator 
                    text="Previous" 
                    value={-1} 
                    handleClick={this.props.handleClick}
                />
                <Navigator 
                    text="Next" 
                    value={+1} 
                    handleClick={this.props.handleClick}
                />
            </div>
        );
    }
}

// ========================================
// Document counter / progress
// ========================================
class Counter extends React.Component {
    render() {
        return (
            <span className="counter">
                {this.props.value}
            </span>
        );
    }
}

class HUD extends React.Component {
    render() {
        return (
            <div className="HUD">
                <Counter value={this.props.docNumber}/>
                    <span>
                        out of
                    </span>
                <Counter value={this.props.maxDocs}/>
            </div>
        );
    }
}

// ========================================
// Document display
// ========================================
class Document extends React.Component {
  render() {
    return (
      <div className="document">
        {this.props.text}
      </div>
    );
  }
}


// ========================================
// Central app object
// ========================================
class DocTool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxDocs: this.props.data.length,
            docNumber: 1
        };
        this.handleClick = this.handleClick.bind(this); //TODO: figure out why I need to bind the "this" context
    }

    handleClick(increment) {
        const newDocNumber = this.state.docNumber + increment;

        //boundary checking
        if (newDocNumber < 1 || newDocNumber > this.state.maxDocs)
            return;

        this.setState({docNumber:newDocNumber});
    }

    render() {
        return (
            <div className="doc-tool">
                <HUD maxDocs={this.state.maxDocs} docNumber={this.state.docNumber}/>
                <Navigation 
                    maxDocs={this.state.maxDocs} 
                    docNumber={this.state.docNumber} 
                    handleClick={this.handleClick}
                />
                <Document text={this.props.data[this.state.docNumber - 1]}/>
            </div>
        );
    }
}

// ========================================
// Initialization
// ========================================
const data = [
    "Document number one.",
    "The second document?",
    "Of the documents, this is the third!"
];

ReactDOM.render(
  <DocTool data={data} documentNumber={1}/>,
  document.getElementById('root')
);