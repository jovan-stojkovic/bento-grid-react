import "./Styles.scss";

const App = () => {
  const percent = ">56%";

  return (
    <main>
      <div className="app">
        <section className="one">
          <h1>
            Social Media <span className="yellow">10x</span>{" "}
            <span className="italic">Faster</span> with AI
          </h1>
          <img src="/illustration-five-stars.webp" alt="five stars" />
          <p>Over 4,000 5-star reviews</p>
        </section>

        <section className="two">
          <img src="/illustration-multiple-platforms.webp" alt="social" />
          <h3>Manage multiple accounts and platforms.</h3>
        </section>

        <section className="three">
          <h3>Maintain a consistent posting schedule.</h3>
          <img src="/illustration-consistent-schedule.webp" alt="calendar" />
        </section>

        <section className="four">
          <h3>Schedule to social media.</h3>
          <img src="/illustration-schedule-posts.webp" alt="schedule" />
          <p>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </section>

        <section className="five">
          <img src="/illustration-grow-followers.webp" alt="chart" />
          <h2>Grow followers with non-stop content.</h2>
        </section>

        <section className="six">
          <p className="large">{percent}</p>
          <p>faster audience growth</p>
          <img src="/illustration-audience-growth.webp" alt="audience" />
        </section>

        <section className="seven">
          <h2>
            Create and schedule content{" "}
            <span className="italic purple">quicker.</span>
          </h2>
          <img src="/illustration-create-post.webp" alt="create post" />
        </section>

        <section className="eight">
          <h2>Write your content using AI.</h2>
          <img src="/illustration-ai-content.webp" alt="AI content" />
        </section>
      </div>
    </main>
  );
};

export default App;
