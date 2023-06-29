import './style.css';
import './fonts.css';
import styled from 'styled-components';

const EmailLink = styled.a `color: #d8d8d8;`;

function TextCont() {
    return (
        <div id="textcont-background">
            <div id="textcont-container">
                <h1 id="textcont-title">Who am I ?</h1>
                    <div id="textcont-content">
                        <h2 id="textcont-sub-title">... Let's dig deeper</h2>
                            I am studying computer science at the University of Turku. Currently completing my bachelor's degree in two years instead of three.<br/><br/>
                            A strategist seeking for responsibility with the goal of learning new things and with a great desire to go forward.<br/><br/>
                            Conscientious and solution-oriented team player with an eye for details.<br/><br/>
                    </div>
                    <div id="textcont-content">
                        <h2 id="textcont-sub-title">... How to contact me?</h2>
                        You can find my socials by clicking the buttons above! The easiest way to get in touch with me is to use my <EmailLink href="mailto:puuval@puuval.me">email</EmailLink>.
                    </div>
            </div>
        </div>
    );
}

export default TextCont;
