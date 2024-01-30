import React from "react";
import GIF1 from "../../assets/GIF1.gif";
import GIF2 from "../../assets/GIF2.gif";
import GIF3 from "../../assets/GIF3.gif";
// import IMG1 from '../../assets/alc.png';
// import IMG2 from "../../assets/todo.png";
// import IMG3 from "../../assets/shelter.png";
// import IMG4 from "../../assets/fake.png";
// import IMG5 from "../../assets/news.png";
// import IMG6 from "../../assets/math.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "React Meals",
      img: GIF2,
      description:
        "Indulge in React Restaurant App's seamless and visually appealing interface, powered by React.js. Explore an Italian menu, effortlessly add to your cart, and relish a charmingly smooth order process. The elegant design, complemented by a delightful cart bump effect, delivers an engaging and user-friendly dining experience. React-powered convenience at its finest!",
      technologies: "Tech Stack: ReactJS | React Hooks | Context API",
      link: "https://food-meals-order.netlify.app/",
      github: "https://github.com/rishii-27/ReactRestaurantApp",
    },
    {
      id: 2,
      title: "Art Gallery",
      img: GIF3,
      description:
        "Art Galley, your premium destination for captivating color boards, ensures an immersive experience with route-protected product viewing. Crafted with visually engaging e-commerce platform invites you to explore a world of vibrant creations with personalized experience.",
      credentials: "Login Credentials: test@test.com | 123456",
      technologies: "Tech Stack: React | Bootstrap | Firebase",
      link: "https://art-products.netlify.app/",
      github: "https://github.com/rishii-27/e-commerce",
    },
    {
      id: 3,
      title: "MailBox Client",
      img: GIF1,
      description:
        "A robust email application developed with React. Users can sign up, log in, and seamlessly send and receive emails. This app utilizes Firebase for user authentication, email storage, and Redux for state management. A visually appealing badge status indicates whether inbox messages are read or unread with visual indicators",
      technologies: "Tech Stack: React | Firebase | Redux",

      credentials: "Login Credentials: test@test.com | 123456",
      link: "https://mailboxx-client.netlify.app/",
      github: "https://github.com/rishii-27/mailbox-client",
    },

    // {
    //   id: 4,
    //   title: "Shelter",
    //   img: IMG3,
    //   description:
    //     "Fully responsive interactive website built based on Figma design",
    //   technologies: "JavaScript | CSS",
    //   link: "https://meri-mg.github.io/shelter/pages/main/index.html",
    //   github: "https://github.com/Meri-MG/shelter",
    // },
    // {
    //   id: 5,
    //   title: 'World News',
    //   img: IMG5,
    //   description:
    //     'Fully responsive interactive website built based on Adobe XD design',
    //   technologies: 'JavaScript | CSS',
    //   link: 'https://meri-mg.github.io/Unilab-world-news/',
    //   github: 'https://github.com/Meri-MG/Unilab-world-news',
    // },
    // {
    //   id: 6,
    //   title: 'Math Resource',
    //   img: IMG6,
    //   description:
    //     'Real-world group project which is still in progress and will provide educational platform for future young developers',
    //   technologies: 'JavaScript | Scss | Python',
    //   link: 'https://lukinoo.github.io/math-resource/',
    //   github: 'https://github.com/lukinoo/math-resource',
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.credentials}</p>
              <p style={{ color: "#dec210" }}>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
