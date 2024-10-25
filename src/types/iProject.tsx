import iStep from "./iStep";
import iComment from "./iComment";
import iUser from "./iUser";

export default interface iProject {
    id: number;
    destination: string;
    tipo: string;
    status?: string;
    User?: iUser;
    img?: string;
    steps?: [iStep];
    comments?: [iComment];
    note?: number;

}