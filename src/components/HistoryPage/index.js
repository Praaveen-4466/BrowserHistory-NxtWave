import { Component } from "react";
import "./index.css";
import HistoryItem from "../HistoryItem";

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: "07:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/instagram-img.png",
    title: "Instagram",
    domainUrl: "instagram.com",
  },
  {
    id: 1,
    timeAccessed: "05:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/twitter-img.png",
    title: "Twitter. It’s what’s happening / Twitter",
    domainUrl: "twitter.com",
  },
  {
    id: 2,
    timeAccessed: "04:35 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/facebook-img.png",
    title: "Facebook – log in or sign up",
    domainUrl: "facebook.com",
  },
  {
    id: 3,
    timeAccessed: "04:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/linkedin-img.png",
    title: "LinkedIn: Log In or Sign Up",
    domainUrl: "linkedin.com",
  },
  {
    id: 4,
    timeAccessed: "04:00 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/hashnode-img.png",
    title: "Hashnode: Everything you need to start blogging as a developer!",
    domainUrl: "hashnode.com",
  },
  {
    id: 5,
    timeAccessed: "03:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/github-img.png",
    title: "GitHub: Where the world builds software · GitHub",
    domainUrl: "github.com",
  },

  {
    id: 6,
    timeAccessed: "02:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/react-img.png",
    title: "React – A JavaScript library for building user interfaces",
    domainUrl: "reactjs.org",
  },
  {
    id: 7,
    timeAccessed: "01:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png",
    title: "Stack Overflow - Where Developers Learn, Share, & Build Careers",
    domainUrl: "stackoverflow.com",
  },

  {
    id: 8,
    timeAccessed: "09:25 AM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/gmail-img.png",
    title: "Gmail",
    domainUrl: "mail.google.com",
  },
  {
    id: 9,
    timeAccessed: "09:00 AM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/google-img.png",
    title: "Google",
    domainUrl: "google.com",
  },
];

class HistoryPage extends Component {
  state = {
    historyList: initialHistoryList,
    searchInput: "",
  };

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  handleDelete = (uniqueNo) => {
    const { historyList } = this.state;
    const filteredHistoryItems = historyList.filter(
      (each) => each.id !== uniqueNo
    );
    this.setState({
      historyList: filteredHistoryItems,
    });
  };

  render() {
    const { historyList, searchInput } = this.state;
    const filteredHistory = historyList.filter((each) =>
      each.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (
      <>
        <div className="historypage">
          <div className="historySearchContainer">
            <div className="logo-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
              />
            </div>
            <div className="searchInputBox">
              <div className="magnifier-image">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png "
                  alt="search"
                />
              </div>
              <input
                type="search"
                placeholder="Search history"
                onChange={this.handleChange}
                value={searchInput}
              />
            </div>
          </div>
          <div className="historyElements">
            <ul className="history-list">
              {filteredHistory.map((each) => (
                <HistoryItem
                  key={each.id}
                  historyItems={each}
                  deleteElement={this.handleDelete}
                />
              ))}
            </ul>
            {filteredHistory.length <= 0 && (
              <div className="emptycommand">
                <p>There is no history to show</p>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default HistoryPage;
