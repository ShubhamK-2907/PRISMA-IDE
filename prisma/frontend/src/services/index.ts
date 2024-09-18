import axios, { AxiosRequestConfig, AxiosError, AxiosHeaders } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { auth, awaitFirebaseInitialization } from '../config/firebase';

const UNAUTHORIZED_CODE = 403;

type RequestQueueType = (accessToken: string) => void;

let isTokenRefreshing = false;
let requestQueue: RequestQueueType[] = [];

const api = axios.create({
    baseURL: process.env.REACT_APP_GATEWAY_URL,
});
