
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
    chapter: "01 / MOTIVATIONS",
    number: "01",
    body: "Deepfakes penetrate in our online lives, and they're becoming increasingly visible in our everyday life. Evidently, they become a tool for any actors to perpetuate certain goals.",
    note: "Thus, this raises the potential misuse - whether it is for geopolitical, humouristic or campaigning reasons, they present an imminent threat.",
  },
  {
    type: "text",
    chapter: "02 / INTRODUCTION",
    number: "02",
    title: "Political manipulation, or political humour?",
    body: "A deepfake is AI-generated content that depicts a person saying or doing something they never actually said or did. [Brinck and Putkinen]",
    note: "But what happens when the fake becomes more convincing than reality?",
  },
  {
    type: "text",
    chapter: "03 / HYPOTHESIS",
    number: "03",
    body: "H1: political deepfakes are a harmful form of misinformation, regardless of whether they are made by politicians or non-politicians and regardless of whether they are satire or not. \nH2: AI deepfakes do disrupt political discourse and process to a large extent.",
    note: "We agree partially with H1 and H2 - even with a benevolent intent of a deepfake, it can still be harmful",
  },
  {
    type: "text",
    chapter: "04 / METHODS",
    number: "04",
    body: "We primarily used qualitative methods: research papers, observations from social media, newspaper articles...",
    note: "This ensures that we use a range of methods to get a broad overview of deepfakes.",
  },
  {
    type: "video",
    chapter: "02 / POLITICAL MANIPULATION BY POLITICIANS",
    number: "02",
    title: "When AI deepfakes give a first glance of policy",
    description: "A first look at deepfakes used in geopolitical setting.",
    videoSrc: "/videos/trump-gaza.mp4",
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
    description: "Does the deepfake influence voter behaviour?",
    videoSrc: "/videos/bidendeepfake2.mp4",
  },
  {
    type: "text",
    chapter: "05 / POLITICAL MANIPULATION BY NON-STATE ACTORS: AN ANALYSIS",
    number: "08",
    title: "Growing threat of misinformation in influencing elections",
    body: "Eroding trust in essential information - they have to be countered by more reputable source",
    note: "Deepfakes made by politicians, gain attention + are called out quick, whereas non-state actors go unnoticed.",
  },
  {
    type: "photo",
    chapter: "06 / CONTEXT",
    number: "09", 
    imageSrc: "/images/finland.png",

  },
  {
    type: "video",
    chapter: "06 / POLITICAL HUMOUR BY NON-STATE ACTORS",
    number: "10",
    title: "Creating caricatures of politicians",
    description: "Does this make us more engaged in politics, as it gives us a reason to relate to something?",
    videoSrc: "/videos/finland-minecraft.mp4",
  },
  {
    type: "video",
    chapter: "06 / POLITICAL HUMOUR BY NON-STATE ACTORS",
    number: "11",
    title: "Creating caricatures of politicians",
    description: "Does this make us more engaged in politics, as it gives us a reason to relate to something?",
    videoSrc: "/videos/finland-minecraft2.mp4",
  },
  {
    type: "text",
    chapter: "07 / COMPARING THE TWO",
    number: "12",
    title: "Can political humour by non-state actors create cohesion in politics?",
    body: "Yes - but to some extent.",
    note: "Media needs to be conscious of overpollution from deepfakes to not disrupt the political discourse. Equally, with the potential to deal harm, it can actually shape understanding of politics positively",
  },
  {
    type: "text",
    chapter: "08 / CONCLUSION",
    number: "13",
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
            {reel.type === "photo" && (
          <div className="photo-slide">
            <img 
              src={reel.imageSrc} 
              alt={reel.alt} 
              className="full-slide-image" 
            />
            {reel.caption && <p className="photo-caption">{reel.caption}</p>}
          </div>
        )}
            {reel.type === "video" && (
            <div className="video-placeholder">
    <video
      className="video-player"
      src={reel.videoSrc}
      controls
      playsInline
      preload="metadata"
    />
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
        <span>{reel.number} / 12</span>
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
