"use server";

import { connecToDB } from "../mongoose";

export async fucntion updateUser():Promise<void>{
    connecToDB();
}