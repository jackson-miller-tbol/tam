import { Request, Response } from "express"

export interface RequestParameters {
}

export const add = (req: Request<{}, {}, {},RequestParameters>, res: Response) => {
    throw new Error('not implemented')
}