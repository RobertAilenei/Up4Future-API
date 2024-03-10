import React, { useEffect } from "react";
import './CalculateLoans.css';
import BACKGROUNDIMG from  './calculateloans-backgroun-image.jpeg';
import { useNavigate } from "react-router-dom";

const InfoBlock = ({description }) => (
  <div className="info-block">
    <input type="text" placeholder={description}
    style={{ width: "calc(50%-350px)",
    height: "70px",
    marginRight: "0px",
    backgroundColor: "transparent", // Set background color to transparent
    border: "0px solid #ccc",
    fontSize: "20px" // Add border for visibility
}}
    required />
  </div>
);

const InfoSection = ({ infoData }) => (
  <section className="info-section">
    {infoData.map((data, index) => (
      <InfoBlock key={index} title={data.title} description={data.description} />
    ))}
  </section>
);

export default function CalculateLoans() {
  const infoData = [
    {
      title: "Venit Lunar",
      description: "Enter your monthly income..."
    },
    {
      title: "Tip credit",
      description: "Enter the type of credit..."
    },
    {
      title: "Tip Moneda",
      description: "Enter the currency type..."
    },
    {
      title: "Perioada",
      description: "Enter the period..."
    }, 
  ];

  const infoData2=[
    {
      title: "Calculeaza",
      description: "Enter calculation method..."
    },
    {
      title: "Rata dobanzii",
      description: "Enter the interest rate..."
    },
    {
      title: "Comision lunar",
      description: "Enter monthly commission..."
    },
    {
      title: "Rate la credite in derulare",
      description: "Enter rates for ongoing loans..."
    }
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
    <div className="body">
      <img className="img" src={BACKGROUNDIMG} alt="centered" />
      <div className='title-page'>
        GrowGenius
      </div>
      <div className="main-content">
        <div className="intro">
          Calculatorul oferă o estimare a sumei maxime pe care o poți obține ca credit, luând în considerare venitul tău și regulile prudențiale impuse de Banca Națională a României referitoare la gradul maxim de îndatorare. Dacă optezi pentru un credit în lei, cu o rată a dobânzii redusă și o perioadă de rambursare mai lungă, este posibil să poți obține o sumă mai mare.
        </div>
        <div className="info-container">
          <div className="first-set-values">
            <InfoSection infoData={infoData} />
          </div>
          <div className="second-set-values">
            <InfoSection infoData={infoData2} />
          </div>
        </div>
        <button className="calculate-button">Calculate</button>
        <button className="home-button" onClick={homeButtonNavigate}>Home</button>
      </div>
    </div>
  );
}
