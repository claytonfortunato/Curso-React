import { useState } from "react";

const Condicional = () => {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  const enviarEmail = (e) => {
    email.preventDefault();
    setUserEmail(email);

    const limparEmail = () => {
      setUserEmail("");

      return (
        <div>
          <h2>Cadastre o seu e-mail:</h2>
          <form>
            <input
              type="email"
              placeholder="Digite o seu e-mail.."
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" onClick={enviarEmail}>
              Enviar-email
            </button>
            {userEmail && (
              <div>
                <p>O e-mail do usuário é: {userEmail}</p>
                <button onClick={limparEmail}>Limpar e-mail</button>
              </div>
            )}
          </form>
        </div>
      );
    };
  };
};

export default Condicional;
