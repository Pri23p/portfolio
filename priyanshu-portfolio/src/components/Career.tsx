import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Coding Profiles
          <br />
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4></h4>
                <h5>Codeforces</h5>
              </div>
              <h3>1210</h3>
            </div>
            <p>
              Pupil
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4></h4>
                <h5>Leetcode</h5>
              </div>
              <h3>1857</h3>
            </div>
            <p>
              Knight
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4></h4>
                <h5>Codechef</h5>
              </div>
              <h3>1666</h3>
            </div>
            <p>
              3 Star , 
               Secured Global Rank 69 in Codechef Starters 180 among 38k+ participants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
