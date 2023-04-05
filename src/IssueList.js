import React, { useState, useEffect } from "react";
import axios from "axios";

function IssueList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    async function fetchIssues() {
      const response = await axios.get(
        "https://api.github.com/repos/lzydaphne/test_github_api/issues"
      );
      setIssues(response.data);
    }

    fetchIssues();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {issues.map((issue) => (
          <tr key={issue.number}>
            <td>{issue.number}</td>
            <td>{issue.title}</td>
            <td>{issue.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default IssueList;
