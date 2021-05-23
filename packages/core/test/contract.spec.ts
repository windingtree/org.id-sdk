// import { se } from '@windingtree/org.id-test-helpers';
import orgId from '../src/contract';

describe('OrgId contract', () => {
  let contract: any;

  beforeAll(async () => {
    contract = await setupOrgId();

    // contract = orgId('', '');
  });

  test('AAA', async () => {
    console.log(contract);
  });
});
