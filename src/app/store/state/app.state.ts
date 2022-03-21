import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';

// for login creadentials
export interface LoginCredentialState extends EntityState<any>{};
export const loginAdapter: EntityAdapter<any> = createEntityAdapter<any>({});
export const intialCreadentialState: any = loginAdapter.getInitialState({});

export interface AppState {
  loginCredential: LoginCredentialState;
}

export const initialAppState: AppState = {
  loginCredential: intialCreadentialState
}
