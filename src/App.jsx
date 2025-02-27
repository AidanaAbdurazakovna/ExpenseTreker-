import { useEffect, useState } from "react";
import { NewExpense } from "./components/new-expense/NewExpense";
import { EXPENSES } from "./utils/constants";
import { Expenses } from "./components/expenses/Expenses";
import { Chart } from "./components/chart/Chart";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES);
  const [isLogin, setIsLogin] = useState(false);

  console.log(expenses);

  const onAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const loginHandler = () => {
    setIsLogin(true);
    localStorage.setItem("auth", !isLogin);
  };
  useEffect(() => {
    const isAuth = localStorage.getItem("auth");
    setIsLogin(isAuth);
  }, []);

  const logOutHandler = () => {
    setIsLogin(false);
    localStorage.clear();
  };

  

  return (
    <>
      <Header isLogin={isLogin} onLogout={logOutHandler} />
      {isLogin ? (
        <>
          <NewExpense onAddExpense={onAddExpense} />
          <Expenses expenses={expenses} />
        </>
      ) : (
        <Login onLogin={loginHandler} />
      )}
    </>
  );
};
export default App;
