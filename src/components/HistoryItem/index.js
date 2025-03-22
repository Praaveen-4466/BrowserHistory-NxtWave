import "./index.css";

const HistoryItem = (props) => {
  const { historyItems, deleteElement } = props;
  const handleDelete = () => {
    deleteElement(historyItems.id);
  };

  return (
    <>
      <li className="list-item">
        <p className="time-stamp">{historyItems.timeAccessed}</p>
        <div className="history-wrapper">
          <div className="history-details">
            <div className="history-logotitle">
              <img src={historyItems.logoUrl} alt="domain logo" />
              <p>
                <span>{historyItems.title}</span>
                <span>{historyItems.domainUrl}</span>
              </p>
            </div>
          </div>
          <div className="delete-btn">
            <button type="button" onClick={handleDelete}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

// {
//     id: 0,
//     timeAccessed: '07:45 PM',
//     logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
//     title: 'Instagram',
//     domainUrl: 'instagram.com',
// },

export default HistoryItem;
