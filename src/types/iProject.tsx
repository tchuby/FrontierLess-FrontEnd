import iStep from "./iStep";
import iComment from "./iComment";
import iUser from "./iUser";

export default interface iProject {
    id?: number;
    destination: string;
    status?: string;
    exchangeType: string;
    createdAt?: Date,
    updatedAt?: Date,
    budget?: number;
    User?: iUser;
    steps?: iStep[];
    comments?: iComment[];
    img?: string;

}