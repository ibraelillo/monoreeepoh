// package: server
// file: commands.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Command extends jspb.Message { 
    getId(): number;
    setId(value: number): Command;
    getName(): string;
    setName(value: string): Command;
    getParams(): string;
    setParams(value: string): Command;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Command.AsObject;
    static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Command;
    static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
    export type AsObject = {
        id: number,
        name: string,
        params: string,
    }
}

export class CommandResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): CommandResponse;
    getName(): string;
    setName(value: string): CommandResponse;
    getLog(): string;
    setLog(value: string): CommandResponse;
    getExitcode(): number;
    setExitcode(value: number): CommandResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommandResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CommandResponse): CommandResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommandResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommandResponse;
    static deserializeBinaryFromReader(message: CommandResponse, reader: jspb.BinaryReader): CommandResponse;
}

export namespace CommandResponse {
    export type AsObject = {
        id: number,
        name: string,
        log: string,
        exitcode: number,
    }
}
