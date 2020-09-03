import axios from 'axios';

// return a new version of axios with useful settings applied
export default axios.create({
  baseURL: "https://restful.training/api/ping-pong",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer D8sfiwuS4oI5ToCNI5YDwkALeUMBdQzESaaGy9Ccksiyphu7TqfdxlKVm6XuvKQILPhPqZftxWGLSwfs",
  },
});