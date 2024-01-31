import { _TOKEN_NAME_ } from '@/src/constants';
import { getLocalStorage } from '../utils';

export class AuthSDK {
  private _baseurl: string;

  constructor() {
    this._baseurl = process.env.NEXT_PUBLIC_BASE_API_URL ?? '';
  }

  private baseUrl() {
    return this._baseurl;
  }

  async login<T>(payload: object): Promise<T> {
    try {
      const response = await fetch(`${this._baseurl}/auth`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json-patch+json',
          accept: 'text/plain',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const e = await response.json();
        const error = new Error(e.message ?? 'Failed to login') as any;
        error.cause = { response: e };

        throw error;
      }

      return await response.json();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async checkAuth<T>(): Promise<T> {
    this.baseUrl();

    try {
      const response = await fetch(`${this._baseurl}/admin/me`, {
        method: 'get',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${getLocalStorage()}`,
        },
      });

      if (!response.ok) {
        const e = await response.json();
        const error = new Error(e.message ?? 'Admin is unauthenticated') as any;
        error.cause = { response: e };

        throw error;
      }

      return await response.json();
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
