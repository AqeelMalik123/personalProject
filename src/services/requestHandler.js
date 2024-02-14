import { get, post } from './HttpProvider';
import featureConstants from './features-constants';

const SERVICE_URLS = {
  claimsList: 'claim/getclaimlistcompactudt',
  claimId: 'claim',
};
const getClaimsList = (data) =>
  post(SERVICE_URLS.claimsList, data, { feature: featureConstants.static });
const getclaimId = (data) =>
  get(
    SERVICE_URLS.claimId + `/${data}`,
    {},
    { feature: featureConstants.static },
  );
const apiServices = {
  getClaimsList,
  getclaimId,
};
export default apiServices;
