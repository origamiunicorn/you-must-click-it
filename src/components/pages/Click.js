import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Img01 from '../../assets/images/01.png';
import Img02 from '../../assets/images/02.png';
import Img03 from '../../assets/images/03.png';
import Img04 from '../../assets/images/04.png';
import Img05 from '../../assets/images/05.png';
import Img06 from '../../assets/images/06.png';
import Img07 from '../../assets/images/07.png';
import Img08 from '../../assets/images/08.png';
import Img09 from '../../assets/images/09.png';
import Img10 from '../../assets/images/10.png';
import Img11 from '../../assets/images/11.png';
import Img12 from '../../assets/images/12.png';
import Background from '../../assets/images/background.jpg';


const jumboStyle = {
    color: "#ffffff",
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

const cardColOverride = {
    columnCount: 4
}

let imgArray = [
    {
        image: Img01,
        alt: "Snowy mountains beyond a fall meadow with an elevated wooden path through it.",
        name: 1
    },
    {
        image: Img02,
        alt: "Sheer rock mountain face rising above coniferous tree level.",
        name: 2
    },
    {
        image: Img03,
        alt: "Looking out over a valley between sheer red rock cliffs with green along the valley river.",
        name: 3
    },
    {
        image: Img04,
        alt: "Fog disguising sharp mountain peaks with rock faces and plants growing on steep inclines.",
        name: 4
    },
    {
        image: Img05,
        alt: "Mountains rising above bright blue lake.",
        name: 5
    },
    {
        image: Img06,
        alt: "Sunset over snowy mountain peaks.",
        name: 6
    },
    {
        image: Img07,
        alt: "Snow covered mountains reflected in a lake.",
        name: 7
    },
    {
        image: Img08,
        alt: "Sheer rock cliffs at a beach.",
        name: 8
    },
    {
        image: Img09,
        alt: "Desert landscape with rock formations in the distance at sunset.",
        name: 9
    },
    {
        image: Img10,
        alt: "Blunted mountains above a winding river with snowy peaks in the distance.",
        name: 10
    },
    {
        image: Img11,
        alt: "Gently rising mountains covered in pathways with red and green flora.",
        name: 11
    },
    {
        image: Img12,
        alt: "Looking down on Machu Picchu in the Andes on a sunny day.",
        name: 12
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
        clicked: [],
        currentClick: 0,
        message: "Select any image to begin!",
        alertState: "secondary",
        score: 0,
        topScore: 0
    }

    componentDidMount() {
        let newShuffle = shuffleImages(imgArray);
        this.setState({ images: newShuffle });
    }

    shuffleAll() {
        let newShuffle = shuffleImages(imgArray);
        this.setState({ images: newShuffle });
    }

    handleClick = event => {
        event.preventDefault();
        let newArray = this.state.clicked;
        let name = event.target.name;
        this.setState({
            currentClick: event.target.name
        });

        function search(nameToSearch) {
            return newArray.filter(item => {
                return parseInt(item) === parseInt(nameToSearch);
            })
        };

        const arrayIs = search(name);
        const highScore = this.state.topScore;
        const currentScore = this.state.score;
        console.log("the current score and highest score", currentScore, highScore);

        if (arrayIs.length === 0) {
            newArray.push(parseInt(name));

            if (highScore <= currentScore && currentScore < 11) {
                this.setState({
                    clicked: newArray,
                    message: "Good work! Keep going!",
                    alertState: "success",
                    score: this.state.score + 1,
                    topScore: this.state.score + 1
                })
                this.shuffleAll();
            } else if (highScore > currentScore && currentScore < 11) {
                this.setState({
                    clicked: newArray,
                    message: "Good work! Keep going!",
                    alertState: "success",
                    score: this.state.score + 1
                })
                this.shuffleAll();
            } else if (highScore === currentScore && currentScore === 11) {
                this.setState({
                    message: "Congratulations! You've won!",
                    alertState: "success",
                    score: this.state.score + 1,
                    topScore: this.state.score + 1
                })
                this.shuffleAll();
            } else if (highScore > currentScore && currentScore === 11) {
                this.setState({
                    message: "Congratulations! You've won!",
                    alertState: "success",
                    score: this.state.score + 1
                })
                this.shuffleAll();
            } else {
                this.setState({
                    score: this.state.score + 1,
                    topScore: this.state.score + 1
                })
            };
        } else {
            this.setState({
                clicked: [],
                message: "Oops! You've already selected that image. Try again!",
                alertState: "danger",
                score: 0
            });
            this.shuffleAll();
        }
    }

    render() {
        return (
            <>
                <Navbar>
                    <Navbar.Brand href="/you-must-click-it/">Mountain Memory</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary" >Score: {this.state.score}</Button>
                                <Button variant="warning">Top Score: {this.state.topScore}</Button>
                            </ButtonGroup>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                <Jumbotron fluid style={jumboStyle}>
                    <Container>
                        <h1>Mountain Memory</h1>
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
                        {this.state.images.map((image, index) => {
                            return (
                                <Card className="p-3">
                                    <Card.Img
                                        key={index}
                                        name={image.name}
                                        variant="top"
                                        src={image.image}
                                        alt={image.alt}
                                        onClick={this.handleClick}
                                    />
                                </Card>
                            )
                        })};
                    </CardColumns>
                </Container>
            </>
        );
    }
}

export default Click;