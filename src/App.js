import logo from './logo.svg';
import './App.css';
import {database} from "./fire";
import { ref, set, onValue, remove } from "firebase/database";

function App() {
  function writeUserData(userId, name, email, imageUrl) {
    set(ref(database, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl,
    });
  }

  function writeChatData(chatId, senderId, message, recieverId) {
    set(ref(database, 'chat/' + chatId), {
      message,
      senderId,
      recieverId,
    });
  }

  const userRef = ref(database,"users/2");
  onValue(userRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
  });

  remove(userRef);
  // writeUserData(
  //   "1",
  //   "Romi Mahato",
  //   "romimahato@gmail.com",
  //   "https://www.google.com"
  // );
  // writeUserData(
  //   "2",
  //   "Smita Kumari",
  //   "smitakumari@gmail.com",
  //   "https://www.facebook.com"
  // );
  // writeUserData( 
  //   "4",
  //   "Payal",
  //   "payal@gmail.com",
  //   "https://www.twitter.com"
  // );
  //  writeUserData(
  //    "3",
  //    "Priyanka Yadav",
  //    "priyankayadav@gmail.com",
  //    "https://www.instagram.com"
  //  );

  writeChatData( 
    "1",
    "1",
    "Hello How are you",
    "2",
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
