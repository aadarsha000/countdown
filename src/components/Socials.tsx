const Socials = () => {
  return (
    <div className="action-wrap">
      {/* Twitter/X */}
      <a
        href="https://x.com/33CircleGlobal"
        target="_blank"
        className="action"
        type="button"
      >
        <svg
          className="action-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        >
          <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
        </svg>
        <span className="action-content" data-content="x"></span>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/33circleglobal"
        target="_blank"
        className="action"
        type="button"
      >
        <svg
          className="action-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="18" cy="6" r="1" />
        </svg>
        <span className="action-content" data-content="instagram"></span>
      </a>

      {/* Telegram */}
      <a
        href="t.me/Circle33Global"
        target="_blank"
        className="action"
        type="button"
      >
        <svg
          className="action-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        >
          <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
        </svg>
        <span className="action-content" data-content="telegram"></span>
      </a>

      <div className="backdrop"></div>
    </div>
  );
};

export default Socials;
