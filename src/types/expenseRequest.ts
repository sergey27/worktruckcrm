export interface IExpenseRequest {
    id: number;
    createdAt: Date;
    name: string;
    description: string;
    typeId: string;
}