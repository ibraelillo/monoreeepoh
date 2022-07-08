// package: server
// file: commands.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as commands_pb from "./commands_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ICommandsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    exec: ICommandsService_IExec;
}

interface ICommandsService_IExec extends grpc.MethodDefinition<commands_pb.Command, commands_pb.CommandResponse> {
    path: "/server.Commands/Exec";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<commands_pb.Command>;
    requestDeserialize: grpc.deserialize<commands_pb.Command>;
    responseSerialize: grpc.serialize<commands_pb.CommandResponse>;
    responseDeserialize: grpc.deserialize<commands_pb.CommandResponse>;
}

export const CommandsService: ICommandsService;

export interface ICommandsServer {
    exec: grpc.handleUnaryCall<commands_pb.Command, commands_pb.CommandResponse>;
}

export interface ICommandsClient {
    exec(request: commands_pb.Command, callback: (error: grpc.ServiceError | null, response: commands_pb.CommandResponse) => void): grpc.ClientUnaryCall;
    exec(request: commands_pb.Command, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_pb.CommandResponse) => void): grpc.ClientUnaryCall;
    exec(request: commands_pb.Command, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_pb.CommandResponse) => void): grpc.ClientUnaryCall;
}

export class CommandsClient extends grpc.Client implements ICommandsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public exec(request: commands_pb.Command, callback: (error: grpc.ServiceError | null, response: commands_pb.CommandResponse) => void): grpc.ClientUnaryCall;
    public exec(request: commands_pb.Command, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: commands_pb.CommandResponse) => void): grpc.ClientUnaryCall;
    public exec(request: commands_pb.Command, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: commands_pb.CommandResponse) => void): grpc.ClientUnaryCall;
}
