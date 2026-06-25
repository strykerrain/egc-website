import { useState, useEffect } from "react";

const SLATE = "#1A2840";
const GOLD = "#C8A84C";
const CREAM = "#F9F7F2";
const WHITE = "#FFFFFF";
const SOFT = "#5A6A7A";
const BORDER = "#E8E2D6";
const GOLD_LIGHT = "#F5EAC8";

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: ${CREAM}; }
    button { cursor: pointer; }
    input, textarea, select { font-family: inherit; }
    .egc-desktop-nav { display: flex; }
    .egc-hamburger { display: none; }
    @media (max-width: 680px) {
      .egc-desktop-nav { display: none !important; }
      .egc-hamburger { display: flex !important; }
    }
    @media (max-width: 600px) {
      .egc-hero-btns { flex-direction: column; align-items: stretch; }
      .egc-hero-btns button { justify-content: center; }
    }
    .egc-svc-card:hover { transform: translateY(-2px); }
    .egc-nav-link:hover { color: ${GOLD} !important; }
    .egc-footer-link:hover { color: ${GOLD_LIGHT} !important; }
    .egc-faq-btn:hover { background: rgba(200,168,76,0.06) !important; }
  `}</style>
);

function Shield({ size = 52, light = false }) {
  const h = Math.round(size * 1.15);
  const bg = light ? "rgba(255,255,255,0.08)" : SLATE;
  const t2 = light ? "rgba(245,234,200,0.9)" : GOLD_LIGHT;
  const t3 = light ? "rgba(245,234,200,0.45)" : "rgba(245,234,200,0.5)";
  return (
    <svg width={size} height={h} viewBox="0 0 80 92" fill="none">
      <path d="M12,6 Q12,3 16,3 H64 Q68,3 68,6 V52 Q68,74 40,88 Q12,74 12,52 Z" fill={bg}/>
      <path d="M12,6 Q12,3 16,3 H64 Q68,3 68,6 V52 Q68,74 40,88 Q12,74 12,52 Z" stroke={GOLD} strokeWidth="3.5" fill="none"/>
      <path d="M17,10 Q17,8 20,8 H60 Q63,8 63,10 V52 Q63,71 40,82 Q17,71 17,52 Z" stroke={GOLD} strokeWidth="1" fill="none" opacity="0.45"/>
      <polygon points="30,14 34,18 30,22 26,18" fill={GOLD}/>
      <polygon points="40,12 44,16 40,20 36,16" fill={GOLD}/>
      <polygon points="50,14 54,18 50,22 46,18" fill={GOLD}/>
      <text x="40" y="46" textAnchor="middle" fontFamily="'Bebas Neue',sans-serif" fontSize="18" fill={GOLD} letterSpacing="1">EARNED</text>
      <line x1="17" y1="52" x2="63" y2="52" stroke={GOLD} strokeWidth="1.5"/>
      <text x="40" y="63" textAnchor="middle" fontFamily="'Bebas Neue',sans-serif" fontSize="11" fill={t2} letterSpacing="3">GROUND</text>
      <text x="40" y="73" textAnchor="middle" fontFamily="'Bebas Neue',sans-serif" fontSize="8" fill={t3} letterSpacing="2">COACHING</text>
    </svg>
  );
}

function Btn({ children, onClick, variant = "primary", fullWidth = false, style: extra = {} }) {
  const base = { display:"inline-flex", alignItems:"center", justifyContent:"center", gap:8, padding:"13px 28px", fontFamily:"'Bebas Neue',sans-serif", fontSize:15, letterSpacing:"0.12em", textTransform:"uppercase", border:"2px solid", cursor:"pointer", transition:"opacity 0.18s, transform 0.18s", width:fullWidth?"100%":undefined, ...extra };
  const v = { primary:{background:SLATE,color:GOLD,borderColor:SLATE}, outline:{background:"transparent",color:SLATE,borderColor:SLATE}, gold:{background:GOLD,color:SLATE,borderColor:GOLD}, ghost:{background:"transparent",color:WHITE,borderColor:"rgba(255,255,255,0.5)"} };
  return <button style={{...base,...v[variant]}} onMouseEnter={e=>{e.currentTarget.style.opacity="0.85";e.currentTarget.style.transform="translateY(-1px)";}} onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.transform="translateY(0)";}} onClick={onClick}>{children}</button>;
}

const Diamond = () => <span style={{display:"inline-block",width:8,height:8,background:GOLD,transform:"rotate(45deg)",flexShrink:0,marginTop:4}}/>;
const Label = ({children}) => <p style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:12,letterSpacing:"0.4em",color:GOLD,marginBottom:12,textTransform:"uppercase"}}>{children}</p>;
function PageBand({label,title}) {
  return <section style={{background:SLATE,padding:"56px 24px",textAlign:"center"}}><Label>{label}</Label><h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(38px, 6vw, 60px)",color:WHITE,letterSpacing:"0.04em"}}>{title}</h1></section>;
}

const GoldBar = () => <div style={{width:28,height:3,background:GOLD,marginBottom:16}}/>

// ── FAQ ────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null);
  const groups = [
    {
      heading:"Getting Started",
      items:[
        {q:"Do I need to be an experienced athlete to work with EGC?", a:"No. Earned Ground works with athletes at every experience level — from someone lacing up for their first sprint triathlon to competitive age-groupers with years of racing behind them. The coaching is built around where you are now, not where someone else thinks you should be."},
        {q:"How does remote coaching work?", a:"All coaching at EGC is delivered remotely through TrainingPeaks. You receive a structured training plan with daily sessions, coach comments, and intent for each workout. You log your completed sessions, and Erik reviews your data and adjusts your plan based on your actual training response. You don't need to be in the same city — you need to be consistent."},
        {q:"Do I need a TrainingPeaks account before we start?", a:"No. Erik sets up your athlete profile and walks you through the platform as part of onboarding. TrainingPeaks has a free athlete tier that covers everything you need to receive and log coaching."},
      ]
    },
    {
      heading:"The Coaching Process",
      items:[
        {q:"How long are coaching commitments?", a:"Coaching relationships are structured around your goals and race calendar — typically a minimum of three months to build meaningful progression. Month-to-month arrangements are available after the initial commitment period. This is discussed on your discovery call."},
        {q:"How often will we communicate?", a:"At minimum: weekly plan reviews, responses to messages within 24–48 hours, and a check-in before major races. Erik coaches a limited number of athletes intentionally — so you're getting a coach, not a form response."},
        {q:"What if life gets in the way — travel, illness, injury?", a:"This is part of coaching, not an exception to it. Plans are adjusted regularly based on what's actually happening in your life. A good plan flexes. A good coach expects it."},
      ]
    },
    {
      heading:"Services & Logistics",
      items:[
        {q:"What age groups do you work with?", a:"Adult athletes across triathlon, endurance, and performance training have no age limit. Youth SAQ training is designed specifically for athletes ages 8–18."},
        {q:"Do you offer in-person sessions?", a:"Triathlon, endurance, and performance coaching are fully remote. Youth SAQ and sport skills development sessions may be available in-person depending on location and scheduling. This is discussed on your discovery call."},
        {q:"What sports do you coach beyond triathlon?", a:"EGC coaches across triathlon and endurance sports, athletic performance training, multi-sport skills development, and youth speed, agility, and quickness (SAQ) for athletes ages 8–18. The multi-sport background informs all coaching relationships."},
        {q:"How much does coaching cost?", a:"Pricing varies by service and package structure and is discussed on your discovery call. EGC doesn't list prices publicly because the right package depends on your goals, your schedule, and what level of support actually makes sense for you — not a one-size subscription."},
        {q:"Is EGC a registered USA Triathlon club?", a:"Yes. Earned Ground Coaching is a registered USAT club. Erik holds USA Triathlon Associate Certified Coach status, is SafeSport Certified, and has been background screened."},
      ]
    }
  ];

  let globalIdx = 0;
  return (
    <section style={{padding:"72px 24px",background:CREAM,borderTop:`1px solid ${BORDER}`}}>
      <div style={{maxWidth:800,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:52}}>
          <Label>FAQ</Label>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(28px, 4vw, 42px)",color:SLATE,letterSpacing:"0.04em"}}>Frequently Asked Questions</h2>
        </div>
        {groups.map((group,gi)=>{
          return (
            <div key={gi} style={{marginBottom:40}}>
              <p style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:13,letterSpacing:"0.25em",color:SLATE,textTransform:"uppercase",marginBottom:16,paddingBottom:10,borderBottom:`2px solid ${GOLD}`}}>{group.heading}</p>
              {group.items.map((item)=>{
                const idx = globalIdx++;
                const isOpen = open===idx;
                return (
                  <div key={idx} style={{borderBottom:`1px solid ${BORDER}`}}>
                    <button className="egc-faq-btn" onClick={()=>setOpen(isOpen?null:idx)}
                      style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:16,padding:"18px 0",background:"transparent",border:"none",textAlign:"left",transition:"background 0.15s",borderRadius:4}}>
                      <span style={{fontFamily:"'Libre Baskerville',serif",fontSize:15,color:SLATE,fontWeight:700,lineHeight:1.5,flex:1}}>{item.q}</span>
                      <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,color:GOLD,lineHeight:1,flexShrink:0,marginTop:2}}>{isOpen?"−":"+"}</span>
                    </button>
                    {isOpen && (
                      <div style={{paddingBottom:20,paddingRight:32}}>
                        <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:14,color:SOFT,lineHeight:1.85}}>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
        <div style={{textAlign:"center",marginTop:16}}>
          <p style={{fontFamily:"'Libre Baskerville',serif",fontStyle:"italic",fontSize:14,color:SOFT,marginBottom:20}}>Don't see your question here?</p>
        </div>
      </div>
    </section>
  );
}

// ── Nav ────────────────────────────────────────
function Nav({page,setPage,open,setOpen}) {
  const links=[{k:"home",l:"Home"},{k:"about",l:"About"},{k:"services",l:"Services"},{k:"contact",l:"Contact"}];
  return (
    <nav style={{position:"sticky",top:0,zIndex:100,background:WHITE,borderBottom:`1px solid ${BORDER}`}}>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",height:72}}>
        <button onClick={()=>{setPage("home");setOpen(false);}} style={{display:"flex",alignItems:"center",gap:12,background:"none",border:"none"}}>
          <Shield size={44}/>
          <div>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:19,letterSpacing:"0.1em",color:SLATE,lineHeight:1}}>Earned Ground</div>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:13,letterSpacing:"0.28em",color:GOLD,lineHeight:1.3}}>Coaching</div>
          </div>
        </button>
        <div className="egc-desktop-nav" style={{alignItems:"center",gap:32}}>
          {links.map(l=><button key={l.k} onClick={()=>setPage(l.k)} className="egc-nav-link" style={{background:"none",border:"none",fontFamily:"'Libre Baskerville',serif",fontSize:14,color:page===l.k?GOLD:SLATE,borderBottom:`2px solid ${page===l.k?GOLD:"transparent"}`,paddingBottom:2,fontWeight:page===l.k?700:400,transition:"all 0.18s"}}>{l.l}</button>)}
          <Btn onClick={()=>setPage("contact")} variant="gold" style={{padding:"10px 22px",fontSize:13}}>Get Started</Btn>
        </div>
        <button className="egc-hamburger" onClick={()=>setOpen(!open)} style={{background:"none",border:"none",flexDirection:"column",gap:5,padding:4}}>
          {[0,1,2].map(i=><div key={i} style={{width:24,height:2,background:SLATE}}/>)}
        </button>
      </div>
      {open&&(
        <div style={{background:WHITE,borderTop:`1px solid ${BORDER}`,padding:"16px 24px 20px"}}>
          {links.map(l=><button key={l.k} onClick={()=>{setPage(l.k);setOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",background:"none",border:"none",padding:"11px 0",borderBottom:`1px solid ${BORDER}`,fontFamily:"'Libre Baskerville',serif",fontSize:15,color:page===l.k?GOLD:SLATE,fontWeight:page===l.k?700:400}}>{l.l}</button>)}
          <div style={{marginTop:16}}><Btn onClick={()=>{setPage("contact");setOpen(false);}} variant="gold" fullWidth>Get Started</Btn></div>
        </div>
      )}
    </nav>
  );
}

// ── Home ───────────────────────────────────────
function Home({setPage}) {
  const disciplines=[
    {title:"Triathlon & Endurance",       sub:"Sprint → Full Ironman",                   desc:"Block periodization training built around your race calendar and your real life — zone-based swim, bike, and run programming with ongoing coaching through TrainingPeaks."},
    {title:"Athletic Performance",         sub:"Conditioning · Strength · Power",          desc:"Purposeful conditioning for athletes at every level and background — built around your body, your sport, and your goals. Block periodization principles applied to drive real, measurable progress."},
    {title:"Sport Skills Development",     sub:"Multi-Sport · Technical · Movement",       desc:"Technical skill development and sport-specific training built for athletes who compete across multiple disciplines. Movement quality, athletic IQ, and physical foundations that transfer everywhere."},
    {title:"Youth Speed, Agility & Quickness (SAQ)", sub:"Ages 8–18 · Multi-Sport Foundation", desc:"Foundational athletic development for young athletes. Teaching young bodies how to move confidently, compete safely, and fall in love with the process of getting better."},
  ];
  return (
    <div>
      <section style={{background:CREAM,padding:"80px 24px 72px",borderBottom:`1px solid ${BORDER}`}}>
        <div style={{maxWidth:800,margin:"0 auto",textAlign:"center"}}>
          <div style={{marginBottom:24}}><Shield size={88}/></div>
          <Label>USA Triathlon Certified · Athletic Performance · Sport Skills Development</Label>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(40px, 8vw, 72px)",lineHeight:1.05,color:SLATE,marginBottom:24,letterSpacing:"0.02em"}}>Earned in the Hours<br/>No One Sees.</h1>
          <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:"clamp(15px, 2.2vw, 18px)",color:SOFT,lineHeight:1.8,maxWidth:580,margin:"0 auto 36px"}}>
            There are two kinds of athletes. Those who hope their results come — and those who go earn them, session by session, season by season, without excuses. Earned Ground exists for the second kind.
          </p>
          <div className="egc-hero-btns" style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            <Btn onClick={()=>setPage("services")} variant="primary">View Services</Btn>
            <Btn onClick={()=>setPage("contact")} variant="outline">Book a Discovery Call</Btn>
          </div>
        </div>
      </section>

      <section style={{padding:"72px 24px",background:WHITE}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <Label>What We Coach</Label>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(28px, 4vw, 44px)",color:SLATE,letterSpacing:"0.04em"}}>Built Around Your Discipline</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(230px, 1fr))",gap:24}}>
            {disciplines.map(d=>(
              <div key={d.title} className="egc-svc-card" style={{padding:"28px 24px",border:`1px solid ${BORDER}`,borderTop:`3px solid ${GOLD}`,background:CREAM,transition:"transform 0.2s",textAlign:"left"}}>
                <GoldBar/>
                <h3 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:20,letterSpacing:"0.06em",color:SLATE,marginBottom:4}}>{d.title}</h3>
                <p style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:11,letterSpacing:"0.2em",color:GOLD,marginBottom:12}}>{d.sub}</p>
                <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:13,color:SOFT,lineHeight:1.75}}>{d.desc}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:40}}><Btn onClick={()=>setPage("services")} variant="outline">Explore All Services →</Btn></div>
        </div>
      </section>

      <section style={{background:SLATE,padding:"64px 24px"}}>
        <div style={{maxWidth:700,margin:"0 auto",textAlign:"center"}}>
          <Label>The Earned Ground Mission</Label>
          <blockquote style={{fontFamily:"'Libre Baskerville',serif",fontStyle:"italic",fontSize:"clamp(16px, 3vw, 24px)",color:WHITE,lineHeight:1.65,borderLeft:`3px solid ${GOLD}`,paddingLeft:24,textAlign:"left",marginBottom:20}}>
            "There are two kinds of athletes. Those who hope their results come — and those who go earn them, session by session, season by season, without excuses. Earned Ground exists for the second kind."
          </blockquote>
          <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:14,color:"rgba(255,255,255,0.55)",lineHeight:1.8}}>Every podium. Every finish line. Every personal record. None of it is given — all of it is earned in the hours no one sees.</p>
        </div>
      </section>

      <section style={{padding:"72px 24px",background:WHITE}}>
        <div style={{maxWidth:960,margin:"0 auto",display:"flex",gap:52,alignItems:"center",flexWrap:"wrap"}}>
          <div style={{flex:"1 1 260px"}}>
            <div style={{width:"100%",maxWidth:280,aspectRatio:"4/5",background:CREAM,border:`1px solid ${BORDER}`,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:14}}>
              <Shield size={80}/>
              <p style={{fontFamily:"'Libre Baskerville',serif",fontStyle:"italic",fontSize:12,color:SOFT}}>Photo placeholder</p>
            </div>
          </div>
          <div style={{flex:"2 1 300px"}}>
            <Label>About the Coach</Label>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(28px, 4vw, 42px)",color:SLATE,letterSpacing:"0.04em",marginBottom:20}}>Erik Hurley</h2>
            <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:15,color:SOFT,lineHeight:1.85,marginBottom:24}}>
              USA Triathlon Certified Coach. Multi-sport athlete. Health Sciences graduate. Erik's coaching is built from the same foundation as his athletic career — methodically developed, grounded in science, and earned through years of competing across multiple disciplines.
            </p>
            <div style={{display:"flex",flexWrap:"wrap",gap:20,marginBottom:28}}>
              {["USAT Certified","BS · Health Sciences","Lifelong Competitor"].map(t=>(
                <span key={t} style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:12,letterSpacing:"0.14em",color:SLATE,borderBottom:`2px solid ${GOLD}`,paddingBottom:2}}>{t}</span>
              ))}
            </div>
            <Btn onClick={()=>setPage("about")} variant="outline">Full Bio & Credentials →</Btn>
          </div>
        </div>
      </section>

      <section style={{background:GOLD,padding:"56px 24px",textAlign:"center"}}>
        <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(24px, 4vw, 38px)",color:SLATE,marginBottom:14,letterSpacing:"0.04em"}}>Ready to Earn Your Ground?</h2>
        <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:15,color:"rgba(26,40,64,0.7)",maxWidth:460,margin:"0 auto 28px"}}>
          Schedule a free discovery call. We'll talk about your goals, your availability, and whether EGC is the right fit.
        </p>
        <Btn onClick={()=>setPage("contact")} variant="primary">Book a Discovery Call</Btn>
      </section>
    </div>
  );
}

// ── About ──────────────────────────────────────
function About({setPage}) {
  const creds=[
    {cat:"Active Certifications",items:["USA Triathlon Associate Certified Coach (Valid through 2030)","SafeSport Certified","Background Screened"]},
    {cat:"Education",items:["Bachelor of Science, Health Sciences & Sports Medicine","Coursework spanning exercise science, biomechanics, kinesiology, and injury prevention"]},
    {cat:"Professional Background",items:["Certified Personal Trainer (CPT)","Licensed Youth Soccer Coach (FYSA)","Masters Swim Instructor Certification","Swim coach, local triathlon team — open-water technique and structured swim programming"]},
    {cat:"Athletic Background",items:["Full Ironman Triathlon Finisher","Multiple 70.3 Half-Iron Finishes","Sprint & Olympic-Distance Triathlon","Endurance Running — 5K through marathon","Soccer — Amateur level, Germany · Iceland · Japan","Baseball · Basketball · Swimming & Diving"]},
  ];
  return (
    <div>
      <PageBand label="The Coach" title="About Erik Hurley"/>
      <section style={{padding:"72px 24px",background:WHITE}}>
        <div style={{maxWidth:960,margin:"0 auto",display:"flex",gap:56,flexWrap:"wrap",alignItems:"flex-start"}}>
          <div style={{flex:"1 1 240px"}}>
            <div style={{width:"100%",maxWidth:270,aspectRatio:"4/5",background:CREAM,border:`1px solid ${BORDER}`,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:14}}>
              <Shield size={80}/>
              <p style={{fontFamily:"'Libre Baskerville',serif",fontStyle:"italic",fontSize:12,color:SOFT}}>Photo placeholder</p>
            </div>
          </div>
          <div style={{flex:"2 1 320px"}}>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:34,color:SLATE,letterSpacing:"0.04em",marginBottom:24}}>Built From the Ground Up</h2>
            {[
              "Erik Hurley built his coaching philosophy the same way he built his athletic career — one hard session at a time.",
              "A USA Triathlon Certified Coach with a Bachelor of Science in Health Sciences and Sports Medicine, Erik brings academic grounding in exercise science alongside genuine competitive experience to every athlete he works with.",
              "Before finding his home in endurance sports and coaching, Erik competed across a wide range of disciplines — baseball, basketball, swimming and diving, and distance running from 5K through marathon. That multi-sport foundation shapes how he sees athletic development: not as single-sport conditioning, but as building a complete, adaptable athlete who brings physical literacy and resilience to every discipline they pursue.",
              "His competitive record spans a full Ironman, multiple 70.3 half-iron distance events, sprint and Olympic-distance triathlons, and the Seattle Marathon — building a personal understanding of what athletes face at every distance and every stage of preparation.",
              "On the pitch, Erik has played soccer at the amateur level across Germany, Iceland, and Japan — experience that shaped his appreciation for how different athletic environments develop competitors. He has also served as a swim coach for a local triathlon team, providing open-water technique guidance and structured swim programming for athletes preparing for multi-sport events.",
              "Erik coaches through TrainingPeaks, building plans designed around real life — full schedules, competing priorities, and the goals that actually matter. The work starts at the first session. It doesn't stop until race day.",
            ].map((p,i)=><p key={i} style={{fontFamily:"'Libre Baskerville',serif",fontSize:15,color:SOFT,lineHeight:1.85,marginBottom:18}}>{p}</p>)}
          </div>
        </div>
      </section>

      <section style={{background:CREAM,padding:"64px 24px",borderTop:`1px solid ${BORDER}`,borderBottom:`1px solid ${BORDER}`}}>
        <div style={{maxWidth:720,margin:"0 auto",textAlign:"center"}}>
          <Label>Coaching Philosophy</Label>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(26px, 4vw, 40px)",color:SLATE,marginBottom:20,letterSpacing:"0.04em"}}>Strength. Will. Heart.</h2>
          <p style={{fontFamily:"'Libre Baskerville',serif",fontStyle:"italic",fontSize:"clamp(17px, 2.5vw, 22px)",color:SLATE,lineHeight:1.6,marginBottom:20}}>"Earned in the hours no one sees."</p>
          <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:15,color:SOFT,lineHeight:1.85,marginBottom:18}}>
            Every plan Erik writes and every cue he gives is designed around one principle: the only results that last are the ones you earned. Training should be hard enough to drive adaptation, intelligent enough to prevent injury, and honest enough to build real, lasting confidence.
          </p>
          <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:15,color:SOFT,lineHeight:1.85}}>
            A core element of that development is mental fortitude. Physical training and mental growth are inseparable — every session is an opportunity to build not just a stronger body, but a more resilient, confident athlete. The goal is athletes who step to the start line knowing they did the work. Who don't just hope they're ready — but know it. That kind of confidence isn't given. It's built, rep by rep, mile by mile, in the hours no one sees.
          </p>
        </div>
      </section>

      <section style={{padding:"72px 24px",background:WHITE}}>
        <div style={{maxWidth:960,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <Label>Credentials & Background</Label>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(26px, 4vw, 40px)",color:SLATE,letterSpacing:"0.04em"}}>Qualifications</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:24}}>
            {creds.map(block=>(
              <div key={block.cat} style={{padding:"28px 24px",border:`1px solid ${BORDER}`,borderLeft:`4px solid ${GOLD}`,background:CREAM}}>
                <h3 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:15,letterSpacing:"0.14em",color:SLATE,marginBottom:18,textTransform:"uppercase"}}>{block.cat}</h3>
                {block.items.map(item=>(
                  <div key={item} style={{display:"flex",gap:10,marginBottom:12,alignItems:"flex-start"}}>
                    <Diamond/>
                    <span style={{fontFamily:"'Libre Baskerville',serif",fontSize:13,color:SOFT,lineHeight:1.65}}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:GOLD,padding:"56px 24px",textAlign:"center"}}>
        <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(22px, 4vw, 36px)",color:SLATE,marginBottom:14,letterSpacing:"0.04em"}}>Work With Erik</h2>
        <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:15,color:"rgba(26,40,64,0.7)",marginBottom:28}}>Every coaching relationship starts with an honest conversation.</p>
        <Btn onClick={()=>setPage("contact")} variant="primary">Book a Discovery Call</Btn>
      </section>
    </div>
  );
}

// ── Services ───────────────────────────────────
function Services({setPage}) {
  const svcs=[
    {title:"Triathlon & Endurance Coaching",sub:"Sprint Distance → Full Ironman",
      desc:"Custom training plans built around your life, your race calendar, and your specific performance limiters. Erik coaches athletes at every experience level — from first triathlon to competitive age-group racing.",
      items:["Block periodization structured around your goal race — building through base, build, and peak phases","Zone-based swim, bike, and run programming","Strength and injury prevention integrated throughout","Race-day strategy and pacing guidance","Ongoing coaching through TrainingPeaks","Plan adjustments for travel, illness, and life"]},
    {title:"Athletic Performance Training",sub:"Conditioning · Strength · Power",
      desc:"Purposeful conditioning for athletes at every level and background — from first-time lifters to competitive multi-sport athletes. Programming built around your body, your goals, and your specific demands. Block periodization applied to drive real, measurable progress.",
      items:["Individualized movement assessment and program design","Block periodization structure — sequenced hypertrophy, strength, power, and peaking phases aligned to your competition calendar","Progressive overload applied systematically across each training block","Injury prevention and structural balance work integrated throughout","In-season and off-season programming","Weekly check-ins and progress tracking through TrainingPeaks"]},
    {title:"Sport Skills Development",sub:"Multi-Sport · Technical Skills · Athletic Movement",
      desc:"Technical skill development and sport-specific athletic training built for athletes who compete across multiple disciplines or want to level up in a specific sport. The focus: movement quality, athletic IQ, and physical foundations that transfer everywhere.",
      items:["Sport-specific technical skills and movement patterns","Position and discipline-specific conditioning","Agility, change-of-direction, and reactive movement","Sport-specific anaerobic conditioning","Mental preparation and competitive readiness","Individual or small group sessions available"]},
    {title:"Youth Speed, Agility & Quickness (SAQ)",sub:"Ages 8–18 · Multi-Sport Foundation",
      desc:"Foundational athletic development built for young athletes ages 8–18. More than speed drills — it's teaching young bodies how to move confidently, compete safely, and fall in love with the process of getting better.",
      items:["Sprint mechanics and acceleration development","Change-of-direction and reactive agility","Coordination and body awareness fundamentals","Sport-specific SAQ progressions","Age-appropriate loading and progression","Safe, supervised, engaging sessions"]},
  ];
  return (
    <div>
      <PageBand label="What We Offer" title="Services"/>
      <section style={{padding:"72px 24px",background:WHITE}}>
        <div style={{maxWidth:980,margin:"0 auto",display:"flex",flexDirection:"column",gap:36}}>
          {svcs.map((s,i)=>(
            <div key={s.title} style={{display:"flex",gap:40,flexWrap:"wrap",padding:"36px",border:`1px solid ${BORDER}`,borderLeft:`4px solid ${GOLD}`,background:i%2===0?WHITE:CREAM}}>
              <div style={{flex:"2 1 300px"}}>
                <div style={{marginBottom:14}}>
                  <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:24,letterSpacing:"0.05em",color:SLATE,lineHeight:1.1}}>{s.title}</h2>
                  <p style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:12,letterSpacing:"0.2em",color:GOLD,marginTop:4}}>{s.sub}</p>
                </div>
                <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:14,color:SOFT,lineHeight:1.85}}>{s.desc}</p>
              </div>
              <div style={{flex:"1 1 220px"}}>
                <p style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:11,letterSpacing:"0.25em",color:SLATE,marginBottom:14}}>What's Included</p>
                {s.items.map(item=>(
                  <div key={item} style={{display:"flex",gap:9,marginBottom:10,alignItems:"flex-start"}}>
                    <Diamond/>
                    <span style={{fontFamily:"'Libre Baskerville',serif",fontSize:12,color:SOFT,lineHeight:1.65}}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{background:WHITE,padding:"72px 24px",borderTop:`1px solid ${BORDER}`}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:52}}>
            <Label>The Process</Label>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(28px, 4vw, 42px)",color:SLATE,letterSpacing:"0.04em"}}>How It Works</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:36}}>
            {[{n:"01",title:"Discovery Call",desc:"We talk about your goals, schedule, and history. No obligation — just an honest conversation about fit."},{n:"02",title:"Custom Plan Built",desc:"Erik builds a plan around your life and goals. Block periodization, specific, and designed to adapt as you progress."},{n:"03",title:"Ongoing Coaching",desc:"Regular communication, plan adjustments, and accountability throughout the entire process."}].map(step=>(
              <div key={step.n} style={{textAlign:"center",padding:"8px 16px"}}>
                <div style={{width:52,height:52,background:SLATE,color:GOLD,fontFamily:"'Bebas Neue',sans-serif",fontSize:22,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px",border:`2px solid ${GOLD}`}}>{step.n}</div>
                <h3 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:21,letterSpacing:"0.07em",color:SLATE,marginBottom:10}}>{step.title}</h3>
                <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:13,color:SOFT,lineHeight:1.8}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ/>

      <section style={{background:GOLD,padding:"52px 24px",textAlign:"center"}}>
        <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(22px, 3.5vw, 34px)",color:SLATE,marginBottom:12,letterSpacing:"0.04em"}}>Pricing is discussed on your discovery call.</h2>
        <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:14,color:"rgba(26,40,64,0.7)",maxWidth:480,margin:"0 auto 26px"}}>Packages are tailored to what you need — not a one-size-fits-all subscription.</p>
        <Btn onClick={()=>setPage("contact")} variant="primary">Get Started</Btn>
      </section>
    </div>
  );
}

// ── Contact ────────────────────────────────────
function Contact() {
  const [form,setForm]=useState({name:"",email:"",service:"",message:""});
  const [sent,setSent]=useState(false);
  const inp={width:"100%",padding:"13px 16px",border:`1px solid ${BORDER}`,background:CREAM,fontFamily:"'Libre Baskerville',serif",fontSize:14,color:SLATE,outline:"none"};
  return (
    <div>
      <PageBand label="Let's Talk" title="Get Started"/>
      <section style={{padding:"72px 24px",background:WHITE}}>
        <div style={{maxWidth:920,margin:"0 auto",display:"flex",gap:56,flexWrap:"wrap"}}>
          <div style={{flex:"1 1 250px"}}>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:30,color:SLATE,letterSpacing:"0.04em",marginBottom:16}}>Schedule Your Discovery Call</h2>
            <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:14,color:SOFT,lineHeight:1.85,marginBottom:16}}>Every coaching relationship at Earned Ground starts the same way — a direct conversation about who you are, what you're working toward, and how we can build the right plan together.</p>
            <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:14,color:SOFT,lineHeight:1.85,marginBottom:28}}>No sales pressure. No obligation. Just an honest conversation about fit.</p>
            <div style={{borderLeft:`4px solid ${GOLD}`,paddingLeft:20}}>
              {["Free — no obligation","30 minutes","Goals, availability & coaching fit","Pricing discussed here"].map(i=>(
                <div key={i} style={{display:"flex",gap:10,marginBottom:11,alignItems:"center"}}>
                  <Diamond/>
                  <span style={{fontFamily:"'Libre Baskerville',serif",fontSize:13,color:SOFT}}>{i}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{flex:"2 1 300px"}}>
            {sent?(
              <div style={{textAlign:"center",padding:"52px 24px",background:CREAM,border:`1px solid ${BORDER}`}}>
                <Shield size={68}/>
                <h3 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,color:SLATE,marginTop:20,marginBottom:12,letterSpacing:"0.04em"}}>Message Received</h3>
                <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:14,color:SOFT,lineHeight:1.75}}>Erik will be in touch within 24 hours to schedule your discovery call.</p>
              </div>
            ):(
              <div style={{display:"flex",flexDirection:"column",gap:20}}>
                {[["Your Name","name","text","First and last name"],["Email Address","email","email","your@email.com"]].map(([label,key,type,ph])=>(
                  <div key={key}>
                    <label style={{display:"block",fontFamily:"'Bebas Neue',sans-serif",fontSize:11,letterSpacing:"0.22em",color:SLATE,marginBottom:8}}>{label}</label>
                    <input type={type} placeholder={ph} value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})} style={inp}/>
                  </div>
                ))}
                <div>
                  <label style={{display:"block",fontFamily:"'Bebas Neue',sans-serif",fontSize:11,letterSpacing:"0.22em",color:SLATE,marginBottom:8}}>Area of Interest</label>
                  <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})} style={{...inp,color:form.service?SLATE:SOFT}}>
                    <option value="">Select a service</option>
                    {["Triathlon & Endurance Coaching","Athletic Performance Training","Sport Skills Development","Youth SAQ","Not sure yet"].map(o=><option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{display:"block",fontFamily:"'Bebas Neue',sans-serif",fontSize:11,letterSpacing:"0.22em",color:SLATE,marginBottom:8}}>Tell Erik About Your Goals</label>
                  <textarea placeholder="What are you training for? What's held you back? What does success look like?" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={5} style={{...inp,resize:"vertical"}}/>
                </div>
                <Btn onClick={()=>{if(form.name&&form.email)setSent(true);}} variant="primary" fullWidth>Request Discovery Call</Btn>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Privacy ────────────────────────────────────
function Privacy() {
  const Sec=({title,children})=><div style={{marginBottom:40,paddingBottom:40,borderBottom:`1px solid ${BORDER}`}}><h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,letterSpacing:"0.08em",color:SLATE,marginBottom:16}}>{title}</h2>{children}</div>;
  const P=({children})=><p style={{fontFamily:"'Libre Baskerville',serif",fontSize:14,color:SOFT,lineHeight:1.85,marginBottom:14}}>{children}</p>;
  const Li=({children})=><div style={{display:"flex",gap:10,marginBottom:10,alignItems:"flex-start"}}><Diamond/><span style={{fontFamily:"'Libre Baskerville',serif",fontSize:14,color:SOFT,lineHeight:1.7}}>{children}</span></div>;
  return (
    <div>
      <PageBand label="Legal" title="Privacy Policy"/>
      <section style={{padding:"64px 24px",background:WHITE}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div style={{background:CREAM,border:`1px solid ${BORDER}`,borderLeft:`4px solid ${GOLD}`,padding:"16px 20px",marginBottom:40}}>
            <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:13,color:SOFT}}><strong style={{color:SLATE}}>Effective Date:</strong> June 2026 &nbsp;·&nbsp; <strong style={{color:SLATE}}>Last Updated:</strong> June 2026</p>
            <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:13,color:SOFT,marginTop:6}}>Earned Ground Coaching LLC ("EGC," "we," "our," or "us") is committed to protecting your privacy. This policy explains how we collect, use, and protect personal information in connection with our coaching services and website.</p>
          </div>

          <Sec title="Washington State — Special Notice">
            <div style={{background:"rgba(200,168,76,0.08)",border:`1px solid ${GOLD}`,padding:"16px 20px",marginBottom:16}}>
              <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:13,color:SLATE,fontWeight:700,marginBottom:6}}>Washington My Health MY Data Act (HB 1155)</p>
              <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:13,color:SOFT,lineHeight:1.75}}>Washington State's My Health MY Data Act applies to all entities — regardless of size — that collect consumer health data from Washington residents. Health and fitness information you share in connection with coaching services is covered under this Act. EGC does not sell consumer health data under any circumstances. Your rights under this Act are described in the "Your Privacy Rights" section below.</p>
            </div>
          </Sec>

          <Sec title="Information We Collect">
            <P>We collect only the information necessary to provide coaching services and respond to inquiries:</P>
            <Li>Contact information: name and email address submitted through our contact form or coaching intake</Li>
            <Li>Service interest and coaching goals stated during inquiry or discovery call</Li>
            <Li>Health and fitness information you voluntarily provide — including training history, physical goals, health conditions relevant to training, and performance data shared in the course of a coaching relationship</Li>
            <Li>Communications and correspondence between you and EGC</Li>
            <P>We do not use tracking cookies, behavioral analytics tools, or advertising pixels on this website. We do not collect payment information directly.</P>
          </Sec>

          <Sec title="How We Use Your Information">
            <P>We use the information you provide exclusively to:</P>
            <Li>Respond to discovery call requests and coaching inquiries</Li>
            <Li>Provide personalized coaching services and training plans</Li>
            <Li>Communicate about your training progress, program adjustments, and coaching relationship</Li>
            <Li>Meet our contractual obligations to you as a coaching client</Li>
            <P>We do not sell, rent, or share your personal information with third parties for their own marketing or commercial purposes.</P>
          </Sec>

          <Sec title="Health and Fitness Data">
            <P>Training-related health and fitness information constitutes consumer health data under the Washington My Health MY Data Act (RCW Chapter 19.373). We collect health-related information solely to deliver coaching services you have requested. We do not:</P>
            <Li>Sell consumer health data</Li>
            <Li>Share consumer health data for advertising or marketing purposes</Li>
            <Li>Use health data for purposes unrelated to the coaching services you have engaged</Li>
            <P>Health data is shared with third-party coaching platforms (TrainingPeaks) solely to deliver your training program.</P>
          </Sec>

          <Sec title="Third-Party Services">
            <P>We use the following third-party services that may process your personal information:</P>
            <Li><strong style={{color:SLATE}}>HubSpot, Inc.</strong> — Contact form submissions and coaching inquiry management. Privacy policy at hubspot.com/legal/privacy-policy.</Li>
            <Li><strong style={{color:SLATE}}>TrainingPeaks</strong> — Coaching clients will have training data managed through TrainingPeaks. Privacy policy at trainingpeaks.com/privacy-policy.</Li>
          </Sec>

          <Sec title="Data Retention">
            <P>Contact inquiry information is retained for up to two years from the date of your last interaction with EGC. Coaching-related data is retained for the duration of the coaching relationship and up to two years thereafter. Verified deletion requests are processed within 30 days, as required by the Washington My Health MY Data Act.</P>
          </Sec>

          <Sec title="Your Privacy Rights">
            <P>As a Washington State resident, you have the following rights:</P>
            <Li>Right to know what personal data we hold about you</Li>
            <Li>Right to access a copy of your personal data</Li>
            <Li>Right to correct inaccurate personal data</Li>
            <Li>Right to request deletion of your personal data</Li>
            <Li>Right to withdraw consent for collection or use of consumer health data at any time</Li>
            <Li>Right to opt out of any sale of personal data — EGC does not sell personal data</Li>
            <P>We will respond to verified requests within 45 days. We will not discriminate against you for exercising your privacy rights.</P>
          </Sec>

          <Sec title="Youth Athletes">
            <P>EGC provides Youth SAQ services to athletes ages 8–18. We do not knowingly collect personal information directly from children under 13 without verifiable parental or guardian consent. Parents or legal guardians of minor athletes are the responsible parties for providing consent on behalf of their child. If you believe we have inadvertently collected information from a minor without appropriate consent, please contact us immediately.</P>
          </Sec>

          <Sec title="Data Security">
            <P>We implement reasonable administrative, technical, and physical safeguards to protect your personal information. All data transmitted to our contact form and coaching platforms is encrypted in transit via HTTPS/TLS. No method of electronic transmission is completely secure.</P>
          </Sec>

          <Sec title="Changes to This Policy">
            <P>We may update this Privacy Policy from time to time. We will post the updated policy with a revised effective date. Continued use of our services after any update constitutes acceptance of the revised policy.</P>
          </Sec>

          <div style={{background:CREAM,border:`1px solid ${BORDER}`,padding:"24px"}}>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:20,letterSpacing:"0.08em",color:SLATE,marginBottom:12}}>Privacy Requests & Contact</h2>
            <P>For privacy requests or to exercise your rights under Washington State law:</P>
            <P><strong style={{color:SLATE}}>Earned Ground Coaching LLC</strong><br/>Email: privacy@earnedgroundcoaching.com<br/>General requests: within 45 days · Health data deletion: within 30 days</P>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Footer ─────────────────────────────────────
function Footer({setPage}) {
  return (
    <footer style={{background:SLATE,borderTop:`3px solid ${GOLD}`,padding:"52px 24px 28px"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{display:"flex",gap:48,flexWrap:"wrap",justifyContent:"space-between",marginBottom:40}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
              <Shield size={44} light/>
              <div>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:18,color:WHITE,letterSpacing:"0.1em",lineHeight:1}}>Earned Ground</div>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:15,color:GOLD,letterSpacing:"0.22em",marginTop:3}}>Coaching</div>
              </div>
            </div>
            <p style={{fontFamily:"'Libre Baskerville',serif",fontStyle:"italic",fontSize:13,color:"rgba(255,255,255,0.45)",maxWidth:220,lineHeight:1.65}}>"Earned in the hours no one sees."</p>
          </div>
          <div>
            <p style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:11,letterSpacing:"0.3em",color:GOLD,marginBottom:14}}>Navigate</p>
            {["home","about","services","contact"].map(p=><button key={p} onClick={()=>setPage(p)} className="egc-footer-link" style={{display:"block",background:"none",border:"none",fontFamily:"'Libre Baskerville',serif",fontSize:13,color:"rgba(255,255,255,0.55)",marginBottom:10,cursor:"pointer",textTransform:"capitalize",transition:"color 0.15s"}}>{p}</button>)}
          </div>
          <div>
            <p style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:11,letterSpacing:"0.3em",color:GOLD,marginBottom:14}}>Certifications</p>
            {["USA Triathlon Certified","SafeSport Certified","Background Screened"].map(c=><p key={c} style={{fontFamily:"'Libre Baskerville',serif",fontSize:12,color:"rgba(255,255,255,0.45)",marginBottom:9}}>{c}</p>)}
          </div>
          <div>
            <p style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:11,letterSpacing:"0.3em",color:GOLD,marginBottom:14}}>Values</p>
            {["Strength","Will","Heart"].map(v=><p key={v} style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:17,letterSpacing:"0.12em",color:"rgba(255,255,255,0.55)",marginBottom:7}}>{v}</p>)}
          </div>
        </div>
        <div style={{borderTop:`1px solid rgba(255,255,255,0.1)`,paddingTop:20,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:10,alignItems:"center"}}>
          <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:12,color:"rgba(255,255,255,0.3)"}}>© 2026 Earned Ground Coaching LLC. All rights reserved.</p>
          <div style={{display:"flex",gap:20,alignItems:"center"}}>
            <button onClick={()=>setPage("privacy")} style={{background:"none",border:"none",fontFamily:"'Libre Baskerville',serif",fontSize:12,color:"rgba(255,255,255,0.35)",cursor:"pointer"}}>Privacy Policy</button>
            <p style={{fontFamily:"'Libre Baskerville',serif",fontSize:12,color:"rgba(255,255,255,0.3)"}}>Pacific Northwest</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Root ───────────────────────────────────────
export default function EGCWebsite() {
  const [page,setPage]=useState("home");
  const [open,setOpen]=useState(false);
  useEffect(()=>{window.scrollTo(0,0);setOpen(false);},[page]);
  return (
    <div style={{fontFamily:"'Libre Baskerville',serif",color:SLATE,background:CREAM,minHeight:"100vh"}}>
      <GlobalStyles/>
      <Nav page={page} setPage={setPage} open={open} setOpen={setOpen}/>
      <main>
        {page==="home"     && <Home     setPage={setPage}/>}
        {page==="about"    && <About    setPage={setPage}/>}
        {page==="services" && <Services setPage={setPage}/>}
        {page==="contact"  && <Contact/>}
        {page==="privacy"  && <Privacy/>}
      </main>
      <Footer setPage={setPage}/>
    </div>
  );
}
