import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <div className="playgroundPreview_bb8I ">
        <div>
          <div className="bs-example">
            <nav className=" navbar navbar-expand-lg navbar-light bg-color">
              <div className="container">
                <a href="#home" className="navbar-brand text-white">Максимова Евгения</a>
                <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation"
                        className="navbar-toggler collapsed">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="basic-navbar-nav">
                  <div className="me-auto navbar-nav text-white">
                    <a href="#home" data-rr-ui-event-key="#home" className="nav-link">Блог</a>
                    <a href="#link" data-rr-ui-event-key="#link" className="nav-link">Мои посты</a>
                    <a href="#link" data-rr-ui-event-key="#link" className="nav-link">Фото</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;