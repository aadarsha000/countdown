import { useState, useEffect, useRef } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import Typewriter from "typewriter-effect";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./App.css";
import Socials from "./components/Socials";
import { useWindowWidth } from "./hooks/useWindowWidth";

function App() {
  const isMobile = useWindowWidth() < 768;
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [countdownComplete, setCountdownComplete] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const taglineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const targetDateStr = import.meta.env.VITE_COUNTDOWN_TARGET;

    if (!targetDateStr) {
      console.error("VITE_COUNTDOWN_TARGET is not defined");
      return;
    }

    const date = new Date(targetDateStr);
    if (isNaN(date.getTime())) {
      console.error("Invalid date format for VITE_COUNTDOWN_TARGET");
      return;
    }

    setTargetDate(date);

    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTextVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (taglineRef.current) {
      observer.observe(taglineRef.current);
    }

    return () => {
      if (taglineRef.current) {
        observer.unobserve(taglineRef.current);
      }
    };
  }, []);

  const handleComplete = () => {
    setCountdownComplete(true);
    console.log("Countdown completed!");
  };

  if (!targetDate) {
    return (
      <div className="App">
        <div className="countdown-container">
          <div className="logo-container">
            <img src="/logo.png" alt="33 Circle Logo" className="logo" />
          </div>
          <h1 className="tagline">Loading countdown...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="countdown-container">
        {/* Logo with blob effects */}
        <div className="logo-container">
          <button className="button">
            <div className="glow-background"></div>
            <div className="blob1"></div>
            <div className="blob2"></div>
            <div className="inner">
              <img src="/logo.png" alt="33 Circle Logo" className="logo" />
            </div>
          </button>
        </div>

        {/* Main tagline with Typewriter effect */}
        <h1
          ref={taglineRef}
          className={`tagline ${isTextVisible ? "revealed" : ""}`}
        >
          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: [
                  "Step Into The Future Of Trading Excellence Led By Professional Traders On",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
                // pauseFor: 4000,
                // cursor: "|",
                cursorClassName: "typewriter-cursor",
              }}
              // onInit={(typewriter) => {
              //   typewriter
              //     .typeString(
              //       '<span class="typewriter-text">Step Into The Future Of Trading Excellence</span>'
              //     )
              //     .pauseFor(1000)
              //     .deleteAll()
              //     .typeString(
              //       '<span class="typewriter-text">Led By Professional Traders On</span>'
              //     )
              //     .pauseFor(1000)
              //     .start();
              // }}
            />
            <div className="text-glow"></div>
          </div>
        </h1>

        {/* Alternative: Single string typing */}
        {/* 
        <h1 ref={taglineRef} className={`tagline ${isTextVisible ? "revealed" : ""}`}>
          <Typewriter
            options={{
              strings: ['Step Into The Future Of Trading Excellence Led By Professional Traders On 33 Circle'],
              autoStart: true,
              loop: true,
              delay: 30,
              deleteSpeed: 20,
              pauseFor: 4000,
            }}
          />
        </h1>
        */}

        {/* Flip timer */}
        <div className="flip-timer-container">
          {!countdownComplete ? (
            <FlipClockCountdown
              to={targetDate.getTime()}
              onComplete={handleComplete}
              labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
              labelStyle={{
                fontSize: isMobile ? "12px" : "24px",
                fontWeight: 600,
                textTransform: "uppercase",
                color: "#fff000",
                marginTop: "8px",
              }}
              digitBlockStyle={{
                width: isMobile ? 25 : 70,
                height: isMobile ? 35 : 90,
                fontSize: isMobile ? 24 : 48,
                fontWeight: 700,
                backgroundColor: "#00FFB2",
                color: "#000000",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              }}
              separatorStyle={{
                color: "#ffffff",
                size: isMobile ? "4px" : "8px",
              }}
              dividerStyle={{
                color: "rgba(0, 0, 0, 0.5)",
                height: "2px",
              }}
              duration={0.6}
              hideOnComplete={false}
              showSeparators={true}
              showLabels={true}
              className="custom-flip-clock"
            />
          ) : (
            <div className="countdown-complete">
              <h2>COUNTDOWN COMPLETE!</h2>
              <p>The future of trading excellence has arrived.</p>
            </div>
          )}
        </div>

        {/* Social icons */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default App;
