// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var commands_pb = require('./commands_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_server_Command(arg) {
  if (!(arg instanceof commands_pb.Command)) {
    throw new Error('Expected argument of type server.Command');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_server_Command(buffer_arg) {
  return commands_pb.Command.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_server_CommandResponse(arg) {
  if (!(arg instanceof commands_pb.CommandResponse)) {
    throw new Error('Expected argument of type server.CommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_server_CommandResponse(buffer_arg) {
  return commands_pb.CommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CommandsService = exports.CommandsService = {
  exec: {
    path: '/server.Commands/Exec',
    requestStream: false,
    responseStream: false,
    requestType: commands_pb.Command,
    responseType: commands_pb.CommandResponse,
    requestSerialize: serialize_server_Command,
    requestDeserialize: deserialize_server_Command,
    responseSerialize: serialize_server_CommandResponse,
    responseDeserialize: deserialize_server_CommandResponse,
  },
};

exports.CommandsClient = grpc.makeGenericClientConstructor(CommandsService);
