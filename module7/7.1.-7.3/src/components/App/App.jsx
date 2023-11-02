import { useEffect, useState } from "react";
import { Route, Routes, useMatch, useNavigate } from "react-router-dom";
import Notification from "../Notification/Notification";
import CreateNew from "../Anecdotes/CreateNew";
import Footer from "../Footer/Footer";
import About from "../About/About";
import AnecdoteList from "../Anecdotes/AnecdoteList";
import Menu from "../Menu/Menu";
import ViewOne from "../Anecdotes/ViewOne";

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ]);

  const [notification, setNotification] = useState("");

  const clearNotifcationWithDelay =()=> {
    setTimeout(()=>setNotification(''),5000)
  }
  useEffect(()=> clearNotifcationWithDelay(), [notification])

  const navigate = useNavigate();
  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));

    setNotification(`new anecdote ${anecdote.content} created !!`);
    navigate("/");
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  const match = useMatch("/anecdotes/:id");
  const anecdote = match
    ? anecdotes.find((a) => a.id === Number(match.params.id))
    : null;

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />

      {notification && <Notification notification={notification} />}
      <Routes>
        <Route
          path="/anecdotes/:id"
          element={<ViewOne anecdote={anecdote} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateNew addNew={addNew} />} />
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
