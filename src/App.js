import "./App.scss";
import { Input } from "./components/input/input";

import { useRef, useState } from "react";
import "./App.scss";
import { Modal } from "./components/modal/modal";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState(false);

  const formRef = useRef(null);
  const nameRef = useRef(null);
  const lastRef = useRef(null);
  const numberRef = useRef(null);
  const passwordRef = useRef(null);

  const [values, setValues] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const valuesArr = {
      id: values[values.length - 1]?.id + 1 || 1,
      firsName: nameRef.current.value,
      lastName: lastRef.current.value,
      number: numberRef.current.value,
      password: passwordRef.current.value,
    };

    setValues([valuesArr]);
    formRef.current.reset()
  };

  const handleChangeLanguage = (evt) => {
    i18n.changeLanguage(evt.target.value);
  };

  return (
    <div className="app row">
      <div className=" app__left col-6 ">
        <div className="app__left_inner bg-white rounded border border-secondary">
          <div className="app_left_title d-flex justify-content-between align-items-center">
            <h1 className="app__title">{t("title")}</h1>

            <select className="app__select p-2 rounded-pill" onClick={handleChangeLanguage} defaultValue="en">
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </div>

          <form onSubmit={handleSubmit} ref={formRef}>
            <Modal
              title={t("modal.modalTitle")}
              modalState={modal}
              setModalState={setModal}
            >
              {values.map((item) => (
                <div key={item.id}>
                  <div>
                    <b>{t("modal.firstName")}</b> <span className=" fw-semibold fs-3">{item.firsName}</span>
                  </div>
                  <div>
                    <b>{t("modal.lastName")}</b> <span className=" fw-semibold fs-3">{item.lastName}</span>
                  </div>
                  <div>
                    <b>{t("modal.number")}</b> <span className=" fw-semibold fs-3">{item.number}</span>
                  </div>
                  <div>
                    <b>{t("modal.password")}</b> <span className=" fw-semibold fs-3">{item.password}</span>
                  </div>
                </div>
              ))}
            </Modal>

            <div className="mt-3 mb-3">
              <Input ref={nameRef} placeholder={t("placeholder.firstName")} />
              <Input ref={lastRef} placeholder={t("placeholder.lastName")} />
              <Input ref={numberRef} placeholder={t("placeholder.number")} />
              <Input
                ref={passwordRef}
                placeholder={t("placeholder.password")}
              />
            </div>
            <button className="btn btn-primary rounded-pill w-100" onClick={() => setModal(true)}>{t("button")}</button>
          </form>
        </div>
      </div>

      <div className="col-6 app__right"></div>
    </div>
  );
}

export default App;
