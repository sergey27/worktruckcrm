"use server";

import prisma from "@/src/utils/prisma";

export async function getExpenseRequests() {
    try {
        const expenseRequests = await prisma.expense.findMany();
        return { success: true, expenseRequests };
    } catch (error) {
        console.error("Error fetching expense requests:", error);
        return { success: false, error: "Ошибка при загрузке заявок на расход" };
    }
}

export async function deleteExpenseRequest(id: number) {
    try {
        const expenseRequest = await prisma.expense.delete({
            where: { id }
        });

        return { success: true, expenseRequest };
    } catch (error) {
        console.error("Error deleting expense request:", error);
        return { error: "Ошибка при удалении заявки на расход" };
    }
}