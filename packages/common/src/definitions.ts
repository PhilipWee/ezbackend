import {EzBackend as EzBackendBase} from '@ezbackend/core'
import {Connection, ConnectionOptions} from 'typeorm'
import {FastifyInstance, FastifyLoggerOptions} from "fastify"

export interface IOptions {
    server?: {
        port?: number
        logger?:FastifyLoggerOptions
    }
    orm?: ConnectionOptions
    
}


//TODO: Think about programatically adding types
export class EzBackend extends EzBackendBase {
    orm: Connection
    server: FastifyInstance
    //TODO: Figure out the model type
    models: Array<any>

    public static app() {
        return super.app() as EzBackend
    }
}