import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Document extends React.Component {
  render() {
    return (
      <div className="document">
        Hello this is a document
      </div>
    );
  }
}

class Navigator extends React.Component {
    render() {
        return (
            <button className="navigator">
                nav button
            </button>
        );
    }
}

class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <Navigator />
                <Navigator />
            </div>
        );
    }
}

class Counter extends React.Component {
    render() {
        return (
            <span className="counter">
                0
            </span>
        );
    }
}

class HUD extends React.Component {
    render() {
        return (
            <div className="HUD">
                <Counter />
                    <span>
                        out of
                    </span>
                <Counter />
            </div>
        );
    }
}

class DocTool extends React.Component {
    render() {
        return (
            <div className="doc-tool">
                <HUD />
                <Navigation />
                <Document />                
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
  <DocTool />,
  document.getElementById('root')
);