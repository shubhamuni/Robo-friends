import React from "react";
import "./styles.css"

function Freecodecamp() {
    return(
    <main>
        <section className="heading">
            <header className="hero">
            <img
                src="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
                alt="freecodecamp logo"
                loading="lazy"
                className="hero-img"
            />
            <h1 className="hero-title">OUR NEW CURRICULUM</h1>
            <p className="hero-subtitle">
                Our efforts to restructure our curriculum with a more project-based
                focus
            </p>
            </header>
            <div className="author">
            <p className="author-name">
                By
                <a href="https://freecodecamp.org" target="_blank" rel="noreferrer"
                >freeCodeCamp</a
                >
            </p>
            <p className="publish-date">March 7, 2019</p>
            </div>
            <div className="social-icons">
            <a href="https://www.facebook.com/freecodecamp/">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/freecodecamp/">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/freecodecamp">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/school/free-code-camp/">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.youtube.com/freecodecamp">
                <i className="fab fa-youtube"></i>
            </a>
            </div>
        </section>
        <section className="text">
            <p className="first-paragraph">
            Soon the freeCodeCamp curriculum will be 100% project-driven learning. Instead of a series of coding challenges, you'll learn through building projects - step by step. Before we get into the details, let me emphasize: we are not changing the certifications. All 6 certifications will still have the same 5 required projects. We are only changing the optional coding challenges.
            </p>
            <p>
            After years - years - of pondering these two problems and how to solve them, I slipped, hit my head on the sink, and when I came to I had a revelation! A vision! A picture in my head! A picture of this! This is what makes time travel possible: the flux capacitor!
            </p>
            <p>
            It wasn't as dramatic as Doc's revelation in Back to the Future. It
            just occurred to me while I was going for a run. The revelation: the entire curriculum should be a series of projects. Instead of individual coding challenges, we'll just have projects, each with their own seamless series of tests. Each test gives you just enough information to figure out how to get it to pass. (And you can view hints if that isn't enough.)
            </p>
            <blockquote>
            <hr />
            <p className="quote">
                The entire curriculum should be a series of projects
            </p>
            <hr />
            </blockquote>
            <p>
            No more walls of explanatory text. No more walls of tests. Just one
            test at a time, as you build up a working project. Over the course of passing thousands of tests, you build up projects and your own understanding of coding fundamentals. There is no transition between lessons and projects, because the lessons themselves are baked into projects. And there's plenty of repetition to help you retain everything because - hey - building projects in real life has plenty of repetition.
            </p>
            <p>
            The main design challenge is taking what is currently paragraphs of explanation and instructions and packing them into a single test description text. Each project will involve dozens of tests like this. People will be coding the entire time, rather than switching back and forth from "reading mode" to "coding mode".
            </p>
            <p>
            Instead of a series of coding challenges, people will be in their code editor passing one test after another, quickly building up a project. People will get into a real flow state, similar to what they experience when they build the required projects at the end of each certification. They'll get that sense of forward progress right from the beginning. And freeCodeCamp will be a much smoother experience.
            </p>
        </section>
        <section className="text text-with-images">
            <article className="brief-history">
            <h3 className="list-title">A Brief History</h3>
            <p>Of the Curriculum</p>
            <ul className="lists">
                <li>
                <h4 className="list-subtitle">V1 - 2014</h4>
                <p>
                    We launched freeCodeCamp with a simple list of 15 resources,
                    including Harvard's CS50 and Stanford's Database className.
                </p>
                </li>
                <li>
                <h4 className="list-subtitle">V2 - 2015</h4>
                <p>We added interactive algorithm challenges.</p>
                </li>
                <li>
                <h4 className="list-subtitle">V3 - 2015</h4>
                <p>
                    We added our own HTML+CSS challenges (before we'd been relying on
                    General Assembly's Dash course for these).
                </p>
                </li>
                <li>
                <h4 className="list-subtitle">V4 - 2016</h4>
                <p>
                    We expanded the curriculum to 3 certifications, including Front
                    End, Back End, and Data Visualization. They each had 10 required
                    projects, but only the Front End section had its own challenges.
                    For the other certs, we were still using external resources like
                    Node School.
                </p>
                </li>
                <li>
                <h4 className="list-subtitle">V5 - 2017</h4>
                <p>We added the back end and data visualization challenges.</p>
                </li>
                <li>
                <h4 className="list-subtitle">V6 - 2018</h4>
                <p>
                    We launched 6 new certifications to replace our old ones. This was
                    the biggest curriculum improvement to date.
                </p>
                </li>
            </ul>
            </article>
            <aside className="image-wrapper">
            <img
                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png"
                alt="the quote machine project"
                loading="lazy"
                className="image-1"
                width="600"
                height="400"
            />
            <img
                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png"
                alt="calculator project"
                loading="lazy"
                className="image-2"
                width="400"
                height="400"
            />
            <blockquote className="image-quote">
                <hr />
                <p className="quote">
                The millions of people who are learning to code through freeCodeCamp
                will have an even better resource to help them learn these
                fundamentals.
                </p>
                <hr />
            </blockquote>
            <img
                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg"
                alt="four people working on code"
                loading="lazy"
                className="image-3"
                width="600"
                height="400"
            />
            </aside>
        </section>
    </main>
    )
};

export default Freecodecamp;