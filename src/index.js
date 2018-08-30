import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Document extends React.Component {
  render() {
    return (
      <div className="document">
        {this.props.text}
      </div>
    );
  }
}

class Navigator extends React.Component {
    render() {
        return (
            <button className="navigator">
                {this.props.text}
            </button>
        );
    }
}

class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <Navigator text="Previous" value={-1}/>
                <Navigator text="Next" value={+1}/>
            </div>
        );
    }
}

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
                <Counter value={this.props.documentNumber}/>
                    <span>
                        out of
                    </span>
                <Counter value={this.props.maxDocs}/>
            </div>
        );
    }
}

class DocTool extends React.Component {
    render() {
        return (
            <div className="doc-tool">
                <HUD maxDocs={this.props.data.length} documentNumber={this.props.documentNumber}/>
                <Navigation />
                <Document text={this.props.data[this.props.documentNumber - 1]}/>
            </div>
        );
    }
}

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