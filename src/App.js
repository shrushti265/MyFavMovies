import "./styles.css";
import React, { useState } from 'react'

var movies = {
  BOLLYWOOD: [
    {
      name: "♦ Tanhaji - The unsung warrior ♦️",
      rating: 7.2,
      description:
        "Chhatrapati Shivaji's right-hand man, braveheart Subhedar Tanhaji Malusare, pits his sharp acumen against the brawn of ruthless and hedonistic Mughal chieftain Udaybhan Singh Rathore to recapture Kondhana for the Maratha empire.",
      genre: "Action,Drama",
      language: "Hindi",
      producer: "bushan kumar, krishna kumar",
      RunTime: "2h 11m"
    },
    {
      name: "♦️ ️sanju ♦️",
      rating: 7.9,
      description:
        "Coming from a family of cinematic legends, East Indian actor Sanjay Dutt reaches dizzying heights of success -- but also battles numerous addictions and other personal demons",
      genre: "Biography, Drama",
      language: "Hindi",
      producer: "Vinod Chopra, Rajkumar Hirani",
      RunTime: "2h 35m"
    },
    {
      name: "♦️ Antim ♦️",
      rating: 8.0,
      description: "",
      genre: "Action, Crime, Drama",
      language: "Hindi",
      producer: "Salma Khan",
      RunTime: "2h 19m"
    }
  ],
  HOLLYWOOD: [
    {
      name: "♦️ The Wolf of Wall Street ♦️",
      rating: 8.3,
      description:
        "In 1987, Jordan Belfort (Leonardo DiCaprio) takes an entry-level job at a Wall Street brokerage firm. By the early 1990s, while still in his 20s, Belfort founds his own firm, Stratton Oakmont. Together with his trusted lieutenant (Jonah Hill) and a merry band of brokers, Belfort makes a huge fortune by defrauding wealthy investors out of millions. However, while Belfort and his cronies partake in a hedonistic brew of sex, drugs and thrills, the SEC and the FBI close in on his empire of excess.",
      genre: "Drama, Biography, Comedy",
      language: "English",
      producer:
        "Martin Scorsese, Leonardo DiCaprio, Riza Aziz, Joey McFarland, Emma Tillinger Koskoff",
      RunTime: "2h 59m"
    },
    {
      name: "♦️ Miracle in Cell No. 7 ♦️",
      rating: 8.4,
      description:
        "A story of love between a mentally-ill father who was wrongly accused of murder and his six year old daughter.",
      genre: "Drama",
      language: "Turkish",
      producer: "Saner Ayar, Sinan Turan",
      RunTime: "2h 12m"
    },
    {
      name: " ♦️ The pursuit of happiness ♦️",
      rating: 8.0,
      description:
        "Life is a struggle for single father Chris Gardner (Will Smith). Evicted from their apartment, he and his young son (Jaden Christopher Syre Smith) find themselves alone with no place to go. Even though Chris eventually lands a job as an intern at a prestigious brokerage firm, the position pays no money. The pair must live in shelters and endure many hardships, but Chris refuses to give in to despair as he struggles to create a better life for himself and his son.",
      genre: "Drama",
      language: "English",
      producer:
        "Todd Black, Jason Blumenthal, Steve Tisch, James Lassiter, Will Smith",
      RunTime: "1h 56m"
    }
  ],
  TOLLYWOOD: [
    {
      name: "♦️ Ellam Sheriyakum ♦️",
      rating: 9.3,
      description: "An inter-faith couple decides to elope and get married.",
      genre: "Drama",
      language: "Malayalam",
      producer: "Jibu Jacob"
    },
    {
      name: "♦️ Ram Asur ♦️",
      rating: 9.2,
      description:
        "A rural politician marries a widow with kids and gains a respectable position. He trusts his stepson more than his own when it comes to political matters; thus upsetting his son beyond limits. Soon, the truth behind his reality comes forth.",
      genre: "Action, Drama",
      language: "Telugu",
      producer: "Ravi Vallabhaneni",
      RunTime: "2h 32m"
    },
    {
      name: "♦️ Baahubali ♦️",
      rating: 8.2,
      description:
        "Shiva, the son of Bahubali, begins to search for answers after he learns about his heritage.",
      genre: "Action, Fantasy, Adventure, Drama",
      language: "Telugu",
      producer: "Shobu Yarlagadda, Prasad Devineni",
      RunTime: "2h 45m"
    }
  ]
};
var types = Object.keys(movies)
export default function App() {
  const [show, setShow] = useState([])
const OnClickHandler = (zone) => {
  var zones = movies[zone];
  setShow(zones)
}
  return (
    <div className="App">
      <header>
        <h1 style={{fontSize:'40px'}}>Movies Categories</h1>
      </header>
      <small style={{fontSize:'25px'}}>Explore your fav zone!!!</small>
      <div style={{ padding: 'rem'}}>
          {types.map((zone, index) => (
            <button
            key={index}
            onClick={() => OnClickHandler(zone)} 
            style={{margin: "1rem", padding:'0.5rem'}}
            >
              {zone}
            </button>
          ))}
      </div>
      <h2>
        {show.map(function (item, index) {
          return (
            <div key={index} style={{paddingTop: "2rem"}}>
              <small style={{color: "#da7f8f"}}>{item.name}</small>
              
              <div>
              <small>IMDB - {item.rating}</small>
              </div>
              <div>
              <small>Description - {item.description}</small>
              </div>
              <div>
              <small>Genre - {item.genre}</small>
              </div>
              <div>
              <small>language - {item.language}</small>
              </div>
              <div>
              <small>Producer - {item.producer}</small>
              </div>
              <div>
              <small>Run Time - {item.RunTime}</small>
              </div>
              
            </div>
          )
        })}
      </h2>
    </div>
  );
}
