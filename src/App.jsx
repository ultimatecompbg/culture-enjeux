
import "./App.css";

const reels = [
  {
    type: "cover",
    chapter: "A PROJECT ABOUT AI & POLITICAL COMMUNICATION",
    title: "AI\nBULLSHIT.",
    subtitle: "Who controls political reality?",
    number: "00",
  },
  {
    type: "text",
    chapter: "01 / THE CONCEPT",
    number: "01",
    title: "Seeing is no longer believing.",
    body: "A deepfake is AI-generated content that depicts a person saying or doing something they never actually said or did.",
    note: "But what happens when the fake becomes more convincing than reality?",
  },
  {
    type: "video",
    chapter: "02 / POLITICAL MANIPULATION",
    number: "02",
    title: "When politics becomes synthetic.",
    description: "A first look at deepfakes used in political communication.",
  },
  {
    type: "text",
    chapter: "03 / THE PROBLEM",
    number: "03",
    title: "The problem isn't just believing a lie.",
    body: "Deepfakes can manipulate political debate, damage trust and make it harder to distinguish authentic communication from fabricated content.",
    note: "The consequences go beyond one misleading video.",
  },
  {
    type: "video",
    chapter: "04 / HUMOUR & SATIRE",
    number: "04",
    title: "Just a joke?",
    description: "Can a humorous deepfake also shape political perceptions?",
  },
  {
    type: "text",
    chapter: "05 / THE CONTRADICTION",
    number: "05",
    title: "Is humour really harmless?",
    body: "Satire can entertain, criticise and communicate political ideas. But the line between humour and manipulation is not always clear.",
    note: "A joke can still have political consequences.",
  },
  {
    type: "text",
    chapter: "06 / CONCLUSION",
    number: "06",
    title: "No deepfake is neutral.",
    body: "Meaning depends on who creates the content, who sees it, how it circulates and how audiences interpret it.",
    note: "The question is not only whether it is fake. It is what the fake does.",
  },
];

function Reel({ reel }) {
  return (
    <section className={`reel reel-${reel.type}`}>
      <div className="reel-top">
        <span>AI BULLSHIT.</span>
        <span>{reel.chapter}</span>
      </div>

      <div className="reel-content">
        {reel.type === "cover" ? (
          <>
            <p className="eyebrow">{reel.chapter}</p>
            <h1>{reel.title}</h1>
            <p className="cover-subtitle">{reel.subtitle}</p>
            <p className="scroll-hint">SCROLL TO EXPLORE ↓</p>
          </>
        ) : (
          <>
            <p className="eyebrow">{reel.chapter}</p>
            <h2>{reel.title}</h2>
            {reel.type === "text" && (
              <>
                <p className="body-copy">{reel.body}</p>
                <p className="note">{reel.note}</p>
              </>
            )}
            {reel.type === "video" && (
            <div className="video-placeholder">
                <div className="video-overlay">
                  <span className="play-icon">▶</span>
                  <p>VIDEO WILL GO HERE</p>
              </div>
              <div className="video-caption">
                <p>{reel.title}</p>
                <small>{reel.description}</small>
              </div>
            </div>
)}
          </>
        )}
      </div>

      <div className="reel-bottom">
        <span>POLITICS · TECHNOLOGY · SOCIETY</span>
        <span>{reel.number} / 06</span>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="feed">
      {reels.map((reel) => (
        <Reel key={reel.number} reel={reel} />
      ))}
    </main>
  );
}
