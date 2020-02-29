import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

const jumboStyle = {
    color: "#ffffff",
    backgroundImage: 'url("https://images.unsplash.com/photo-1507103011901-e954d6ec0988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

const cardColOverride = {
    columnCount: 4
}

class Click extends React.Component {

    state = {
        message: "Select any cow image to begin!",
        alertState: "secondary",
        score: 0,
        topScore: 0
    }

    render() {
        return (
            <>
                <Navbar>
                    <Navbar.Brand href="/">Moo-ve It</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary">Score: {this.state.score}</Button>
                                <Button variant="secondary">Top Score: {this.state.topScore}</Button>
                            </ButtonGroup>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                <Jumbotron fluid style={jumboStyle}>
                    <Container>
                        <h1>Moo-ve It</h1>
                        <p>Select each image once to win!</p>
                    </Container>
                </Jumbotron>
                <Container>
                    <Alert className="text-center" variant={this.state.alertState}>
                        {this.state.message}
                    </Alert>
                </Container>
                <Container>
                    <CardColumns style={cardColOverride}>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://www.fillmurray.com/100/100" />
                        </Card>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://www.fillmurray.com/100/100" />
                        </Card>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://www.fillmurray.com/100/100" />
                        </Card>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://www.fillmurray.com/100/100" />
                        </Card>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://www.fillmurray.com/100/100" />
                        </Card>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://www.fillmurray.com/100/100" />
                        </Card>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://www.fillmurray.com/100/100" />
                        </Card>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://www.fillmurray.com/100/100" />
                        </Card>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://www.fillmurray.com/100/100" />
                        </Card>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://www.fillmurray.com/100/100" />
                        </Card>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://www.fillmurray.com/100/100" />
                        </Card>
                        <Card className="p-3">
                            <Card.Img variant="top" src="https://www.fillmurray.com/100/100" />
                        </Card>
                    </CardColumns>
                </Container>
            </>
        );
    }
}

export default Click;
