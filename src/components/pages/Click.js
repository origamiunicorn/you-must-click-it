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

let imgArray = [
    {
        image: "https://www.fillmurray.com/100/100",
        alt: "Bill Murray.",
        name: 1
    },
    {
        image: "https://picsum.photos/seed/picsum/100/100",
        alt: "Seeded Image.",
        name: 2
    },
    {
        image: "https://picsum.photos/100/100/?blur",
        alt: "Blurry Photo.",
        name: 3
    },
    {
        image: "https://picsum.photos/100/100?grayscale",
        alt: "Grayscale.",
        name: 4
    }
];

function shuffleNum(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
};

function shuffleImages(array) {
    let foo = [];
    let shuffledImg = [];

    for (let i = 0; i <= (array.length - 1); i++) {
        foo.push(i);
    };

    let shuffleFoo = shuffleNum(foo);

    for (let i = 0; i <= (shuffleFoo.length - 1); i++) {
        shuffledImg.push(array[foo[i].valueOf()]);
    };
    return shuffledImg;
};

console.log(shuffleImages(imgArray));

class Click extends React.Component {

    state = {
        images: [],
        message: "Select any image to begin!",
        alertState: "secondary",
        score: 0,
        topScore: 0
    }

    componentDidMount() {
        let newShuffle = shuffleImages(imgArray);
        this.setState({ images: newShuffle });
        console.log(newShuffle);
    }

    shuffleAll() {
        let newShuffle = shuffleImages(imgArray);
        this.setState({ images: newShuffle });
    }

    handleClick = event => {
        event.preventDefault();
        alert("I've been clicked!");
        this.shuffleAll();
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
                        {this.state.images.map(image => {
                            return (
                                <Card className="p-3">
                                    <Card.Img
                                        name={image.name}
                                        variant="top"
                                        src={image.image}
                                        alt={image.alt}
                                        onClick={this.handleClick}
                                    />
                                </Card>
                            )
                        })}

                    </CardColumns>
                </Container>
            </>
        );
    }
}

export default Click;
