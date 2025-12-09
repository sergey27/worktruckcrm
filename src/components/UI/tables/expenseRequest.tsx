"use client";

import {getExpenseRequests, deleteExpenseRequest} from "@/src/actions/expenseRequest";
import {useEffect, useState} from "react";
import {IExpenseRequest} from "../../../types/expenseRequest";
import {PencilIcon, TrashIcon} from '@heroicons/react/24/outline';

const ExpenseRequestTable = () => {

    const [expenseRequests, setExpenseRequests] = useState<IExpenseRequest[]>([]);

    useEffect(() => {
        async function fetchExpenseTypes() {
            const response = await getExpenseRequests();
            setExpenseRequests(response.expenseRequests || []);
        }

        fetchExpenseTypes();
    }, []);

    const handleEdit = async (id: number) => {
        console.log("Edit expense type with ID:", id);
    }

    const handleDelete = async (id: number) => {
        await deleteExpenseRequest(id);
        window.location.reload();
    };

    return (
        <table
            aria-label="Заявка на расход"
            className="
            min-w-full border border-gray-200 rounded-lg overflow-hidden
            text-sm
            "
        >
            <thead className="bg-gray-100 text-gray-700 hidden md:table-header-group">
            <tr>
                <th className="py-3 px-4 text-left">Номер</th>
                <th className="py-3 px-4 text-left">Дата создания</th>
                <th className="py-3 px-4 text-left">Название</th>
                <th className="py-3 px-4 text-left">Описание</th>
                <th className="py-3 px-4 text-left">Тип</th>
                <th className="py-3 px-4 text-left">Действия</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
            {expenseRequests && expenseRequests.length > 0 && expenseRequests.map((expenseRequest: IExpenseRequest) => (
                <tr
                    key={expenseRequest.id}
                    className="md:table-row block md:border-0 border border-gray-200 rounded-lg p-4 mb-4 md:mb-0"
                >
                    <td className="py-2 px-4 md:table-cell flex md:block justify-between">{expenseRequest.id}</td>
                    <td className="py-2 px-4 md:table-cell flex md:block justify-between">{expenseRequest.createdAt.toDateString()}</td>
                    <td className="py-2 px-4 md:table-cell flex md:block justify-between">{expenseRequest.name}</td>
                    <td className="py-2 px-4 md:table-cell flex md:block justify-between">{expenseRequest.description}</td>
                    <td className="py-2 px-4 md:table-cell flex md:block justify-between">{expenseRequest.typeId}</td>
                    <td className="py-2 px-4 md:table-cell flex md:block justify-between items-center space-x-4">
                        <div className="flex space-x-3">

                            <button
                                onClick={() => handleEdit(expenseRequest.id)}
                                className="text-blue-600 hover:text-blue-800 transition"
                                aria-label="Редактировать"
                            >
                                <PencilIcon className="h-5 w-5"/>
                            </button>

                            <button
                                onClick={() => handleDelete(expenseRequest.id)}
                                className="text-red-600 hover:text-red-800 transition"
                                aria-label="Удалить"
                            >
                                <TrashIcon className="h-5 w-5"/>
                            </button>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};

export default ExpenseRequestTable;
