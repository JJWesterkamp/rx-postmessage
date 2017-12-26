import { SomeEventMap } from './index';

// -----------------------------------------------------------------------
// Public interface imports
// -----------------------------------------------------------------------

import {
    EventMap as EventMapInterface,
    Request as RequestWrapperInterface,
    RequestContract,
    TypeLens
} from '../rx-postmessenger';

// -----------------------------------------------------------------------
// Type mapping shortcuts
// -----------------------------------------------------------------------

import RequestChannel = TypeLens.In.Request.Channel;
import RequestPayload = TypeLens.In.Request.RequestPayload;
import ResponsePayload = TypeLens.In.Request.ResponsePayload;

/**
 *
 */
export class RxPostmessengerRequest<

    MAP extends EventMapInterface = any,
    CH extends RequestChannel<MAP> = string,
    REQ extends RequestPayload<MAP, CH> = any,
    RES extends ResponsePayload<MAP, CH> = any

> implements RequestWrapperInterface {

    /**
     *
     */
    public readonly channel: CH;

    /**
     *
     */
    public readonly payload: REQ;

    /**
     *
     */
    private readonly id: string;

    /**
     *
     */
    public readonly isComplete: boolean;

    /**
     * @param {string} id
     * @param {string} channel
     * @param {*} payload
     */
    constructor(id: string, channel: CH, payload: REQ) {

        Object.defineProperties(this, {
            channel: { value: channel },
            payload: { value: payload },
        });
    };

    /**
     *
     * @param {*} data
     */
    respond(data: RES): void {
        if (this.isComplete) return;

        Object.defineProperty(this, 'isComlete', true);
    }
}