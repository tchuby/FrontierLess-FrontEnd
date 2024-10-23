export default interface iProject {
    id: number;
    pais: string;
    status: string;
    tipo: string;
    img: string;
    author: string;
    steps?: [
        {
            id?: number;
            name?: string;
            description?: string;
            cost?: number;
        }
    ];
    comments?: [{}];
    totalCost?: number;
    quantComments?: number;
    note?: number;

}