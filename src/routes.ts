import { request } from "express";

import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloTypescript(request: Request, response: Response) {
    const user = createUser({
        email: 'leonaardo.muller@gmail.com',
        password: '1q2w3e',
        techs: [
        'Node.js',
        'ReactJS',
        'React Native',
        { title: 'Javascript', experience: 100}
    ]
    });

    return response.json({ message: 'Typescript20' })
}