import React from "react";
import "../../styles/boardWorkspace/headerWorkspace.css";

export const BoardsHeader = () => (
  <header className="header__workspace">
    <div className="container">
      <div className="header__items">
        <div className="workspace__info">
          <div className="workspace__icon">
            <a
              href="#"
              className="workspace__icon-link"
              onClick={(e) => e.preventDefault()}
            >
              <p className="workspace__icon-firstword">Д</p>
              <img
                src="/path/to/image"
                alt=""
                className="workspace__icon-img"
              />
            </a>
          </div>
          <div className="workspace__info-wrapper">
            <div className="workspace__info-text">
              <h2 className="workspace__name">Доска</h2>
              <button className="workspace__info-change-btn">
                <img
                  src="../assets/images/edit.svg"
                  alt=""
                  className="workspace__info-change-btn-icon"
                />
              </button>
            </div>
            <div className="workspace__access">
              <img
                src="../assets/images/private.svg"
                alt=""
                className="workspace__access-icon"
              />
              <p className="workspace__access-text">Приватная</p>
            </div>
          </div>
        </div>
        <div className="add__user">
          <button className="add__user-btn">
            <img
              src="../assets/images/add_someone.svg"
              alt=""
              className="add__user-icon"
            />
            <p className="add__user-text">
              Пригласите пользователей в рабочее пространство
            </p>
          </button>
        </div>
      </div>
    </div>
  </header>
);
