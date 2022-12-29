import { ResponseModel } from "./responseModel";

export interface ListResponseModel<t> extends ResponseModel{
    data:t[];
}