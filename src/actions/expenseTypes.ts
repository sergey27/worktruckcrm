"use server";

import prisma from "@/src/utils/prisma";

export async function getExpenseTypes() {
    try {
        const expenseTypes = await prisma.expenseType.findMany();

        return { success: true, expenseTypes };
    } catch (error) {
        console.error("Error fetching expense types:", error);
        return { success: false, error: "Ошибка при загрузке типов статусов" };
    }
}

export async function deleteExpenseTypes(id: number) {
    try {
      const expenseType = await prisma.expenseType.delete({
        where: { id }
      });
  
      return { success: true, expenseType };
    } catch (error) {
      console.error("Error deleting expense type:", error);
      return { error: "Ошибка при удалении типов статусов" };
    }
  }