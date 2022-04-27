import React from "react";

export default function ReposList({currList}) {

  const list = currList.map(i => 
    <div className="repos__list">
        <div className="repo__param">
          <a href={i.downloads_url}>{i.name}</a>
        </div>
        <div className="repo__param">{i.language}</div>
        <div className="repo__param">{i.stargazers_count}</div>
    </div>
  )

  

  return (
    <div className="repos">
      <div className="repos__header">
        <div className="repo__param">Name</div>
        <div className="repo__param">Language</div>
        <div className="repo__param">Stars</div>
      </div>
      {list}
    </div>
  );
}
