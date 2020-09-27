import { generateManageActions, generateManageReducer } from '../utils';

const ACTION = `NETWORK_RESOURCE_ACTION`;
const KEY = `url`;

export const { add: addNetworkResource, remove: removeNetworkResource, reset: resetNetworkResource } = generateManageActions(ACTION, KEY);

export const networkResourceReducer = generateManageReducer(ACTION, KEY, [], {
  newPayloadMapper: (payload, state) => state.some(resource => resource.saveAs.path === payload.saveAs.path)
});