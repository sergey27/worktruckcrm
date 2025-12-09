"use client";

import { getExpenseTypes, deleteExpenseTypes } from "@/src/actions/expenseTypes";
import { useEffect, useState } from "react";
import { IExpenseType } from "@/src/types/expenseType";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const ExpenseTypesTable = () => {
    
    const [expenseTypes, setExpenseTypes] = useState<IExpenseType[]>([]);

    useEffect(() => {
        async function fetchExpenseTypes() {
            const response = await getExpenseTypes();
            setExpenseTypes(response.expenseTypes || []);
        }

        fetchExpenseTypes();
    }, []);

    const handleEdit = async (id: number) => {
        console.log("Edit expense type with ID:", id);
    }

    const handleDelete = async (id: number) => {
      await deleteExpenseTypes(id);
      window.location.reload();
    };

    return (
        <table
            aria-label="Тип расходов"
            className="
            min-w-full border border-gray-200 rounded-lg overflow-hidden 
            text-sm
            "
        >
            <thead className="bg-gray-100 text-gray-700 hidden md:table-header-group">
            <tr>
                <th className="py-3 px-4 text-left">Номер</th>
                <th className="py-3 px-4 text-left">Название</th>
                <th className="py-3 px-4 text-left">Действия</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
            {expenseTypes && expenseTypes.length > 0 && expenseTypes.map((expenseType: IExpenseType) => (
                <tr 
                    key={expenseType.id}
                    className="md:table-row block md:border-0 border border-gray-200 rounded-lg p-4 mb-4 md:mb-0"
                    >
                    <td className="py-2 px-4 md:table-cell flex md:block justify-between">{expenseType.id}</td>
                    <td className="py-2 px-4 md:table-cell flex md:block justify-between">{expenseType.name}</td>
                    <td className="py-2 px-4 md:table-cell flex md:block justify-between items-center space-x-4">
                        <div className="flex space-x-3">

                            <button
                                onClick={() => handleEdit(expenseType.id)}
                                className="text-blue-600 hover:text-blue-800 transition"
                                aria-label="Редактировать"
                            >
                                <PencilIcon className="h-5 w-5" />
                            </button>

                            <button
                                onClick={() => handleDelete(expenseType.id)}
                                className="text-red-600 hover:text-red-800 transition"
                                aria-label="Удалить"
                            >
                                <TrashIcon className="h-5 w-5" />
                            </button>
                        </div>                    
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};

export default ExpenseTypesTable;
