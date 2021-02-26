export const VAULTS_LOADED = 'VAULTS_LOADED';
export const USER_VAULT_STATISTICS_LOADED = 'USER_VAULT_STATISTICS_LOADED ';
export const WITHDRAW_FROM_VAULT = 'WITHDRAW_FROM_VAULT';
export const DEPOSIT_TO_VAULT = 'DEPOSIT_TO_VAULT';
export const CLAIM_BACKSCRATCHER_REWARDS = 'CLAIM_BACKSCRATCHER_REWARDS';
export const MIGRATE_VAULT = 'MIGRATE_VAULT';

export const TRUSTED_MIGRATOR_ADDRESS =
  '0x1824df8D751704FA10FA371d62A37f9B8772ab90';
export const ZAP_YVE_CRV_ADDRESS = '0x1fd6adba9fee5c18338f134e31b4a323afa06ad4';
export const V2_ETH_ZAP_ADDRESS = '0x5a0bade607eaca65a0fe6d1437e0e3ec2144d540';
export const V2_WETH_VAULT_ADDRESS =
  '0xa9fE4601811213c340e850ea305481afF02f5b28';

export const zapsToVaultAddressMap = {
  [V2_ETH_ZAP_ADDRESS]: V2_WETH_VAULT_ADDRESS,
};
