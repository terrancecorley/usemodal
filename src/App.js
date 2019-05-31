import React, { Component } from 'react';
import Alert from '@bit/terrance_corley.stepstonedemo.alert';
import Button from '@bit/terrance_corley.stepstonedemo.button';
import styled from 'styled-components';
import './app.css';

class App extends Component {
    state = {
        displayAlert: false
    }

    showAlert = () => {
        this.setState({
            displayAlert: true
        });
    }

    hideAlert = () => {
        this.setState({
            displayAlert: false
        });
    }

    render() {
        let shouldDisplayAlert = this.state.displayAlert;

        return (
            <>
                <div className="App">
                    <AlertBtn onClick={this.showAlert}>Show alert</AlertBtn>
                    {shouldDisplayAlert && 
                        <Alert
                            title="Alert Title"
                            onClick={this.hideAlert}
                            overlayClass="overlay"
                        >
                            This is an alert for StepStone demo purposes.
                        </Alert>
                    }
                </div>
            </>
        );
    }
}

export default App;

const AlertBtn = styled(Button)`
    margin: 10% auto 0;
    display: block;
`;