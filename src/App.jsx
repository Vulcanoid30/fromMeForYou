import "./App.css";
import A from "./image/A.jpg";
import { useState } from "react";

const App = () => {
  const [showForm, setShowForm] = useState(true);
  const [currentCard, setCurrentCard] = useState(1);
  const pesanWhatsapp = "Makasih Sayang😍😍😍";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name === "Syara" || name === "Syara alul fuadiah") {
      setShowForm(false);
    } else if (name !== "Syara" || name !== "Syara alul fuadiah") {
      alert("EH Kamu Bukan Pacar Aku Kamu Impostor!!!!🗿🗿🗿🗿");
    }
  };

  const handleCardClose = () => {
    setCurrentCard(currentCard + 1);
  };

  const openWa = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=6282296831858&text =" +
        pesanWhatsapp,
      "&type=phone_number&app_absent=0"
    );
  };
  return (
    <div>
      <div className="container center">
        <div className="card">
          {showForm ? (
            <form onSubmit={handleFormSubmit}>
              <label>
                <input
                  placeholder="Enter Your Name❤️"
                  type="text"
                  name="name"
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div>
              {currentCard === 1 && (
                <div>
                  <h3>Hai Sayang❤️</h3>
                  <p>
                    Aku Sayang kamu banyak-banyak, Maafin kesalahan aku yang
                    kemarin-kemarin yah kalau udah di maafin makasih yah, Kita
                    mulai dari awal lagi yah, Aku seneng banget kita bisa ketemu
                    kemarin akunya sampe senyum-senyum sendiri di jalan😅
                  </p>
                  <button onClick={handleCardClose}>Close</button>
                </div>
              )}
              {currentCard === 2 && (
                <div>
                  <h3>❤️</h3>
                  <p>
                    Makasih juga udah bisa nerima aku lagi, aku janji bakal jadi
                    lebih baik dari sebelumnya buat kamu, Aku harap setelah kita
                    ketemu kemarin kamunya makin sayang sama aku jangan tanya
                    aku yah aku udah jelas makin sayang, Aku Sayang kamu😍😍
                  </p>
                  <button onClick={handleCardClose}>Close</button>
                </div>
              )}
              {currentCard === 3 && (
                <div className="image">
                  <h3>Aku sayang kamu😍😍</h3>
                  <img className="img" src={A} alt="gambar" />
                  <button className="button" onClick={openWa}>
                    Balas Pesan Pacar❤️
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
