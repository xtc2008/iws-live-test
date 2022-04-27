import React from "react";

export default function ReposList() {
  return (
    <div className="repos">
      <div className="repos__header">
        <div className="repo__param">Name</div>
        <div className="repo__param">Language</div>
        <div className="repo__param">Stars</div>
      </div>
      <div className="repos__list">
        <div className="repo__param">
          <a href="#lintorepo">ReactJs</a>
        </div>
        <div className="repo__param">JavaScript</div>
        <div className="repo__param">50k</div>
      </div>
    </div>
  );
}
