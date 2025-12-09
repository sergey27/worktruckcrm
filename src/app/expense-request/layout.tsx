import { FC } from "react";

interface IProps {
    children: React.ReactNode;
}

const ExpenseRequestLayout: FC<IProps> = ({ children }) => {
    return <section>{children}</section>;
};

export default ExpenseRequestLayout;