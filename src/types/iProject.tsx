export default interface iProject {
    id: number;
    destination: string;
    status: string;
    tipo: string;
    User?: {
        email: string
        id: number
        name: string
    };
    img?: string;
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