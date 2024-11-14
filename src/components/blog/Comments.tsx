import React from "react";

const Comments: React.FC = () => {
  return (
    <>
      <div className="comments-section">
        <h5>Comments (2)</h5>
        <div className="single-comments-section">
          <img src="/assets/img/client-img-2.jpg" alt="" />
          <p>
            <b>Rasel Arnold</b>
            <span>November 29, 2022</span>
          </p>
          <p>
            Though author order shouldn't matter, industry custom and practical
            limitations say otherwise.
          </p>
          <p>
            <a href="#" className="reply-btn">
              Reply
            </a>
          </p>
        </div>

        <div className="single-comments-section">
          <img src="/assets/img/client-img-3.jpg" alt="" />
          <p>
            <b>Ryans Joseph</b>
            <span>November 29, 2022</span>
          </p>
          <p>
            Though author order shouldn't matter, industry custom and practical
            limitations say otherwise.
          </p>
          <p>
            <a href="#" className="reply-btn">
              Reply
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Comments;
