import React, { Component } from 'react';
import logo from './logo.svg';
import ImageSrc from './assets/on-fire.jpg';
import ImageMercure from './assets/mercure.png';
import ImageVolvo from './assets/volvo.png';
import ImageIbis from './assets/ibis-hotel.png';
import ImageCHUBordeaux from './assets/chu-bordeaux.png';
import ImageBatiform from './assets/batiform.png';
import ImageEngie from './assets/engie.png';
import ImageFire from './assets/trainings/fire.jpg';
import ImageWorker from './assets/trainings/worker.jpg';
import ImageFirstAid from './assets/trainings/first-aid.jpg';

import ReviewImg from './assets/reviews/img-1.png';
import ReviewImg2 from './assets/reviews/img-2.png';
import ReviewImg3 from './assets/reviews/img-3.png';

import Header from './components/header';
import Footer from './components/footer';

import { href } from './utils/constants';
import { searchHref } from './utils/search';
import { generateHref } from './utils/generate-href';
import { Carousel } from 'react-bootstrap';
import './App.scss';
interface ReviewsType {
  name: string;
  img: string;
  content: string;
};

interface ItemsType {
  title: string;
  content: string;
  link: string;
  img: string;
  className?: string;
  href: string;
};


class App extends Component {
  render() {
    const reviews: ReviewsType[] = [
      {
        name: 'Angelique Lamouroux',
        img: ReviewImg,
        content: 'Merci vraiment une super formation qui nous a permis de pouvoir prendre du recul. Merci pour se rappelle de manutention qui était nécessaire.'
      },
      {
        name: 'Béatrice Puyssegur',
        img: ReviewImg2,
        content: 'Très bon souvenir de ces trois jours de formation avec notre formateur Julien, une bonne petite remise à niveau.'
      },
      {
        name: 'Virginie Morel',
        img: ReviewImg3,
        content: 'Très bons moments partagés ensemble et surtout bon formateur donc des acquis pleins la tête !'
      }
    ];

    const items: ItemsType[] = [
      {
        title: "Incendie",
        content: "Dans cette formation vous appendrez à prendre conscience des dangers du feu, acquérir les compétences et réflexes utiles dans l'utilisation des matériels d'extinction d'incendie existants dans l'entreprise mais aussi savoir stopper, contraindre ou limiter le danger des flammes sans s'exposer et pour finir vous serez capable d'évacuer et protéger les personnels.",
        link: "+ de formations incendie",
        img: ImageFire,
        className: "first",
        href: href + '/' + searchHref('Incendie')
      },
      {
        title: "Sécurité du travail",
        content: "Améliorer la santé et la sécurité de ses salariés, être dans une démarche de maîtrise des risques professionnels, de protection et de prévention, sont des préoccupations clés des entreprises au-delà des obligations réglementaires. Ces formations apportent des méthodes et des outils incontournables pour réussir ce défi aux managers ou aux personnes désignées pour gérer la santé et la sécurité au sein de l’entreprise de manière opérationnelle, sur le terrain.",
        link: "+ de formations sécurité",
        img: ImageWorker,
        className: undefined,
        href: href + '/' + searchHref("Sécurité du travail")
      },
      {
        title: "Secourisme",
        content: "Ces formations préparent le sauveteur secouriste du travail à intervenir rapidement et efficacement lors d'une situation d'accident du travail dans l’établissement ou dans la profession. Elle permettent d'acquérir les connaissances pour apporter les premiers secours et les conduites à tenir en attendant l'arrivée des secours.",
        link: "+ de formations secourisme",
        img: ImageFirstAid,
        className: undefined,
        href: href + '/' + searchHref("Secourisme")
      }
    ]
    return (
      <>
      <Header />
        <div className="app-home">
          <section className="container">
            <div className="content-features">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="content-wrapper">
                    <h1>Formez-vous <span>pour faire face aux imprévus</span></h1>
                    <p className="description">FS33 vous accompagne pour votre formation ou celles de vos collaborateurs dans la prévention des risques liés à l'activité physique.</p>
                  </div>
                </div>
                <div className="col-md-5">
                  <img src={ImageSrc} alt="fire" />
                </div>
              </div>
            </div>
          </section>
          <section className="banner">
            <div className="container">
              <ul className="references">
                <li><img src={ImageMercure} alt="Mercure hotel" /></li>
                <li><img src={ImageVolvo} alt="Volvo" /></li>
                <li><img src={ImageIbis} alt="Ibis" /></li>
                <li><img src={ImageCHUBordeaux} alt="Chu bordeaux" /></li>
                <li><img src={ImageBatiform} alt="Batiform" /></li>
                <li><img src={ImageEngie} alt="Engie" /></li>
              </ul>
            </div>
          </section>
          <section className="container">
            <div className="content-features">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center">
                    <h3>Gardez le contrôle en toutes situations</h3>
                    <p className="description">Apprenez auprès de professionnels hautement qualifiés.</p>
                  </div>
                </div>
              </div>
              <div className="list-features">
                <div className="row">
                  <div className="col-md-4">
                    <div className="icon">
                      <i className="material-icons">book</i>
                    </div>
                    <div className="description">
                      <h4>Programme pédagogique</h4>
                      <p>Pour une meilleure compréhension, nous avons un programme pédagogique pour chacune de nos formations.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon">
                    <i className="material-icons">school</i>
                    </div>
                    <div className="description">
                      <h4>Diplôme certifiant</h4>
                      <p>A l'issue de chaque formation, vous recevez un diplôme certifiant votre aptitude.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon">
                    <i className="material-icons">star</i>
                    </div>
                    <div className="description">
                      <h4>Formation de qualité</h4>
                      <p>Chaque formation est dispensée par un professionnel qualifié (ambulancier, sapeurs-pompier, secouriste...).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="section-border reverse">
            <svg className="bottom-concave-white" viewBox="0 0 1440 48" version="1.1">
              <g id="bottom-concave" transform="translate(0.000000, -436.000000)">
                <g id="Group-6" fill="#F5F6FA">
                  <path d="M1440,484 C1225.09668,452 985.09668,436 720,436 C627.991932,436 539.007013,437.927362 453.045242,441.782085 C345.235831,446.616507 194.22075,460.689145 0,484 L0,436 L1440,436 L1440,484 Z" id="background-circular-shape-2"></path>
                </g>
              </g>
            </svg>
          </div>
          <section className="training">
            <div className="container">
              <div className="content-features">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-center">
                      <h3>Un engagement continu pour des formations de qualité</h3>
                      <p className="description">Parcourez nos formations, nous avons forcement ce qu'il vous faut.</p>
                    </div>
                  </div>
                </div>
                {
                  items.map((item: any, index: number) => {
                    return (
                      <div className="row first">
                        {
                          index !== 1 ? <div className="col-md-6">
                            <img src={item.img} alt={item.title} />
                          </div> : null
                        }
                        <div className="col-md-6">
                          <h5>{item.title}</h5>
                          <p>{item.content}</p>
                          <a href={item.href}>{item.link}} <i className="icon-arrow-pointing-to-right"></i></a>
                        </div>
                        {
                          index === 1 ? <div className="col-md-6">
                            <img src={item.img} alt={item.title} />
                          </div> : null
                        }
                      </div>
                    )
                  })
                }
                <div className="row">
                  <div className="col-md-12">
                    <div className="all-trainings">
                      <a href="/formations/liste">Découvrez toutes nos formations</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="reviews">
            <div className="container">
              <div className="content-features">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-center">
                      <h3>Des centaines de collaborateurs formés</h3>
                      <p className="description">Ils se sont formés avec nous</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="container">
                      <Carousel>
                        {
                          reviews.map((review: any) => {
                            return (
                              <Carousel.Item>
                                <img src={review.img} alt="" />
                                <Carousel.Caption>
                                  <h3>  {review.name}</h3>
                                  <p>{review.content}</p>
                                </Carousel.Caption>
                              </Carousel.Item>
                            )
                          })
                        }
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="section-border">
            <svg className="bottom-convex-white" viewBox="0 0 1440 50" version="1.1">
              <g id="bottom-convex" transform="translate(0.000000, -1365.000000)">
                <g id="Group-7" transform="translate(0.000000, 783.000000)" fill="#FFF">
                  <g id="hero">
                    <path d="M0,582 C194.22075,605.310855 345.235831,619.383493 453.045242,624.217915 C539.007013,628.072638 627.991932,630 720,630 C985.09668,630 1225.09668,614 1440,582 L0,582 Z" id="background/circular-shape-1"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
