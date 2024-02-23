import { useNavigate } from "react-router-dom";
import { StyledContactUsMain } from "./style";

export const ContactUsMain = () => {
  const navigate = useNavigate();

  return (
    <StyledContactUsMain>
      <div className="StyledMainContacts__divContainer">
        <div className="StyledMainContacts__divContainer--divButtonBack">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="StyledMainContacts__divContainer--buttonBack"
          >
            Voltar
          </button>
        </div>
        <h2 className="StyledMainContacts__h2Title">Contate-nos</h2>

        <form
          className="StyledMainContacts__divContainer--Form"
          action="https://api.staticforms.xyz/submit"
          method="post"
        >
          <label htmlFor="">Nome</label>
          <input
            className="StyledMainContacts__divContainer--FormInput"
            type="text"
            name="name"
            required
          ></input>

          <label htmlFor="">Email</label>
          <input
            className="StyledMainContacts__divContainer--FormInput"
            type="text"
            name="email"
            required
          ></input>

          <label htmlFor="">Telefone</label>
          <input
            className="StyledMainContacts__divContainer--FormInput"
            type="number"
            name="phone"
            required
          />

          <label htmlFor="">Mensagem</label>
          <textarea
            className="StyledMainContacts__divContainer--FormTextArea"
            name="message"
            required
          ></textarea>

          <button
            // onClick={notify}
            className="StyledMainContacts__divContainer--FormButtonSubmit"
            type="submit"
          >
            Enviar
          </button>

          {/* Altere esse input com o ID do seu gmail */}
          <input
            type="hidden"
            name="accessKey"
            value="ceec568b-47ed-45db-8dea-66bcea1c0134"
          ></input>

          <input
            type="hidden"
            name="redirectTo"
            value="http://localhost:5173"
          />
        </form>
      </div>
    </StyledContactUsMain>
  );
};
