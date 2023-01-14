import React from "react";
import ExpenseItem from "../expenseitem/ExpenseItem";
import style from "./Expense.module.css"

const Expenses = ({ expenses }) => {
  return (
    <ul className={style.ulList}>
      {expenses.map((elem,index) => {
        return (
          <ExpenseItem
            name={elem.name}
            year={elem.year}
            key={index}
          />
        );
      })}
    </ul>
  );
};

export default Expenses;
