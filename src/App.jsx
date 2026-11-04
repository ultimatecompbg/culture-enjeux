
import "./App.css";

const reels = [
  {
    type: "cover",
    chapter: "CULTURE & ENJEUX PRESENTATION",
    title: "AI\nBULLSHIT.",
    subtitle: "To what extent do AI deepfakes disrupt political discourse and process?",
    number: "00",
  },
  {
    type: "text",
    chapter: "01 / INTRODUCTION",
    number: "01",
    title: "Political manipulation, or political humour?",
    body: "A deepfake is AI-generated content that depicts a person saying or doing something they never actually said or did. [Brinck and Putkinen]",
    note: "But what happens when the fake becomes more convincing than reality?",
  },
  {
    type: "video",
    chapter: "02 / POLITICAL MANIPULATION BY POLITICIANS",
    number: "02",
    title: "When AI deepfakes give a first glance of policy",
    description: "A first look at deepfakes used in geopolitical setting.",
  },
  {
    type: "text",
    chapter: "02 / POLITICAL MANIPULATION BY POLITICIANS: AN ANALYSIS",
    number: "03",
    title: "The problem isn't just believing in it.",
    body: "What about the most vulnerable groups? What impression does it give about US intelligence? Should we trust it?",
    note: "Deepfakes can manipulate political debate by evoking strong emotions from voters, damage trust and make it harder to distinguish authentic communication from fabricated content.",
  },
  {
    type: "video",
    chapter: "03 / POLITICAL HUMOUR BY POLITICIANS",
    number: "04",
    title: "Just a joke?",
    description: "Can a humorous deepfake also shape political perceptions? Or is harmless internet humour? (Brinck)",
  },
  {
    type: "text",
    chapter: "03 / POLITICAL HUMOUR BY POLITICIANS: AN ANALYSIS",
    number: "05",
    title: "Is humour really harmless?",
    body: "Satire can entertain, criticise and communicate political ideas. But the line between humour and manipulation is not always clear.",
    note: "A joke can still have political consequences.",
  },
  {
    type: "text",
    chapter: "04 / COMPARING THE TWO",
    number: "06",
    title: "No deepfake is neutral - it is always constructed by ideas and perspectives",
    body: "Meaning depends on who creates the content, who sees it, how it circulates and how audiences interpret it.",
    note: "The question is not only whether it is fake. It's how the fake impacts the political landscape by those who have authority over it.",
  },
  {
    type: "video",
    chapter: "05 / POLITICAL MANIPULATION BY NON-STATE ACTORS",
    number: "07",
    title: "Do non-state actors have as much impact as politicians when creating deepfakes?",
    description: "How does this video shape the perception of politicians?",
  },
  {
    type: "text",
    chapter: "05 / POLITICAL MANIPULATION BY NON-STATE ACTORS: AN ANALYSIS",
    number: "08",
    title: "Misinformation and influencing elections",
    body: "???",
    note: "???",
  },
  {
    type: "video",
    chapter: "06 / POLITICAL HUMOUR BY NON-STATE ACTORS",
    number: "09",
    title: "Creating caricatures of Politicians",
    description: "Does this make us more engaged in politics, as it gives us a reason to relate to something?",
  },
  {
    type: "text",
    chapter: "06 / POLITICAL HUMOUR BY NON-STATE ACTORS: AN ANALYSIS",
    number: "10",
    title: "Satires during Political Campaigns: made by the people",
    body: "When forming caricatures, does that change voters' attitudes?",
    note: "Most people wouldn't believe it - gives it less credibility, however it's a different case for low-media-literacy people.",
  },
  {
    type: "video",
    chapter: "07 / COMPARING THE TWO",
    number: "11",
    title: "Just a joke?",
    description: "Can a humorous deepfake also shape political perceptions?",
  },
  {
    type: "text",
    chapter: "08 / CONCLUSION",
    number: "05",
    title: "???",
    body: "???",
    note: "???",
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
