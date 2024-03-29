import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import {SliderItems} from '../data'
import {useState} from 'react'
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    // background-color: coral;
    position: relative;
    overflow: hidden;
    ${mobile({display: 'none' })};

`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${({slideIndex}) => slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${({bg}) => bg}
`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
    // display: flex;
    // align-items: center;
    // justify-content: center;
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 80px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`



const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${({direction}) => direction === 'left' && '10px'};
    right: ${({direction}) => direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
`



const Slider = () => {
const [slideIndex, setSlideIndex] = useState(0);

const handleClick = (direction) => {
    if (direction === 'left') {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
};
    
    return (
        <Container>
            <Arrow direction = 'left' onClick ={() => handleClick('left')}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {SliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src= {item.img}/>
                        </ImageContainer>
                        <InfoContainer>
                            <Title> {item.title} </Title>
                            <Desc> {item.desc} </Desc>
                            <Button> SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
 
            </Wrapper>
            <Arrow direction = 'right' onClick ={() => handleClick('right')}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
