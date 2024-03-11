import React, { useEffect } from 'react';
import './Announcement.css';
import BACKGROUNDIMG from './announcement-background-image.jpeg';
import { useNavigate } from "react-router-dom";
// Reusable component for the steps
const Step = ({title, description }) => (
  <div className="step">
      <div className="stepTitle">{title}</div>
      <div className="stepDescription">{description}</div>
  </div>
);

const Announcement = () => {
  const steps = [
    {
      number: '1',
      title: '1.Definirea conceptului și a pieței țintă:',
      description: 'Începe prin a identifica o nevoie sau o problemă în piață pe care startup-ul tău ar putea să o rezolve. Analizează piața și publicul țintă pentru a înțelege cerințele și preferințele lor. Asigură-te că conceptul tău de startup aduce o valoare clară și distinctă în acest context.'
    },
    {
      number: '2',
      title: '2.Elaborarea unui plan de afaceri solid:',
      description: 'Dezvoltă un plan de afaceri detaliat care să cuprindă strategii pentru marketing, vânzări, operațiuni, finanțe și dezvoltare produs. Planul tău ar trebui să conțină obiective specifice, termene limită și proiecții financiare realiste pentru a-ți ghida activitățile.'
    },
    {
      number: '3',
      title: '3.Construirea unei echipe talentate:',
      description: 'Recrutează o echipă de profesioniști talentați și motivați care să împărtășească viziunea ta și să aducă abilități și experiență în diverse domenii relevante pentru startup-ul tău. O echipă puternică este esențială pentru a face față provocărilor și pentru a crește afacerea.'
    }
  ];
  const steps2 = [
    {
        number: '4',
        title: '4.Obținerea de finanțare:',
        description: 'Identifică surse potențiale de finanțare pentru startup-ul tău, cum ar fi investitori de capital de risc, împrumuturi bancare, finanțare guvernamentală sau crowdfunding. În funcție de nevoile și stadiul startup-ului tău, poți opta pentru diferite modalități de finanțare.'
      },
      {
        number: '5',
        title: '5.Lansarea și adaptarea continuă',
        description: 'Lansează startup-ul tău pe piață și monitorizează îndeaproape feedback-ul și performanța acestuia. Fii deschis la ajustări și îmbunătățiri pe măsură ce înveți din experiență și primești feedback de la clienți și piață. Flexibilitatea și capacitatea de a te adapta sunt esențiale pentru succesul pe termen lung al startup-ului tău.'
      },
  ];
  const navigate = useNavigate();

  const homeButtonNavigate = () => {
    navigate("/after-login-page");
  };

  useEffect(() => {
  
    document.body.style.overflow = 'hidden';
  
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []); 


  return (
    <>
      <div className='title-page'>
        GrowGenius
      </div>

      <main className="content">
      <img className="img" src={BACKGROUNDIMG} alt="centered" />   
        <section className="stepsContainer">
          {steps.map(step => (
            <Step number={step.number} title={step.title} description={step.description} />
          ))}
        </section>
        <section className="stepsContainer2">
          {steps2.map(step2 => (
            <Step  number={step2.number} title={step2.title} description={step2.description} />
          ))}
        </section>
        <button className="home-button" onClick={homeButtonNavigate}>Home</button>
      </main>

    </>
  );
};

export default Announcement;